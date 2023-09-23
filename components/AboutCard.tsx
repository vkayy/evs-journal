import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface AboutCardProps {
  name: string;
  description: string;
  about: React.ReactNode;
  topics: string[];
}

function AboutCard({ name, description, about, topics }: AboutCardProps) {
  return (
    <li key={name}>
      <Card className="card">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>{about}</CardContent>
        <CardFooter className="flex flex-wrap">
          <ul>
            {topics.map((topic) => (
              <li key={topic} className="inline">
                <Badge className="mt-2 mr-2">{topic}</Badge>
              </li>
            ))}
          </ul>
        </CardFooter>
      </Card>
    </li>
  );
}

export default AboutCard;
