# `loadbalancer` Submodule <a name="`loadbalancer` Submodule" id="@cdktf/provider-upcloud.loadbalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Loadbalancer <a name="Loadbalancer" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer"></a>

Represents a {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer upcloud_loadbalancer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/loadbalancer"

loadbalancer.NewLoadbalancer(scope Construct, id *string, config LoadbalancerConfig) Loadbalancer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerConfig">LoadbalancerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerConfig">LoadbalancerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.putNetworks">PutNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.resetConfiguredStatus">ResetConfiguredStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.resetNetworks">ResetNetworks</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutNetworks` <a name="PutNetworks" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.putNetworks"></a>

```go
func PutNetworks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.putNetworks.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConfiguredStatus` <a name="ResetConfiguredStatus" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.resetConfiguredStatus"></a>

```go
func ResetConfiguredStatus()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.resetId"></a>

```go
func ResetId()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetNetworks` <a name="ResetNetworks" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.resetNetworks"></a>

```go
func ResetNetworks()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/loadbalancer"

loadbalancer.Loadbalancer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/loadbalancer"

loadbalancer.Loadbalancer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/loadbalancer"

loadbalancer.Loadbalancer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.backends">Backends</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.dnsName">DnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.frontends">Frontends</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.networks">Networks</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksList">LoadbalancerNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.nodes">Nodes</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesList">LoadbalancerNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.operationalState">OperationalState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.resolvers">Resolvers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.configuredStatusInput">ConfiguredStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.networksInput">NetworksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.planInput">PlanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.configuredStatus">ConfiguredStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.plan">Plan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backends`<sup>Required</sup> <a name="Backends" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.backends"></a>

```go
func Backends() *[]*string
```

- *Type:* *[]*string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.dnsName"></a>

```go
func DnsName() *string
```

- *Type:* *string

---

##### `Frontends`<sup>Required</sup> <a name="Frontends" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.frontends"></a>

```go
func Frontends() *[]*string
```

- *Type:* *[]*string

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.networks"></a>

```go
func Networks() LoadbalancerNetworksList
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksList">LoadbalancerNetworksList</a>

---

##### `Nodes`<sup>Required</sup> <a name="Nodes" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.nodes"></a>

```go
func Nodes() LoadbalancerNodesList
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesList">LoadbalancerNodesList</a>

---

##### `OperationalState`<sup>Required</sup> <a name="OperationalState" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.operationalState"></a>

```go
func OperationalState() *string
```

- *Type:* *string

---

##### `Resolvers`<sup>Required</sup> <a name="Resolvers" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.resolvers"></a>

```go
func Resolvers() *[]*string
```

- *Type:* *[]*string

---

##### `ConfiguredStatusInput`<sup>Optional</sup> <a name="ConfiguredStatusInput" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.configuredStatusInput"></a>

```go
func ConfiguredStatusInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `NetworksInput`<sup>Optional</sup> <a name="NetworksInput" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.networksInput"></a>

```go
func NetworksInput() interface{}
```

- *Type:* interface{}

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.planInput"></a>

```go
func PlanInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `ConfiguredStatus`<sup>Required</sup> <a name="ConfiguredStatus" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.configuredStatus"></a>

```go
func ConfiguredStatus() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.plan"></a>

```go
func Plan() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.loadbalancer.Loadbalancer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadbalancerConfig <a name="LoadbalancerConfig" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/loadbalancer"

&loadbalancer.LoadbalancerConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Plan: *string,
	Zone: *string,
	ConfiguredStatus: *string,
	Id: *string,
	Network: *string,
	Networks: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerConfig.property.name">Name</a></code> | <code>*string</code> | The name of the service must be unique within customer account. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerConfig.property.plan">Plan</a></code> | <code>*string</code> | Plan which the service will have. You can list available loadbalancer plans with `upctl loadbalancer plans`. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerConfig.property.zone">Zone</a></code> | <code>*string</code> | Zone in which the service will be hosted, e.g. `fi-hel1`. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerConfig.property.configuredStatus">ConfiguredStatus</a></code> | <code>*string</code> | The service configured status indicates the service's current intended status. Managed by the customer. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer#id Loadbalancer#id}. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerConfig.property.network">Network</a></code> | <code>*string</code> | Private network UUID where traffic will be routed. Must reside in load balancer zone. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerConfig.property.networks">Networks</a></code> | <code>interface{}</code> | networks block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the service must be unique within customer account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer#name Loadbalancer#name}

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerConfig.property.plan"></a>

```go
Plan *string
```

- *Type:* *string

Plan which the service will have. You can list available loadbalancer plans with `upctl loadbalancer plans`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer#plan Loadbalancer#plan}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

Zone in which the service will be hosted, e.g. `fi-hel1`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer#zone Loadbalancer#zone}

---

##### `ConfiguredStatus`<sup>Optional</sup> <a name="ConfiguredStatus" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerConfig.property.configuredStatus"></a>

```go
ConfiguredStatus *string
```

- *Type:* *string

The service configured status indicates the service's current intended status. Managed by the customer.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer#configured_status Loadbalancer#configured_status}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer#id Loadbalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

Private network UUID where traffic will be routed. Must reside in load balancer zone.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer#network Loadbalancer#network}

---

##### `Networks`<sup>Optional</sup> <a name="Networks" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerConfig.property.networks"></a>

```go
Networks interface{}
```

- *Type:* interface{}

networks block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer#networks Loadbalancer#networks}

---

### LoadbalancerNetworks <a name="LoadbalancerNetworks" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/loadbalancer"

&loadbalancer.LoadbalancerNetworks {
	Family: *string,
	Name: *string,
	Type: *string,
	Network: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworks.property.family">Family</a></code> | <code>*string</code> | Network family. Currently only `IPv4` is supported. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworks.property.name">Name</a></code> | <code>*string</code> | The name of the network must be unique within the service. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworks.property.type">Type</a></code> | <code>*string</code> | The type of the network. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworks.property.network">Network</a></code> | <code>*string</code> | Private network UUID. |

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworks.property.family"></a>

```go
Family *string
```

- *Type:* *string

Network family. Currently only `IPv4` is supported.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer#family Loadbalancer#family}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworks.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the network must be unique within the service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer#name Loadbalancer#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworks.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the network.

Only one public network can be attached and at least one private network must be attached.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer#type Loadbalancer#type}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworks.property.network"></a>

```go
Network *string
```

- *Type:* *string

Private network UUID.

Required for private networks and must reside in loadbalancer zone. For public network the field should be omitted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/upcloud/r/loadbalancer#network Loadbalancer#network}

---

### LoadbalancerNodes <a name="LoadbalancerNodes" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/loadbalancer"

&loadbalancer.LoadbalancerNodes {

}
```


### LoadbalancerNodesNetworks <a name="LoadbalancerNodesNetworks" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/loadbalancer"

&loadbalancer.LoadbalancerNodesNetworks {

}
```


### LoadbalancerNodesNetworksIpAddresses <a name="LoadbalancerNodesNetworksIpAddresses" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddresses.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/loadbalancer"

&loadbalancer.LoadbalancerNodesNetworksIpAddresses {

}
```


## Classes <a name="Classes" id="Classes"></a>

### LoadbalancerNetworksList <a name="LoadbalancerNetworksList" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/loadbalancer"

loadbalancer.NewLoadbalancerNetworksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LoadbalancerNetworksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksList.get"></a>

```go
func Get(index *f64) LoadbalancerNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LoadbalancerNetworksOutputReference <a name="LoadbalancerNetworksOutputReference" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/loadbalancer"

loadbalancer.NewLoadbalancerNetworksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LoadbalancerNetworksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.resetNetwork"></a>

```go
func ResetNetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.property.dnsName">DnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.property.familyInput">FamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.property.family">Family</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.property.dnsName"></a>

```go
func DnsName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `FamilyInput`<sup>Optional</sup> <a name="FamilyInput" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.property.familyInput"></a>

```go
func FamilyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.property.family"></a>

```go
func Family() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNetworksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LoadbalancerNodesList <a name="LoadbalancerNodesList" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/loadbalancer"

loadbalancer.NewLoadbalancerNodesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LoadbalancerNodesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesList.get"></a>

```go
func Get(index *f64) LoadbalancerNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### LoadbalancerNodesNetworksIpAddressesList <a name="LoadbalancerNodesNetworksIpAddressesList" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/loadbalancer"

loadbalancer.NewLoadbalancerNodesNetworksIpAddressesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LoadbalancerNodesNetworksIpAddressesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesList.get"></a>

```go
func Get(index *f64) LoadbalancerNodesNetworksIpAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### LoadbalancerNodesNetworksIpAddressesOutputReference <a name="LoadbalancerNodesNetworksIpAddressesOutputReference" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/loadbalancer"

loadbalancer.NewLoadbalancerNodesNetworksIpAddressesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LoadbalancerNodesNetworksIpAddressesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.property.listen">Listen</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddresses">LoadbalancerNodesNetworksIpAddresses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Listen`<sup>Required</sup> <a name="Listen" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.property.listen"></a>

```go
func Listen() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesOutputReference.property.internalValue"></a>

```go
func InternalValue() LoadbalancerNodesNetworksIpAddresses
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddresses">LoadbalancerNodesNetworksIpAddresses</a>

---


### LoadbalancerNodesNetworksList <a name="LoadbalancerNodesNetworksList" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/loadbalancer"

loadbalancer.NewLoadbalancerNodesNetworksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LoadbalancerNodesNetworksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksList.get"></a>

```go
func Get(index *f64) LoadbalancerNodesNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### LoadbalancerNodesNetworksOutputReference <a name="LoadbalancerNodesNetworksOutputReference" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/loadbalancer"

loadbalancer.NewLoadbalancerNodesNetworksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LoadbalancerNodesNetworksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.property.ipAddresses">IpAddresses</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesList">LoadbalancerNodesNetworksIpAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworks">LoadbalancerNodesNetworks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.property.ipAddresses"></a>

```go
func IpAddresses() LoadbalancerNodesNetworksIpAddressesList
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksIpAddressesList">LoadbalancerNodesNetworksIpAddressesList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksOutputReference.property.internalValue"></a>

```go
func InternalValue() LoadbalancerNodesNetworks
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworks">LoadbalancerNodesNetworks</a>

---


### LoadbalancerNodesOutputReference <a name="LoadbalancerNodesOutputReference" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/loadbalancer"

loadbalancer.NewLoadbalancerNodesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LoadbalancerNodesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.property.networks">Networks</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksList">LoadbalancerNodesNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.property.operationalState">OperationalState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodes">LoadbalancerNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.property.networks"></a>

```go
func Networks() LoadbalancerNodesNetworksList
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesNetworksList">LoadbalancerNodesNetworksList</a>

---

##### `OperationalState`<sup>Required</sup> <a name="OperationalState" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.property.operationalState"></a>

```go
func OperationalState() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodesOutputReference.property.internalValue"></a>

```go
func InternalValue() LoadbalancerNodes
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancer.LoadbalancerNodes">LoadbalancerNodes</a>

---


