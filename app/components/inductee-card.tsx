import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"

interface InducteeCardProps {
  name: string
  category: string
  imageUrl: string
}

export default function InducteeCard({ name, category, imageUrl }: InducteeCardProps) {
  return (
    <Card className="w-[250px] bg-card text-card-foreground">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src={imageUrl} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-lg">{name}</CardTitle>
            <Badge variant="secondary" className="mt-1">{category}</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Honored for exceptional contributions in {category.toLowerCase()}.
        </p>
      </CardContent>
    </Card>
  )
}

