# `server` Submodule <a name="`server` Submodule" id="@cdktf/provider-upcloud.server"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Server <a name="Server" id="@cdktf/provider-upcloud.server.Server"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server upcloud_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.Server.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/server"

server.NewServer(scope Construct, id *string, config ServerConfig) Server
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerConfig">ServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerConfig">ServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.Server.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.server.Server.putLogin">PutLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.putNetworkInterface">PutNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.putSimpleBackup">PutSimpleBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.putStorageDevices">PutStorageDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.putTemplate">PutTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetBootOrder">ResetBootOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetCpu">ResetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetFirewall">ResetFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetLogin">ResetLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetMem">ResetMem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetNicModel">ResetNicModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetPlan">ResetPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetServerGroup">ResetServerGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetSimpleBackup">ResetSimpleBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetStorageDevices">ResetStorageDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetTemplate">ResetTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetTimezone">ResetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetTitle">ResetTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetUserData">ResetUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetVideoModel">ResetVideoModel</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.server.Server.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.server.Server.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.server.Server.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.server.Server.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.server.Server.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.server.Server.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.server.Server.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.server.Server.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.server.Server.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.server.Server.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-upcloud.server.Server.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.server.Server.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.server.Server.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.Server.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.server.Server.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.Server.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.server.Server.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.Server.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.server.Server.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.Server.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.server.Server.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.Server.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.server.Server.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.Server.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.server.Server.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.Server.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.server.Server.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.Server.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.server.Server.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.Server.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-upcloud.server.Server.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-upcloud.server.Server.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.server.Server.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.server.Server.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.server.Server.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.Server.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-upcloud.server.Server.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.server.Server.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-upcloud.server.Server.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.server.Server.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.server.Server.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-upcloud.server.Server.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.server.Server.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLogin` <a name="PutLogin" id="@cdktf/provider-upcloud.server.Server.putLogin"></a>

```go
func PutLogin(value ServerLogin)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.server.Server.putLogin.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerLogin">ServerLogin</a>

---

##### `PutNetworkInterface` <a name="PutNetworkInterface" id="@cdktf/provider-upcloud.server.Server.putNetworkInterface"></a>

```go
func PutNetworkInterface(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.server.Server.putNetworkInterface.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSimpleBackup` <a name="PutSimpleBackup" id="@cdktf/provider-upcloud.server.Server.putSimpleBackup"></a>

```go
func PutSimpleBackup(value ServerSimpleBackup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.server.Server.putSimpleBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup">ServerSimpleBackup</a>

---

##### `PutStorageDevices` <a name="PutStorageDevices" id="@cdktf/provider-upcloud.server.Server.putStorageDevices"></a>

```go
func PutStorageDevices(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.server.Server.putStorageDevices.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTemplate` <a name="PutTemplate" id="@cdktf/provider-upcloud.server.Server.putTemplate"></a>

```go
func PutTemplate(value ServerTemplate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.server.Server.putTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerTemplate">ServerTemplate</a>

---

##### `ResetBootOrder` <a name="ResetBootOrder" id="@cdktf/provider-upcloud.server.Server.resetBootOrder"></a>

```go
func ResetBootOrder()
```

##### `ResetCpu` <a name="ResetCpu" id="@cdktf/provider-upcloud.server.Server.resetCpu"></a>

```go
func ResetCpu()
```

##### `ResetFirewall` <a name="ResetFirewall" id="@cdktf/provider-upcloud.server.Server.resetFirewall"></a>

```go
func ResetFirewall()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-upcloud.server.Server.resetHost"></a>

```go
func ResetHost()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.server.Server.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-upcloud.server.Server.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLogin` <a name="ResetLogin" id="@cdktf/provider-upcloud.server.Server.resetLogin"></a>

```go
func ResetLogin()
```

##### `ResetMem` <a name="ResetMem" id="@cdktf/provider-upcloud.server.Server.resetMem"></a>

```go
func ResetMem()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-upcloud.server.Server.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetNicModel` <a name="ResetNicModel" id="@cdktf/provider-upcloud.server.Server.resetNicModel"></a>

```go
func ResetNicModel()
```

##### `ResetPlan` <a name="ResetPlan" id="@cdktf/provider-upcloud.server.Server.resetPlan"></a>

```go
func ResetPlan()
```

##### `ResetServerGroup` <a name="ResetServerGroup" id="@cdktf/provider-upcloud.server.Server.resetServerGroup"></a>

```go
func ResetServerGroup()
```

##### `ResetSimpleBackup` <a name="ResetSimpleBackup" id="@cdktf/provider-upcloud.server.Server.resetSimpleBackup"></a>

```go
func ResetSimpleBackup()
```

##### `ResetStorageDevices` <a name="ResetStorageDevices" id="@cdktf/provider-upcloud.server.Server.resetStorageDevices"></a>

```go
func ResetStorageDevices()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-upcloud.server.Server.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTemplate` <a name="ResetTemplate" id="@cdktf/provider-upcloud.server.Server.resetTemplate"></a>

```go
func ResetTemplate()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktf/provider-upcloud.server.Server.resetTimezone"></a>

```go
func ResetTimezone()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-upcloud.server.Server.resetTitle"></a>

```go
func ResetTitle()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktf/provider-upcloud.server.Server.resetUserData"></a>

```go
func ResetUserData()
```

##### `ResetVideoModel` <a name="ResetVideoModel" id="@cdktf/provider-upcloud.server.Server.resetVideoModel"></a>

```go
func ResetVideoModel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.Server.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Server resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.server.Server.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/server"

server.Server_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.server.Server.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.server.Server.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/server"

server.Server_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.server.Server.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.server.Server.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/server"

server.Server_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.server.Server.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.server.Server.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/server"

server.Server_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Server resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.server.Server.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.server.Server.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Server to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.server.Server.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Server that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.server.Server.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Server to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.login">Login</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference">ServerLoginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList">ServerNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.simpleBackup">SimpleBackup</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference">ServerSimpleBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.storageDevices">StorageDevices</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList">ServerStorageDevicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.template">Template</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference">ServerTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.bootOrderInput">BootOrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.cpuInput">CpuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.firewallInput">FirewallInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.hostInput">HostInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.loginInput">LoginInput</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerLogin">ServerLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.memInput">MemInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.metadataInput">MetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.networkInterfaceInput">NetworkInterfaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.nicModelInput">NicModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.planInput">PlanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.serverGroupInput">ServerGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.simpleBackupInput">SimpleBackupInput</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup">ServerSimpleBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.storageDevicesInput">StorageDevicesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.templateInput">TemplateInput</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate">ServerTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.timezoneInput">TimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.userDataInput">UserDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.videoModelInput">VideoModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.bootOrder">BootOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.cpu">Cpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.firewall">Firewall</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.host">Host</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.mem">Mem</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.metadata">Metadata</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.nicModel">NicModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.plan">Plan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.serverGroup">ServerGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.userData">UserData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.videoModel">VideoModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.server.Server.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.server.Server.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.server.Server.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.server.Server.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.server.Server.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.server.Server.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.server.Server.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.server.Server.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.server.Server.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.server.Server.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.server.Server.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.server.Server.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.server.Server.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.server.Server.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-upcloud.server.Server.property.login"></a>

```go
func Login() ServerLoginOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference">ServerLoginOutputReference</a>

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-upcloud.server.Server.property.networkInterface"></a>

```go
func NetworkInterface() ServerNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList">ServerNetworkInterfaceList</a>

---

##### `SimpleBackup`<sup>Required</sup> <a name="SimpleBackup" id="@cdktf/provider-upcloud.server.Server.property.simpleBackup"></a>

```go
func SimpleBackup() ServerSimpleBackupOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference">ServerSimpleBackupOutputReference</a>

---

##### `StorageDevices`<sup>Required</sup> <a name="StorageDevices" id="@cdktf/provider-upcloud.server.Server.property.storageDevices"></a>

```go
func StorageDevices() ServerStorageDevicesList
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList">ServerStorageDevicesList</a>

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktf/provider-upcloud.server.Server.property.template"></a>

```go
func Template() ServerTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference">ServerTemplateOutputReference</a>

---

##### `BootOrderInput`<sup>Optional</sup> <a name="BootOrderInput" id="@cdktf/provider-upcloud.server.Server.property.bootOrderInput"></a>

```go
func BootOrderInput() *string
```

- *Type:* *string

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-upcloud.server.Server.property.cpuInput"></a>

```go
func CpuInput() *f64
```

- *Type:* *f64

---

##### `FirewallInput`<sup>Optional</sup> <a name="FirewallInput" id="@cdktf/provider-upcloud.server.Server.property.firewallInput"></a>

```go
func FirewallInput() interface{}
```

- *Type:* interface{}

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-upcloud.server.Server.property.hostInput"></a>

```go
func HostInput() *f64
```

- *Type:* *f64

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-upcloud.server.Server.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.server.Server.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-upcloud.server.Server.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LoginInput`<sup>Optional</sup> <a name="LoginInput" id="@cdktf/provider-upcloud.server.Server.property.loginInput"></a>

```go
func LoginInput() ServerLogin
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerLogin">ServerLogin</a>

---

##### `MemInput`<sup>Optional</sup> <a name="MemInput" id="@cdktf/provider-upcloud.server.Server.property.memInput"></a>

```go
func MemInput() *f64
```

- *Type:* *f64

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-upcloud.server.Server.property.metadataInput"></a>

```go
func MetadataInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkInterfaceInput`<sup>Optional</sup> <a name="NetworkInterfaceInput" id="@cdktf/provider-upcloud.server.Server.property.networkInterfaceInput"></a>

```go
func NetworkInterfaceInput() interface{}
```

- *Type:* interface{}

---

##### `NicModelInput`<sup>Optional</sup> <a name="NicModelInput" id="@cdktf/provider-upcloud.server.Server.property.nicModelInput"></a>

```go
func NicModelInput() *string
```

- *Type:* *string

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktf/provider-upcloud.server.Server.property.planInput"></a>

```go
func PlanInput() *string
```

- *Type:* *string

---

##### `ServerGroupInput`<sup>Optional</sup> <a name="ServerGroupInput" id="@cdktf/provider-upcloud.server.Server.property.serverGroupInput"></a>

```go
func ServerGroupInput() *string
```

- *Type:* *string

---

##### `SimpleBackupInput`<sup>Optional</sup> <a name="SimpleBackupInput" id="@cdktf/provider-upcloud.server.Server.property.simpleBackupInput"></a>

```go
func SimpleBackupInput() ServerSimpleBackup
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup">ServerSimpleBackup</a>

---

##### `StorageDevicesInput`<sup>Optional</sup> <a name="StorageDevicesInput" id="@cdktf/provider-upcloud.server.Server.property.storageDevicesInput"></a>

```go
func StorageDevicesInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-upcloud.server.Server.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TemplateInput`<sup>Optional</sup> <a name="TemplateInput" id="@cdktf/provider-upcloud.server.Server.property.templateInput"></a>

```go
func TemplateInput() ServerTemplate
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerTemplate">ServerTemplate</a>

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-upcloud.server.Server.property.timezoneInput"></a>

```go
func TimezoneInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-upcloud.server.Server.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktf/provider-upcloud.server.Server.property.userDataInput"></a>

```go
func UserDataInput() *string
```

- *Type:* *string

---

##### `VideoModelInput`<sup>Optional</sup> <a name="VideoModelInput" id="@cdktf/provider-upcloud.server.Server.property.videoModelInput"></a>

```go
func VideoModelInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-upcloud.server.Server.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `BootOrder`<sup>Required</sup> <a name="BootOrder" id="@cdktf/provider-upcloud.server.Server.property.bootOrder"></a>

```go
func BootOrder() *string
```

- *Type:* *string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-upcloud.server.Server.property.cpu"></a>

```go
func Cpu() *f64
```

- *Type:* *f64

---

##### `Firewall`<sup>Required</sup> <a name="Firewall" id="@cdktf/provider-upcloud.server.Server.property.firewall"></a>

```go
func Firewall() interface{}
```

- *Type:* interface{}

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-upcloud.server.Server.property.host"></a>

```go
func Host() *f64
```

- *Type:* *f64

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-upcloud.server.Server.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.server.Server.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-upcloud.server.Server.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Mem`<sup>Required</sup> <a name="Mem" id="@cdktf/provider-upcloud.server.Server.property.mem"></a>

```go
func Mem() *f64
```

- *Type:* *f64

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-upcloud.server.Server.property.metadata"></a>

```go
func Metadata() interface{}
```

- *Type:* interface{}

---

##### `NicModel`<sup>Required</sup> <a name="NicModel" id="@cdktf/provider-upcloud.server.Server.property.nicModel"></a>

```go
func NicModel() *string
```

- *Type:* *string

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-upcloud.server.Server.property.plan"></a>

```go
func Plan() *string
```

- *Type:* *string

---

##### `ServerGroup`<sup>Required</sup> <a name="ServerGroup" id="@cdktf/provider-upcloud.server.Server.property.serverGroup"></a>

```go
func ServerGroup() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-upcloud.server.Server.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-upcloud.server.Server.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-upcloud.server.Server.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-upcloud.server.Server.property.userData"></a>

```go
func UserData() *string
```

- *Type:* *string

---

##### `VideoModel`<sup>Required</sup> <a name="VideoModel" id="@cdktf/provider-upcloud.server.Server.property.videoModel"></a>

```go
func VideoModel() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-upcloud.server.Server.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.server.Server.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServerConfig <a name="ServerConfig" id="@cdktf/provider-upcloud.server.ServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.server.ServerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/server"

&server.ServerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Hostname: *string,
	NetworkInterface: interface{},
	Zone: *string,
	BootOrder: *string,
	Cpu: *f64,
	Firewall: interface{},
	Host: *f64,
	Id: *string,
	Labels: *map[string]*string,
	Login: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.server.ServerLogin,
	Mem: *f64,
	Metadata: interface{},
	NicModel: *string,
	Plan: *string,
	ServerGroup: *string,
	SimpleBackup: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.server.ServerSimpleBackup,
	StorageDevices: interface{},
	Tags: *[]*string,
	Template: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.server.ServerTemplate,
	Timezone: *string,
	Title: *string,
	UserData: *string,
	VideoModel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.hostname">Hostname</a></code> | <code>*string</code> | A valid domain name. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.networkInterface">NetworkInterface</a></code> | <code>interface{}</code> | network_interface block. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.zone">Zone</a></code> | <code>*string</code> | The zone in which the server will be hosted, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.bootOrder">BootOrder</a></code> | <code>*string</code> | The boot device order, `cdrom`\|`disk`\|`network` or comma separated combination of those values. Defaults to `disk`. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.cpu">Cpu</a></code> | <code>*f64</code> | The number of CPU for the server. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.firewall">Firewall</a></code> | <code>interface{}</code> | Are firewall rules active for the server. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.host">Host</a></code> | <code>*f64</code> | Use this to start the VM on a specific host. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#id Server#id}. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | User defined key-value pairs to classify the server. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.login">Login</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerLogin">ServerLogin</a></code> | login block. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.mem">Mem</a></code> | <code>*f64</code> | The size of memory for the server (in megabytes). |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.metadata">Metadata</a></code> | <code>interface{}</code> | Is the metadata service active for the server. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.nicModel">NicModel</a></code> | <code>*string</code> | The model of the server's network interfaces. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.plan">Plan</a></code> | <code>*string</code> | The pricing plan used for the server. You can list available server plans with `upctl server plans`. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.serverGroup">ServerGroup</a></code> | <code>*string</code> | The UUID of a server group to attach this server to. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.simpleBackup">SimpleBackup</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup">ServerSimpleBackup</a></code> | simple_backup block. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.storageDevices">StorageDevices</a></code> | <code>interface{}</code> | storage_devices block. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | The server related tags. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.template">Template</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate">ServerTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.timezone">Timezone</a></code> | <code>*string</code> | A timezone identifier, e.g. `Europe/Helsinki`. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.title">Title</a></code> | <code>*string</code> | A short, informational description. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.userData">UserData</a></code> | <code>*string</code> | Defines URL for a server setup script, or the script body itself. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.videoModel">VideoModel</a></code> | <code>*string</code> | The model of the server's video interface. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.server.ServerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.server.ServerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.server.ServerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.server.ServerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.server.ServerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.server.ServerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.server.ServerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-upcloud.server.ServerConfig.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

A valid domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#hostname Server#hostname}

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-upcloud.server.ServerConfig.property.networkInterface"></a>

```go
NetworkInterface interface{}
```

- *Type:* interface{}

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#network_interface Server#network_interface}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-upcloud.server.ServerConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

The zone in which the server will be hosted, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#zone Server#zone}

---

##### `BootOrder`<sup>Optional</sup> <a name="BootOrder" id="@cdktf/provider-upcloud.server.ServerConfig.property.bootOrder"></a>

```go
BootOrder *string
```

- *Type:* *string

The boot device order, `cdrom`|`disk`|`network` or comma separated combination of those values. Defaults to `disk`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#boot_order Server#boot_order}

---

##### `Cpu`<sup>Optional</sup> <a name="Cpu" id="@cdktf/provider-upcloud.server.ServerConfig.property.cpu"></a>

```go
Cpu *f64
```

- *Type:* *f64

The number of CPU for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#cpu Server#cpu}

---

##### `Firewall`<sup>Optional</sup> <a name="Firewall" id="@cdktf/provider-upcloud.server.ServerConfig.property.firewall"></a>

```go
Firewall interface{}
```

- *Type:* interface{}

Are firewall rules active for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#firewall Server#firewall}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-upcloud.server.ServerConfig.property.host"></a>

```go
Host *f64
```

- *Type:* *f64

Use this to start the VM on a specific host.

Refers to value from host -attribute. Only available for private cloud hosts

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#host Server#host}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.server.ServerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#id Server#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-upcloud.server.ServerConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

User defined key-value pairs to classify the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#labels Server#labels}

---

##### `Login`<sup>Optional</sup> <a name="Login" id="@cdktf/provider-upcloud.server.ServerConfig.property.login"></a>

```go
Login ServerLogin
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerLogin">ServerLogin</a>

login block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#login Server#login}

---

##### `Mem`<sup>Optional</sup> <a name="Mem" id="@cdktf/provider-upcloud.server.ServerConfig.property.mem"></a>

```go
Mem *f64
```

- *Type:* *f64

The size of memory for the server (in megabytes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#mem Server#mem}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-upcloud.server.ServerConfig.property.metadata"></a>

```go
Metadata interface{}
```

- *Type:* interface{}

Is the metadata service active for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#metadata Server#metadata}

---

##### `NicModel`<sup>Optional</sup> <a name="NicModel" id="@cdktf/provider-upcloud.server.ServerConfig.property.nicModel"></a>

```go
NicModel *string
```

- *Type:* *string

The model of the server's network interfaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#nic_model Server#nic_model}

---

##### `Plan`<sup>Optional</sup> <a name="Plan" id="@cdktf/provider-upcloud.server.ServerConfig.property.plan"></a>

```go
Plan *string
```

- *Type:* *string

The pricing plan used for the server. You can list available server plans with `upctl server plans`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#plan Server#plan}

---

##### `ServerGroup`<sup>Optional</sup> <a name="ServerGroup" id="@cdktf/provider-upcloud.server.ServerConfig.property.serverGroup"></a>

```go
ServerGroup *string
```

- *Type:* *string

The UUID of a server group to attach this server to.

Note that the server can also be attached to a server group via the `members` property of `upcloud_server_group`. Only one of the these should be defined at a time. This value is only updated if it has been set to non-zero value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#server_group Server#server_group}

---

##### `SimpleBackup`<sup>Optional</sup> <a name="SimpleBackup" id="@cdktf/provider-upcloud.server.ServerConfig.property.simpleBackup"></a>

```go
SimpleBackup ServerSimpleBackup
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup">ServerSimpleBackup</a>

simple_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#simple_backup Server#simple_backup}

---

##### `StorageDevices`<sup>Optional</sup> <a name="StorageDevices" id="@cdktf/provider-upcloud.server.ServerConfig.property.storageDevices"></a>

```go
StorageDevices interface{}
```

- *Type:* interface{}

storage_devices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#storage_devices Server#storage_devices}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-upcloud.server.ServerConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

The server related tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#tags Server#tags}

---

##### `Template`<sup>Optional</sup> <a name="Template" id="@cdktf/provider-upcloud.server.ServerConfig.property.template"></a>

```go
Template ServerTemplate
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerTemplate">ServerTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#template Server#template}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktf/provider-upcloud.server.ServerConfig.property.timezone"></a>

```go
Timezone *string
```

- *Type:* *string

A timezone identifier, e.g. `Europe/Helsinki`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#timezone Server#timezone}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-upcloud.server.ServerConfig.property.title"></a>

```go
Title *string
```

- *Type:* *string

A short, informational description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#title Server#title}

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktf/provider-upcloud.server.ServerConfig.property.userData"></a>

```go
UserData *string
```

- *Type:* *string

Defines URL for a server setup script, or the script body itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#user_data Server#user_data}

---

##### `VideoModel`<sup>Optional</sup> <a name="VideoModel" id="@cdktf/provider-upcloud.server.ServerConfig.property.videoModel"></a>

```go
VideoModel *string
```

- *Type:* *string

The model of the server's video interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#video_model Server#video_model}

---

### ServerLogin <a name="ServerLogin" id="@cdktf/provider-upcloud.server.ServerLogin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.server.ServerLogin.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/server"

&server.ServerLogin {
	CreatePassword: interface{},
	Keys: *[]*string,
	PasswordDelivery: *string,
	User: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLogin.property.createPassword">CreatePassword</a></code> | <code>interface{}</code> | Indicates a password should be create to allow access. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLogin.property.keys">Keys</a></code> | <code>*[]*string</code> | A list of ssh keys to access the server. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLogin.property.passwordDelivery">PasswordDelivery</a></code> | <code>*string</code> | The delivery method for the server's root password (one of `none`, `email` or `sms`). |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLogin.property.user">User</a></code> | <code>*string</code> | Username to be create to access the server. |

---

##### `CreatePassword`<sup>Optional</sup> <a name="CreatePassword" id="@cdktf/provider-upcloud.server.ServerLogin.property.createPassword"></a>

```go
CreatePassword interface{}
```

- *Type:* interface{}

Indicates a password should be create to allow access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#create_password Server#create_password}

---

##### `Keys`<sup>Optional</sup> <a name="Keys" id="@cdktf/provider-upcloud.server.ServerLogin.property.keys"></a>

```go
Keys *[]*string
```

- *Type:* *[]*string

A list of ssh keys to access the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#keys Server#keys}

---

##### `PasswordDelivery`<sup>Optional</sup> <a name="PasswordDelivery" id="@cdktf/provider-upcloud.server.ServerLogin.property.passwordDelivery"></a>

```go
PasswordDelivery *string
```

- *Type:* *string

The delivery method for the server's root password (one of `none`, `email` or `sms`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#password_delivery Server#password_delivery}

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktf/provider-upcloud.server.ServerLogin.property.user"></a>

```go
User *string
```

- *Type:* *string

Username to be create to access the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#user Server#user}

---

### ServerNetworkInterface <a name="ServerNetworkInterface" id="@cdktf/provider-upcloud.server.ServerNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.server.ServerNetworkInterface.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/server"

&server.ServerNetworkInterface {
	Type: *string,
	AdditionalIpAddress: interface{},
	Bootable: interface{},
	IpAddress: *string,
	IpAddressFamily: *string,
	Network: *string,
	SourceIpFiltering: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface.property.type">Type</a></code> | <code>*string</code> | Network interface type. For private network interfaces, a network must be specified with an existing network id. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface.property.additionalIpAddress">AdditionalIpAddress</a></code> | <code>interface{}</code> | additional_ip_address block. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface.property.bootable">Bootable</a></code> | <code>interface{}</code> | `true` if this interface should be used for network booting. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface.property.ipAddress">IpAddress</a></code> | <code>*string</code> | The assigned primary IP address. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface.property.ipAddressFamily">IpAddressFamily</a></code> | <code>*string</code> | The type of the primary IP address of this interface (one of `IPv4` or `IPv6`). |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface.property.network">Network</a></code> | <code>*string</code> | The unique ID of a network to attach this network to. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface.property.sourceIpFiltering">SourceIpFiltering</a></code> | <code>interface{}</code> | `true` if source IP should be filtered. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-upcloud.server.ServerNetworkInterface.property.type"></a>

```go
Type *string
```

- *Type:* *string

Network interface type. For private network interfaces, a network must be specified with an existing network id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#type Server#type}

---

##### `AdditionalIpAddress`<sup>Optional</sup> <a name="AdditionalIpAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterface.property.additionalIpAddress"></a>

```go
AdditionalIpAddress interface{}
```

- *Type:* interface{}

additional_ip_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#additional_ip_address Server#additional_ip_address}

---

##### `Bootable`<sup>Optional</sup> <a name="Bootable" id="@cdktf/provider-upcloud.server.ServerNetworkInterface.property.bootable"></a>

```go
Bootable interface{}
```

- *Type:* interface{}

`true` if this interface should be used for network booting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#bootable Server#bootable}

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterface.property.ipAddress"></a>

```go
IpAddress *string
```

- *Type:* *string

The assigned primary IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#ip_address Server#ip_address}

---

##### `IpAddressFamily`<sup>Optional</sup> <a name="IpAddressFamily" id="@cdktf/provider-upcloud.server.ServerNetworkInterface.property.ipAddressFamily"></a>

```go
IpAddressFamily *string
```

- *Type:* *string

The type of the primary IP address of this interface (one of `IPv4` or `IPv6`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#ip_address_family Server#ip_address_family}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-upcloud.server.ServerNetworkInterface.property.network"></a>

```go
Network *string
```

- *Type:* *string

The unique ID of a network to attach this network to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#network Server#network}

---

##### `SourceIpFiltering`<sup>Optional</sup> <a name="SourceIpFiltering" id="@cdktf/provider-upcloud.server.ServerNetworkInterface.property.sourceIpFiltering"></a>

```go
SourceIpFiltering interface{}
```

- *Type:* interface{}

`true` if source IP should be filtered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#source_ip_filtering Server#source_ip_filtering}

---

### ServerNetworkInterfaceAdditionalIpAddress <a name="ServerNetworkInterfaceAdditionalIpAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/server"

&server.ServerNetworkInterfaceAdditionalIpAddress {
	IpAddress: *string,
	IpAddressFamily: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress.property.ipAddress">IpAddress</a></code> | <code>*string</code> | The assigned additional IP address. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress.property.ipAddressFamily">IpAddressFamily</a></code> | <code>*string</code> | The type of this additional IP address of this interface (one of `IPv4` or `IPv6`). |

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress.property.ipAddress"></a>

```go
IpAddress *string
```

- *Type:* *string

The assigned additional IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#ip_address Server#ip_address}

---

##### `IpAddressFamily`<sup>Optional</sup> <a name="IpAddressFamily" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress.property.ipAddressFamily"></a>

```go
IpAddressFamily *string
```

- *Type:* *string

The type of this additional IP address of this interface (one of `IPv4` or `IPv6`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#ip_address_family Server#ip_address_family}

---

### ServerSimpleBackup <a name="ServerSimpleBackup" id="@cdktf/provider-upcloud.server.ServerSimpleBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.server.ServerSimpleBackup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/server"

&server.ServerSimpleBackup {
	Plan: *string,
	Time: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup.property.plan">Plan</a></code> | <code>*string</code> | Simple backup plan. Accepted values: daily, dailies, weeklies, monthlies. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup.property.time">Time</a></code> | <code>*string</code> | Time of the day at which backup will be taken. Should be provided in a hhmm format (e.g. 2230). |

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-upcloud.server.ServerSimpleBackup.property.plan"></a>

```go
Plan *string
```

- *Type:* *string

Simple backup plan. Accepted values: daily, dailies, weeklies, monthlies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#plan Server#plan}

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-upcloud.server.ServerSimpleBackup.property.time"></a>

```go
Time *string
```

- *Type:* *string

Time of the day at which backup will be taken. Should be provided in a hhmm format (e.g. 2230).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#time Server#time}

---

### ServerStorageDevices <a name="ServerStorageDevices" id="@cdktf/provider-upcloud.server.ServerStorageDevices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.server.ServerStorageDevices.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/server"

&server.ServerStorageDevices {
	Storage: *string,
	Address: *string,
	AddressPosition: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevices.property.storage">Storage</a></code> | <code>*string</code> | A valid storage UUID. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevices.property.address">Address</a></code> | <code>*string</code> | The device address the storage will be attached to (`scsi`\|`virtio`\|`ide`). |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevices.property.addressPosition">AddressPosition</a></code> | <code>*string</code> | The device position in the given bus (defined via field `address`). |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevices.property.type">Type</a></code> | <code>*string</code> | The device type the storage will be attached as. |

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktf/provider-upcloud.server.ServerStorageDevices.property.storage"></a>

```go
Storage *string
```

- *Type:* *string

A valid storage UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#storage Server#storage}

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-upcloud.server.ServerStorageDevices.property.address"></a>

```go
Address *string
```

- *Type:* *string

The device address the storage will be attached to (`scsi`|`virtio`|`ide`).

Leave `address_position` field empty to auto-select next available address from that bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#address Server#address}

---

##### `AddressPosition`<sup>Optional</sup> <a name="AddressPosition" id="@cdktf/provider-upcloud.server.ServerStorageDevices.property.addressPosition"></a>

```go
AddressPosition *string
```

- *Type:* *string

The device position in the given bus (defined via field `address`).

Valid values for address `virtio` are `0-15` (`0`, for example). Valid values for `scsi` or `ide` are `0-1:0-1` (`0:0`, for example). Leave empty to auto-select next available address in the given bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#address_position Server#address_position}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-upcloud.server.ServerStorageDevices.property.type"></a>

```go
Type *string
```

- *Type:* *string

The device type the storage will be attached as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#type Server#type}

---

### ServerTemplate <a name="ServerTemplate" id="@cdktf/provider-upcloud.server.ServerTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.server.ServerTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/server"

&server.ServerTemplate {
	Storage: *string,
	Address: *string,
	AddressPosition: *string,
	BackupRule: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.server.ServerTemplateBackupRule,
	DeleteAutoresizeBackup: interface{},
	Encrypt: interface{},
	FilesystemAutoresize: interface{},
	Size: *f64,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.storage">Storage</a></code> | <code>*string</code> | A valid storage UUID or template name. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.address">Address</a></code> | <code>*string</code> | The device address the storage will be attached to (`scsi`\|`virtio`\|`ide`). |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.addressPosition">AddressPosition</a></code> | <code>*string</code> | The device position in the given bus (defined via field `address`). |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.backupRule">BackupRule</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule">ServerTemplateBackupRule</a></code> | backup_rule block. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.deleteAutoresizeBackup">DeleteAutoresizeBackup</a></code> | <code>interface{}</code> | If set to true, the backup taken before the partition and filesystem resize attempt will be deleted immediately after success. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.encrypt">Encrypt</a></code> | <code>interface{}</code> | Sets if the storage is encrypted at rest. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.filesystemAutoresize">FilesystemAutoresize</a></code> | <code>interface{}</code> | If set to true, provider will attempt to resize partition and filesystem when the size of template storage changes. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.size">Size</a></code> | <code>*f64</code> | The size of the storage in gigabytes. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.title">Title</a></code> | <code>*string</code> | A short, informative description. |

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktf/provider-upcloud.server.ServerTemplate.property.storage"></a>

```go
Storage *string
```

- *Type:* *string

A valid storage UUID or template name.

You can list available public templates with `upctl storage list --public --template` and available private templates with `upctl storage list --template`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#storage Server#storage}

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-upcloud.server.ServerTemplate.property.address"></a>

```go
Address *string
```

- *Type:* *string

The device address the storage will be attached to (`scsi`|`virtio`|`ide`).

Leave `address_position` field empty to auto-select next available address from that bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#address Server#address}

---

##### `AddressPosition`<sup>Optional</sup> <a name="AddressPosition" id="@cdktf/provider-upcloud.server.ServerTemplate.property.addressPosition"></a>

```go
AddressPosition *string
```

- *Type:* *string

The device position in the given bus (defined via field `address`).

For example `0:0`, or `0`. Leave empty to auto-select next available address in the given bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#address_position Server#address_position}

---

##### `BackupRule`<sup>Optional</sup> <a name="BackupRule" id="@cdktf/provider-upcloud.server.ServerTemplate.property.backupRule"></a>

```go
BackupRule ServerTemplateBackupRule
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule">ServerTemplateBackupRule</a>

backup_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#backup_rule Server#backup_rule}

---

##### `DeleteAutoresizeBackup`<sup>Optional</sup> <a name="DeleteAutoresizeBackup" id="@cdktf/provider-upcloud.server.ServerTemplate.property.deleteAutoresizeBackup"></a>

```go
DeleteAutoresizeBackup interface{}
```

- *Type:* interface{}

If set to true, the backup taken before the partition and filesystem resize attempt will be deleted immediately after success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#delete_autoresize_backup Server#delete_autoresize_backup}

---

##### `Encrypt`<sup>Optional</sup> <a name="Encrypt" id="@cdktf/provider-upcloud.server.ServerTemplate.property.encrypt"></a>

```go
Encrypt interface{}
```

- *Type:* interface{}

Sets if the storage is encrypted at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#encrypt Server#encrypt}

---

##### `FilesystemAutoresize`<sup>Optional</sup> <a name="FilesystemAutoresize" id="@cdktf/provider-upcloud.server.ServerTemplate.property.filesystemAutoresize"></a>

```go
FilesystemAutoresize interface{}
```

- *Type:* interface{}

If set to true, provider will attempt to resize partition and filesystem when the size of template storage changes.

Please note that before the resize attempt is made, backup of the storage will be taken. If the resize attempt fails, the backup will be used
to restore the storage and then deleted. If the resize attempt succeeds, backup will be kept (unless delete_autoresize_backup option is set to true).
Taking and keeping backups incure costs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#filesystem_autoresize Server#filesystem_autoresize}

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-upcloud.server.ServerTemplate.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

The size of the storage in gigabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#size Server#size}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-upcloud.server.ServerTemplate.property.title"></a>

```go
Title *string
```

- *Type:* *string

A short, informative description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#title Server#title}

---

### ServerTemplateBackupRule <a name="ServerTemplateBackupRule" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/server"

&server.ServerTemplateBackupRule {
	Interval: *string,
	Retention: *f64,
	Time: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule.property.interval">Interval</a></code> | <code>*string</code> | The weekday when the backup is created. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule.property.retention">Retention</a></code> | <code>*f64</code> | The number of days before a backup is automatically deleted. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule.property.time">Time</a></code> | <code>*string</code> | The time of day when the backup is created. |

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRule.property.interval"></a>

```go
Interval *string
```

- *Type:* *string

The weekday when the backup is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#interval Server#interval}

---

##### `Retention`<sup>Required</sup> <a name="Retention" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRule.property.retention"></a>

```go
Retention *f64
```

- *Type:* *f64

The number of days before a backup is automatically deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#retention Server#retention}

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRule.property.time"></a>

```go
Time *string
```

- *Type:* *string

The time of day when the backup is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/resources/server#time Server#time}

---

## Classes <a name="Classes" id="Classes"></a>

### ServerLoginOutputReference <a name="ServerLoginOutputReference" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/server"

server.NewServerLoginOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServerLoginOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.resetCreatePassword">ResetCreatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.resetKeys">ResetKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.resetPasswordDelivery">ResetPasswordDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.resetUser">ResetUser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreatePassword` <a name="ResetCreatePassword" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.resetCreatePassword"></a>

```go
func ResetCreatePassword()
```

##### `ResetKeys` <a name="ResetKeys" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.resetKeys"></a>

```go
func ResetKeys()
```

##### `ResetPasswordDelivery` <a name="ResetPasswordDelivery" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.resetPasswordDelivery"></a>

```go
func ResetPasswordDelivery()
```

##### `ResetUser` <a name="ResetUser" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.resetUser"></a>

```go
func ResetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.createPasswordInput">CreatePasswordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.keysInput">KeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.passwordDeliveryInput">PasswordDeliveryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.userInput">UserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.createPassword">CreatePassword</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.keys">Keys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.passwordDelivery">PasswordDelivery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.user">User</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerLogin">ServerLogin</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatePasswordInput`<sup>Optional</sup> <a name="CreatePasswordInput" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.createPasswordInput"></a>

```go
func CreatePasswordInput() interface{}
```

- *Type:* interface{}

---

##### `KeysInput`<sup>Optional</sup> <a name="KeysInput" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.keysInput"></a>

```go
func KeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `PasswordDeliveryInput`<sup>Optional</sup> <a name="PasswordDeliveryInput" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.passwordDeliveryInput"></a>

```go
func PasswordDeliveryInput() *string
```

- *Type:* *string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.userInput"></a>

```go
func UserInput() *string
```

- *Type:* *string

---

##### `CreatePassword`<sup>Required</sup> <a name="CreatePassword" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.createPassword"></a>

```go
func CreatePassword() interface{}
```

- *Type:* interface{}

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.keys"></a>

```go
func Keys() *[]*string
```

- *Type:* *[]*string

---

##### `PasswordDelivery`<sup>Required</sup> <a name="PasswordDelivery" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.passwordDelivery"></a>

```go
func PasswordDelivery() *string
```

- *Type:* *string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.user"></a>

```go
func User() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.internalValue"></a>

```go
func InternalValue() ServerLogin
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerLogin">ServerLogin</a>

---


### ServerNetworkInterfaceAdditionalIpAddressList <a name="ServerNetworkInterfaceAdditionalIpAddressList" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/server"

server.NewServerNetworkInterfaceAdditionalIpAddressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServerNetworkInterfaceAdditionalIpAddressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.get"></a>

```go
func Get(index *f64) ServerNetworkInterfaceAdditionalIpAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServerNetworkInterfaceAdditionalIpAddressOutputReference <a name="ServerNetworkInterfaceAdditionalIpAddressOutputReference" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/server"

server.NewServerNetworkInterfaceAdditionalIpAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServerNetworkInterfaceAdditionalIpAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.resetIpAddressFamily">ResetIpAddressFamily</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.resetIpAddress"></a>

```go
func ResetIpAddress()
```

##### `ResetIpAddressFamily` <a name="ResetIpAddressFamily" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.resetIpAddressFamily"></a>

```go
func ResetIpAddressFamily()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.ipAddressFloating">IpAddressFloating</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.ipAddressFamilyInput">IpAddressFamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.ipAddressFamily">IpAddressFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddressFloating`<sup>Required</sup> <a name="IpAddressFloating" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.ipAddressFloating"></a>

```go
func IpAddressFloating() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IpAddressFamilyInput`<sup>Optional</sup> <a name="IpAddressFamilyInput" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.ipAddressFamilyInput"></a>

```go
func IpAddressFamilyInput() *string
```

- *Type:* *string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.ipAddressInput"></a>

```go
func IpAddressInput() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `IpAddressFamily`<sup>Required</sup> <a name="IpAddressFamily" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.ipAddressFamily"></a>

```go
func IpAddressFamily() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServerNetworkInterfaceList <a name="ServerNetworkInterfaceList" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/server"

server.NewServerNetworkInterfaceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServerNetworkInterfaceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.get"></a>

```go
func Get(index *f64) ServerNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServerNetworkInterfaceOutputReference <a name="ServerNetworkInterfaceOutputReference" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/server"

server.NewServerNetworkInterfaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServerNetworkInterfaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.putAdditionalIpAddress">PutAdditionalIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetAdditionalIpAddress">ResetAdditionalIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetBootable">ResetBootable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetIpAddressFamily">ResetIpAddressFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetSourceIpFiltering">ResetSourceIpFiltering</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdditionalIpAddress` <a name="PutAdditionalIpAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.putAdditionalIpAddress"></a>

```go
func PutAdditionalIpAddress(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.putAdditionalIpAddress.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdditionalIpAddress` <a name="ResetAdditionalIpAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetAdditionalIpAddress"></a>

```go
func ResetAdditionalIpAddress()
```

##### `ResetBootable` <a name="ResetBootable" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetBootable"></a>

```go
func ResetBootable()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetIpAddress"></a>

```go
func ResetIpAddress()
```

##### `ResetIpAddressFamily` <a name="ResetIpAddressFamily" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetIpAddressFamily"></a>

```go
func ResetIpAddressFamily()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetSourceIpFiltering` <a name="ResetSourceIpFiltering" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetSourceIpFiltering"></a>

```go
func ResetSourceIpFiltering()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.additionalIpAddress">AdditionalIpAddress</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList">ServerNetworkInterfaceAdditionalIpAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddressFloating">IpAddressFloating</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.macAddress">MacAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.additionalIpAddressInput">AdditionalIpAddressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.bootableInput">BootableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddressFamilyInput">IpAddressFamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.sourceIpFilteringInput">SourceIpFilteringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.bootable">Bootable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddressFamily">IpAddressFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.sourceIpFiltering">SourceIpFiltering</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalIpAddress`<sup>Required</sup> <a name="AdditionalIpAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.additionalIpAddress"></a>

```go
func AdditionalIpAddress() ServerNetworkInterfaceAdditionalIpAddressList
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList">ServerNetworkInterfaceAdditionalIpAddressList</a>

---

##### `IpAddressFloating`<sup>Required</sup> <a name="IpAddressFloating" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddressFloating"></a>

```go
func IpAddressFloating() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MacAddress`<sup>Required</sup> <a name="MacAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.macAddress"></a>

```go
func MacAddress() *string
```

- *Type:* *string

---

##### `AdditionalIpAddressInput`<sup>Optional</sup> <a name="AdditionalIpAddressInput" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.additionalIpAddressInput"></a>

```go
func AdditionalIpAddressInput() interface{}
```

- *Type:* interface{}

---

##### `BootableInput`<sup>Optional</sup> <a name="BootableInput" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.bootableInput"></a>

```go
func BootableInput() interface{}
```

- *Type:* interface{}

---

##### `IpAddressFamilyInput`<sup>Optional</sup> <a name="IpAddressFamilyInput" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddressFamilyInput"></a>

```go
func IpAddressFamilyInput() *string
```

- *Type:* *string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddressInput"></a>

```go
func IpAddressInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `SourceIpFilteringInput`<sup>Optional</sup> <a name="SourceIpFilteringInput" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.sourceIpFilteringInput"></a>

```go
func SourceIpFilteringInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Bootable`<sup>Required</sup> <a name="Bootable" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.bootable"></a>

```go
func Bootable() interface{}
```

- *Type:* interface{}

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `IpAddressFamily`<sup>Required</sup> <a name="IpAddressFamily" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddressFamily"></a>

```go
func IpAddressFamily() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `SourceIpFiltering`<sup>Required</sup> <a name="SourceIpFiltering" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.sourceIpFiltering"></a>

```go
func SourceIpFiltering() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServerSimpleBackupOutputReference <a name="ServerSimpleBackupOutputReference" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/server"

server.NewServerSimpleBackupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServerSimpleBackupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.planInput">PlanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.timeInput">TimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.plan">Plan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.time">Time</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup">ServerSimpleBackup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.planInput"></a>

```go
func PlanInput() *string
```

- *Type:* *string

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.timeInput"></a>

```go
func TimeInput() *string
```

- *Type:* *string

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.plan"></a>

```go
func Plan() *string
```

- *Type:* *string

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.time"></a>

```go
func Time() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.internalValue"></a>

```go
func InternalValue() ServerSimpleBackup
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup">ServerSimpleBackup</a>

---


### ServerStorageDevicesList <a name="ServerStorageDevicesList" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/server"

server.NewServerStorageDevicesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServerStorageDevicesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.get"></a>

```go
func Get(index *f64) ServerStorageDevicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServerStorageDevicesOutputReference <a name="ServerStorageDevicesOutputReference" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/server"

server.NewServerStorageDevicesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServerStorageDevicesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resetAddressPosition">ResetAddressPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resetAddress"></a>

```go
func ResetAddress()
```

##### `ResetAddressPosition` <a name="ResetAddressPosition" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resetAddressPosition"></a>

```go
func ResetAddressPosition()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.addressPositionInput">AddressPositionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.storageInput">StorageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.addressPosition">AddressPosition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.storage">Storage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `AddressPositionInput`<sup>Optional</sup> <a name="AddressPositionInput" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.addressPositionInput"></a>

```go
func AddressPositionInput() *string
```

- *Type:* *string

---

##### `StorageInput`<sup>Optional</sup> <a name="StorageInput" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.storageInput"></a>

```go
func StorageInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `AddressPosition`<sup>Required</sup> <a name="AddressPosition" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.addressPosition"></a>

```go
func AddressPosition() *string
```

- *Type:* *string

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.storage"></a>

```go
func Storage() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServerTemplateBackupRuleOutputReference <a name="ServerTemplateBackupRuleOutputReference" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/server"

server.NewServerTemplateBackupRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServerTemplateBackupRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.intervalInput">IntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.retentionInput">RetentionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.timeInput">TimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.interval">Interval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.retention">Retention</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.time">Time</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule">ServerTemplateBackupRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.intervalInput"></a>

```go
func IntervalInput() *string
```

- *Type:* *string

---

##### `RetentionInput`<sup>Optional</sup> <a name="RetentionInput" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.retentionInput"></a>

```go
func RetentionInput() *f64
```

- *Type:* *f64

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.timeInput"></a>

```go
func TimeInput() *string
```

- *Type:* *string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.interval"></a>

```go
func Interval() *string
```

- *Type:* *string

---

##### `Retention`<sup>Required</sup> <a name="Retention" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.retention"></a>

```go
func Retention() *f64
```

- *Type:* *f64

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.time"></a>

```go
func Time() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() ServerTemplateBackupRule
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule">ServerTemplateBackupRule</a>

---


### ServerTemplateOutputReference <a name="ServerTemplateOutputReference" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/server"

server.NewServerTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServerTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.putBackupRule">PutBackupRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetAddressPosition">ResetAddressPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetBackupRule">ResetBackupRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetDeleteAutoresizeBackup">ResetDeleteAutoresizeBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetEncrypt">ResetEncrypt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetFilesystemAutoresize">ResetFilesystemAutoresize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetSize">ResetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBackupRule` <a name="PutBackupRule" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.putBackupRule"></a>

```go
func PutBackupRule(value ServerTemplateBackupRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.putBackupRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule">ServerTemplateBackupRule</a>

---

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetAddress"></a>

```go
func ResetAddress()
```

##### `ResetAddressPosition` <a name="ResetAddressPosition" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetAddressPosition"></a>

```go
func ResetAddressPosition()
```

##### `ResetBackupRule` <a name="ResetBackupRule" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetBackupRule"></a>

```go
func ResetBackupRule()
```

##### `ResetDeleteAutoresizeBackup` <a name="ResetDeleteAutoresizeBackup" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetDeleteAutoresizeBackup"></a>

```go
func ResetDeleteAutoresizeBackup()
```

##### `ResetEncrypt` <a name="ResetEncrypt" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetEncrypt"></a>

```go
func ResetEncrypt()
```

##### `ResetFilesystemAutoresize` <a name="ResetFilesystemAutoresize" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetFilesystemAutoresize"></a>

```go
func ResetFilesystemAutoresize()
```

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetSize"></a>

```go
func ResetSize()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetTitle"></a>

```go
func ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.backupRule">BackupRule</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference">ServerTemplateBackupRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.addressPositionInput">AddressPositionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.backupRuleInput">BackupRuleInput</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule">ServerTemplateBackupRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.deleteAutoresizeBackupInput">DeleteAutoresizeBackupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.encryptInput">EncryptInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.filesystemAutoresizeInput">FilesystemAutoresizeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.storageInput">StorageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.addressPosition">AddressPosition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.deleteAutoresizeBackup">DeleteAutoresizeBackup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.encrypt">Encrypt</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.filesystemAutoresize">FilesystemAutoresize</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.storage">Storage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate">ServerTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupRule`<sup>Required</sup> <a name="BackupRule" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.backupRule"></a>

```go
func BackupRule() ServerTemplateBackupRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference">ServerTemplateBackupRuleOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `AddressPositionInput`<sup>Optional</sup> <a name="AddressPositionInput" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.addressPositionInput"></a>

```go
func AddressPositionInput() *string
```

- *Type:* *string

---

##### `BackupRuleInput`<sup>Optional</sup> <a name="BackupRuleInput" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.backupRuleInput"></a>

```go
func BackupRuleInput() ServerTemplateBackupRule
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule">ServerTemplateBackupRule</a>

---

##### `DeleteAutoresizeBackupInput`<sup>Optional</sup> <a name="DeleteAutoresizeBackupInput" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.deleteAutoresizeBackupInput"></a>

```go
func DeleteAutoresizeBackupInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptInput`<sup>Optional</sup> <a name="EncryptInput" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.encryptInput"></a>

```go
func EncryptInput() interface{}
```

- *Type:* interface{}

---

##### `FilesystemAutoresizeInput`<sup>Optional</sup> <a name="FilesystemAutoresizeInput" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.filesystemAutoresizeInput"></a>

```go
func FilesystemAutoresizeInput() interface{}
```

- *Type:* interface{}

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `StorageInput`<sup>Optional</sup> <a name="StorageInput" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.storageInput"></a>

```go
func StorageInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `AddressPosition`<sup>Required</sup> <a name="AddressPosition" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.addressPosition"></a>

```go
func AddressPosition() *string
```

- *Type:* *string

---

##### `DeleteAutoresizeBackup`<sup>Required</sup> <a name="DeleteAutoresizeBackup" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.deleteAutoresizeBackup"></a>

```go
func DeleteAutoresizeBackup() interface{}
```

- *Type:* interface{}

---

##### `Encrypt`<sup>Required</sup> <a name="Encrypt" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.encrypt"></a>

```go
func Encrypt() interface{}
```

- *Type:* interface{}

---

##### `FilesystemAutoresize`<sup>Required</sup> <a name="FilesystemAutoresize" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.filesystemAutoresize"></a>

```go
func FilesystemAutoresize() interface{}
```

- *Type:* interface{}

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.storage"></a>

```go
func Storage() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() ServerTemplate
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerTemplate">ServerTemplate</a>

---



