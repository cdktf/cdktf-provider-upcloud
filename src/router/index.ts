/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/router
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/router#id Router#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the router
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/router#name Router#name}
  */
  readonly name: string;
  /**
  * static_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/router#static_route Router#static_route}
  */
  readonly staticRoute?: RouterStaticRoute[] | cdktf.IResolvable;
}
export interface RouterStaticRoute {
  /**
  * Name or description of the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/router#name Router#name}
  */
  readonly name?: string;
  /**
  * Next hop address. NOTE: For static route to be active the next hop has to be an address of a reachable running Cloud Server in one of the Private Networks attached to the router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/router#nexthop Router#nexthop}
  */
  readonly nexthop: string;
  /**
  * Destination prefix of the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/router#route Router#route}
  */
  readonly route: string;
}

export function routerStaticRouteToTerraform(struct?: RouterStaticRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    nexthop: cdktf.stringToTerraform(struct!.nexthop),
    route: cdktf.stringToTerraform(struct!.route),
  }
}


export function routerStaticRouteToHclTerraform(struct?: RouterStaticRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nexthop: {
      value: cdktf.stringToHclTerraform(struct!.nexthop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route: {
      value: cdktf.stringToHclTerraform(struct!.route),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterStaticRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RouterStaticRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nexthop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthop = this._nexthop;
    }
    if (this._route !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterStaticRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._nexthop = undefined;
      this._route = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._nexthop = value.nexthop;
      this._route = value.route;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // nexthop - computed: false, optional: false, required: true
  private _nexthop?: string; 
  public get nexthop() {
    return this.getStringAttribute('nexthop');
  }
  public set nexthop(value: string) {
    this._nexthop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInput() {
    return this._nexthop;
  }

  // route - computed: false, optional: false, required: true
  private _route?: string; 
  public get route() {
    return this.getStringAttribute('route');
  }
  public set route(value: string) {
    this._route = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route;
  }
}

export class RouterStaticRouteList extends cdktf.ComplexList {
  public internalValue? : RouterStaticRoute[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): RouterStaticRouteOutputReference {
    return new RouterStaticRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/router upcloud_router}
*/
export class Router extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_router";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Router resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Router to import
  * @param importFromId The id of the existing Router that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/router#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Router to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_router", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.1/docs/resources/router upcloud_router} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterConfig
  */
  public constructor(scope: Construct, id: string, config: RouterConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_router',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '5.2.1',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._staticRoute.internalValue = config.staticRoute;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attached_networks - computed: true, optional: false, required: false
  public get attachedNetworks() {
    return this.getListAttribute('attached_networks');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // static_route - computed: false, optional: true, required: false
  private _staticRoute = new RouterStaticRouteList(this, "static_route", true);
  public get staticRoute() {
    return this._staticRoute;
  }
  public putStaticRoute(value: RouterStaticRoute[] | cdktf.IResolvable) {
    this._staticRoute.internalValue = value;
  }
  public resetStaticRoute() {
    this._staticRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRouteInput() {
    return this._staticRoute.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      static_route: cdktf.listMapper(routerStaticRouteToTerraform, true)(this._staticRoute.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_route: {
        value: cdktf.listMapperHcl(routerStaticRouteToHclTerraform, true)(this._staticRoute.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RouterStaticRouteList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
