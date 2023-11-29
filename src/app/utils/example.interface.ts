interface Link {
  self?: string;
  related?: string;
}

interface DisplayProperties {
  type: string;
  image: string;
}

interface Attributes {
  urn: string;
  created_at: string;
  updated_at: string;
  content: string;
  properties: any;
  display_properties: DisplayProperties;
}

interface Author {
  links: Link;
}

interface Publisher extends Author {}

interface Relationships {
  authors: Author;
  publishers: Publisher;
}

export interface ExampleData {
  id: string;
  type: string;
  links: Link;
  attributes: Attributes;
  relationships: Relationships;
}
