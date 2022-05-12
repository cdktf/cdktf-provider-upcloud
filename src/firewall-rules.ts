// https://www.terraform.io/docs/providers/upcloud/r/firewall_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique id of the server to be protected the firewall rules
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/firewall_rules#server_id FirewallRules#server_id}
  */
  readonly serverId: string;
  /**
  * firewall_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/firewall_rules#firewall_rule FirewallRules#firewall_rule}
  */
  readonly firewallRule: FirewallRulesFirewallRule[] | cdktf.IResolvable;
}
export interface FirewallRulesFirewallRule {
  /**
  * Action to take if the rule conditions are met
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/firewall_rules#action FirewallRules#action}
  */
  readonly action: string;
  /**
  * Freeform comment string for the rule
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/firewall_rules#comment FirewallRules#comment}
  */
  readonly comment?: string;
  /**
  * The destination address range ends from this address
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/firewall_rules#destination_address_end FirewallRules#destination_address_end}
  */
  readonly destinationAddressEnd?: string;
  /**
  * The destination address range starts from this address
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/firewall_rules#destination_address_start FirewallRules#destination_address_start}
  */
  readonly destinationAddressStart?: string;
  /**
  * The destination port range ends from this port number
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/firewall_rules#destination_port_end FirewallRules#destination_port_end}
  */
  readonly destinationPortEnd?: string;
  /**
  * The destination port range starts from this port number
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/firewall_rules#destination_port_start FirewallRules#destination_port_start}
  */
  readonly destinationPortStart?: string;
  /**
  * The direction of network traffic this rule will be applied to
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/firewall_rules#direction FirewallRules#direction}
  */
  readonly direction: string;
  /**
  * The address family of new firewall rule
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/firewall_rules#family FirewallRules#family}
  */
  readonly family: string;
  /**
  * The ICMP type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/firewall_rules#icmp_type FirewallRules#icmp_type}
  */
  readonly icmpType?: string;
  /**
  * The protocol this rule will be applied to
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/firewall_rules#protocol FirewallRules#protocol}
  */
  readonly protocol?: string;
  /**
  * The source address range ends from this address
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/firewall_rules#source_address_end FirewallRules#source_address_end}
  */
  readonly sourceAddressEnd?: string;
  /**
  * The source address range starts from this address
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/firewall_rules#source_address_start FirewallRules#source_address_start}
  */
  readonly sourceAddressStart?: string;
  /**
  * The source port range ends from this port number
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/firewall_rules#source_port_end FirewallRules#source_port_end}
  */
  readonly sourcePortEnd?: string;
  /**
  * The source port range starts from this port number
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/firewall_rules#source_port_start FirewallRules#source_port_start}
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/upcloud/r/firewall_rules upcloud_firewall_rules}
*/
export class FirewallRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_firewall_rules";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/upcloud/r/firewall_rules upcloud_firewall_rules} Resource
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
        providerVersion: '2.4.2',
        providerVersionConstraint: '~> 2.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._serverId = config.serverId;
    this._firewallRule = config.firewallRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
  private _firewallRule?: FirewallRulesFirewallRule[] | cdktf.IResolvable; 
  public get firewallRule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('firewall_rule');
  }
  public set firewallRule(value: FirewallRulesFirewallRule[] | cdktf.IResolvable) {
    this._firewallRule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallRuleInput() {
    return this._firewallRule;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      server_id: cdktf.stringToTerraform(this._serverId),
      firewall_rule: cdktf.listMapper(firewallRulesFirewallRuleToTerraform)(this._firewallRule),
    };
  }
}
