import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/ui/tabs";
import { Card, CardContent } from "@/app/ui/card";

export interface CodeExample {
  [key: string]: string;
}

export const CodeExamples = ({ examples }: { examples: CodeExample }) => (
  <div className="mt-16">
    <h2 className="text-3xl font-bold mb-8">Code Examples</h2>
    <Tabs defaultValue={Object.keys(examples)[0]} className="w-full">
      <TabsList
        className="grid w-full"
        style={{
          gridTemplateColumns: `repeat(${Object.keys(examples).length}, 1fr)`,
        }}
      >
        {Object.keys(examples).map((key) => (
          <TabsTrigger key={key} value={key}>
            {key}
          </TabsTrigger>
        ))}
      </TabsList>
      {Object.entries(examples).map(([key, code]) => (
        <TabsContent key={key} value={key}>
          <Card>
            <CardContent className="p-0">
              <pre className="p-4 rounded-lg bg-gray-900 text-gray-100 overflow-x-auto">
                <code>{code}</code>
              </pre>
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  </div>
);
