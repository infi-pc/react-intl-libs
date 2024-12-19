import { CheckCircle2, XCircle, MinusCircle } from "lucide-react";

interface FeatureComparisonProps {
  libraries: string[];
  features: string[];
}

type FeatureValue = boolean | "partial" | "high" | "medium" | "low";

const featureMatrix: Record<string, Record<string, FeatureValue>> = {
  "react-i18next": {
    "Zero Runtime Dependencies": false,
    "Type Safety Level": "high",
    "Build-time Extraction": true,
    "Runtime Message Extraction": true,
    "Framework Integration": "high",
    "Custom Formatters Support": true,
    "Translation Management UI": false,
    "Automatic Locale Detection": true,
    "Async Loading Strategy": true,
    "Memory Footprint": "medium",
    "Browser/Node.js Support": true,
    "Framework-specific Optimizations": true,
    "Custom Transformer Support": true,
    "Translation File Format": "high",
    "Development Tools": true,
  },
  "react-intl": {
    "Zero Runtime Dependencies": false,
    "Type Safety Level": "medium",
    "Build-time Extraction": true,
    "Runtime Message Extraction": true,
    "Framework Integration": "medium",
    "Custom Formatters Support": true,
    "Translation Management UI": false,
    "Automatic Locale Detection": true,
    "Async Loading Strategy": true,
    "Memory Footprint": "medium",
    "Browser/Node.js Support": true,
    "Framework-specific Optimizations": "partial",
    "Custom Transformer Support": true,
    "Translation File Format": "medium",
    "Development Tools": true,
  },
  LinguiJS: {
    "Zero Runtime Dependencies": false,
    "Type Safety Level": "high",
    "Build-time Extraction": true,
    "Runtime Message Extraction": false,
    "Framework Integration": "high",
    "Custom Formatters Support": true,
    "Translation Management UI": false,
    "Automatic Locale Detection": true,
    "Async Loading Strategy": true,
    "Memory Footprint": "low",
    "Browser/Node.js Support": true,
    "Framework-specific Optimizations": true,
    "Custom Transformer Support": true,
    "Translation File Format": "high",
    "Development Tools": true,
  },
  "next-translate": {
    "Zero Runtime Dependencies": true,
    "Type Safety Level": "medium",
    "Build-time Extraction": true,
    "Runtime Message Extraction": false,
    "Framework Integration": "high",
    "Custom Formatters Support": "partial",
    "Translation Management UI": false,
    "Automatic Locale Detection": true,
    "Async Loading Strategy": true,
    "Memory Footprint": "low",
    "Browser/Node.js Support": true,
    "Framework-specific Optimizations": true,
    "Custom Transformer Support": "partial",
    "Translation File Format": "medium",
    "Development Tools": "partial",
  },
  rosetta: {
    "Zero Runtime Dependencies": true,
    "Type Safety Level": "high",
    "Build-time Extraction": false,
    "Runtime Message Extraction": true,
    "Framework Integration": "medium",
    "Custom Formatters Support": true,
    "Translation Management UI": false,
    "Automatic Locale Detection": "partial",
    "Async Loading Strategy": true,
    "Memory Footprint": "low",
    "Browser/Node.js Support": true,
    "Framework-specific Optimizations": false,
    "Custom Transformer Support": true,
    "Translation File Format": "medium",
    "Development Tools": "partial",
  },
  "typesafe-i18n": {
    "Zero Runtime Dependencies": true,
    "Type Safety Level": "high",
    "Build-time Extraction": true,
    "Runtime Message Extraction": false,
    "Framework Integration": "medium",
    "Custom Formatters Support": true,
    "Translation Management UI": false,
    "Automatic Locale Detection": true,
    "Async Loading Strategy": true,
    "Memory Footprint": "low",
    "Browser/Node.js Support": true,
    "Framework-specific Optimizations": "partial",
    "Custom Transformer Support": true,
    "Translation File Format": "high",
    "Development Tools": true,
  },
};

const FeatureIcon = ({ value }: { value: FeatureValue }) => {
  if (value === true) {
    return <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />;
  }
  if (value === false) {
    return <XCircle className="h-5 w-5 text-red-500 mx-auto" />;
  }
  if (value === "partial") {
    return <MinusCircle className="h-5 w-5 text-yellow-500 mx-auto" />;
  }
  if (value === "high") {
    return <span className="text-green-500 font-medium">High</span>;
  }
  if (value === "medium") {
    return <span className="text-yellow-500 font-medium">Medium</span>;
  }
  return <span className="text-red-500 font-medium">Low</span>;
};

export const FeatureComparison = ({
  libraries,
  features,
}: FeatureComparisonProps) => (
  <div className="mt-16">
    <h2 className="text-3xl font-bold mb-8">Feature Comparison</h2>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-4 px-6">Feature</th>
            {libraries.map((lib) => (
              <th key={lib} className="text-center py-4 px-6">
                {lib}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature) => (
            <tr key={feature} className="border-b">
              <td className="py-4 px-6">{feature}</td>
              {libraries.map((lib) => (
                <td key={`${lib}-${feature}`} className="text-center py-4 px-6">
                  <FeatureIcon value={featureMatrix[lib][feature]} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
