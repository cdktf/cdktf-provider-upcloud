# `managedDatabaseValkey` Submodule <a name="`managedDatabaseValkey` Submodule" id="@cdktf/provider-upcloud.managedDatabaseValkey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedDatabaseValkey <a name="ManagedDatabaseValkey" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey upcloud_managed_database_valkey}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabasevalkey"

manageddatabasevalkey.NewManagedDatabaseValkey(scope Construct, id *string, config ManagedDatabaseValkeyConfig) ManagedDatabaseValkey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig">ManagedDatabaseValkeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig">ManagedDatabaseValkeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putNetwork">PutNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetMaintenanceWindowDow">ResetMaintenanceWindowDow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetMaintenanceWindowTime">ResetMaintenanceWindowTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetPowered">ResetPowered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetTerminationProtection">ResetTerminationProtection</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNetwork` <a name="PutNetwork" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putNetwork"></a>

```go
func PutNetwork(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putNetwork.parameter.value"></a>

- *Type:* interface{}

---

##### `PutProperties` <a name="PutProperties" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putProperties"></a>

```go
func PutProperties(value ManagedDatabaseValkeyProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties">ManagedDatabaseValkeyProperties</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMaintenanceWindowDow` <a name="ResetMaintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetMaintenanceWindowDow"></a>

```go
func ResetMaintenanceWindowDow()
```

##### `ResetMaintenanceWindowTime` <a name="ResetMaintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetMaintenanceWindowTime"></a>

```go
func ResetMaintenanceWindowTime()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetPowered` <a name="ResetPowered" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetPowered"></a>

```go
func ResetPowered()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetTerminationProtection` <a name="ResetTerminationProtection" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetTerminationProtection"></a>

```go
func ResetTerminationProtection()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedDatabaseValkey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabasevalkey"

manageddatabasevalkey.ManagedDatabaseValkey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabasevalkey"

manageddatabasevalkey.ManagedDatabaseValkey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabasevalkey"

manageddatabasevalkey.ManagedDatabaseValkey_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabasevalkey"

manageddatabasevalkey.ManagedDatabaseValkey_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ManagedDatabaseValkey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ManagedDatabaseValkey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ManagedDatabaseValkey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ManagedDatabaseValkey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.components">Components</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList">ManagedDatabaseValkeyComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.network">Network</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList">ManagedDatabaseValkeyNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.nodeStates">NodeStates</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList">ManagedDatabaseValkeyNodeStatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.primaryDatabase">PrimaryDatabase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference">ManagedDatabaseValkeyPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.serviceHost">ServiceHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.servicePassword">ServicePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.servicePort">ServicePort</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.serviceUri">ServiceUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.serviceUsername">ServiceUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.maintenanceWindowDowInput">MaintenanceWindowDowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.maintenanceWindowTimeInput">MaintenanceWindowTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.networkInput">NetworkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.planInput">PlanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.poweredInput">PoweredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties">ManagedDatabaseValkeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terminationProtectionInput">TerminationProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.maintenanceWindowDow">MaintenanceWindowDow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.maintenanceWindowTime">MaintenanceWindowTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.plan">Plan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.powered">Powered</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terminationProtection">TerminationProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Components`<sup>Required</sup> <a name="Components" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.components"></a>

```go
func Components() ManagedDatabaseValkeyComponentsList
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList">ManagedDatabaseValkeyComponentsList</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.network"></a>

```go
func Network() ManagedDatabaseValkeyNetworkList
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList">ManagedDatabaseValkeyNetworkList</a>

---

##### `NodeStates`<sup>Required</sup> <a name="NodeStates" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.nodeStates"></a>

```go
func NodeStates() ManagedDatabaseValkeyNodeStatesList
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList">ManagedDatabaseValkeyNodeStatesList</a>

---

##### `PrimaryDatabase`<sup>Required</sup> <a name="PrimaryDatabase" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.primaryDatabase"></a>

```go
func PrimaryDatabase() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.properties"></a>

```go
func Properties() ManagedDatabaseValkeyPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference">ManagedDatabaseValkeyPropertiesOutputReference</a>

---

##### `ServiceHost`<sup>Required</sup> <a name="ServiceHost" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.serviceHost"></a>

```go
func ServiceHost() *string
```

- *Type:* *string

---

##### `ServicePassword`<sup>Required</sup> <a name="ServicePassword" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.servicePassword"></a>

```go
func ServicePassword() *string
```

- *Type:* *string

---

##### `ServicePort`<sup>Required</sup> <a name="ServicePort" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.servicePort"></a>

```go
func ServicePort() *string
```

- *Type:* *string

---

##### `ServiceUri`<sup>Required</sup> <a name="ServiceUri" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.serviceUri"></a>

```go
func ServiceUri() *string
```

- *Type:* *string

---

##### `ServiceUsername`<sup>Required</sup> <a name="ServiceUsername" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.serviceUsername"></a>

```go
func ServiceUsername() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaintenanceWindowDowInput`<sup>Optional</sup> <a name="MaintenanceWindowDowInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.maintenanceWindowDowInput"></a>

```go
func MaintenanceWindowDowInput() *string
```

- *Type:* *string

---

##### `MaintenanceWindowTimeInput`<sup>Optional</sup> <a name="MaintenanceWindowTimeInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.maintenanceWindowTimeInput"></a>

```go
func MaintenanceWindowTimeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.networkInput"></a>

```go
func NetworkInput() interface{}
```

- *Type:* interface{}

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.planInput"></a>

```go
func PlanInput() *string
```

- *Type:* *string

---

##### `PoweredInput`<sup>Optional</sup> <a name="PoweredInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.poweredInput"></a>

```go
func PoweredInput() interface{}
```

- *Type:* interface{}

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.propertiesInput"></a>

```go
func PropertiesInput() ManagedDatabaseValkeyProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties">ManagedDatabaseValkeyProperties</a>

---

##### `TerminationProtectionInput`<sup>Optional</sup> <a name="TerminationProtectionInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terminationProtectionInput"></a>

```go
func TerminationProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaintenanceWindowDow`<sup>Required</sup> <a name="MaintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.maintenanceWindowDow"></a>

```go
func MaintenanceWindowDow() *string
```

- *Type:* *string

---

##### `MaintenanceWindowTime`<sup>Required</sup> <a name="MaintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.maintenanceWindowTime"></a>

```go
func MaintenanceWindowTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.plan"></a>

```go
func Plan() *string
```

- *Type:* *string

---

##### `Powered`<sup>Required</sup> <a name="Powered" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.powered"></a>

```go
func Powered() interface{}
```

- *Type:* interface{}

---

##### `TerminationProtection`<sup>Required</sup> <a name="TerminationProtection" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terminationProtection"></a>

```go
func TerminationProtection() interface{}
```

- *Type:* interface{}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedDatabaseValkeyComponents <a name="ManagedDatabaseValkeyComponents" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponents.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabasevalkey"

&manageddatabasevalkey.ManagedDatabaseValkeyComponents {

}
```


### ManagedDatabaseValkeyConfig <a name="ManagedDatabaseValkeyConfig" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabasevalkey"

&manageddatabasevalkey.ManagedDatabaseValkeyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Plan: *string,
	Title: *string,
	Zone: *string,
	Id: *string,
	Labels: *map[string]*string,
	MaintenanceWindowDow: *string,
	MaintenanceWindowTime: *string,
	Network: interface{},
	Powered: interface{},
	Properties: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.managedDatabaseValkey.ManagedDatabaseValkeyProperties,
	TerminationProtection: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.name">Name</a></code> | <code>*string</code> | Name of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.plan">Plan</a></code> | <code>*string</code> | Service plan to use. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.title">Title</a></code> | <code>*string</code> | Title of a managed database instance. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.zone">Zone</a></code> | <code>*string</code> | Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#id ManagedDatabaseValkey#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | User defined key-value pairs to classify the managed database. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.maintenanceWindowDow">MaintenanceWindowDow</a></code> | <code>*string</code> | Maintenance window day of week. Lower case weekday name (monday, tuesday, ...). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.maintenanceWindowTime">MaintenanceWindowTime</a></code> | <code>*string</code> | Maintenance window UTC time in hh:mm:ss format. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.network">Network</a></code> | <code>interface{}</code> | network block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.powered">Powered</a></code> | <code>interface{}</code> | The administrative power state of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties">ManagedDatabaseValkeyProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.terminationProtection">TerminationProtection</a></code> | <code>interface{}</code> | If set to true, prevents the managed service from being powered off, or deleted. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the service.

The name is used as a prefix for the logical hostname. Must be unique within an account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#name ManagedDatabaseValkey#name}

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.plan"></a>

```go
Plan *string
```

- *Type:* *string

Service plan to use.

This determines how much resources the instance will have. You can list available plans with `upctl database plans <type>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#plan ManagedDatabaseValkey#plan}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.title"></a>

```go
Title *string
```

- *Type:* *string

Title of a managed database instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#title ManagedDatabaseValkey#title}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#zone ManagedDatabaseValkey#zone}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#id ManagedDatabaseValkey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

User defined key-value pairs to classify the managed database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#labels ManagedDatabaseValkey#labels}

---

##### `MaintenanceWindowDow`<sup>Optional</sup> <a name="MaintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.maintenanceWindowDow"></a>

```go
MaintenanceWindowDow *string
```

- *Type:* *string

Maintenance window day of week. Lower case weekday name (monday, tuesday, ...).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#maintenance_window_dow ManagedDatabaseValkey#maintenance_window_dow}

---

##### `MaintenanceWindowTime`<sup>Optional</sup> <a name="MaintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.maintenanceWindowTime"></a>

```go
MaintenanceWindowTime *string
```

- *Type:* *string

Maintenance window UTC time in hh:mm:ss format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#maintenance_window_time ManagedDatabaseValkey#maintenance_window_time}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.network"></a>

```go
Network interface{}
```

- *Type:* interface{}

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#network ManagedDatabaseValkey#network}

---

##### `Powered`<sup>Optional</sup> <a name="Powered" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.powered"></a>

```go
Powered interface{}
```

- *Type:* interface{}

The administrative power state of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#powered ManagedDatabaseValkey#powered}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.properties"></a>

```go
Properties ManagedDatabaseValkeyProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties">ManagedDatabaseValkeyProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#properties ManagedDatabaseValkey#properties}

---

##### `TerminationProtection`<sup>Optional</sup> <a name="TerminationProtection" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.terminationProtection"></a>

```go
TerminationProtection interface{}
```

- *Type:* interface{}

If set to true, prevents the managed service from being powered off, or deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#termination_protection ManagedDatabaseValkey#termination_protection}

---

### ManagedDatabaseValkeyNetwork <a name="ManagedDatabaseValkeyNetwork" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabasevalkey"

&manageddatabasevalkey.ManagedDatabaseValkeyNetwork {
	Family: *string,
	Name: *string,
	Type: *string,
	Uuid: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.property.family">Family</a></code> | <code>*string</code> | Network family. Currently only `IPv4` is supported. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.property.name">Name</a></code> | <code>*string</code> | The name of the network. Must be unique within the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.property.type">Type</a></code> | <code>*string</code> | The type of the network. Must be private. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.property.uuid">Uuid</a></code> | <code>*string</code> | Private network UUID. Must reside in the same zone as the database. |

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.property.family"></a>

```go
Family *string
```

- *Type:* *string

Network family. Currently only `IPv4` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#family ManagedDatabaseValkey#family}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the network. Must be unique within the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#name ManagedDatabaseValkey#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the network. Must be private.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#type ManagedDatabaseValkey#type}

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.property.uuid"></a>

```go
Uuid *string
```

- *Type:* *string

Private network UUID. Must reside in the same zone as the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#uuid ManagedDatabaseValkey#uuid}

---

### ManagedDatabaseValkeyNodeStates <a name="ManagedDatabaseValkeyNodeStates" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStates.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabasevalkey"

&manageddatabasevalkey.ManagedDatabaseValkeyNodeStates {

}
```


### ManagedDatabaseValkeyProperties <a name="ManagedDatabaseValkeyProperties" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabasevalkey"

&manageddatabasevalkey.ManagedDatabaseValkeyProperties {
	AutomaticUtilityNetworkIpFilter: interface{},
	BackupHour: *f64,
	BackupMinute: *f64,
	FrequentSnapshots: interface{},
	IpFilter: *[]*string,
	Migration: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration,
	PublicAccess: interface{},
	ServiceLog: interface{},
	ValkeyAclChannelsDefault: *string,
	ValkeyActiveExpireEffort: *f64,
	ValkeyIoThreads: *f64,
	ValkeyLfuDecayTime: *f64,
	ValkeyLfuLogFactor: *f64,
	ValkeyMaxmemoryPolicy: *string,
	ValkeyNotifyKeyspaceEvents: *string,
	ValkeyNumberOfDatabases: *f64,
	ValkeyPersistence: *string,
	ValkeyPubsubClientOutputBufferLimit: *f64,
	ValkeySsl: interface{},
	ValkeyTimeout: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.automaticUtilityNetworkIpFilter">AutomaticUtilityNetworkIpFilter</a></code> | <code>interface{}</code> | Automatic utility network IP Filter. Automatically allow connections from servers in the utility network within the same zone. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.backupHour">BackupHour</a></code> | <code>*f64</code> | The hour of day (in UTC) when backup for the service is started. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.backupMinute">BackupMinute</a></code> | <code>*f64</code> | The minute of an hour when backup for the service is started. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.frequentSnapshots">FrequentSnapshots</a></code> | <code>interface{}</code> | Frequent RDB snapshots. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.ipFilter">IpFilter</a></code> | <code>*[]*string</code> | IP filter. Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.migration">Migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration">ManagedDatabaseValkeyPropertiesMigration</a></code> | migration block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.publicAccess">PublicAccess</a></code> | <code>interface{}</code> | Public Access. Allow access to the service from the public Internet. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.serviceLog">ServiceLog</a></code> | <code>interface{}</code> | Service logging. Store logs for the service so that they are available in the HTTP API and console. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyAclChannelsDefault">ValkeyAclChannelsDefault</a></code> | <code>*string</code> | Default ACL for pub/sub channels used when a Valkey user is created. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyActiveExpireEffort">ValkeyActiveExpireEffort</a></code> | <code>*f64</code> | Active expire effort. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyIoThreads">ValkeyIoThreads</a></code> | <code>*f64</code> | Valkey IO thread count. Set Valkey IO thread count. Changing this will cause a restart of the Valkey service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyLfuDecayTime">ValkeyLfuDecayTime</a></code> | <code>*f64</code> | LFU maxmemory-policy counter decay time in minutes. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyLfuLogFactor">ValkeyLfuLogFactor</a></code> | <code>*f64</code> | Counter logarithm factor for volatile-lfu and allkeys-lfu maxmemory-policies. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyMaxmemoryPolicy">ValkeyMaxmemoryPolicy</a></code> | <code>*string</code> | Valkey maxmemory-policy. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyNotifyKeyspaceEvents">ValkeyNotifyKeyspaceEvents</a></code> | <code>*string</code> | Set notify-keyspace-events option. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyNumberOfDatabases">ValkeyNumberOfDatabases</a></code> | <code>*f64</code> | Number of Valkey databases. Set number of Valkey databases. Changing this will cause a restart of the Valkey service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyPersistence">ValkeyPersistence</a></code> | <code>*string</code> | Valkey persistence. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyPubsubClientOutputBufferLimit">ValkeyPubsubClientOutputBufferLimit</a></code> | <code>*f64</code> | Pub/sub client output buffer hard limit in MB. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeySsl">ValkeySsl</a></code> | <code>interface{}</code> | Require SSL to access Valkey. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyTimeout">ValkeyTimeout</a></code> | <code>*f64</code> | Valkey idle connection timeout in seconds. |

---

##### `AutomaticUtilityNetworkIpFilter`<sup>Optional</sup> <a name="AutomaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.automaticUtilityNetworkIpFilter"></a>

```go
AutomaticUtilityNetworkIpFilter interface{}
```

- *Type:* interface{}

Automatic utility network IP Filter. Automatically allow connections from servers in the utility network within the same zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#automatic_utility_network_ip_filter ManagedDatabaseValkey#automatic_utility_network_ip_filter}

---

##### `BackupHour`<sup>Optional</sup> <a name="BackupHour" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.backupHour"></a>

```go
BackupHour *f64
```

- *Type:* *f64

The hour of day (in UTC) when backup for the service is started.

New backup is only started if previous backup has already completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#backup_hour ManagedDatabaseValkey#backup_hour}

---

##### `BackupMinute`<sup>Optional</sup> <a name="BackupMinute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.backupMinute"></a>

```go
BackupMinute *f64
```

- *Type:* *f64

The minute of an hour when backup for the service is started.

New backup is only started if previous backup has already completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#backup_minute ManagedDatabaseValkey#backup_minute}

---

##### `FrequentSnapshots`<sup>Optional</sup> <a name="FrequentSnapshots" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.frequentSnapshots"></a>

```go
FrequentSnapshots interface{}
```

- *Type:* interface{}

Frequent RDB snapshots.

When enabled, Valkey will create frequent local RDB snapshots. When disabled, Valkey will only take RDB snapshots when a backup is created, based on the backup schedule. This setting is ignored when `valkey_persistence` is set to `off`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#frequent_snapshots ManagedDatabaseValkey#frequent_snapshots}

---

##### `IpFilter`<sup>Optional</sup> <a name="IpFilter" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.ipFilter"></a>

```go
IpFilter *[]*string
```

- *Type:* *[]*string

IP filter. Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#ip_filter ManagedDatabaseValkey#ip_filter}

---

##### `Migration`<sup>Optional</sup> <a name="Migration" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.migration"></a>

```go
Migration ManagedDatabaseValkeyPropertiesMigration
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration">ManagedDatabaseValkeyPropertiesMigration</a>

migration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#migration ManagedDatabaseValkey#migration}

---

##### `PublicAccess`<sup>Optional</sup> <a name="PublicAccess" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.publicAccess"></a>

```go
PublicAccess interface{}
```

- *Type:* interface{}

Public Access. Allow access to the service from the public Internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#public_access ManagedDatabaseValkey#public_access}

---

##### `ServiceLog`<sup>Optional</sup> <a name="ServiceLog" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.serviceLog"></a>

```go
ServiceLog interface{}
```

- *Type:* interface{}

Service logging. Store logs for the service so that they are available in the HTTP API and console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#service_log ManagedDatabaseValkey#service_log}

---

##### `ValkeyAclChannelsDefault`<sup>Optional</sup> <a name="ValkeyAclChannelsDefault" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyAclChannelsDefault"></a>

```go
ValkeyAclChannelsDefault *string
```

- *Type:* *string

Default ACL for pub/sub channels used when a Valkey user is created.

Determines default pub/sub channels' ACL for new users if ACL is not supplied. When this option is not defined, all_channels is assumed to keep backward compatibility. This option doesn't affect Valkey configuration acl-pubsub-default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#valkey_acl_channels_default ManagedDatabaseValkey#valkey_acl_channels_default}

---

##### `ValkeyActiveExpireEffort`<sup>Optional</sup> <a name="ValkeyActiveExpireEffort" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyActiveExpireEffort"></a>

```go
ValkeyActiveExpireEffort *f64
```

- *Type:* *f64

Active expire effort.

Valkey reclaims expired keys both when accessed and in the background. The background process scans for expired keys to free memory. Increasing the active-expire-effort setting (default 1, max 10) uses more CPU to reclaim expired keys faster, reducing memory usage but potentially increasing latency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#valkey_active_expire_effort ManagedDatabaseValkey#valkey_active_expire_effort}

---

##### `ValkeyIoThreads`<sup>Optional</sup> <a name="ValkeyIoThreads" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyIoThreads"></a>

```go
ValkeyIoThreads *f64
```

- *Type:* *f64

Valkey IO thread count. Set Valkey IO thread count. Changing this will cause a restart of the Valkey service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#valkey_io_threads ManagedDatabaseValkey#valkey_io_threads}

---

##### `ValkeyLfuDecayTime`<sup>Optional</sup> <a name="ValkeyLfuDecayTime" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyLfuDecayTime"></a>

```go
ValkeyLfuDecayTime *f64
```

- *Type:* *f64

LFU maxmemory-policy counter decay time in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#valkey_lfu_decay_time ManagedDatabaseValkey#valkey_lfu_decay_time}

---

##### `ValkeyLfuLogFactor`<sup>Optional</sup> <a name="ValkeyLfuLogFactor" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyLfuLogFactor"></a>

```go
ValkeyLfuLogFactor *f64
```

- *Type:* *f64

Counter logarithm factor for volatile-lfu and allkeys-lfu maxmemory-policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#valkey_lfu_log_factor ManagedDatabaseValkey#valkey_lfu_log_factor}

---

##### `ValkeyMaxmemoryPolicy`<sup>Optional</sup> <a name="ValkeyMaxmemoryPolicy" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyMaxmemoryPolicy"></a>

```go
ValkeyMaxmemoryPolicy *string
```

- *Type:* *string

Valkey maxmemory-policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#valkey_maxmemory_policy ManagedDatabaseValkey#valkey_maxmemory_policy}

---

##### `ValkeyNotifyKeyspaceEvents`<sup>Optional</sup> <a name="ValkeyNotifyKeyspaceEvents" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyNotifyKeyspaceEvents"></a>

```go
ValkeyNotifyKeyspaceEvents *string
```

- *Type:* *string

Set notify-keyspace-events option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#valkey_notify_keyspace_events ManagedDatabaseValkey#valkey_notify_keyspace_events}

---

##### `ValkeyNumberOfDatabases`<sup>Optional</sup> <a name="ValkeyNumberOfDatabases" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyNumberOfDatabases"></a>

```go
ValkeyNumberOfDatabases *f64
```

- *Type:* *f64

Number of Valkey databases. Set number of Valkey databases. Changing this will cause a restart of the Valkey service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#valkey_number_of_databases ManagedDatabaseValkey#valkey_number_of_databases}

---

##### `ValkeyPersistence`<sup>Optional</sup> <a name="ValkeyPersistence" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyPersistence"></a>

```go
ValkeyPersistence *string
```

- *Type:* *string

Valkey persistence.

When persistence is 'rdb', Valkey does RDB dumps each 10 minutes if any key is changed. Also RDB dumps are done according to backup schedule for backup purposes. When persistence is 'off', no RDB dumps and backups are done, so data can be lost at any moment if service is restarted for any reason, or if service is powered off. Also service can't be forked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#valkey_persistence ManagedDatabaseValkey#valkey_persistence}

---

##### `ValkeyPubsubClientOutputBufferLimit`<sup>Optional</sup> <a name="ValkeyPubsubClientOutputBufferLimit" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyPubsubClientOutputBufferLimit"></a>

```go
ValkeyPubsubClientOutputBufferLimit *f64
```

- *Type:* *f64

Pub/sub client output buffer hard limit in MB.

Set output buffer limit for pub / sub clients in MB. The value is the hard limit, the soft limit is 1/4 of the hard limit. When setting the limit, be mindful of the available memory in the selected service plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#valkey_pubsub_client_output_buffer_limit ManagedDatabaseValkey#valkey_pubsub_client_output_buffer_limit}

---

##### `ValkeySsl`<sup>Optional</sup> <a name="ValkeySsl" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeySsl"></a>

```go
ValkeySsl interface{}
```

- *Type:* interface{}

Require SSL to access Valkey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#valkey_ssl ManagedDatabaseValkey#valkey_ssl}

---

##### `ValkeyTimeout`<sup>Optional</sup> <a name="ValkeyTimeout" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyTimeout"></a>

```go
ValkeyTimeout *f64
```

- *Type:* *f64

Valkey idle connection timeout in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#valkey_timeout ManagedDatabaseValkey#valkey_timeout}

---

### ManagedDatabaseValkeyPropertiesMigration <a name="ManagedDatabaseValkeyPropertiesMigration" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabasevalkey"

&manageddatabasevalkey.ManagedDatabaseValkeyPropertiesMigration {
	Dbname: *string,
	Host: *string,
	IgnoreDbs: *string,
	IgnoreRoles: *string,
	Method: *string,
	Password: *string,
	Port: *f64,
	Ssl: interface{},
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.dbname">Dbname</a></code> | <code>*string</code> | Database name for bootstrapping the initial connection. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.host">Host</a></code> | <code>*string</code> | Hostname or IP address of the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.ignoreDbs">IgnoreDbs</a></code> | <code>*string</code> | Comma-separated list of databases, which should be ignored during migration (supported by MySQL and PostgreSQL only at the moment). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.ignoreRoles">IgnoreRoles</a></code> | <code>*string</code> | Comma-separated list of database roles, which should be ignored during migration (supported by PostgreSQL only at the moment). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.method">Method</a></code> | <code>*string</code> | The migration method to be used (currently supported only by Redis, Dragonfly, MySQL and PostgreSQL service types). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.password">Password</a></code> | <code>*string</code> | Password for authentication with the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.port">Port</a></code> | <code>*f64</code> | Port number of the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.ssl">Ssl</a></code> | <code>interface{}</code> | The server where to migrate data from is secured with SSL. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.username">Username</a></code> | <code>*string</code> | User name for authentication with the server where to migrate data from. |

---

##### `Dbname`<sup>Optional</sup> <a name="Dbname" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.dbname"></a>

```go
Dbname *string
```

- *Type:* *string

Database name for bootstrapping the initial connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#dbname ManagedDatabaseValkey#dbname}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.host"></a>

```go
Host *string
```

- *Type:* *string

Hostname or IP address of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#host ManagedDatabaseValkey#host}

---

##### `IgnoreDbs`<sup>Optional</sup> <a name="IgnoreDbs" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.ignoreDbs"></a>

```go
IgnoreDbs *string
```

- *Type:* *string

Comma-separated list of databases, which should be ignored during migration (supported by MySQL and PostgreSQL only at the moment).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#ignore_dbs ManagedDatabaseValkey#ignore_dbs}

---

##### `IgnoreRoles`<sup>Optional</sup> <a name="IgnoreRoles" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.ignoreRoles"></a>

```go
IgnoreRoles *string
```

- *Type:* *string

Comma-separated list of database roles, which should be ignored during migration (supported by PostgreSQL only at the moment).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#ignore_roles ManagedDatabaseValkey#ignore_roles}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.method"></a>

```go
Method *string
```

- *Type:* *string

The migration method to be used (currently supported only by Redis, Dragonfly, MySQL and PostgreSQL service types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#method ManagedDatabaseValkey#method}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.password"></a>

```go
Password *string
```

- *Type:* *string

Password for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#password ManagedDatabaseValkey#password}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port number of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#port ManagedDatabaseValkey#port}

---

##### `Ssl`<sup>Optional</sup> <a name="Ssl" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.ssl"></a>

```go
Ssl interface{}
```

- *Type:* interface{}

The server where to migrate data from is secured with SSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#ssl ManagedDatabaseValkey#ssl}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.username"></a>

```go
Username *string
```

- *Type:* *string

User name for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.22.0/docs/resources/managed_database_valkey#username ManagedDatabaseValkey#username}

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedDatabaseValkeyComponentsList <a name="ManagedDatabaseValkeyComponentsList" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabasevalkey"

manageddatabasevalkey.NewManagedDatabaseValkeyComponentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ManagedDatabaseValkeyComponentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.get"></a>

```go
func Get(index *f64) ManagedDatabaseValkeyComponentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ManagedDatabaseValkeyComponentsOutputReference <a name="ManagedDatabaseValkeyComponentsOutputReference" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabasevalkey"

manageddatabasevalkey.NewManagedDatabaseValkeyComponentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ManagedDatabaseValkeyComponentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.component">Component</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.route">Route</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.usage">Usage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponents">ManagedDatabaseValkeyComponents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Component`<sup>Required</sup> <a name="Component" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.component"></a>

```go
func Component() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Route`<sup>Required</sup> <a name="Route" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.route"></a>

```go
func Route() *string
```

- *Type:* *string

---

##### `Usage`<sup>Required</sup> <a name="Usage" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.usage"></a>

```go
func Usage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabaseValkeyComponents
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponents">ManagedDatabaseValkeyComponents</a>

---


### ManagedDatabaseValkeyNetworkList <a name="ManagedDatabaseValkeyNetworkList" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabasevalkey"

manageddatabasevalkey.NewManagedDatabaseValkeyNetworkList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ManagedDatabaseValkeyNetworkList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.get"></a>

```go
func Get(index *f64) ManagedDatabaseValkeyNetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ManagedDatabaseValkeyNetworkOutputReference <a name="ManagedDatabaseValkeyNetworkOutputReference" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabasevalkey"

manageddatabasevalkey.NewManagedDatabaseValkeyNetworkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ManagedDatabaseValkeyNetworkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.familyInput">FamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.uuidInput">UuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.family">Family</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FamilyInput`<sup>Optional</sup> <a name="FamilyInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.familyInput"></a>

```go
func FamilyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UuidInput`<sup>Optional</sup> <a name="UuidInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.uuidInput"></a>

```go
func UuidInput() *string
```

- *Type:* *string

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.family"></a>

```go
func Family() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ManagedDatabaseValkeyNodeStatesList <a name="ManagedDatabaseValkeyNodeStatesList" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabasevalkey"

manageddatabasevalkey.NewManagedDatabaseValkeyNodeStatesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ManagedDatabaseValkeyNodeStatesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.get"></a>

```go
func Get(index *f64) ManagedDatabaseValkeyNodeStatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ManagedDatabaseValkeyNodeStatesOutputReference <a name="ManagedDatabaseValkeyNodeStatesOutputReference" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabasevalkey"

manageddatabasevalkey.NewManagedDatabaseValkeyNodeStatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ManagedDatabaseValkeyNodeStatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStates">ManagedDatabaseValkeyNodeStates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabaseValkeyNodeStates
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStates">ManagedDatabaseValkeyNodeStates</a>

---


### ManagedDatabaseValkeyPropertiesMigrationOutputReference <a name="ManagedDatabaseValkeyPropertiesMigrationOutputReference" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabasevalkey"

manageddatabasevalkey.NewManagedDatabaseValkeyPropertiesMigrationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDatabaseValkeyPropertiesMigrationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetDbname">ResetDbname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetIgnoreDbs">ResetIgnoreDbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetIgnoreRoles">ResetIgnoreRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetSsl">ResetSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDbname` <a name="ResetDbname" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetDbname"></a>

```go
func ResetDbname()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetIgnoreDbs` <a name="ResetIgnoreDbs" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetIgnoreDbs"></a>

```go
func ResetIgnoreDbs()
```

##### `ResetIgnoreRoles` <a name="ResetIgnoreRoles" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetIgnoreRoles"></a>

```go
func ResetIgnoreRoles()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetSsl` <a name="ResetSsl" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetSsl"></a>

```go
func ResetSsl()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetUsername"></a>

```go
func ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.dbnameInput">DbnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ignoreDbsInput">IgnoreDbsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ignoreRolesInput">IgnoreRolesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.sslInput">SslInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.dbname">Dbname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ignoreDbs">IgnoreDbs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ignoreRoles">IgnoreRoles</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ssl">Ssl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration">ManagedDatabaseValkeyPropertiesMigration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DbnameInput`<sup>Optional</sup> <a name="DbnameInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.dbnameInput"></a>

```go
func DbnameInput() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `IgnoreDbsInput`<sup>Optional</sup> <a name="IgnoreDbsInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ignoreDbsInput"></a>

```go
func IgnoreDbsInput() *string
```

- *Type:* *string

---

##### `IgnoreRolesInput`<sup>Optional</sup> <a name="IgnoreRolesInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ignoreRolesInput"></a>

```go
func IgnoreRolesInput() *string
```

- *Type:* *string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `SslInput`<sup>Optional</sup> <a name="SslInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.sslInput"></a>

```go
func SslInput() interface{}
```

- *Type:* interface{}

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Dbname`<sup>Required</sup> <a name="Dbname" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.dbname"></a>

```go
func Dbname() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `IgnoreDbs`<sup>Required</sup> <a name="IgnoreDbs" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ignoreDbs"></a>

```go
func IgnoreDbs() *string
```

- *Type:* *string

---

##### `IgnoreRoles`<sup>Required</sup> <a name="IgnoreRoles" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ignoreRoles"></a>

```go
func IgnoreRoles() *string
```

- *Type:* *string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Ssl`<sup>Required</sup> <a name="Ssl" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ssl"></a>

```go
func Ssl() interface{}
```

- *Type:* interface{}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabaseValkeyPropertiesMigration
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration">ManagedDatabaseValkeyPropertiesMigration</a>

---


### ManagedDatabaseValkeyPropertiesOutputReference <a name="ManagedDatabaseValkeyPropertiesOutputReference" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabasevalkey"

manageddatabasevalkey.NewManagedDatabaseValkeyPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDatabaseValkeyPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.putMigration">PutMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter">ResetAutomaticUtilityNetworkIpFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetBackupHour">ResetBackupHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetBackupMinute">ResetBackupMinute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetFrequentSnapshots">ResetFrequentSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetIpFilter">ResetIpFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetMigration">ResetMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetPublicAccess">ResetPublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetServiceLog">ResetServiceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyAclChannelsDefault">ResetValkeyAclChannelsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyActiveExpireEffort">ResetValkeyActiveExpireEffort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyIoThreads">ResetValkeyIoThreads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyLfuDecayTime">ResetValkeyLfuDecayTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyLfuLogFactor">ResetValkeyLfuLogFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyMaxmemoryPolicy">ResetValkeyMaxmemoryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyNotifyKeyspaceEvents">ResetValkeyNotifyKeyspaceEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyNumberOfDatabases">ResetValkeyNumberOfDatabases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyPersistence">ResetValkeyPersistence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyPubsubClientOutputBufferLimit">ResetValkeyPubsubClientOutputBufferLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeySsl">ResetValkeySsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyTimeout">ResetValkeyTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMigration` <a name="PutMigration" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.putMigration"></a>

```go
func PutMigration(value ManagedDatabaseValkeyPropertiesMigration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.putMigration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration">ManagedDatabaseValkeyPropertiesMigration</a>

---

##### `ResetAutomaticUtilityNetworkIpFilter` <a name="ResetAutomaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter"></a>

```go
func ResetAutomaticUtilityNetworkIpFilter()
```

##### `ResetBackupHour` <a name="ResetBackupHour" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetBackupHour"></a>

```go
func ResetBackupHour()
```

##### `ResetBackupMinute` <a name="ResetBackupMinute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetBackupMinute"></a>

```go
func ResetBackupMinute()
```

##### `ResetFrequentSnapshots` <a name="ResetFrequentSnapshots" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetFrequentSnapshots"></a>

```go
func ResetFrequentSnapshots()
```

##### `ResetIpFilter` <a name="ResetIpFilter" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetIpFilter"></a>

```go
func ResetIpFilter()
```

##### `ResetMigration` <a name="ResetMigration" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetMigration"></a>

```go
func ResetMigration()
```

##### `ResetPublicAccess` <a name="ResetPublicAccess" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetPublicAccess"></a>

```go
func ResetPublicAccess()
```

##### `ResetServiceLog` <a name="ResetServiceLog" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetServiceLog"></a>

```go
func ResetServiceLog()
```

##### `ResetValkeyAclChannelsDefault` <a name="ResetValkeyAclChannelsDefault" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyAclChannelsDefault"></a>

```go
func ResetValkeyAclChannelsDefault()
```

##### `ResetValkeyActiveExpireEffort` <a name="ResetValkeyActiveExpireEffort" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyActiveExpireEffort"></a>

```go
func ResetValkeyActiveExpireEffort()
```

##### `ResetValkeyIoThreads` <a name="ResetValkeyIoThreads" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyIoThreads"></a>

```go
func ResetValkeyIoThreads()
```

##### `ResetValkeyLfuDecayTime` <a name="ResetValkeyLfuDecayTime" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyLfuDecayTime"></a>

```go
func ResetValkeyLfuDecayTime()
```

##### `ResetValkeyLfuLogFactor` <a name="ResetValkeyLfuLogFactor" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyLfuLogFactor"></a>

```go
func ResetValkeyLfuLogFactor()
```

##### `ResetValkeyMaxmemoryPolicy` <a name="ResetValkeyMaxmemoryPolicy" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyMaxmemoryPolicy"></a>

```go
func ResetValkeyMaxmemoryPolicy()
```

##### `ResetValkeyNotifyKeyspaceEvents` <a name="ResetValkeyNotifyKeyspaceEvents" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyNotifyKeyspaceEvents"></a>

```go
func ResetValkeyNotifyKeyspaceEvents()
```

##### `ResetValkeyNumberOfDatabases` <a name="ResetValkeyNumberOfDatabases" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyNumberOfDatabases"></a>

```go
func ResetValkeyNumberOfDatabases()
```

##### `ResetValkeyPersistence` <a name="ResetValkeyPersistence" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyPersistence"></a>

```go
func ResetValkeyPersistence()
```

##### `ResetValkeyPubsubClientOutputBufferLimit` <a name="ResetValkeyPubsubClientOutputBufferLimit" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyPubsubClientOutputBufferLimit"></a>

```go
func ResetValkeyPubsubClientOutputBufferLimit()
```

##### `ResetValkeySsl` <a name="ResetValkeySsl" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeySsl"></a>

```go
func ResetValkeySsl()
```

##### `ResetValkeyTimeout` <a name="ResetValkeyTimeout" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyTimeout"></a>

```go
func ResetValkeyTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.migration">Migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference">ManagedDatabaseValkeyPropertiesMigrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput">AutomaticUtilityNetworkIpFilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.backupHourInput">BackupHourInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.backupMinuteInput">BackupMinuteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.frequentSnapshotsInput">FrequentSnapshotsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.ipFilterInput">IpFilterInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.migrationInput">MigrationInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration">ManagedDatabaseValkeyPropertiesMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.publicAccessInput">PublicAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.serviceLogInput">ServiceLogInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyAclChannelsDefaultInput">ValkeyAclChannelsDefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyActiveExpireEffortInput">ValkeyActiveExpireEffortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyIoThreadsInput">ValkeyIoThreadsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyLfuDecayTimeInput">ValkeyLfuDecayTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyLfuLogFactorInput">ValkeyLfuLogFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyMaxmemoryPolicyInput">ValkeyMaxmemoryPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyNotifyKeyspaceEventsInput">ValkeyNotifyKeyspaceEventsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyNumberOfDatabasesInput">ValkeyNumberOfDatabasesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyPersistenceInput">ValkeyPersistenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyPubsubClientOutputBufferLimitInput">ValkeyPubsubClientOutputBufferLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeySslInput">ValkeySslInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyTimeoutInput">ValkeyTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.automaticUtilityNetworkIpFilter">AutomaticUtilityNetworkIpFilter</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.backupHour">BackupHour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.backupMinute">BackupMinute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.frequentSnapshots">FrequentSnapshots</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.ipFilter">IpFilter</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.publicAccess">PublicAccess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.serviceLog">ServiceLog</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyAclChannelsDefault">ValkeyAclChannelsDefault</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyActiveExpireEffort">ValkeyActiveExpireEffort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyIoThreads">ValkeyIoThreads</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyLfuDecayTime">ValkeyLfuDecayTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyLfuLogFactor">ValkeyLfuLogFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyMaxmemoryPolicy">ValkeyMaxmemoryPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyNotifyKeyspaceEvents">ValkeyNotifyKeyspaceEvents</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyNumberOfDatabases">ValkeyNumberOfDatabases</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyPersistence">ValkeyPersistence</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyPubsubClientOutputBufferLimit">ValkeyPubsubClientOutputBufferLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeySsl">ValkeySsl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyTimeout">ValkeyTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties">ManagedDatabaseValkeyProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Migration`<sup>Required</sup> <a name="Migration" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.migration"></a>

```go
func Migration() ManagedDatabaseValkeyPropertiesMigrationOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference">ManagedDatabaseValkeyPropertiesMigrationOutputReference</a>

---

##### `AutomaticUtilityNetworkIpFilterInput`<sup>Optional</sup> <a name="AutomaticUtilityNetworkIpFilterInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput"></a>

```go
func AutomaticUtilityNetworkIpFilterInput() interface{}
```

- *Type:* interface{}

---

##### `BackupHourInput`<sup>Optional</sup> <a name="BackupHourInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.backupHourInput"></a>

```go
func BackupHourInput() *f64
```

- *Type:* *f64

---

##### `BackupMinuteInput`<sup>Optional</sup> <a name="BackupMinuteInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.backupMinuteInput"></a>

```go
func BackupMinuteInput() *f64
```

- *Type:* *f64

---

##### `FrequentSnapshotsInput`<sup>Optional</sup> <a name="FrequentSnapshotsInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.frequentSnapshotsInput"></a>

```go
func FrequentSnapshotsInput() interface{}
```

- *Type:* interface{}

---

##### `IpFilterInput`<sup>Optional</sup> <a name="IpFilterInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.ipFilterInput"></a>

```go
func IpFilterInput() *[]*string
```

- *Type:* *[]*string

---

##### `MigrationInput`<sup>Optional</sup> <a name="MigrationInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.migrationInput"></a>

```go
func MigrationInput() ManagedDatabaseValkeyPropertiesMigration
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration">ManagedDatabaseValkeyPropertiesMigration</a>

---

##### `PublicAccessInput`<sup>Optional</sup> <a name="PublicAccessInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.publicAccessInput"></a>

```go
func PublicAccessInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceLogInput`<sup>Optional</sup> <a name="ServiceLogInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.serviceLogInput"></a>

```go
func ServiceLogInput() interface{}
```

- *Type:* interface{}

---

##### `ValkeyAclChannelsDefaultInput`<sup>Optional</sup> <a name="ValkeyAclChannelsDefaultInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyAclChannelsDefaultInput"></a>

```go
func ValkeyAclChannelsDefaultInput() *string
```

- *Type:* *string

---

##### `ValkeyActiveExpireEffortInput`<sup>Optional</sup> <a name="ValkeyActiveExpireEffortInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyActiveExpireEffortInput"></a>

```go
func ValkeyActiveExpireEffortInput() *f64
```

- *Type:* *f64

---

##### `ValkeyIoThreadsInput`<sup>Optional</sup> <a name="ValkeyIoThreadsInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyIoThreadsInput"></a>

```go
func ValkeyIoThreadsInput() *f64
```

- *Type:* *f64

---

##### `ValkeyLfuDecayTimeInput`<sup>Optional</sup> <a name="ValkeyLfuDecayTimeInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyLfuDecayTimeInput"></a>

```go
func ValkeyLfuDecayTimeInput() *f64
```

- *Type:* *f64

---

##### `ValkeyLfuLogFactorInput`<sup>Optional</sup> <a name="ValkeyLfuLogFactorInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyLfuLogFactorInput"></a>

```go
func ValkeyLfuLogFactorInput() *f64
```

- *Type:* *f64

---

##### `ValkeyMaxmemoryPolicyInput`<sup>Optional</sup> <a name="ValkeyMaxmemoryPolicyInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyMaxmemoryPolicyInput"></a>

```go
func ValkeyMaxmemoryPolicyInput() *string
```

- *Type:* *string

---

##### `ValkeyNotifyKeyspaceEventsInput`<sup>Optional</sup> <a name="ValkeyNotifyKeyspaceEventsInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyNotifyKeyspaceEventsInput"></a>

```go
func ValkeyNotifyKeyspaceEventsInput() *string
```

- *Type:* *string

---

##### `ValkeyNumberOfDatabasesInput`<sup>Optional</sup> <a name="ValkeyNumberOfDatabasesInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyNumberOfDatabasesInput"></a>

```go
func ValkeyNumberOfDatabasesInput() *f64
```

- *Type:* *f64

---

##### `ValkeyPersistenceInput`<sup>Optional</sup> <a name="ValkeyPersistenceInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyPersistenceInput"></a>

```go
func ValkeyPersistenceInput() *string
```

- *Type:* *string

---

##### `ValkeyPubsubClientOutputBufferLimitInput`<sup>Optional</sup> <a name="ValkeyPubsubClientOutputBufferLimitInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyPubsubClientOutputBufferLimitInput"></a>

```go
func ValkeyPubsubClientOutputBufferLimitInput() *f64
```

- *Type:* *f64

---

##### `ValkeySslInput`<sup>Optional</sup> <a name="ValkeySslInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeySslInput"></a>

```go
func ValkeySslInput() interface{}
```

- *Type:* interface{}

---

##### `ValkeyTimeoutInput`<sup>Optional</sup> <a name="ValkeyTimeoutInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyTimeoutInput"></a>

```go
func ValkeyTimeoutInput() *f64
```

- *Type:* *f64

---

##### `AutomaticUtilityNetworkIpFilter`<sup>Required</sup> <a name="AutomaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.automaticUtilityNetworkIpFilter"></a>

```go
func AutomaticUtilityNetworkIpFilter() interface{}
```

- *Type:* interface{}

---

##### `BackupHour`<sup>Required</sup> <a name="BackupHour" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.backupHour"></a>

```go
func BackupHour() *f64
```

- *Type:* *f64

---

##### `BackupMinute`<sup>Required</sup> <a name="BackupMinute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.backupMinute"></a>

```go
func BackupMinute() *f64
```

- *Type:* *f64

---

##### `FrequentSnapshots`<sup>Required</sup> <a name="FrequentSnapshots" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.frequentSnapshots"></a>

```go
func FrequentSnapshots() interface{}
```

- *Type:* interface{}

---

##### `IpFilter`<sup>Required</sup> <a name="IpFilter" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.ipFilter"></a>

```go
func IpFilter() *[]*string
```

- *Type:* *[]*string

---

##### `PublicAccess`<sup>Required</sup> <a name="PublicAccess" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.publicAccess"></a>

```go
func PublicAccess() interface{}
```

- *Type:* interface{}

---

##### `ServiceLog`<sup>Required</sup> <a name="ServiceLog" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.serviceLog"></a>

```go
func ServiceLog() interface{}
```

- *Type:* interface{}

---

##### `ValkeyAclChannelsDefault`<sup>Required</sup> <a name="ValkeyAclChannelsDefault" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyAclChannelsDefault"></a>

```go
func ValkeyAclChannelsDefault() *string
```

- *Type:* *string

---

##### `ValkeyActiveExpireEffort`<sup>Required</sup> <a name="ValkeyActiveExpireEffort" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyActiveExpireEffort"></a>

```go
func ValkeyActiveExpireEffort() *f64
```

- *Type:* *f64

---

##### `ValkeyIoThreads`<sup>Required</sup> <a name="ValkeyIoThreads" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyIoThreads"></a>

```go
func ValkeyIoThreads() *f64
```

- *Type:* *f64

---

##### `ValkeyLfuDecayTime`<sup>Required</sup> <a name="ValkeyLfuDecayTime" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyLfuDecayTime"></a>

```go
func ValkeyLfuDecayTime() *f64
```

- *Type:* *f64

---

##### `ValkeyLfuLogFactor`<sup>Required</sup> <a name="ValkeyLfuLogFactor" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyLfuLogFactor"></a>

```go
func ValkeyLfuLogFactor() *f64
```

- *Type:* *f64

---

##### `ValkeyMaxmemoryPolicy`<sup>Required</sup> <a name="ValkeyMaxmemoryPolicy" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyMaxmemoryPolicy"></a>

```go
func ValkeyMaxmemoryPolicy() *string
```

- *Type:* *string

---

##### `ValkeyNotifyKeyspaceEvents`<sup>Required</sup> <a name="ValkeyNotifyKeyspaceEvents" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyNotifyKeyspaceEvents"></a>

```go
func ValkeyNotifyKeyspaceEvents() *string
```

- *Type:* *string

---

##### `ValkeyNumberOfDatabases`<sup>Required</sup> <a name="ValkeyNumberOfDatabases" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyNumberOfDatabases"></a>

```go
func ValkeyNumberOfDatabases() *f64
```

- *Type:* *f64

---

##### `ValkeyPersistence`<sup>Required</sup> <a name="ValkeyPersistence" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyPersistence"></a>

```go
func ValkeyPersistence() *string
```

- *Type:* *string

---

##### `ValkeyPubsubClientOutputBufferLimit`<sup>Required</sup> <a name="ValkeyPubsubClientOutputBufferLimit" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyPubsubClientOutputBufferLimit"></a>

```go
func ValkeyPubsubClientOutputBufferLimit() *f64
```

- *Type:* *f64

---

##### `ValkeySsl`<sup>Required</sup> <a name="ValkeySsl" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeySsl"></a>

```go
func ValkeySsl() interface{}
```

- *Type:* interface{}

---

##### `ValkeyTimeout`<sup>Required</sup> <a name="ValkeyTimeout" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyTimeout"></a>

```go
func ValkeyTimeout() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabaseValkeyProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties">ManagedDatabaseValkeyProperties</a>

---



