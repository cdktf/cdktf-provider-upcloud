// https://registry.terraform.io/providers/upcloudltd/upcloud/2.9.1/docs/resources/network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.9.1/docs/resources/network#id Network#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A valid name for the network
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.9.1/docs/resources/network#name Network#name}
  */
  readonly name: string;
  /**
  * The UUID of a router
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.9.1/docs/resources/network#router Network#router}
  */
  readonly router?: string;
  /**
  * The zone the network is in
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.9.1/docs/resources/network#zone Network#zone}
  */
  readonly zone: string;
  /**
  * ip_network block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.9.1/docs/resources/network#ip_network Network#ip_network}
  */
  readonly ipNetwork: NetworkIpNetwork;
}
export interface NetworkIpNetwork {
  /**
  * The CIDR range of the subnet
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.9.1/docs/resources/network#address Network#address}
  */
  readonly address: string;
  /**
  * Is DHCP enabled?
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.9.1/docs/resources/network#dhcp Network#dhcp}
  */
  readonly dhcp: boolean | cdktf.IResolvable;
  /**
  * Is the gateway the DHCP default route?
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.9.1/docs/resources/network#dhcp_default_route Network#dhcp_default_route}
  */
  readonly dhcpDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * The DNS servers given by DHCP
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.9.1/docs/resources/network#dhcp_dns Network#dhcp_dns}
  */
  readonly dhcpDns?: string[];
  /**
  * IP address family
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.9.1/docs/resources/network#family Network#family}
  */
  readonly family: string;
  /**
  * Gateway address given by DHCP
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.9.1/docs/resources/network#gateway Network#gateway}
  */
  readonly gateway?: string;
}

export function networkIpNetworkToTerraform(struct?: NetworkIpNetworkOutputReference | NetworkIpNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    dhcp: cdktf.booleanToTerraform(struct!.dhcp),
    dhcp_default_route: cdktf.booleanToTerraform(struct!.dhcpDefaultRoute),
    dhcp_dns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dhcpDns),
    family: cdktf.stringToTerraform(struct!.family),
    gateway: cdktf.stringToTerraform(struct!.gateway),
  }
}

export class NetworkIpNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkIpNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._dhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp;
    }
    if (this._dhcpDefaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpDefaultRoute = this._dhcpDefaultRoute;
    }
    if (this._dhcpDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpDns = this._dhcpDns;
    }
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkIpNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._dhcp = undefined;
      this._dhcpDefaultRoute = undefined;
      this._dhcpDns = undefined;
      this._family = undefined;
      this._gateway = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._dhcp = value.dhcp;
      this._dhcpDefaultRoute = value.dhcpDefaultRoute;
      this._dhcpDns = value.dhcpDns;
      this._family = value.family;
      this._gateway = value.gateway;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // dhcp - computed: false, optional: false, required: true
  private _dhcp?: boolean | cdktf.IResolvable; 
  public get dhcp() {
    return this.getBooleanAttribute('dhcp');
  }
  public set dhcp(value: boolean | cdktf.IResolvable) {
    this._dhcp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
  }

  // dhcp_default_route - computed: true, optional: true, required: false
  private _dhcpDefaultRoute?: boolean | cdktf.IResolvable; 
  public get dhcpDefaultRoute() {
    return this.getBooleanAttribute('dhcp_default_route');
  }
  public set dhcpDefaultRoute(value: boolean | cdktf.IResolvable) {
    this._dhcpDefaultRoute = value;
  }
  public resetDhcpDefaultRoute() {
    this._dhcpDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpDefaultRouteInput() {
    return this._dhcpDefaultRoute;
  }

  // dhcp_dns - computed: true, optional: true, required: false
  private _dhcpDns?: string[]; 
  public get dhcpDns() {
    return cdktf.Fn.tolist(this.getListAttribute('dhcp_dns'));
  }
  public set dhcpDns(value: string[]) {
    this._dhcpDns = value;
  }
  public resetDhcpDns() {
    this._dhcpDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpDnsInput() {
    return this._dhcpDns;
  }

  // family - computed: false, optional: false, required: true
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // gateway - computed: true, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.9.1/docs/resources/network upcloud_network}
*/
export class Network extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_network";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/2.9.1/docs/resources/network upcloud_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_network',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '2.9.1',
        providerVersionConstraint: '~> 2.4'
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
    this._router = config.router;
    this._zone = config.zone;
    this._ipNetwork.internalValue = config.ipNetwork;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // router - computed: false, optional: true, required: false
  private _router?: string; 
  public get router() {
    return this.getStringAttribute('router');
  }
  public set router(value: string) {
    this._router = value;
  }
  public resetRouter() {
    this._router = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // ip_network - computed: false, optional: false, required: true
  private _ipNetwork = new NetworkIpNetworkOutputReference(this, "ip_network");
  public get ipNetwork() {
    return this._ipNetwork;
  }
  public putIpNetwork(value: NetworkIpNetwork) {
    this._ipNetwork.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNetworkInput() {
    return this._ipNetwork.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      router: cdktf.stringToTerraform(this._router),
      zone: cdktf.stringToTerraform(this._zone),
      ip_network: networkIpNetworkToTerraform(this._ipNetwork.internalValue),
    };
  }
}
