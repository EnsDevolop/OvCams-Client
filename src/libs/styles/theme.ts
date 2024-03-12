type ThemeVariables = {
  black: string;
  white: string;
};

type Theme = "default";
type VariableKey = keyof ThemeVariables;
type ThemedPalette = Record<VariableKey, string>;

const themeVariableSets: Record<Theme, ThemeVariables> = {
  default: {
    black: "#000000",
    white: "#ffffff",
  },
};

const buildCssVariables = (variables: ThemeVariables) => {
  const keys = Object.keys(variables) as (keyof ThemeVariables)[];
  return keys.reduce(
    (acc, key) =>
      acc.concat(`--${key.replace(/_/g, "-")}: ${variables[key]};`, "\n"),
    ""
  );
};

export const themes = {
  default: buildCssVariables(themeVariableSets.default),
};

const cssVar = (name: string) => `var(--${name.replace(/_/g, "-")})`;

const variableKeys = Object.keys(themeVariableSets.default) as VariableKey[];

export const themedPalette: Record<VariableKey, string> = variableKeys.reduce(
  (acc, current) => {
    acc[current] = cssVar(current);
    return acc;
  },
  {} as ThemedPalette
);
