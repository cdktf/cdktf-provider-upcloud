// https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/gateway_connection_tunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayConnectionTunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the upcloud_gateway_connection resource to which the tunnel belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/gateway_connection_tunnel#connection_id GatewayConnectionTunnel#connection_id}
  */
  readonly connectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/gateway_connection_tunnel#id GatewayConnectionTunnel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Public (UpCloud) endpoint address of this tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/gateway_connection_tunnel#local_address_name GatewayConnectionTunnel#local_address_name}
  */
  readonly localAddressName: string;
  /**
  * The name of the tunnel, should be unique within the connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/gateway_connection_tunnel#name GatewayConnectionTunnel#name}
  */
  readonly name: string;
  /**
  * Remote public IP address of the tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/gateway_connection_tunnel#remote_address GatewayConnectionTunnel#remote_address}
  */
  readonly remoteAddress: string;
  /**
  * ipsec_auth_psk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/gateway_connection_tunnel#ipsec_auth_psk GatewayConnectionTunnel#ipsec_auth_psk}
  */
  readonly ipsecAuthPsk: GatewayConnectionTunnelIpsecAuthPsk;
  /**
  * ipsec_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/gateway_connection_tunnel#ipsec_properties GatewayConnectionTunnel#ipsec_properties}
  */
  readonly ipsecProperties?: GatewayConnectionTunnelIpsecProperties;
}
export interface GatewayConnectionTunnelIpsecAuthPsk {
  /**
  * The pre-shared key. This value is only used during resource creation and is not returned in the state. It is not possible to update this value. If you need to update it, delete the connection and create a new one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/gateway_connection_tunnel#psk GatewayConnectionTunnel#psk}
  */
  readonly psk: string;
}

export function gatewayConnectionTunnelIpsecAuthPskToTerraform(struct?: GatewayConnectionTunnelIpsecAuthPskOutputReference | GatewayConnectionTunnelIpsecAuthPsk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    psk: cdktf.stringToTerraform(struct!.psk),
  }
}


export function gatewayConnectionTunnelIpsecAuthPskToHclTerraform(struct?: GatewayConnectionTunnelIpsecAuthPskOutputReference | GatewayConnectionTunnelIpsecAuthPsk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    psk: {
      value: cdktf.stringToHclTerraform(struct!.psk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayConnectionTunnelIpsecAuthPskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GatewayConnectionTunnelIpsecAuthPsk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._psk !== undefined) {
      hasAnyValues = true;
      internalValueResult.psk = this._psk;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayConnectionTunnelIpsecAuthPsk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._psk = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._psk = value.psk;
    }
  }

  // psk - computed: false, optional: false, required: true
  private _psk?: string; 
  public get psk() {
    return this.getStringAttribute('psk');
  }
  public set psk(value: string) {
    this._psk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pskInput() {
    return this._psk;
  }
}
export interface GatewayConnectionTunnelIpsecProperties {
  /**
  * IKE child SA rekey time in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/gateway_connection_tunnel#child_rekey_time GatewayConnectionTunnel#child_rekey_time}
  */
  readonly childRekeyTime?: number;
  /**
  * Delay before sending Dead Peer Detection packets if no traffic is detected, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/gateway_connection_tunnel#dpd_delay GatewayConnectionTunnel#dpd_delay}
  */
  readonly dpdDelay?: number;
  /**
  * Timeout period for DPD reply before considering the peer to be dead, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/gateway_connection_tunnel#dpd_timeout GatewayConnectionTunnel#dpd_timeout}
  */
  readonly dpdTimeout?: number;
  /**
  * Maximum IKE SA lifetime in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/gateway_connection_tunnel#ike_lifetime GatewayConnectionTunnel#ike_lifetime}
  */
  readonly ikeLifetime?: number;
  /**
  * List of Phase 1: Proposal algorithms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/gateway_connection_tunnel#phase1_algorithms GatewayConnectionTunnel#phase1_algorithms}
  */
  readonly phase1Algorithms?: string[];
  /**
  * List of Phase 1 Diffie-Hellman group numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/gateway_connection_tunnel#phase1_dh_group_numbers GatewayConnectionTunnel#phase1_dh_group_numbers}
  */
  readonly phase1DhGroupNumbers?: number[];
  /**
  * List of Phase 1 integrity algorithms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/gateway_connection_tunnel#phase1_integrity_algorithms GatewayConnectionTunnel#phase1_integrity_algorithms}
  */
  readonly phase1IntegrityAlgorithms?: string[];
  /**
  * List of Phase 2: Security Association algorithms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/gateway_connection_tunnel#phase2_algorithms GatewayConnectionTunnel#phase2_algorithms}
  */
  readonly phase2Algorithms?: string[];
  /**
  * List of Phase 2 Diffie-Hellman group numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/gateway_connection_tunnel#phase2_dh_group_numbers GatewayConnectionTunnel#phase2_dh_group_numbers}
  */
  readonly phase2DhGroupNumbers?: number[];
  /**
  * List of Phase 2 integrity algorithms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/gateway_connection_tunnel#phase2_integrity_algorithms GatewayConnectionTunnel#phase2_integrity_algorithms}
  */
  readonly phase2IntegrityAlgorithms?: string[];
  /**
  * IKE SA rekey time in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/gateway_connection_tunnel#rekey_time GatewayConnectionTunnel#rekey_time}
  */
  readonly rekeyTime?: number;
}

export function gatewayConnectionTunnelIpsecPropertiesToTerraform(struct?: GatewayConnectionTunnelIpsecPropertiesOutputReference | GatewayConnectionTunnelIpsecProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_rekey_time: cdktf.numberToTerraform(struct!.childRekeyTime),
    dpd_delay: cdktf.numberToTerraform(struct!.dpdDelay),
    dpd_timeout: cdktf.numberToTerraform(struct!.dpdTimeout),
    ike_lifetime: cdktf.numberToTerraform(struct!.ikeLifetime),
    phase1_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.phase1Algorithms),
    phase1_dh_group_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.phase1DhGroupNumbers),
    phase1_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.phase1IntegrityAlgorithms),
    phase2_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.phase2Algorithms),
    phase2_dh_group_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.phase2DhGroupNumbers),
    phase2_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.phase2IntegrityAlgorithms),
    rekey_time: cdktf.numberToTerraform(struct!.rekeyTime),
  }
}


export function gatewayConnectionTunnelIpsecPropertiesToHclTerraform(struct?: GatewayConnectionTunnelIpsecPropertiesOutputReference | GatewayConnectionTunnelIpsecProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    child_rekey_time: {
      value: cdktf.numberToHclTerraform(struct!.childRekeyTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dpd_delay: {
      value: cdktf.numberToHclTerraform(struct!.dpdDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dpd_timeout: {
      value: cdktf.numberToHclTerraform(struct!.dpdTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ike_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.ikeLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    phase1_algorithms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.phase1Algorithms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    phase1_dh_group_numbers: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.phase1DhGroupNumbers),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    phase1_integrity_algorithms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.phase1IntegrityAlgorithms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    phase2_algorithms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.phase2Algorithms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    phase2_dh_group_numbers: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.phase2DhGroupNumbers),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    phase2_integrity_algorithms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.phase2IntegrityAlgorithms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    rekey_time: {
      value: cdktf.numberToHclTerraform(struct!.rekeyTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayConnectionTunnelIpsecPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GatewayConnectionTunnelIpsecProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._childRekeyTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.childRekeyTime = this._childRekeyTime;
    }
    if (this._dpdDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpdDelay = this._dpdDelay;
    }
    if (this._dpdTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpdTimeout = this._dpdTimeout;
    }
    if (this._ikeLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeLifetime = this._ikeLifetime;
    }
    if (this._phase1Algorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.phase1Algorithms = this._phase1Algorithms;
    }
    if (this._phase1DhGroupNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.phase1DhGroupNumbers = this._phase1DhGroupNumbers;
    }
    if (this._phase1IntegrityAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.phase1IntegrityAlgorithms = this._phase1IntegrityAlgorithms;
    }
    if (this._phase2Algorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.phase2Algorithms = this._phase2Algorithms;
    }
    if (this._phase2DhGroupNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.phase2DhGroupNumbers = this._phase2DhGroupNumbers;
    }
    if (this._phase2IntegrityAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.phase2IntegrityAlgorithms = this._phase2IntegrityAlgorithms;
    }
    if (this._rekeyTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.rekeyTime = this._rekeyTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayConnectionTunnelIpsecProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._childRekeyTime = undefined;
      this._dpdDelay = undefined;
      this._dpdTimeout = undefined;
      this._ikeLifetime = undefined;
      this._phase1Algorithms = undefined;
      this._phase1DhGroupNumbers = undefined;
      this._phase1IntegrityAlgorithms = undefined;
      this._phase2Algorithms = undefined;
      this._phase2DhGroupNumbers = undefined;
      this._phase2IntegrityAlgorithms = undefined;
      this._rekeyTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._childRekeyTime = value.childRekeyTime;
      this._dpdDelay = value.dpdDelay;
      this._dpdTimeout = value.dpdTimeout;
      this._ikeLifetime = value.ikeLifetime;
      this._phase1Algorithms = value.phase1Algorithms;
      this._phase1DhGroupNumbers = value.phase1DhGroupNumbers;
      this._phase1IntegrityAlgorithms = value.phase1IntegrityAlgorithms;
      this._phase2Algorithms = value.phase2Algorithms;
      this._phase2DhGroupNumbers = value.phase2DhGroupNumbers;
      this._phase2IntegrityAlgorithms = value.phase2IntegrityAlgorithms;
      this._rekeyTime = value.rekeyTime;
    }
  }

  // child_rekey_time - computed: true, optional: true, required: false
  private _childRekeyTime?: number; 
  public get childRekeyTime() {
    return this.getNumberAttribute('child_rekey_time');
  }
  public set childRekeyTime(value: number) {
    this._childRekeyTime = value;
  }
  public resetChildRekeyTime() {
    this._childRekeyTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childRekeyTimeInput() {
    return this._childRekeyTime;
  }

  // dpd_delay - computed: true, optional: true, required: false
  private _dpdDelay?: number; 
  public get dpdDelay() {
    return this.getNumberAttribute('dpd_delay');
  }
  public set dpdDelay(value: number) {
    this._dpdDelay = value;
  }
  public resetDpdDelay() {
    this._dpdDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdDelayInput() {
    return this._dpdDelay;
  }

  // dpd_timeout - computed: true, optional: true, required: false
  private _dpdTimeout?: number; 
  public get dpdTimeout() {
    return this.getNumberAttribute('dpd_timeout');
  }
  public set dpdTimeout(value: number) {
    this._dpdTimeout = value;
  }
  public resetDpdTimeout() {
    this._dpdTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdTimeoutInput() {
    return this._dpdTimeout;
  }

  // ike_lifetime - computed: true, optional: true, required: false
  private _ikeLifetime?: number; 
  public get ikeLifetime() {
    return this.getNumberAttribute('ike_lifetime');
  }
  public set ikeLifetime(value: number) {
    this._ikeLifetime = value;
  }
  public resetIkeLifetime() {
    this._ikeLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeLifetimeInput() {
    return this._ikeLifetime;
  }

  // phase1_algorithms - computed: true, optional: true, required: false
  private _phase1Algorithms?: string[]; 
  public get phase1Algorithms() {
    return cdktf.Fn.tolist(this.getListAttribute('phase1_algorithms'));
  }
  public set phase1Algorithms(value: string[]) {
    this._phase1Algorithms = value;
  }
  public resetPhase1Algorithms() {
    this._phase1Algorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phase1AlgorithmsInput() {
    return this._phase1Algorithms;
  }

  // phase1_dh_group_numbers - computed: true, optional: true, required: false
  private _phase1DhGroupNumbers?: number[]; 
  public get phase1DhGroupNumbers() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('phase1_dh_group_numbers')));
  }
  public set phase1DhGroupNumbers(value: number[]) {
    this._phase1DhGroupNumbers = value;
  }
  public resetPhase1DhGroupNumbers() {
    this._phase1DhGroupNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phase1DhGroupNumbersInput() {
    return this._phase1DhGroupNumbers;
  }

  // phase1_integrity_algorithms - computed: true, optional: true, required: false
  private _phase1IntegrityAlgorithms?: string[]; 
  public get phase1IntegrityAlgorithms() {
    return cdktf.Fn.tolist(this.getListAttribute('phase1_integrity_algorithms'));
  }
  public set phase1IntegrityAlgorithms(value: string[]) {
    this._phase1IntegrityAlgorithms = value;
  }
  public resetPhase1IntegrityAlgorithms() {
    this._phase1IntegrityAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phase1IntegrityAlgorithmsInput() {
    return this._phase1IntegrityAlgorithms;
  }

  // phase2_algorithms - computed: true, optional: true, required: false
  private _phase2Algorithms?: string[]; 
  public get phase2Algorithms() {
    return cdktf.Fn.tolist(this.getListAttribute('phase2_algorithms'));
  }
  public set phase2Algorithms(value: string[]) {
    this._phase2Algorithms = value;
  }
  public resetPhase2Algorithms() {
    this._phase2Algorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phase2AlgorithmsInput() {
    return this._phase2Algorithms;
  }

  // phase2_dh_group_numbers - computed: true, optional: true, required: false
  private _phase2DhGroupNumbers?: number[]; 
  public get phase2DhGroupNumbers() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('phase2_dh_group_numbers')));
  }
  public set phase2DhGroupNumbers(value: number[]) {
    this._phase2DhGroupNumbers = value;
  }
  public resetPhase2DhGroupNumbers() {
    this._phase2DhGroupNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phase2DhGroupNumbersInput() {
    return this._phase2DhGroupNumbers;
  }

  // phase2_integrity_algorithms - computed: true, optional: true, required: false
  private _phase2IntegrityAlgorithms?: string[]; 
  public get phase2IntegrityAlgorithms() {
    return cdktf.Fn.tolist(this.getListAttribute('phase2_integrity_algorithms'));
  }
  public set phase2IntegrityAlgorithms(value: string[]) {
    this._phase2IntegrityAlgorithms = value;
  }
  public resetPhase2IntegrityAlgorithms() {
    this._phase2IntegrityAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phase2IntegrityAlgorithmsInput() {
    return this._phase2IntegrityAlgorithms;
  }

  // rekey_time - computed: true, optional: true, required: false
  private _rekeyTime?: number; 
  public get rekeyTime() {
    return this.getNumberAttribute('rekey_time');
  }
  public set rekeyTime(value: number) {
    this._rekeyTime = value;
  }
  public resetRekeyTime() {
    this._rekeyTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rekeyTimeInput() {
    return this._rekeyTime;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/gateway_connection_tunnel upcloud_gateway_connection_tunnel}
*/
export class GatewayConnectionTunnel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_gateway_connection_tunnel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayConnectionTunnel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayConnectionTunnel to import
  * @param importFromId The id of the existing GatewayConnectionTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/gateway_connection_tunnel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayConnectionTunnel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_gateway_connection_tunnel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/gateway_connection_tunnel upcloud_gateway_connection_tunnel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayConnectionTunnelConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayConnectionTunnelConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_gateway_connection_tunnel',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '5.20.4',
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
    this._connectionId = config.connectionId;
    this._id = config.id;
    this._localAddressName = config.localAddressName;
    this._name = config.name;
    this._remoteAddress = config.remoteAddress;
    this._ipsecAuthPsk.internalValue = config.ipsecAuthPsk;
    this._ipsecProperties.internalValue = config.ipsecProperties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
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

  // local_address_name - computed: false, optional: false, required: true
  private _localAddressName?: string; 
  public get localAddressName() {
    return this.getStringAttribute('local_address_name');
  }
  public set localAddressName(value: string) {
    this._localAddressName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localAddressNameInput() {
    return this._localAddressName;
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

  // operational_state - computed: true, optional: false, required: false
  public get operationalState() {
    return this.getStringAttribute('operational_state');
  }

  // remote_address - computed: false, optional: false, required: true
  private _remoteAddress?: string; 
  public get remoteAddress() {
    return this.getStringAttribute('remote_address');
  }
  public set remoteAddress(value: string) {
    this._remoteAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAddressInput() {
    return this._remoteAddress;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // ipsec_auth_psk - computed: false, optional: false, required: true
  private _ipsecAuthPsk = new GatewayConnectionTunnelIpsecAuthPskOutputReference(this, "ipsec_auth_psk");
  public get ipsecAuthPsk() {
    return this._ipsecAuthPsk;
  }
  public putIpsecAuthPsk(value: GatewayConnectionTunnelIpsecAuthPsk) {
    this._ipsecAuthPsk.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecAuthPskInput() {
    return this._ipsecAuthPsk.internalValue;
  }

  // ipsec_properties - computed: false, optional: true, required: false
  private _ipsecProperties = new GatewayConnectionTunnelIpsecPropertiesOutputReference(this, "ipsec_properties");
  public get ipsecProperties() {
    return this._ipsecProperties;
  }
  public putIpsecProperties(value: GatewayConnectionTunnelIpsecProperties) {
    this._ipsecProperties.internalValue = value;
  }
  public resetIpsecProperties() {
    this._ipsecProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPropertiesInput() {
    return this._ipsecProperties.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_id: cdktf.stringToTerraform(this._connectionId),
      id: cdktf.stringToTerraform(this._id),
      local_address_name: cdktf.stringToTerraform(this._localAddressName),
      name: cdktf.stringToTerraform(this._name),
      remote_address: cdktf.stringToTerraform(this._remoteAddress),
      ipsec_auth_psk: gatewayConnectionTunnelIpsecAuthPskToTerraform(this._ipsecAuthPsk.internalValue),
      ipsec_properties: gatewayConnectionTunnelIpsecPropertiesToTerraform(this._ipsecProperties.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_id: {
        value: cdktf.stringToHclTerraform(this._connectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_address_name: {
        value: cdktf.stringToHclTerraform(this._localAddressName),
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
      remote_address: {
        value: cdktf.stringToHclTerraform(this._remoteAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_auth_psk: {
        value: gatewayConnectionTunnelIpsecAuthPskToHclTerraform(this._ipsecAuthPsk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayConnectionTunnelIpsecAuthPskList",
      },
      ipsec_properties: {
        value: gatewayConnectionTunnelIpsecPropertiesToHclTerraform(this._ipsecProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayConnectionTunnelIpsecPropertiesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
