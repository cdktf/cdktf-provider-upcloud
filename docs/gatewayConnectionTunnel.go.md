# `gatewayConnectionTunnel` Submodule <a name="`gatewayConnectionTunnel` Submodule" id="@cdktf/provider-upcloud.gatewayConnectionTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GatewayConnectionTunnel <a name="GatewayConnectionTunnel" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/gateway_connection_tunnel upcloud_gateway_connection_tunnel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/gatewayconnectiontunnel"

gatewayconnectiontunnel.NewGatewayConnectionTunnel(scope Construct, id *string, config GatewayConnectionTunnelConfig) GatewayConnectionTunnel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig">GatewayConnectionTunnelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig">GatewayConnectionTunnelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecAuthPsk">PutIpsecAuthPsk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecProperties">PutIpsecProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.resetIpsecProperties">ResetIpsecProperties</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIpsecAuthPsk` <a name="PutIpsecAuthPsk" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecAuthPsk"></a>

```go
func PutIpsecAuthPsk(value GatewayConnectionTunnelIpsecAuthPsk)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecAuthPsk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a>

---

##### `PutIpsecProperties` <a name="PutIpsecProperties" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecProperties"></a>

```go
func PutIpsecProperties(value GatewayConnectionTunnelIpsecProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.putIpsecProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.resetId"></a>

```go
func ResetId()
```

##### `ResetIpsecProperties` <a name="ResetIpsecProperties" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.resetIpsecProperties"></a>

```go
func ResetIpsecProperties()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GatewayConnectionTunnel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/gatewayconnectiontunnel"

gatewayconnectiontunnel.GatewayConnectionTunnel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/gatewayconnectiontunnel"

gatewayconnectiontunnel.GatewayConnectionTunnel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/gatewayconnectiontunnel"

gatewayconnectiontunnel.GatewayConnectionTunnel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/gatewayconnectiontunnel"

gatewayconnectiontunnel.GatewayConnectionTunnel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GatewayConnectionTunnel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GatewayConnectionTunnel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GatewayConnectionTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/gateway_connection_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GatewayConnectionTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecAuthPsk">IpsecAuthPsk</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference">GatewayConnectionTunnelIpsecAuthPskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecProperties">IpsecProperties</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference">GatewayConnectionTunnelIpsecPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.operationalState">OperationalState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.connectionIdInput">ConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecAuthPskInput">IpsecAuthPskInput</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecPropertiesInput">IpsecPropertiesInput</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.localAddressNameInput">LocalAddressNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.remoteAddressInput">RemoteAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.connectionId">ConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.localAddressName">LocalAddressName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.remoteAddress">RemoteAddress</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IpsecAuthPsk`<sup>Required</sup> <a name="IpsecAuthPsk" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecAuthPsk"></a>

```go
func IpsecAuthPsk() GatewayConnectionTunnelIpsecAuthPskOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference">GatewayConnectionTunnelIpsecAuthPskOutputReference</a>

---

##### `IpsecProperties`<sup>Required</sup> <a name="IpsecProperties" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecProperties"></a>

```go
func IpsecProperties() GatewayConnectionTunnelIpsecPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference">GatewayConnectionTunnelIpsecPropertiesOutputReference</a>

---

##### `OperationalState`<sup>Required</sup> <a name="OperationalState" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.operationalState"></a>

```go
func OperationalState() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.connectionIdInput"></a>

```go
func ConnectionIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpsecAuthPskInput`<sup>Optional</sup> <a name="IpsecAuthPskInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecAuthPskInput"></a>

```go
func IpsecAuthPskInput() GatewayConnectionTunnelIpsecAuthPsk
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a>

---

##### `IpsecPropertiesInput`<sup>Optional</sup> <a name="IpsecPropertiesInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.ipsecPropertiesInput"></a>

```go
func IpsecPropertiesInput() GatewayConnectionTunnelIpsecProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a>

---

##### `LocalAddressNameInput`<sup>Optional</sup> <a name="LocalAddressNameInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.localAddressNameInput"></a>

```go
func LocalAddressNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RemoteAddressInput`<sup>Optional</sup> <a name="RemoteAddressInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.remoteAddressInput"></a>

```go
func RemoteAddressInput() *string
```

- *Type:* *string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.connectionId"></a>

```go
func ConnectionId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocalAddressName`<sup>Required</sup> <a name="LocalAddressName" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.localAddressName"></a>

```go
func LocalAddressName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RemoteAddress`<sup>Required</sup> <a name="RemoteAddress" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.remoteAddress"></a>

```go
func RemoteAddress() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GatewayConnectionTunnelConfig <a name="GatewayConnectionTunnelConfig" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/gatewayconnectiontunnel"

&gatewayconnectiontunnel.GatewayConnectionTunnelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConnectionId: *string,
	IpsecAuthPsk: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk,
	LocalAddressName: *string,
	Name: *string,
	RemoteAddress: *string,
	Id: *string,
	IpsecProperties: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.connectionId">ConnectionId</a></code> | <code>*string</code> | ID of the upcloud_gateway_connection resource to which the tunnel belongs. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.ipsecAuthPsk">IpsecAuthPsk</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a></code> | ipsec_auth_psk block. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.localAddressName">LocalAddressName</a></code> | <code>*string</code> | Public (UpCloud) endpoint address of this tunnel. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.name">Name</a></code> | <code>*string</code> | The name of the tunnel, should be unique within the connection. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.remoteAddress">RemoteAddress</a></code> | <code>*string</code> | Remote public IP address of the tunnel. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/gateway_connection_tunnel#id GatewayConnectionTunnel#id}. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.ipsecProperties">IpsecProperties</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a></code> | ipsec_properties block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.connectionId"></a>

```go
ConnectionId *string
```

- *Type:* *string

ID of the upcloud_gateway_connection resource to which the tunnel belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/gateway_connection_tunnel#connection_id GatewayConnectionTunnel#connection_id}

---

##### `IpsecAuthPsk`<sup>Required</sup> <a name="IpsecAuthPsk" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.ipsecAuthPsk"></a>

```go
IpsecAuthPsk GatewayConnectionTunnelIpsecAuthPsk
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a>

ipsec_auth_psk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/gateway_connection_tunnel#ipsec_auth_psk GatewayConnectionTunnel#ipsec_auth_psk}

---

##### `LocalAddressName`<sup>Required</sup> <a name="LocalAddressName" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.localAddressName"></a>

```go
LocalAddressName *string
```

- *Type:* *string

Public (UpCloud) endpoint address of this tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/gateway_connection_tunnel#local_address_name GatewayConnectionTunnel#local_address_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the tunnel, should be unique within the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/gateway_connection_tunnel#name GatewayConnectionTunnel#name}

---

##### `RemoteAddress`<sup>Required</sup> <a name="RemoteAddress" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.remoteAddress"></a>

```go
RemoteAddress *string
```

- *Type:* *string

Remote public IP address of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/gateway_connection_tunnel#remote_address GatewayConnectionTunnel#remote_address}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/gateway_connection_tunnel#id GatewayConnectionTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpsecProperties`<sup>Optional</sup> <a name="IpsecProperties" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelConfig.property.ipsecProperties"></a>

```go
IpsecProperties GatewayConnectionTunnelIpsecProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a>

ipsec_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/gateway_connection_tunnel#ipsec_properties GatewayConnectionTunnel#ipsec_properties}

---

### GatewayConnectionTunnelIpsecAuthPsk <a name="GatewayConnectionTunnelIpsecAuthPsk" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/gatewayconnectiontunnel"

&gatewayconnectiontunnel.GatewayConnectionTunnelIpsecAuthPsk {
	Psk: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk.property.psk">Psk</a></code> | <code>*string</code> | The pre-shared key. |

---

##### `Psk`<sup>Required</sup> <a name="Psk" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk.property.psk"></a>

```go
Psk *string
```

- *Type:* *string

The pre-shared key.

This value is only used during resource creation and is not returned in the state. It is not possible to update this value. If you need to update it, delete the connection and create a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/gateway_connection_tunnel#psk GatewayConnectionTunnel#psk}

---

### GatewayConnectionTunnelIpsecProperties <a name="GatewayConnectionTunnelIpsecProperties" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/gatewayconnectiontunnel"

&gatewayconnectiontunnel.GatewayConnectionTunnelIpsecProperties {
	ChildRekeyTime: *f64,
	DpdDelay: *f64,
	DpdTimeout: *f64,
	IkeLifetime: *f64,
	Phase1Algorithms: *[]*string,
	Phase1DhGroupNumbers: *[]*f64,
	Phase1IntegrityAlgorithms: *[]*string,
	Phase2Algorithms: *[]*string,
	Phase2DhGroupNumbers: *[]*f64,
	Phase2IntegrityAlgorithms: *[]*string,
	RekeyTime: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.childRekeyTime">ChildRekeyTime</a></code> | <code>*f64</code> | IKE child SA rekey time in seconds. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.dpdDelay">DpdDelay</a></code> | <code>*f64</code> | Delay before sending Dead Peer Detection packets if no traffic is detected, in seconds. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.dpdTimeout">DpdTimeout</a></code> | <code>*f64</code> | Timeout period for DPD reply before considering the peer to be dead, in seconds. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.ikeLifetime">IkeLifetime</a></code> | <code>*f64</code> | Maximum IKE SA lifetime in seconds. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase1Algorithms">Phase1Algorithms</a></code> | <code>*[]*string</code> | List of Phase 1: Proposal algorithms. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase1DhGroupNumbers">Phase1DhGroupNumbers</a></code> | <code>*[]*f64</code> | List of Phase 1 Diffie-Hellman group numbers. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase1IntegrityAlgorithms">Phase1IntegrityAlgorithms</a></code> | <code>*[]*string</code> | List of Phase 1 integrity algorithms. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase2Algorithms">Phase2Algorithms</a></code> | <code>*[]*string</code> | List of Phase 2: Security Association algorithms. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase2DhGroupNumbers">Phase2DhGroupNumbers</a></code> | <code>*[]*f64</code> | List of Phase 2 Diffie-Hellman group numbers. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase2IntegrityAlgorithms">Phase2IntegrityAlgorithms</a></code> | <code>*[]*string</code> | List of Phase 2 integrity algorithms. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.rekeyTime">RekeyTime</a></code> | <code>*f64</code> | IKE SA rekey time in seconds. |

---

##### `ChildRekeyTime`<sup>Optional</sup> <a name="ChildRekeyTime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.childRekeyTime"></a>

```go
ChildRekeyTime *f64
```

- *Type:* *f64

IKE child SA rekey time in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/gateway_connection_tunnel#child_rekey_time GatewayConnectionTunnel#child_rekey_time}

---

##### `DpdDelay`<sup>Optional</sup> <a name="DpdDelay" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.dpdDelay"></a>

```go
DpdDelay *f64
```

- *Type:* *f64

Delay before sending Dead Peer Detection packets if no traffic is detected, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/gateway_connection_tunnel#dpd_delay GatewayConnectionTunnel#dpd_delay}

---

##### `DpdTimeout`<sup>Optional</sup> <a name="DpdTimeout" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.dpdTimeout"></a>

```go
DpdTimeout *f64
```

- *Type:* *f64

Timeout period for DPD reply before considering the peer to be dead, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/gateway_connection_tunnel#dpd_timeout GatewayConnectionTunnel#dpd_timeout}

---

##### `IkeLifetime`<sup>Optional</sup> <a name="IkeLifetime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.ikeLifetime"></a>

```go
IkeLifetime *f64
```

- *Type:* *f64

Maximum IKE SA lifetime in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/gateway_connection_tunnel#ike_lifetime GatewayConnectionTunnel#ike_lifetime}

---

##### `Phase1Algorithms`<sup>Optional</sup> <a name="Phase1Algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase1Algorithms"></a>

```go
Phase1Algorithms *[]*string
```

- *Type:* *[]*string

List of Phase 1: Proposal algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/gateway_connection_tunnel#phase1_algorithms GatewayConnectionTunnel#phase1_algorithms}

---

##### `Phase1DhGroupNumbers`<sup>Optional</sup> <a name="Phase1DhGroupNumbers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase1DhGroupNumbers"></a>

```go
Phase1DhGroupNumbers *[]*f64
```

- *Type:* *[]*f64

List of Phase 1 Diffie-Hellman group numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/gateway_connection_tunnel#phase1_dh_group_numbers GatewayConnectionTunnel#phase1_dh_group_numbers}

---

##### `Phase1IntegrityAlgorithms`<sup>Optional</sup> <a name="Phase1IntegrityAlgorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase1IntegrityAlgorithms"></a>

```go
Phase1IntegrityAlgorithms *[]*string
```

- *Type:* *[]*string

List of Phase 1 integrity algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/gateway_connection_tunnel#phase1_integrity_algorithms GatewayConnectionTunnel#phase1_integrity_algorithms}

---

##### `Phase2Algorithms`<sup>Optional</sup> <a name="Phase2Algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase2Algorithms"></a>

```go
Phase2Algorithms *[]*string
```

- *Type:* *[]*string

List of Phase 2: Security Association algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/gateway_connection_tunnel#phase2_algorithms GatewayConnectionTunnel#phase2_algorithms}

---

##### `Phase2DhGroupNumbers`<sup>Optional</sup> <a name="Phase2DhGroupNumbers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase2DhGroupNumbers"></a>

```go
Phase2DhGroupNumbers *[]*f64
```

- *Type:* *[]*f64

List of Phase 2 Diffie-Hellman group numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/gateway_connection_tunnel#phase2_dh_group_numbers GatewayConnectionTunnel#phase2_dh_group_numbers}

---

##### `Phase2IntegrityAlgorithms`<sup>Optional</sup> <a name="Phase2IntegrityAlgorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.phase2IntegrityAlgorithms"></a>

```go
Phase2IntegrityAlgorithms *[]*string
```

- *Type:* *[]*string

List of Phase 2 integrity algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/gateway_connection_tunnel#phase2_integrity_algorithms GatewayConnectionTunnel#phase2_integrity_algorithms}

---

##### `RekeyTime`<sup>Optional</sup> <a name="RekeyTime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties.property.rekeyTime"></a>

```go
RekeyTime *f64
```

- *Type:* *f64

IKE SA rekey time in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.0/docs/resources/gateway_connection_tunnel#rekey_time GatewayConnectionTunnel#rekey_time}

---

## Classes <a name="Classes" id="Classes"></a>

### GatewayConnectionTunnelIpsecAuthPskOutputReference <a name="GatewayConnectionTunnelIpsecAuthPskOutputReference" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/gatewayconnectiontunnel"

gatewayconnectiontunnel.NewGatewayConnectionTunnelIpsecAuthPskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GatewayConnectionTunnelIpsecAuthPskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.pskInput">PskInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.psk">Psk</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PskInput`<sup>Optional</sup> <a name="PskInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.pskInput"></a>

```go
func PskInput() *string
```

- *Type:* *string

---

##### `Psk`<sup>Required</sup> <a name="Psk" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.psk"></a>

```go
func Psk() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPskOutputReference.property.internalValue"></a>

```go
func InternalValue() GatewayConnectionTunnelIpsecAuthPsk
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecAuthPsk">GatewayConnectionTunnelIpsecAuthPsk</a>

---


### GatewayConnectionTunnelIpsecPropertiesOutputReference <a name="GatewayConnectionTunnelIpsecPropertiesOutputReference" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/gatewayconnectiontunnel"

gatewayconnectiontunnel.NewGatewayConnectionTunnelIpsecPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GatewayConnectionTunnelIpsecPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetChildRekeyTime">ResetChildRekeyTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetDpdDelay">ResetDpdDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetDpdTimeout">ResetDpdTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetIkeLifetime">ResetIkeLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase1Algorithms">ResetPhase1Algorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase1DhGroupNumbers">ResetPhase1DhGroupNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase1IntegrityAlgorithms">ResetPhase1IntegrityAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase2Algorithms">ResetPhase2Algorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase2DhGroupNumbers">ResetPhase2DhGroupNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase2IntegrityAlgorithms">ResetPhase2IntegrityAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetRekeyTime">ResetRekeyTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChildRekeyTime` <a name="ResetChildRekeyTime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetChildRekeyTime"></a>

```go
func ResetChildRekeyTime()
```

##### `ResetDpdDelay` <a name="ResetDpdDelay" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetDpdDelay"></a>

```go
func ResetDpdDelay()
```

##### `ResetDpdTimeout` <a name="ResetDpdTimeout" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetDpdTimeout"></a>

```go
func ResetDpdTimeout()
```

##### `ResetIkeLifetime` <a name="ResetIkeLifetime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetIkeLifetime"></a>

```go
func ResetIkeLifetime()
```

##### `ResetPhase1Algorithms` <a name="ResetPhase1Algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase1Algorithms"></a>

```go
func ResetPhase1Algorithms()
```

##### `ResetPhase1DhGroupNumbers` <a name="ResetPhase1DhGroupNumbers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase1DhGroupNumbers"></a>

```go
func ResetPhase1DhGroupNumbers()
```

##### `ResetPhase1IntegrityAlgorithms` <a name="ResetPhase1IntegrityAlgorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase1IntegrityAlgorithms"></a>

```go
func ResetPhase1IntegrityAlgorithms()
```

##### `ResetPhase2Algorithms` <a name="ResetPhase2Algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase2Algorithms"></a>

```go
func ResetPhase2Algorithms()
```

##### `ResetPhase2DhGroupNumbers` <a name="ResetPhase2DhGroupNumbers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase2DhGroupNumbers"></a>

```go
func ResetPhase2DhGroupNumbers()
```

##### `ResetPhase2IntegrityAlgorithms` <a name="ResetPhase2IntegrityAlgorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetPhase2IntegrityAlgorithms"></a>

```go
func ResetPhase2IntegrityAlgorithms()
```

##### `ResetRekeyTime` <a name="ResetRekeyTime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.resetRekeyTime"></a>

```go
func ResetRekeyTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.childRekeyTimeInput">ChildRekeyTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdDelayInput">DpdDelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdTimeoutInput">DpdTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.ikeLifetimeInput">IkeLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1AlgorithmsInput">Phase1AlgorithmsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1DhGroupNumbersInput">Phase1DhGroupNumbersInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1IntegrityAlgorithmsInput">Phase1IntegrityAlgorithmsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2AlgorithmsInput">Phase2AlgorithmsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2DhGroupNumbersInput">Phase2DhGroupNumbersInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2IntegrityAlgorithmsInput">Phase2IntegrityAlgorithmsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.rekeyTimeInput">RekeyTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.childRekeyTime">ChildRekeyTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdDelay">DpdDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdTimeout">DpdTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.ikeLifetime">IkeLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1Algorithms">Phase1Algorithms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1DhGroupNumbers">Phase1DhGroupNumbers</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1IntegrityAlgorithms">Phase1IntegrityAlgorithms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2Algorithms">Phase2Algorithms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2DhGroupNumbers">Phase2DhGroupNumbers</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2IntegrityAlgorithms">Phase2IntegrityAlgorithms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.rekeyTime">RekeyTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChildRekeyTimeInput`<sup>Optional</sup> <a name="ChildRekeyTimeInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.childRekeyTimeInput"></a>

```go
func ChildRekeyTimeInput() *f64
```

- *Type:* *f64

---

##### `DpdDelayInput`<sup>Optional</sup> <a name="DpdDelayInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdDelayInput"></a>

```go
func DpdDelayInput() *f64
```

- *Type:* *f64

---

##### `DpdTimeoutInput`<sup>Optional</sup> <a name="DpdTimeoutInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdTimeoutInput"></a>

```go
func DpdTimeoutInput() *f64
```

- *Type:* *f64

---

##### `IkeLifetimeInput`<sup>Optional</sup> <a name="IkeLifetimeInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.ikeLifetimeInput"></a>

```go
func IkeLifetimeInput() *f64
```

- *Type:* *f64

---

##### `Phase1AlgorithmsInput`<sup>Optional</sup> <a name="Phase1AlgorithmsInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1AlgorithmsInput"></a>

```go
func Phase1AlgorithmsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Phase1DhGroupNumbersInput`<sup>Optional</sup> <a name="Phase1DhGroupNumbersInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1DhGroupNumbersInput"></a>

```go
func Phase1DhGroupNumbersInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `Phase1IntegrityAlgorithmsInput`<sup>Optional</sup> <a name="Phase1IntegrityAlgorithmsInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1IntegrityAlgorithmsInput"></a>

```go
func Phase1IntegrityAlgorithmsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Phase2AlgorithmsInput`<sup>Optional</sup> <a name="Phase2AlgorithmsInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2AlgorithmsInput"></a>

```go
func Phase2AlgorithmsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Phase2DhGroupNumbersInput`<sup>Optional</sup> <a name="Phase2DhGroupNumbersInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2DhGroupNumbersInput"></a>

```go
func Phase2DhGroupNumbersInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `Phase2IntegrityAlgorithmsInput`<sup>Optional</sup> <a name="Phase2IntegrityAlgorithmsInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2IntegrityAlgorithmsInput"></a>

```go
func Phase2IntegrityAlgorithmsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RekeyTimeInput`<sup>Optional</sup> <a name="RekeyTimeInput" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.rekeyTimeInput"></a>

```go
func RekeyTimeInput() *f64
```

- *Type:* *f64

---

##### `ChildRekeyTime`<sup>Required</sup> <a name="ChildRekeyTime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.childRekeyTime"></a>

```go
func ChildRekeyTime() *f64
```

- *Type:* *f64

---

##### `DpdDelay`<sup>Required</sup> <a name="DpdDelay" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdDelay"></a>

```go
func DpdDelay() *f64
```

- *Type:* *f64

---

##### `DpdTimeout`<sup>Required</sup> <a name="DpdTimeout" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.dpdTimeout"></a>

```go
func DpdTimeout() *f64
```

- *Type:* *f64

---

##### `IkeLifetime`<sup>Required</sup> <a name="IkeLifetime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.ikeLifetime"></a>

```go
func IkeLifetime() *f64
```

- *Type:* *f64

---

##### `Phase1Algorithms`<sup>Required</sup> <a name="Phase1Algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1Algorithms"></a>

```go
func Phase1Algorithms() *[]*string
```

- *Type:* *[]*string

---

##### `Phase1DhGroupNumbers`<sup>Required</sup> <a name="Phase1DhGroupNumbers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1DhGroupNumbers"></a>

```go
func Phase1DhGroupNumbers() *[]*f64
```

- *Type:* *[]*f64

---

##### `Phase1IntegrityAlgorithms`<sup>Required</sup> <a name="Phase1IntegrityAlgorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase1IntegrityAlgorithms"></a>

```go
func Phase1IntegrityAlgorithms() *[]*string
```

- *Type:* *[]*string

---

##### `Phase2Algorithms`<sup>Required</sup> <a name="Phase2Algorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2Algorithms"></a>

```go
func Phase2Algorithms() *[]*string
```

- *Type:* *[]*string

---

##### `Phase2DhGroupNumbers`<sup>Required</sup> <a name="Phase2DhGroupNumbers" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2DhGroupNumbers"></a>

```go
func Phase2DhGroupNumbers() *[]*f64
```

- *Type:* *[]*f64

---

##### `Phase2IntegrityAlgorithms`<sup>Required</sup> <a name="Phase2IntegrityAlgorithms" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.phase2IntegrityAlgorithms"></a>

```go
func Phase2IntegrityAlgorithms() *[]*string
```

- *Type:* *[]*string

---

##### `RekeyTime`<sup>Required</sup> <a name="RekeyTime" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.rekeyTime"></a>

```go
func RekeyTime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() GatewayConnectionTunnelIpsecProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnectionTunnel.GatewayConnectionTunnelIpsecProperties">GatewayConnectionTunnelIpsecProperties</a>

---



