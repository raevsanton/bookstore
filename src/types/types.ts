export interface Book {
    kind:       string;
    id:         string;
    etag:       string;
    selfLink:   string;
    volumeInfo: VolumeInfo;
    layerInfo:  LayerInfo;
    saleInfo:   SaleInfo;
    accessInfo: AccessInfo;
}

interface AccessInfo {
    country:                string;
    viewability:            string;
    embeddable:             boolean;
    publicDomain:           boolean;
    textToSpeechPermission: string;
    epub:                   Epub;
    pdf:                    Epub;
    webReaderLink:          string;
    accessViewStatus:       string;
    quoteSharingAllowed:    boolean;
}

interface Epub {
    isAvailable: boolean;
}

interface LayerInfo {
    layers: Layer[];
}

interface Layer {
    layerID:                  string;
    volumeAnnotationsVersion: string;
}

interface SaleInfo {
    country:     string;
    saleability: string;
    isEbook:     boolean;
    listPrice:   SaleInfoListPrice;
    retailPrice: SaleInfoListPrice;
    buyLink:     string;
    offers:      Offer[];
}

interface SaleInfoListPrice {
    amount:       number;
    currencyCode: string;
}

interface Offer {
    finskyOfferType: number;
    listPrice:       OfferListPrice;
    retailPrice:     OfferListPrice;
}

interface OfferListPrice {
    amountInMicros: number;
    currencyCode:   string;
}

interface VolumeInfo {
    title:               string;
    subtitle:            string;
    authors:             string[];
    publisher:           string;
    publishedDate:       Date;
    description:         string;
    industryIdentifiers: IndustryIdentifier[];
    readingModes:        ReadingModes;
    pageCount:           number;
    printType:           string;
    categories:          string[];
    averageRating:       number;
    ratingsCount:        number;
    maturityRating:      string;
    allowAnonLogging:    boolean;
    contentVersion:      string;
    panelizationSummary: PanelizationSummary;
    imageLinks:          ImageLinks;
    previewLink:         string;
    infoLink:            string;
    canonicalVolumeLink: string;
}

interface ImageLinks {
    smallThumbnail: string;
    thumbnail:      string;
}

interface IndustryIdentifier {
    type:       string;
    identifier: string;
}

interface PanelizationSummary {
    containsEpubBubbles:  boolean;
    containsImageBubbles: boolean;
}

interface ReadingModes {
    text:  boolean;
    image: boolean;
}