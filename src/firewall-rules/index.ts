/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/resources/firewall_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/resources/firewall_rules#id FirewallRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The unique id of the server to be protected the firewall rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/resources/firewall_rules#server_id FirewallRules#server_id}
  */
  readonly serverId: string;
  /**
  * firewall_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/resources/firewall_rules#firewall_rule FirewallRules#firewall_rule}
  */
  readonly firewallRule: FirewallRulesFirewallRule[] | cdktf.IResolvable;
}
export interface FirewallRulesFirewallRule {
  /**
  * Action to take if the rule conditions are met
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/resources/firewall_rules#action FirewallRules#action}
  */
  readonly action: string;
  /**
  * Freeform comment string for the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/resources/firewall_rules#comment FirewallRules#comment}
  */
  readonly comment?: string;
  /**
  * The destination address range ends from this address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/resources/firewall_rules#destination_address_end FirewallRules#destination_address_end}
  */
  readonly destinationAddressEnd?: string;
  /**
  * The destination address range starts from this address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/resources/firewall_rules#destination_address_start FirewallRules#destination_address_start}
  */
  readonly destinationAddressStart?: string;
  /**
  * The destination port range ends from this port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/resources/firewall_rules#destination_port_end FirewallRules#destination_port_end}
  */
  readonly destinationPortEnd?: string;
  /**
  * The destination port range starts from this port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/resources/firewall_rules#destination_port_start FirewallRules#destination_port_start}
  */
  readonly destinationPortStart?: string;
  /**
  * The direction of network traffic this rule will be applied to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/resources/firewall_rules#direction FirewallRules#direction}
  */
  readonly direction: string;
  /**
  * The address family of new firewall rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/resources/firewall_rules#family FirewallRules#family}
  */
  readonly family?: string;
  /**
  * The ICMP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/resources/firewall_rules#icmp_type FirewallRules#icmp_type}
  */
  readonly icmpType?: string;
  /**
  * The protocol this rule will be applied to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/resources/firewall_rules#protocol FirewallRules#protocol}
  */
  readonly protocol?: string;
  /**
  * The source address range ends from this address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/resources/firewall_rules#source_address_end FirewallRules#source_address_end}
  */
  readonly sourceAddressEnd?: string;
  /**
  * The source address range starts from this address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/resources/firewall_rules#source_address_start FirewallRules#source_address_start}
  */
  readonly sourceAddressStart?: string;
  /**
  * The source port range ends from this port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/resources/firewall_rules#source_port_end FirewallRules#source_port_end}
  */
  readonly sourcePortEnd?: string;
  /**
  * The source port range starts from this port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/resources/firewall_rules#source_port_start FirewallRules#source_port_start}
  */
  readonly sourcePortStart?: string;
}

export function firewallRulesFirewallRuleToTerraform(struct?: FirewallRulesFirewallRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    comment: cdktf.stringToTerraform(struct!.comment),
    destination_address_end: cdktf.stringToTerraform(struct!.destinationAddressEnd),
    destination_address_start: cdktf.stringToTerraform(struct!.destinationAddressStart),
    destination_port_end: cdktf.stringToTerraform(struct!.destinationPortEnd),
    destination_port_start: cdktf.stringToTerraform(struct!.destinationPortStart),
    direction: cdktf.stringToTerraform(struct!.direction),
    family: cdktf.stringToTerraform(struct!.family),
    icmp_type: cdktf.stringToTerraform(struct!.icmpType),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_address_end: cdktf.stringToTerraform(struct!.sourceAddressEnd),
    source_address_start: cdktf.stringToTerraform(struct!.sourceAddressStart),
    source_port_end: cdktf.stringToTerraform(struct!.sourcePortEnd),
    source_port_start: cdktf.stringToTerraform(struct!.sourcePortStart),
  }
}


export function firewallRulesFirewallRuleToHclTerraform(struct?: FirewallRulesFirewallRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_address_end: {
      value: cdktf.stringToHclTerraform(struct!.destinationAddressEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_address_start: {
      value: cdktf.stringToHclTerraform(struct!.destinationAddressStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port_end: {
      value: cdktf.stringToHclTerraform(struct!.destinationPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port_start: {
      value: cdktf.stringToHclTerraform(struct!.destinationPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    family: {
      value: cdktf.stringToHclTerraform(struct!.family),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_type: {
      value: cdktf.stringToHclTerraform(struct!.icmpType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_address_end: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddressEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_address_start: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddressStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port_end: {
      value: cdktf.stringToHclTerraform(struct!.sourcePortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port_start: {
      value: cdktf.stringToHclTerraform(struct!.sourcePortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallRulesFirewallRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallRulesFirewallRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._destinationAddressEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddressEnd = this._destinationAddressEnd;
    }
    if (this._destinationAddressStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddressStart = this._destinationAddressStart;
    }
    if (this._destinationPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortEnd = this._destinationPortEnd;
    }
    if (this._destinationPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortStart = this._destinationPortStart;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._icmpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpType = this._icmpType;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sourceAddressEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddressEnd = this._sourceAddressEnd;
    }
    if (this._sourceAddressStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddressStart = this._sourceAddressStart;
    }
    if (this._sourcePortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortEnd = this._sourcePortEnd;
    }
    if (this._sourcePortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortStart = this._sourcePortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallRulesFirewallRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._comment = undefined;
      this._destinationAddressEnd = undefined;
      this._destinationAddressStart = undefined;
      this._destinationPortEnd = undefined;
      this._destinationPortStart = undefined;
      this._direction = undefined;
      this._family = undefined;
      this._icmpType = undefined;
      this._protocol = undefined;
      this._sourceAddressEnd = undefined;
      this._sourceAddressStart = undefined;
      this._sourcePortEnd = undefined;
      this._sourcePortStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._comment = value.comment;
      this._destinationAddressEnd = value.destinationAddressEnd;
      this._destinationAddressStart = value.destinationAddressStart;
      this._destinationPortEnd = value.destinationPortEnd;
      this._destinationPortStart = value.destinationPortStart;
      this._direction = value.direction;
      this._family = value.family;
      this._icmpType = value.icmpType;
      this._protocol = value.protocol;
      this._sourceAddressEnd = value.sourceAddressEnd;
      this._sourceAddressStart = value.sourceAddressStart;
      this._sourcePortEnd = value.sourcePortEnd;
      this._sourcePortStart = value.sourcePortStart;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // destination_address_end - computed: false, optional: true, required: false
  private _destinationAddressEnd?: string; 
  public get destinationAddressEnd() {
    return this.getStringAttribute('destination_address_end');
  }
  public set destinationAddressEnd(value: string) {
    this._destinationAddressEnd = value;
  }
  public resetDestinationAddressEnd() {
    this._destinationAddressEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressEndInput() {
    return this._destinationAddressEnd;
  }

  // destination_address_start - computed: false, optional: true, required: false
  private _destinationAddressStart?: string; 
  public get destinationAddressStart() {
    return this.getStringAttribute('destination_address_start');
  }
  public set destinationAddressStart(value: string) {
    this._destinationAddressStart = value;
  }
  public resetDestinationAddressStart() {
    this._destinationAddressStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressStartInput() {
    return this._destinationAddressStart;
  }

  // destination_port_end - computed: false, optional: true, required: false
  private _destinationPortEnd?: string; 
  public get destinationPortEnd() {
    return this.getStringAttribute('destination_port_end');
  }
  public set destinationPortEnd(value: string) {
    this._destinationPortEnd = value;
  }
  public resetDestinationPortEnd() {
    this._destinationPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortEndInput() {
    return this._destinationPortEnd;
  }

  // destination_port_start - computed: false, optional: true, required: false
  private _destinationPortStart?: string; 
  public get destinationPortStart() {
    return this.getStringAttribute('destination_port_start');
  }
  public set destinationPortStart(value: string) {
    this._destinationPortStart = value;
  }
  public resetDestinationPortStart() {
    this._destinationPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortStartInput() {
    return this._destinationPortStart;
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // family - computed: false, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // icmp_type - computed: false, optional: true, required: false
  private _icmpType?: string; 
  public get icmpType() {
    return this.getStringAttribute('icmp_type');
  }
  public set icmpType(value: string) {
    this._icmpType = value;
  }
  public resetIcmpType() {
    this._icmpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeInput() {
    return this._icmpType;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // source_address_end - computed: false, optional: true, required: false
  private _sourceAddressEnd?: string; 
  public get sourceAddressEnd() {
    return this.getStringAttribute('source_address_end');
  }
  public set sourceAddressEnd(value: string) {
    this._sourceAddressEnd = value;
  }
  public resetSourceAddressEnd() {
    this._sourceAddressEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressEndInput() {
    return this._sourceAddressEnd;
  }

  // source_address_start - computed: false, optional: true, required: false
  private _sourceAddressStart?: string; 
  public get sourceAddressStart() {
    return this.getStringAttribute('source_address_start');
  }
  public set sourceAddressStart(value: string) {
    this._sourceAddressStart = value;
  }
  public resetSourceAddressStart() {
    this._sourceAddressStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressStartInput() {
    return this._sourceAddressStart;
  }

  // source_port_end - computed: false, optional: true, required: false
  private _sourcePortEnd?: string; 
  public get sourcePortEnd() {
    return this.getStringAttribute('source_port_end');
  }
  public set sourcePortEnd(value: string) {
    this._sourcePortEnd = value;
  }
  public resetSourcePortEnd() {
    this._sourcePortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortEndInput() {
    return this._sourcePortEnd;
  }

  // source_port_start - computed: false, optional: true, required: false
  private _sourcePortStart?: string; 
  public get sourcePortStart() {
    return this.getStringAttribute('source_port_start');
  }
  public set sourcePortStart(value: string) {
    this._sourcePortStart = value;
  }
  public resetSourcePortStart() {
    this._sourcePortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortStartInput() {
    return this._sourcePortStart;
  }
}

export class FirewallRulesFirewallRuleList extends cdktf.ComplexList {
  public internalValue? : FirewallRulesFirewallRule[] | cdktf.IResolvable

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
  public get(index: number): FirewallRulesFirewallRuleOutputReference {
    return new FirewallRulesFirewallRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/resources/firewall_rules upcloud_firewall_rules}
*/
export class FirewallRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_firewall_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallRules to import
  * @param importFromId The id of the existing FirewallRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/resources/firewall_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_firewall_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/resources/firewall_rules upcloud_firewall_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallRulesConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'upcloud_firewall_rules',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '5.0.3',
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
    this._serverId = config.serverId;
    this._firewallRule.internalValue = config.firewallRule;
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

  // server_id - computed: false, optional: false, required: true
  private _serverId?: string; 
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId;
  }

  // firewall_rule - computed: false, optional: false, required: true
  private _firewallRule = new FirewallRulesFirewallRuleList(this, "firewall_rule", false);
  public get firewallRule() {
    return this._firewallRule;
  }
  public putFirewallRule(value: FirewallRulesFirewallRule[] | cdktf.IResolvable) {
    this._firewallRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallRuleInput() {
    return this._firewallRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      server_id: cdktf.stringToTerraform(this._serverId),
      firewall_rule: cdktf.listMapper(firewallRulesFirewallRuleToTerraform, true)(this._firewallRule.internalValue),
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
      server_id: {
        value: cdktf.stringToHclTerraform(this._serverId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_rule: {
        value: cdktf.listMapperHcl(firewallRulesFirewallRuleToHclTerraform, true)(this._firewallRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallRulesFirewallRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
