/* tslint:disable */

declare var Object: any;
export interface PerdoruesInterface {
  "Emer"?: string;
  "Mbiemer"?: string;
  "realm"?: string;
  "username"?: string;
  "email": string;
  "emailVerified"?: boolean;
  "id"?: any;
  "password"?: string;
  accessTokens?: any[];
}

export class Perdorues implements PerdoruesInterface {
  "Emer": string;
  "Mbiemer": string;
  "realm": string;
  "username": string;
  "email": string;
  "emailVerified": boolean;
  "id": any;
  "password": string;
  accessTokens: any[];
  constructor(data?: PerdoruesInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Perdorues`.
   */
  public static getModelName() {
    return "Perdorues";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Perdorues for dynamic purposes.
  **/
  public static factory(data: PerdoruesInterface): Perdorues{
    return new Perdorues(data);
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
      name: 'Perdorues',
      plural: 'Perdoruesit',
      path: 'Perdoruesit',
      idName: 'id',
      properties: {
        "Emer": {
          name: 'Emer',
          type: 'string'
        },
        "Mbiemer": {
          name: 'Mbiemer',
          type: 'string'
        },
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
      }
    }
  }
}
