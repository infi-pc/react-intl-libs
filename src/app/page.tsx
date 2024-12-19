import { Badge } from "@/app/ui/badge";
import { LibraryCard, type Library } from "@/app/LibraryCard";
import { CodeExamples } from "@/app/CodeExamples";
import { FeatureComparison } from "@/app/FeatureComparison";

const libraries: Library[] = [
  {
    name: "react-i18next",
    description:
      "Powerful internationalization framework for React based on i18next",
    features: [
      "Component-based",
      "Hooks support",
      "TypeScript",
      "Context API",
      "Pluralization",
    ],
    size: "2.3MB",
    stars: "8.2k",
    maintained: true,
  },
  {
    name: "react-intl",
    description: "Internationalize React apps with FormatJS libraries",
    features: ["Format API", "Component API", "Hooks API", "Messages API"],
    size: "1.8MB",
    stars: "13.9k",
    maintained: true,
  },
  {
    name: "LinguiJS",
    description: "Seamless internationalization for React apps",
    features: ["Macro-based", "CLI tools", "TypeScript", "Webpack plugin"],
    size: "1.2MB",
    stars: "3.8k",
    maintained: true,
  },
  {
    name: "next-translate",
    description: "Easy to use i18n solution for Next.js projects",
    features: [
      "Zero dependencies",
      "SSR support",
      "TypeScript",
      "Path aliases",
    ],
    size: "0.5MB",
    stars: "2.1k",
    maintained: true,
  },
  {
    name: "rosetta",
    description: "Lightweight but powerful i18n solution with type safety",
    features: [
      "Type-safe translations",
      "Zero dependencies",
      "Context API",
      "Dynamic loading",
    ],
    size: "0.8MB",
    stars: "1.2k",
    maintained: true,
  },
  {
    name: "typesafe-i18n",
    description: "Fully type-safe i18n library with zero runtime dependencies",
    features: [
      "100% type-safe",
      "Framework agnostic",
      "No runtime",
      "Auto-completion",
    ],
    size: "0.3MB",
    stars: "1.5k",
    maintained: true,
  },
];

const codeExamples = {
  "react-i18next": `import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('welcome.title')}</h1>
      <p>{t('welcome.description', { name: 'John' })}</p>
    </div>
  );
};`,
  "react-intl": `import { FormattedMessage, useIntl } from 'react-intl';

const MyComponent = () => {
  const intl = useIntl();
  
  return (
    <div>
      <h1>
        <FormattedMessage id="welcome.title" />
      </h1>
      <p>
        {intl.formatMessage(
          { id: 'welcome.description' },
          { name: 'John' }
        )}
      </p>
    </div>
  );
};`,
  lingui: `import { t } from '@lingui/macro';

const MyComponent = () => {
  return (
    <div>
      <h1>{t\`Welcome\`}</h1>
      <p>{t\`Hello, {name}!\`({ name: 'John' })}</p>
    </div>
  );
};`,
  "next-translate": `import useTranslation from 'next-translate/useTranslation';

const MyComponent = () => {
  const { t } = useTranslation('common');
  
  return (
    <div>
      <h1>{t('welcome.title')}</h1>
      <p>{t('welcome.description', { name: 'John' })}</p>
    </div>
  );
};`,
  rosetta: `import { useI18n } from '@/i18n';

const MyComponent = () => {
  const i18n = useI18n();
  
  return (
    <div>
      <h1>{i18n.t('welcome.title')}</h1>
      <p>{i18n.t('welcome.description', { name: 'John' })}</p>
    </div>
  );
};`,
  "typesafe-i18n": `import { useTranslation } from '../i18n/useTranslation';

const MyComponent = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t.welcome.title()}</h1>
      <p>{t.welcome.description({ name: 'John' })}</p>
    </div>
  );
};`,
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="mb-4">
              React Internationalization
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
              Choose the Right i18n Library
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive comparison of popular React internationalization
              libraries to help you make an informed decision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {libraries.map((lib) => (
              <LibraryCard key={lib.name} lib={lib} />
            ))}
          </div>

          <CodeExamples examples={codeExamples} />

          <FeatureComparison
            libraries={libraries.map((lib) => lib.name)}
            features={[
              "Zero Runtime Dependencies",
              "Type Safety Level",
              "Build-time Extraction",
              "Runtime Message Extraction",
              "Framework Integration",
              "Custom Formatters Support",
              "Translation Management UI",
              "Automatic Locale Detection",
              "Async Loading Strategy",
              "Memory Footprint",
              "Browser/Node.js Support",
              "Framework-specific Optimizations",
              "Custom Transformer Support",
              "Translation File Format",
              "Development Tools",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
