/* tslint:disable */

declare var Object: any;
export interface FotoInterface {
  "id"?: number;
}

export class Foto implements FotoInterface {
  "id": number;
  constructor(data?: FotoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Foto`.
   */
  public static getModelName() {
    return "Foto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Foto for dynamic purposes.
  **/
  public static factory(data: FotoInterface): Foto{
    return new Foto(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Foto',
      plural: 'Fotografite',
      path: 'Fotografite',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
