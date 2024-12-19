import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/ui/card";
import { Badge } from "@/app/ui/badge";
import { CheckCircle2 } from "lucide-react";

export interface Library {
  name: string;
  description: string;
  features: string[];
  size: string;
  stars: string;
  maintained: boolean;
}

export const LibraryCard = ({ lib }: { lib: Library }) => (
  <div className="relative">
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {lib.name}
          {lib.maintained && (
            <Badge variant="secondary" className="ml-2">
              Active
            </Badge>
          )}
        </CardTitle>
        <CardDescription>{lib.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400">
              Bundle Size
            </span>
            <span className="font-medium">{lib.size}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400">
              GitHub Stars
            </span>
            <span className="font-medium">{lib.stars}</span>
          </div>
          <div className="pt-4">
            <h4 className="text-sm font-medium mb-2">Key Features</h4>
            <ul className="space-y-2">
              {lib.features.map((feature) => (
                <li key={feature} className="text-sm flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);
