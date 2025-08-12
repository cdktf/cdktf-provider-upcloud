/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.4/docs/data-sources/load_balancer_dns_challenge_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataUpcloudLoadBalancerDnsChallengeDomainConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.4/docs/data-sources/load_balancer_dns_challenge_domain upcloud_load_balancer_dns_challenge_domain}
*/
export class DataUpcloudLoadBalancerDnsChallengeDomain extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "upcloud_load_balancer_dns_challenge_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataUpcloudLoadBalancerDnsChallengeDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataUpcloudLoadBalancerDnsChallengeDomain to import
  * @param importFromId The id of the existing DataUpcloudLoadBalancerDnsChallengeDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.4/docs/data-sources/load_balancer_dns_challenge_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataUpcloudLoadBalancerDnsChallengeDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "upcloud_load_balancer_dns_challenge_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.4/docs/data-sources/load_balancer_dns_challenge_domain upcloud_load_balancer_dns_challenge_domain} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataUpcloudLoadBalancerDnsChallengeDomainConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataUpcloudLoadBalancerDnsChallengeDomainConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'upcloud_load_balancer_dns_challenge_domain',
      terraformGeneratorMetadata: {
        providerName: 'upcloud',
        providerVersion: '5.23.4',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
