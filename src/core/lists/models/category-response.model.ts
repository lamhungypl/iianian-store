export class CategoryResponseModel {
  public categoryId: string;
  public image: string;
  public imagePath: string;
  public isActive: string;
  public metaTagDescription: string;
  public metaTagKeyword: string;
  public metaTagTitle: string;
  public name: string;
  public parentInt: string;
  public sortOrder: string;

  constructor(listResponse: any) {
    this.categoryId = listResponse.categoryId || '';
    this.image = listResponse.image || '';
    this.imagePath = listResponse.imagePath || '';
    this.isActive = listResponse.isActive || '';
    this.metaTagDescription = listResponse.metaTagDescription || '';
    this.metaTagKeyword = listResponse.metaTagKeyword || '';
    this.metaTagTitle = listResponse.metaTagTitle || '';
    this.name = listResponse.name || '';
    this.parentInt = listResponse.parentInt || '';
    this.sortOrder = listResponse.sortOrder || '';
  }
}
