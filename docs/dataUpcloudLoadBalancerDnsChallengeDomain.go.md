# `dataUpcloudLoadBalancerDnsChallengeDomain` Submodule <a name="`dataUpcloudLoadBalancerDnsChallengeDomain` Submodule" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataUpcloudLoadBalancerDnsChallengeDomain <a name="DataUpcloudLoadBalancerDnsChallengeDomain" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/data-sources/load_balancer_dns_challenge_domain upcloud_load_balancer_dns_challenge_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v15/dataupcloudloadbalancerdnschallengedomain"

dataupcloudloadbalancerdnschallengedomain.NewDataUpcloudLoadBalancerDnsChallengeDomain(scope Construct, id *string, config DataUpcloudLoadBalancerDnsChallengeDomainConfig) DataUpcloudLoadBalancerDnsChallengeDomain
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig">DataUpcloudLoadBalancerDnsChallengeDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig">DataUpcloudLoadBalancerDnsChallengeDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataUpcloudLoadBalancerDnsChallengeDomain resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v15/dataupcloudloadbalancerdnschallengedomain"

dataupcloudloadbalancerdnschallengedomain.DataUpcloudLoadBalancerDnsChallengeDomain_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v15/dataupcloudloadbalancerdnschallengedomain"

dataupcloudloadbalancerdnschallengedomain.DataUpcloudLoadBalancerDnsChallengeDomain_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v15/dataupcloudloadbalancerdnschallengedomain"

dataupcloudloadbalancerdnschallengedomain.DataUpcloudLoadBalancerDnsChallengeDomain_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v15/dataupcloudloadbalancerdnschallengedomain"

dataupcloudloadbalancerdnschallengedomain.DataUpcloudLoadBalancerDnsChallengeDomain_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataUpcloudLoadBalancerDnsChallengeDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataUpcloudLoadBalancerDnsChallengeDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataUpcloudLoadBalancerDnsChallengeDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/data-sources/load_balancer_dns_challenge_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataUpcloudLoadBalancerDnsChallengeDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataUpcloudLoadBalancerDnsChallengeDomainConfig <a name="DataUpcloudLoadBalancerDnsChallengeDomainConfig" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v15/dataupcloudloadbalancerdnschallengedomain"

&dataupcloudloadbalancerdnschallengedomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---



