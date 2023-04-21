import { Section } from "@/types";

export function getAllSections(): Omit<Section, "label">[] {
  const sectionIds: Omit<Section, "label">[] = [];
  const sections = document.getElementsByTagName('section');
  for (let i = 0; i < sections.length; i++) {
    const id = sections[i].getAttribute('id');
    if (id) {
      sectionIds.push({
        id,
        element: sections[i],
      });
    }
  }
  return sectionIds;
}

export function snakeToTitle(snakeCase: string): string {
  const words = snakeCase.split('-');
  const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalizedWords.join(' ');
}

export function joinClasses(...strings: string[]): string {
  return strings.join(' ');
}