export type QlooGraphEntity = {
  entity_id?: string,
  name: string,
  types: string,
  type_synonyms?: string[],
  data_source?: {
    source_id: string,
    data_pull_date: string,
    dataset: string,
  },
  properties: {
    akas?: { language: string, value: string }[],
    release_year?: string,
    release_date?: string,
    address?: string,
    image_url?: string, // slowly being deprecated for image:{}
    image?: {
      url?: string,
      source_url?: string,
    },
    geocode?: {
      admin1_region: string,
      country_code: string,
      name: string,
    }
    [key: string]: unknown,
  },
  population_percentile?: number,
  scoring_entity_data_size?: number,
  query?: { // this is recs-specific.   maybe need a types refactor?
    affinity: number,
    distance: number,
  },
};

export type QlooGraphEntityData = {
  entity_id?: string,
  name: string,
  types?: string,
  type_synonyms?: string[],
  data_source?: {
    source_id: string,
    data_pull_date: string,
    dataset: string,
  },
  properties: {
    akas?: { language: string, value: string }[],
    release_year?: string,
    release_date?: string,
    address?: string,
    image_url?: string, // slowly being deprecated for image:{}
    image?: {
      url?: string,
      source_url?: string,
    },
    geocode?: {
      admin1_region: string,
      country_code: string,
      name: string,
    }
    [key: string]: unknown,
  },
  population_percentile?: number,
  scoring_entity_data_size?: number,
  query?: { // this is recs-specific.   maybe need a types refactor?
    affinity: number,
    distance: number,
  },
};

export enum EntityType {
    Actor = 'urn:entity:actor',
    Album = 'urn:entity:album',
    Artist = 'urn:entity:artist',
    Author = 'urn:entity:author',
    Book = 'urn:entity:book',
    Director = 'urn:entity:director',
    FashionBrand = 'urn:entity:fashion_brand',
    Hotel = 'urn:entity:hotel',
    Movie = 'urn:entity:movie',
    Podcast = 'urn:entity:podcast',
    Restaurant = 'urn:entity:restaurant',
    TvShow = 'urn:entity:tv_show',
    Videogame = 'urn:entity:videogame',
    Brand = 'urn:entity:brand',
    Person = 'urn:entity:person',
    Destination = 'urn:entity:destination',
};

export enum jeffEntityType {
  'urn:entity:actor' = 'Actor',
  'urn:entity:album' = 'Album',
  'urn:entity:artist' = 'Artist',
  'urn:entity:author' = 'Author',
  'urn:entity:book' = 'Book',
  'urn:entity:director' = 'Director',
  'urn:entity:fashion_brand' = 'FashionBrand',
  'urn:entity:hotel' = 'Hotel',
  'urn:entity:movie' = 'Movie',
  'urn:entity:podcast' = 'Podcast',
  'urn:entity:restaurant' = 'Restaurant',
  'urn:entity:tv_show' = 'TvShow',
  'urn:entity:videogame' = 'Videogame',
  'urn:entity:brand' = 'Brand',
  'urn:entity:person' = 'Person',
  'urn:entity:destination' = 'Destination',
};

export enum jeffEntityTypeNumber {
  'urn:entity:actor' = '0',
  'urn:entity:album' = '1',
  'urn:entity:artist' = '2',
  'urn:entity:author' = '3',
  'urn:entity:book' = '4',
  'urn:entity:director' = '5',
  'urn:entity:fashion_brand' = '6',
  'urn:entity:hotel' = '7',
  'urn:entity:movie' = '8',
  'urn:entity:podcast' = '9',
  'urn:entity:restaurant' = '10',
  'urn:entity:tv_show' = '11',
  'urn:entity:videogame' = '12',
  'urn:entity:brand' = '13',
  'urn:entity:person' = '14',
  'urn:entity:destination' = '15',
};

