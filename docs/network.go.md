# `network` Submodule <a name="`network` Submodule" id="@cdktf/provider-upcloud.network"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Network <a name="Network" id="@cdktf/provider-upcloud.network.Network"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/network upcloud_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.network.Network.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/network"

network.NewNetwork(scope Construct, id *string, config NetworkConfig) Network
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.network.Network.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.network.Network.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.network.Network.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.network.NetworkConfig">NetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.network.Network.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.network.Network.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.network.Network.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.network.NetworkConfig">NetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.network.Network.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.network.Network.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.network.Network.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.network.Network.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.network.Network.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.network.Network.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.network.Network.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.network.Network.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.network.Network.putIpNetwork">PutIpNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.resetIpNetwork">ResetIpNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.resetRouter">ResetRouter</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.network.Network.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.network.Network.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.network.Network.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.network.Network.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.network.Network.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.network.Network.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.network.Network.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.network.Network.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.network.Network.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.network.Network.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-upcloud.network.Network.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.network.Network.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.network.Network.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.Network.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.network.Network.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.Network.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.network.Network.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.Network.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.network.Network.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.Network.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.network.Network.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.Network.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.network.Network.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.Network.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.network.Network.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.Network.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.network.Network.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.Network.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.network.Network.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.Network.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-upcloud.network.Network.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-upcloud.network.Network.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.network.Network.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.network.Network.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.network.Network.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.Network.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-upcloud.network.Network.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.network.Network.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-upcloud.network.Network.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.network.Network.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.network.Network.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-upcloud.network.Network.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.network.Network.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIpNetwork` <a name="PutIpNetwork" id="@cdktf/provider-upcloud.network.Network.putIpNetwork"></a>

```go
func PutIpNetwork(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.network.Network.putIpNetwork.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetIpNetwork` <a name="ResetIpNetwork" id="@cdktf/provider-upcloud.network.Network.resetIpNetwork"></a>

```go
func ResetIpNetwork()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-upcloud.network.Network.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetRouter` <a name="ResetRouter" id="@cdktf/provider-upcloud.network.Network.resetRouter"></a>

```go
func ResetRouter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.network.Network.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.network.Network.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Network resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.network.Network.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/network"

network.Network_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.network.Network.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.network.Network.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/network"

network.Network_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.network.Network.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.network.Network.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/network"

network.Network_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.network.Network.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.network.Network.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/network"

network.Network_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Network resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.network.Network.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.network.Network.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Network to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.network.Network.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Network that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.network.Network.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Network to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.network.Network.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.network.Network.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.property.effectiveRoutes">EffectiveRoutes</a></code> | <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesList">NetworkEffectiveRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.property.ipNetwork">IpNetwork</a></code> | <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkList">NetworkIpNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.property.ipNetworkInput">IpNetworkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.property.routerInput">RouterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.property.router">Router</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.Network.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.network.Network.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.network.Network.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.network.Network.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.network.Network.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.network.Network.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.network.Network.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.network.Network.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.network.Network.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.network.Network.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.network.Network.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.network.Network.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.network.Network.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.network.Network.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.network.Network.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EffectiveRoutes`<sup>Required</sup> <a name="EffectiveRoutes" id="@cdktf/provider-upcloud.network.Network.property.effectiveRoutes"></a>

```go
func EffectiveRoutes() NetworkEffectiveRoutesList
```

- *Type:* <a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesList">NetworkEffectiveRoutesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.network.Network.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpNetwork`<sup>Required</sup> <a name="IpNetwork" id="@cdktf/provider-upcloud.network.Network.property.ipNetwork"></a>

```go
func IpNetwork() NetworkIpNetworkList
```

- *Type:* <a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkList">NetworkIpNetworkList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-upcloud.network.Network.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `IpNetworkInput`<sup>Optional</sup> <a name="IpNetworkInput" id="@cdktf/provider-upcloud.network.Network.property.ipNetworkInput"></a>

```go
func IpNetworkInput() interface{}
```

- *Type:* interface{}

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-upcloud.network.Network.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.network.Network.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RouterInput`<sup>Optional</sup> <a name="RouterInput" id="@cdktf/provider-upcloud.network.Network.property.routerInput"></a>

```go
func RouterInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-upcloud.network.Network.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-upcloud.network.Network.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.network.Network.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Router`<sup>Required</sup> <a name="Router" id="@cdktf/provider-upcloud.network.Network.property.router"></a>

```go
func Router() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-upcloud.network.Network.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.network.Network.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.network.Network.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConfig <a name="NetworkConfig" id="@cdktf/provider-upcloud.network.NetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.network.NetworkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/network"

&network.NetworkConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Zone: *string,
	IpNetwork: interface{},
	Labels: *map[string]*string,
	Router: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkConfig.property.name">Name</a></code> | <code>*string</code> | Name of the network. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkConfig.property.zone">Zone</a></code> | <code>*string</code> | The zone the network is in, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkConfig.property.ipNetwork">IpNetwork</a></code> | <code>interface{}</code> | ip_network block. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | User defined key-value pairs to classify the network. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkConfig.property.router">Router</a></code> | <code>*string</code> | UUID of a router to attach to this network. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.network.NetworkConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.network.NetworkConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.network.NetworkConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.network.NetworkConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.network.NetworkConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.network.NetworkConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.network.NetworkConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.network.NetworkConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/network#name Network#name}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-upcloud.network.NetworkConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

The zone the network is in, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/network#zone Network#zone}

---

##### `IpNetwork`<sup>Optional</sup> <a name="IpNetwork" id="@cdktf/provider-upcloud.network.NetworkConfig.property.ipNetwork"></a>

```go
IpNetwork interface{}
```

- *Type:* interface{}

ip_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/network#ip_network Network#ip_network}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-upcloud.network.NetworkConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

User defined key-value pairs to classify the network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/network#labels Network#labels}

---

##### `Router`<sup>Optional</sup> <a name="Router" id="@cdktf/provider-upcloud.network.NetworkConfig.property.router"></a>

```go
Router *string
```

- *Type:* *string

UUID of a router to attach to this network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/network#router Network#router}

---

### NetworkEffectiveRoutes <a name="NetworkEffectiveRoutes" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/network"

&network.NetworkEffectiveRoutes {

}
```


### NetworkIpNetwork <a name="NetworkIpNetwork" id="@cdktf/provider-upcloud.network.NetworkIpNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.network.NetworkIpNetwork.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/network"

&network.NetworkIpNetwork {
	Address: *string,
	Dhcp: interface{},
	Family: *string,
	DhcpDefaultRoute: interface{},
	DhcpDns: *[]*string,
	DhcpRoutes: *[]*string,
	DhcpRoutesConfiguration: github.com/cdktf/cdktf-provider-upcloud-go/upcloud.network.NetworkIpNetworkDhcpRoutesConfiguration,
	Gateway: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetwork.property.address">Address</a></code> | <code>*string</code> | The CIDR range of the subnet. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetwork.property.dhcp">Dhcp</a></code> | <code>interface{}</code> | Is DHCP enabled? |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetwork.property.family">Family</a></code> | <code>*string</code> | IP address family. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetwork.property.dhcpDefaultRoute">DhcpDefaultRoute</a></code> | <code>interface{}</code> | Is the gateway the DHCP default route? |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetwork.property.dhcpDns">DhcpDns</a></code> | <code>*[]*string</code> | The DNS servers given by DHCP. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetwork.property.dhcpRoutes">DhcpRoutes</a></code> | <code>*[]*string</code> | The additional DHCP classless static routes given by DHCP. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetwork.property.dhcpRoutesConfiguration">DhcpRoutesConfiguration</a></code> | <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfiguration">NetworkIpNetworkDhcpRoutesConfiguration</a></code> | DHCP routes auto-population configuration. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetwork.property.gateway">Gateway</a></code> | <code>*string</code> | Gateway address given by DHCP. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-upcloud.network.NetworkIpNetwork.property.address"></a>

```go
Address *string
```

- *Type:* *string

The CIDR range of the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/network#address Network#address}

---

##### `Dhcp`<sup>Required</sup> <a name="Dhcp" id="@cdktf/provider-upcloud.network.NetworkIpNetwork.property.dhcp"></a>

```go
Dhcp interface{}
```

- *Type:* interface{}

Is DHCP enabled?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/network#dhcp Network#dhcp}

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-upcloud.network.NetworkIpNetwork.property.family"></a>

```go
Family *string
```

- *Type:* *string

IP address family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/network#family Network#family}

---

##### `DhcpDefaultRoute`<sup>Optional</sup> <a name="DhcpDefaultRoute" id="@cdktf/provider-upcloud.network.NetworkIpNetwork.property.dhcpDefaultRoute"></a>

```go
DhcpDefaultRoute interface{}
```

- *Type:* interface{}

Is the gateway the DHCP default route?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/network#dhcp_default_route Network#dhcp_default_route}

---

##### `DhcpDns`<sup>Optional</sup> <a name="DhcpDns" id="@cdktf/provider-upcloud.network.NetworkIpNetwork.property.dhcpDns"></a>

```go
DhcpDns *[]*string
```

- *Type:* *[]*string

The DNS servers given by DHCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/network#dhcp_dns Network#dhcp_dns}

---

##### `DhcpRoutes`<sup>Optional</sup> <a name="DhcpRoutes" id="@cdktf/provider-upcloud.network.NetworkIpNetwork.property.dhcpRoutes"></a>

```go
DhcpRoutes *[]*string
```

- *Type:* *[]*string

The additional DHCP classless static routes given by DHCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/network#dhcp_routes Network#dhcp_routes}

---

##### `DhcpRoutesConfiguration`<sup>Optional</sup> <a name="DhcpRoutesConfiguration" id="@cdktf/provider-upcloud.network.NetworkIpNetwork.property.dhcpRoutesConfiguration"></a>

```go
DhcpRoutesConfiguration NetworkIpNetworkDhcpRoutesConfiguration
```

- *Type:* <a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfiguration">NetworkIpNetworkDhcpRoutesConfiguration</a>

DHCP routes auto-population configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/network#dhcp_routes_configuration Network#dhcp_routes_configuration}

---

##### `Gateway`<sup>Optional</sup> <a name="Gateway" id="@cdktf/provider-upcloud.network.NetworkIpNetwork.property.gateway"></a>

```go
Gateway *string
```

- *Type:* *string

Gateway address given by DHCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/network#gateway Network#gateway}

---

### NetworkIpNetworkDhcpEffectiveRoutes <a name="NetworkIpNetworkDhcpEffectiveRoutes" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/network"

&network.NetworkIpNetworkDhcpEffectiveRoutes {

}
```


### NetworkIpNetworkDhcpRoutesConfiguration <a name="NetworkIpNetworkDhcpRoutesConfiguration" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/network"

&network.NetworkIpNetworkDhcpRoutesConfiguration {
	EffectiveRoutesAutoPopulation: github.com/cdktf/cdktf-provider-upcloud-go/upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulation,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfiguration.property.effectiveRoutesAutoPopulation">EffectiveRoutesAutoPopulation</a></code> | <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulation">NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulation</a></code> | Automatically populate effective routes. |

---

##### `EffectiveRoutesAutoPopulation`<sup>Optional</sup> <a name="EffectiveRoutesAutoPopulation" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfiguration.property.effectiveRoutesAutoPopulation"></a>

```go
EffectiveRoutesAutoPopulation NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulation
```

- *Type:* <a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulation">NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulation</a>

Automatically populate effective routes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/network#effective_routes_auto_population Network#effective_routes_auto_population}

---

### NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulation <a name="NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulation" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/network"

&network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulation {
	Enabled: interface{},
	ExcludeBySource: *[]*string,
	FilterByDestination: *[]*string,
	FilterByRouteType: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulation.property.enabled">Enabled</a></code> | <code>interface{}</code> | Enable or disable route auto-population. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulation.property.excludeBySource">ExcludeBySource</a></code> | <code>*[]*string</code> | Exclude routes coming from specific sources (router-connected-networks, static-route). |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulation.property.filterByDestination">FilterByDestination</a></code> | <code>*[]*string</code> | CIDR destinations to include when auto-populating routes. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulation.property.filterByRouteType">FilterByRouteType</a></code> | <code>*[]*string</code> | Include only routes of given types (service, user). |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulation.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Enable or disable route auto-population.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/network#enabled Network#enabled}

---

##### `ExcludeBySource`<sup>Optional</sup> <a name="ExcludeBySource" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulation.property.excludeBySource"></a>

```go
ExcludeBySource *[]*string
```

- *Type:* *[]*string

Exclude routes coming from specific sources (router-connected-networks, static-route).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/network#exclude_by_source Network#exclude_by_source}

---

##### `FilterByDestination`<sup>Optional</sup> <a name="FilterByDestination" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulation.property.filterByDestination"></a>

```go
FilterByDestination *[]*string
```

- *Type:* *[]*string

CIDR destinations to include when auto-populating routes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/network#filter_by_destination Network#filter_by_destination}

---

##### `FilterByRouteType`<sup>Optional</sup> <a name="FilterByRouteType" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulation.property.filterByRouteType"></a>

```go
FilterByRouteType *[]*string
```

- *Type:* *[]*string

Include only routes of given types (service, user).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/network#filter_by_route_type Network#filter_by_route_type}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkEffectiveRoutesList <a name="NetworkEffectiveRoutesList" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/network"

network.NewNetworkEffectiveRoutesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkEffectiveRoutesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesList.get"></a>

```go
func Get(index *f64) NetworkEffectiveRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### NetworkEffectiveRoutesOutputReference <a name="NetworkEffectiveRoutesOutputReference" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/network"

network.NewNetworkEffectiveRoutesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkEffectiveRoutesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.property.nexthop">Nexthop</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.property.route">Route</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.property.sourceResourceId">SourceResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutes">NetworkEffectiveRoutes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Nexthop`<sup>Required</sup> <a name="Nexthop" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.property.nexthop"></a>

```go
func Nexthop() *string
```

- *Type:* *string

---

##### `Route`<sup>Required</sup> <a name="Route" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.property.route"></a>

```go
func Route() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `SourceResourceId`<sup>Required</sup> <a name="SourceResourceId" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.property.sourceResourceId"></a>

```go
func SourceResourceId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.network.NetworkEffectiveRoutesOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkEffectiveRoutes
```

- *Type:* <a href="#@cdktf/provider-upcloud.network.NetworkEffectiveRoutes">NetworkEffectiveRoutes</a>

---


### NetworkIpNetworkDhcpEffectiveRoutesList <a name="NetworkIpNetworkDhcpEffectiveRoutesList" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/network"

network.NewNetworkIpNetworkDhcpEffectiveRoutesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkIpNetworkDhcpEffectiveRoutesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesList.get"></a>

```go
func Get(index *f64) NetworkIpNetworkDhcpEffectiveRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### NetworkIpNetworkDhcpEffectiveRoutesOutputReference <a name="NetworkIpNetworkDhcpEffectiveRoutesOutputReference" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/network"

network.NewNetworkIpNetworkDhcpEffectiveRoutesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkIpNetworkDhcpEffectiveRoutesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.property.autoPopulated">AutoPopulated</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.property.nexthop">Nexthop</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.property.route">Route</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutes">NetworkIpNetworkDhcpEffectiveRoutes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoPopulated`<sup>Required</sup> <a name="AutoPopulated" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.property.autoPopulated"></a>

```go
func AutoPopulated() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Nexthop`<sup>Required</sup> <a name="Nexthop" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.property.nexthop"></a>

```go
func Nexthop() *string
```

- *Type:* *string

---

##### `Route`<sup>Required</sup> <a name="Route" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.property.route"></a>

```go
func Route() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkIpNetworkDhcpEffectiveRoutes
```

- *Type:* <a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutes">NetworkIpNetworkDhcpEffectiveRoutes</a>

---


### NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference <a name="NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/network"

network.NewNetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.resetExcludeBySource">ResetExcludeBySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.resetFilterByDestination">ResetFilterByDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.resetFilterByRouteType">ResetFilterByRouteType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetExcludeBySource` <a name="ResetExcludeBySource" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.resetExcludeBySource"></a>

```go
func ResetExcludeBySource()
```

##### `ResetFilterByDestination` <a name="ResetFilterByDestination" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.resetFilterByDestination"></a>

```go
func ResetFilterByDestination()
```

##### `ResetFilterByRouteType` <a name="ResetFilterByRouteType" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.resetFilterByRouteType"></a>

```go
func ResetFilterByRouteType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.property.excludeBySourceInput">ExcludeBySourceInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.property.filterByDestinationInput">FilterByDestinationInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.property.filterByRouteTypeInput">FilterByRouteTypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.property.excludeBySource">ExcludeBySource</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.property.filterByDestination">FilterByDestination</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.property.filterByRouteType">FilterByRouteType</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludeBySourceInput`<sup>Optional</sup> <a name="ExcludeBySourceInput" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.property.excludeBySourceInput"></a>

```go
func ExcludeBySourceInput() *[]*string
```

- *Type:* *[]*string

---

##### `FilterByDestinationInput`<sup>Optional</sup> <a name="FilterByDestinationInput" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.property.filterByDestinationInput"></a>

```go
func FilterByDestinationInput() *[]*string
```

- *Type:* *[]*string

---

##### `FilterByRouteTypeInput`<sup>Optional</sup> <a name="FilterByRouteTypeInput" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.property.filterByRouteTypeInput"></a>

```go
func FilterByRouteTypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `ExcludeBySource`<sup>Required</sup> <a name="ExcludeBySource" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.property.excludeBySource"></a>

```go
func ExcludeBySource() *[]*string
```

- *Type:* *[]*string

---

##### `FilterByDestination`<sup>Required</sup> <a name="FilterByDestination" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.property.filterByDestination"></a>

```go
func FilterByDestination() *[]*string
```

- *Type:* *[]*string

---

##### `FilterByRouteType`<sup>Required</sup> <a name="FilterByRouteType" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.property.filterByRouteType"></a>

```go
func FilterByRouteType() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkIpNetworkDhcpRoutesConfigurationOutputReference <a name="NetworkIpNetworkDhcpRoutesConfigurationOutputReference" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/network"

network.NewNetworkIpNetworkDhcpRoutesConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkIpNetworkDhcpRoutesConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.putEffectiveRoutesAutoPopulation">PutEffectiveRoutesAutoPopulation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.resetEffectiveRoutesAutoPopulation">ResetEffectiveRoutesAutoPopulation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEffectiveRoutesAutoPopulation` <a name="PutEffectiveRoutesAutoPopulation" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.putEffectiveRoutesAutoPopulation"></a>

```go
func PutEffectiveRoutesAutoPopulation(value NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.putEffectiveRoutesAutoPopulation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulation">NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulation</a>

---

##### `ResetEffectiveRoutesAutoPopulation` <a name="ResetEffectiveRoutesAutoPopulation" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.resetEffectiveRoutesAutoPopulation"></a>

```go
func ResetEffectiveRoutesAutoPopulation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.property.effectiveRoutesAutoPopulation">EffectiveRoutesAutoPopulation</a></code> | <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference">NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.property.effectiveRoutesAutoPopulationInput">EffectiveRoutesAutoPopulationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectiveRoutesAutoPopulation`<sup>Required</sup> <a name="EffectiveRoutesAutoPopulation" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.property.effectiveRoutesAutoPopulation"></a>

```go
func EffectiveRoutesAutoPopulation() NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference">NetworkIpNetworkDhcpRoutesConfigurationEffectiveRoutesAutoPopulationOutputReference</a>

---

##### `EffectiveRoutesAutoPopulationInput`<sup>Optional</sup> <a name="EffectiveRoutesAutoPopulationInput" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.property.effectiveRoutesAutoPopulationInput"></a>

```go
func EffectiveRoutesAutoPopulationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkIpNetworkList <a name="NetworkIpNetworkList" id="@cdktf/provider-upcloud.network.NetworkIpNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.network.NetworkIpNetworkList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/network"

network.NewNetworkIpNetworkList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkIpNetworkList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.network.NetworkIpNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.network.NetworkIpNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.network.NetworkIpNetworkList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.network.NetworkIpNetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.network.NetworkIpNetworkList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.network.NetworkIpNetworkList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.network.NetworkIpNetworkList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.network.NetworkIpNetworkList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.network.NetworkIpNetworkList.get"></a>

```go
func Get(index *f64) NetworkIpNetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.network.NetworkIpNetworkList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.network.NetworkIpNetworkList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.network.NetworkIpNetworkList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.network.NetworkIpNetworkList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkIpNetworkOutputReference <a name="NetworkIpNetworkOutputReference" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/network"

network.NewNetworkIpNetworkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkIpNetworkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.putDhcpRoutesConfiguration">PutDhcpRoutesConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.resetDhcpDefaultRoute">ResetDhcpDefaultRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.resetDhcpDns">ResetDhcpDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.resetDhcpRoutes">ResetDhcpRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.resetDhcpRoutesConfiguration">ResetDhcpRoutesConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.resetGateway">ResetGateway</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDhcpRoutesConfiguration` <a name="PutDhcpRoutesConfiguration" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.putDhcpRoutesConfiguration"></a>

```go
func PutDhcpRoutesConfiguration(value NetworkIpNetworkDhcpRoutesConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.putDhcpRoutesConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfiguration">NetworkIpNetworkDhcpRoutesConfiguration</a>

---

##### `ResetDhcpDefaultRoute` <a name="ResetDhcpDefaultRoute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.resetDhcpDefaultRoute"></a>

```go
func ResetDhcpDefaultRoute()
```

##### `ResetDhcpDns` <a name="ResetDhcpDns" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.resetDhcpDns"></a>

```go
func ResetDhcpDns()
```

##### `ResetDhcpRoutes` <a name="ResetDhcpRoutes" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.resetDhcpRoutes"></a>

```go
func ResetDhcpRoutes()
```

##### `ResetDhcpRoutesConfiguration` <a name="ResetDhcpRoutesConfiguration" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.resetDhcpRoutesConfiguration"></a>

```go
func ResetDhcpRoutesConfiguration()
```

##### `ResetGateway` <a name="ResetGateway" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.resetGateway"></a>

```go
func ResetGateway()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.dhcpEffectiveRoutes">DhcpEffectiveRoutes</a></code> | <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesList">NetworkIpNetworkDhcpEffectiveRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.dhcpRoutesConfiguration">DhcpRoutesConfiguration</a></code> | <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference">NetworkIpNetworkDhcpRoutesConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.dhcpDefaultRouteInput">DhcpDefaultRouteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.dhcpDnsInput">DhcpDnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.dhcpInput">DhcpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.dhcpRoutesConfigurationInput">DhcpRoutesConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.dhcpRoutesInput">DhcpRoutesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.familyInput">FamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.gatewayInput">GatewayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.dhcp">Dhcp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.dhcpDefaultRoute">DhcpDefaultRoute</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.dhcpDns">DhcpDns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.dhcpRoutes">DhcpRoutes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.family">Family</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.gateway">Gateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DhcpEffectiveRoutes`<sup>Required</sup> <a name="DhcpEffectiveRoutes" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.dhcpEffectiveRoutes"></a>

```go
func DhcpEffectiveRoutes() NetworkIpNetworkDhcpEffectiveRoutesList
```

- *Type:* <a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpEffectiveRoutesList">NetworkIpNetworkDhcpEffectiveRoutesList</a>

---

##### `DhcpRoutesConfiguration`<sup>Required</sup> <a name="DhcpRoutesConfiguration" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.dhcpRoutesConfiguration"></a>

```go
func DhcpRoutesConfiguration() NetworkIpNetworkDhcpRoutesConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.network.NetworkIpNetworkDhcpRoutesConfigurationOutputReference">NetworkIpNetworkDhcpRoutesConfigurationOutputReference</a>

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `DhcpDefaultRouteInput`<sup>Optional</sup> <a name="DhcpDefaultRouteInput" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.dhcpDefaultRouteInput"></a>

```go
func DhcpDefaultRouteInput() interface{}
```

- *Type:* interface{}

---

##### `DhcpDnsInput`<sup>Optional</sup> <a name="DhcpDnsInput" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.dhcpDnsInput"></a>

```go
func DhcpDnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DhcpInput`<sup>Optional</sup> <a name="DhcpInput" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.dhcpInput"></a>

```go
func DhcpInput() interface{}
```

- *Type:* interface{}

---

##### `DhcpRoutesConfigurationInput`<sup>Optional</sup> <a name="DhcpRoutesConfigurationInput" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.dhcpRoutesConfigurationInput"></a>

```go
func DhcpRoutesConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `DhcpRoutesInput`<sup>Optional</sup> <a name="DhcpRoutesInput" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.dhcpRoutesInput"></a>

```go
func DhcpRoutesInput() *[]*string
```

- *Type:* *[]*string

---

##### `FamilyInput`<sup>Optional</sup> <a name="FamilyInput" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.familyInput"></a>

```go
func FamilyInput() *string
```

- *Type:* *string

---

##### `GatewayInput`<sup>Optional</sup> <a name="GatewayInput" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.gatewayInput"></a>

```go
func GatewayInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Dhcp`<sup>Required</sup> <a name="Dhcp" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.dhcp"></a>

```go
func Dhcp() interface{}
```

- *Type:* interface{}

---

##### `DhcpDefaultRoute`<sup>Required</sup> <a name="DhcpDefaultRoute" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.dhcpDefaultRoute"></a>

```go
func DhcpDefaultRoute() interface{}
```

- *Type:* interface{}

---

##### `DhcpDns`<sup>Required</sup> <a name="DhcpDns" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.dhcpDns"></a>

```go
func DhcpDns() *[]*string
```

- *Type:* *[]*string

---

##### `DhcpRoutes`<sup>Required</sup> <a name="DhcpRoutes" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.dhcpRoutes"></a>

```go
func DhcpRoutes() *[]*string
```

- *Type:* *[]*string

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.family"></a>

```go
func Family() *string
```

- *Type:* *string

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.gateway"></a>

```go
func Gateway() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.network.NetworkIpNetworkOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



