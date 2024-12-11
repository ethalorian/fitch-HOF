'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { TextureOverlay } from './texture-overlay'

export default function DonateSection() {
  const [donationAmount, setDonationAmount] = useState<string>('50')
  const [customAmount, setCustomAmount] = useState<string>('')

  const handleDonationChange = (value: string) => {
    setDonationAmount(value)
    if (value !== 'custom') {
      setCustomAmount('')
    }
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value)
    setDonationAmount('custom')
  }

  return (
    <section className="py-20 bg-primary text-primary-foreground relative isolate">
      <TextureOverlay />
      <div className="container mx-auto px-4 relative z-[1]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-card text-card-foreground max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">Support Our Legacy</CardTitle>
              <CardDescription className="text-center">
                Your donation helps us honor excellence and inspire future generations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="space-y-4">
                  <RadioGroup
                    value={donationAmount}
                    onValueChange={handleDonationChange}
                    className="flex flex-wrap gap-4"
                  >
                    {['25', '50', '100', '250'].map((amount) => (
                      <div key={amount} className="flex items-center space-x-2">
                        <RadioGroupItem value={amount} id={`amount-${amount}`} />
                        <Label htmlFor={`amount-${amount}`}>${amount}</Label>
                      </div>
                    ))}
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="custom" id="amount-custom" />
                      <Label htmlFor="amount-custom">Custom</Label>
                    </div>
                  </RadioGroup>
                  {donationAmount === 'custom' && (
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="custom-amount">$</Label>
                      <Input
                        type="number"
                        id="custom-amount"
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        className="max-w-[150px]"
                      />
                    </div>
                  )}
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Donate Now
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

