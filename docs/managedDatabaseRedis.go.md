# `managedDatabaseRedis` Submodule <a name="`managedDatabaseRedis` Submodule" id="@cdktf/provider-upcloud.managedDatabaseRedis"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedDatabaseRedis <a name="ManagedDatabaseRedis" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis upcloud_managed_database_redis}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabaseredis"

manageddatabaseredis.NewManagedDatabaseRedis(scope Construct, id *string, config ManagedDatabaseRedisConfig) ManagedDatabaseRedis
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig">ManagedDatabaseRedisConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig">ManagedDatabaseRedisConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetMaintenanceWindowDow">ResetMaintenanceWindowDow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetMaintenanceWindowTime">ResetMaintenanceWindowTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetPowered">ResetPowered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProperties` <a name="PutProperties" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.putProperties"></a>

```go
func PutProperties(value ManagedDatabaseRedisProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties">ManagedDatabaseRedisProperties</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetId"></a>

```go
func ResetId()
```

##### `ResetMaintenanceWindowDow` <a name="ResetMaintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetMaintenanceWindowDow"></a>

```go
func ResetMaintenanceWindowDow()
```

##### `ResetMaintenanceWindowTime` <a name="ResetMaintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetMaintenanceWindowTime"></a>

```go
func ResetMaintenanceWindowTime()
```

##### `ResetPowered` <a name="ResetPowered" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetPowered"></a>

```go
func ResetPowered()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetProperties"></a>

```go
func ResetProperties()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedDatabaseRedis resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabaseredis"

manageddatabaseredis.ManagedDatabaseRedis_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabaseredis"

manageddatabaseredis.ManagedDatabaseRedis_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabaseredis"

manageddatabaseredis.ManagedDatabaseRedis_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabaseredis"

manageddatabaseredis.ManagedDatabaseRedis_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ManagedDatabaseRedis resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ManagedDatabaseRedis to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ManagedDatabaseRedis that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ManagedDatabaseRedis to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.components">Components</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList">ManagedDatabaseRedisComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.nodeStates">NodeStates</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList">ManagedDatabaseRedisNodeStatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.primaryDatabase">PrimaryDatabase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference">ManagedDatabaseRedisPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.serviceHost">ServiceHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.servicePassword">ServicePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.servicePort">ServicePort</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.serviceUri">ServiceUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.serviceUsername">ServiceUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.maintenanceWindowDowInput">MaintenanceWindowDowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.maintenanceWindowTimeInput">MaintenanceWindowTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.planInput">PlanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.poweredInput">PoweredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties">ManagedDatabaseRedisProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.maintenanceWindowDow">MaintenanceWindowDow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.maintenanceWindowTime">MaintenanceWindowTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.plan">Plan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.powered">Powered</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Components`<sup>Required</sup> <a name="Components" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.components"></a>

```go
func Components() ManagedDatabaseRedisComponentsList
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList">ManagedDatabaseRedisComponentsList</a>

---

##### `NodeStates`<sup>Required</sup> <a name="NodeStates" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.nodeStates"></a>

```go
func NodeStates() ManagedDatabaseRedisNodeStatesList
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList">ManagedDatabaseRedisNodeStatesList</a>

---

##### `PrimaryDatabase`<sup>Required</sup> <a name="PrimaryDatabase" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.primaryDatabase"></a>

```go
func PrimaryDatabase() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.properties"></a>

```go
func Properties() ManagedDatabaseRedisPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference">ManagedDatabaseRedisPropertiesOutputReference</a>

---

##### `ServiceHost`<sup>Required</sup> <a name="ServiceHost" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.serviceHost"></a>

```go
func ServiceHost() *string
```

- *Type:* *string

---

##### `ServicePassword`<sup>Required</sup> <a name="ServicePassword" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.servicePassword"></a>

```go
func ServicePassword() *string
```

- *Type:* *string

---

##### `ServicePort`<sup>Required</sup> <a name="ServicePort" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.servicePort"></a>

```go
func ServicePort() *string
```

- *Type:* *string

---

##### `ServiceUri`<sup>Required</sup> <a name="ServiceUri" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.serviceUri"></a>

```go
func ServiceUri() *string
```

- *Type:* *string

---

##### `ServiceUsername`<sup>Required</sup> <a name="ServiceUsername" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.serviceUsername"></a>

```go
func ServiceUsername() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaintenanceWindowDowInput`<sup>Optional</sup> <a name="MaintenanceWindowDowInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.maintenanceWindowDowInput"></a>

```go
func MaintenanceWindowDowInput() *string
```

- *Type:* *string

---

##### `MaintenanceWindowTimeInput`<sup>Optional</sup> <a name="MaintenanceWindowTimeInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.maintenanceWindowTimeInput"></a>

```go
func MaintenanceWindowTimeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.planInput"></a>

```go
func PlanInput() *string
```

- *Type:* *string

---

##### `PoweredInput`<sup>Optional</sup> <a name="PoweredInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.poweredInput"></a>

```go
func PoweredInput() interface{}
```

- *Type:* interface{}

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.propertiesInput"></a>

```go
func PropertiesInput() ManagedDatabaseRedisProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties">ManagedDatabaseRedisProperties</a>

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaintenanceWindowDow`<sup>Required</sup> <a name="MaintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.maintenanceWindowDow"></a>

```go
func MaintenanceWindowDow() *string
```

- *Type:* *string

---

##### `MaintenanceWindowTime`<sup>Required</sup> <a name="MaintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.maintenanceWindowTime"></a>

```go
func MaintenanceWindowTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.plan"></a>

```go
func Plan() *string
```

- *Type:* *string

---

##### `Powered`<sup>Required</sup> <a name="Powered" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.powered"></a>

```go
func Powered() interface{}
```

- *Type:* interface{}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedDatabaseRedisComponents <a name="ManagedDatabaseRedisComponents" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponents.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabaseredis"

&manageddatabaseredis.ManagedDatabaseRedisComponents {

}
```


### ManagedDatabaseRedisConfig <a name="ManagedDatabaseRedisConfig" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabaseredis"

&manageddatabaseredis.ManagedDatabaseRedisConfig {
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
	MaintenanceWindowDow: *string,
	MaintenanceWindowTime: *string,
	Powered: interface{},
	Properties: github.com/cdktf/cdktf-provider-upcloud-go/upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.name">Name</a></code> | <code>*string</code> | Name of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.plan">Plan</a></code> | <code>*string</code> | Service plan to use. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.title">Title</a></code> | <code>*string</code> | Title of a managed database instance. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.zone">Zone</a></code> | <code>*string</code> | Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis#id ManagedDatabaseRedis#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.maintenanceWindowDow">MaintenanceWindowDow</a></code> | <code>*string</code> | Maintenance window day of week. Lower case weekday name (monday, tuesday, ...). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.maintenanceWindowTime">MaintenanceWindowTime</a></code> | <code>*string</code> | Maintenance window UTC time in hh:mm:ss format. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.powered">Powered</a></code> | <code>interface{}</code> | The administrative power state of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties">ManagedDatabaseRedisProperties</a></code> | properties block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the service.

The name is used as a prefix for the logical hostname. Must be unique within an account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis#name ManagedDatabaseRedis#name}

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.plan"></a>

```go
Plan *string
```

- *Type:* *string

Service plan to use.

This determines how much resources the instance will have. You can list available plans with `upctl database plans <type>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis#plan ManagedDatabaseRedis#plan}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.title"></a>

```go
Title *string
```

- *Type:* *string

Title of a managed database instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis#title ManagedDatabaseRedis#title}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis#zone ManagedDatabaseRedis#zone}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis#id ManagedDatabaseRedis#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaintenanceWindowDow`<sup>Optional</sup> <a name="MaintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.maintenanceWindowDow"></a>

```go
MaintenanceWindowDow *string
```

- *Type:* *string

Maintenance window day of week. Lower case weekday name (monday, tuesday, ...).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis#maintenance_window_dow ManagedDatabaseRedis#maintenance_window_dow}

---

##### `MaintenanceWindowTime`<sup>Optional</sup> <a name="MaintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.maintenanceWindowTime"></a>

```go
MaintenanceWindowTime *string
```

- *Type:* *string

Maintenance window UTC time in hh:mm:ss format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis#maintenance_window_time ManagedDatabaseRedis#maintenance_window_time}

---

##### `Powered`<sup>Optional</sup> <a name="Powered" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.powered"></a>

```go
Powered interface{}
```

- *Type:* interface{}

The administrative power state of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis#powered ManagedDatabaseRedis#powered}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.properties"></a>

```go
Properties ManagedDatabaseRedisProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties">ManagedDatabaseRedisProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis#properties ManagedDatabaseRedis#properties}

---

### ManagedDatabaseRedisNodeStates <a name="ManagedDatabaseRedisNodeStates" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStates.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabaseredis"

&manageddatabaseredis.ManagedDatabaseRedisNodeStates {

}
```


### ManagedDatabaseRedisProperties <a name="ManagedDatabaseRedisProperties" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabaseredis"

&manageddatabaseredis.ManagedDatabaseRedisProperties {
	AutomaticUtilityNetworkIpFilter: interface{},
	IpFilter: *[]*string,
	Migration: github.com/cdktf/cdktf-provider-upcloud-go/upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration,
	PublicAccess: interface{},
	RedisAclChannelsDefault: *string,
	RedisIoThreads: *f64,
	RedisLfuDecayTime: *f64,
	RedisLfuLogFactor: *f64,
	RedisMaxmemoryPolicy: *string,
	RedisNotifyKeyspaceEvents: *string,
	RedisNumberOfDatabases: *f64,
	RedisPersistence: *string,
	RedisPubsubClientOutputBufferLimit: *f64,
	RedisSsl: interface{},
	RedisTimeout: *f64,
	RedisVersion: *string,
	ServiceLog: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.automaticUtilityNetworkIpFilter">AutomaticUtilityNetworkIpFilter</a></code> | <code>interface{}</code> | Automatic utility network IP Filter. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.ipFilter">IpFilter</a></code> | <code>*[]*string</code> | IP filter. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.migration">Migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration">ManagedDatabaseRedisPropertiesMigration</a></code> | migration block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.publicAccess">PublicAccess</a></code> | <code>interface{}</code> | Public access allows connections to your Managed Database services via the public internet. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisAclChannelsDefault">RedisAclChannelsDefault</a></code> | <code>*string</code> | Default ACL for pub/sub channels used when Redis user is created. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisIoThreads">RedisIoThreads</a></code> | <code>*f64</code> | Redis IO thread count. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisLfuDecayTime">RedisLfuDecayTime</a></code> | <code>*f64</code> | LFU maxmemory-policy counter decay time in minutes. Default is 1. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisLfuLogFactor">RedisLfuLogFactor</a></code> | <code>*f64</code> | Counter logarithm factor for volatile-lfu and allkeys-lfu maxmemory-policies. Default is 10. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisMaxmemoryPolicy">RedisMaxmemoryPolicy</a></code> | <code>*string</code> | Redis maxmemory-policy. Default is `noeviction`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisNotifyKeyspaceEvents">RedisNotifyKeyspaceEvents</a></code> | <code>*string</code> | Set notify-keyspace-events option. Default is "". |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisNumberOfDatabases">RedisNumberOfDatabases</a></code> | <code>*f64</code> | Number of redis databases. Set number of redis databases. Changing this will cause a restart of redis service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisPersistence">RedisPersistence</a></code> | <code>*string</code> | Redis persistence. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisPubsubClientOutputBufferLimit">RedisPubsubClientOutputBufferLimit</a></code> | <code>*f64</code> | Pub/sub client output buffer hard limit in MB. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisSsl">RedisSsl</a></code> | <code>interface{}</code> | Require SSL to access Redis. Default is `true`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisTimeout">RedisTimeout</a></code> | <code>*f64</code> | Redis idle connection timeout in seconds. Default is 300. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisVersion">RedisVersion</a></code> | <code>*string</code> | Redis major version. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.serviceLog">ServiceLog</a></code> | <code>interface{}</code> | Store logs for the service so that they are available in the HTTP API and console. |

---

##### `AutomaticUtilityNetworkIpFilter`<sup>Optional</sup> <a name="AutomaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.automaticUtilityNetworkIpFilter"></a>

```go
AutomaticUtilityNetworkIpFilter interface{}
```

- *Type:* interface{}

Automatic utility network IP Filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis#automatic_utility_network_ip_filter ManagedDatabaseRedis#automatic_utility_network_ip_filter}

---

##### `IpFilter`<sup>Optional</sup> <a name="IpFilter" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.ipFilter"></a>

```go
IpFilter *[]*string
```

- *Type:* *[]*string

IP filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis#ip_filter ManagedDatabaseRedis#ip_filter}

---

##### `Migration`<sup>Optional</sup> <a name="Migration" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.migration"></a>

```go
Migration ManagedDatabaseRedisPropertiesMigration
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration">ManagedDatabaseRedisPropertiesMigration</a>

migration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis#migration ManagedDatabaseRedis#migration}

---

##### `PublicAccess`<sup>Optional</sup> <a name="PublicAccess" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.publicAccess"></a>

```go
PublicAccess interface{}
```

- *Type:* interface{}

Public access allows connections to your Managed Database services via the public internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis#public_access ManagedDatabaseRedis#public_access}

---

##### `RedisAclChannelsDefault`<sup>Optional</sup> <a name="RedisAclChannelsDefault" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisAclChannelsDefault"></a>

```go
RedisAclChannelsDefault *string
```

- *Type:* *string

Default ACL for pub/sub channels used when Redis user is created.

Determines default pub/sub channels' ACL for new users if ACL is not supplied. When this option is not defined, all_channels is assumed to keep backward compatibility. This option doesn't affect Redis configuration acl-pubsub-default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis#redis_acl_channels_default ManagedDatabaseRedis#redis_acl_channels_default}

---

##### `RedisIoThreads`<sup>Optional</sup> <a name="RedisIoThreads" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisIoThreads"></a>

```go
RedisIoThreads *f64
```

- *Type:* *f64

Redis IO thread count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis#redis_io_threads ManagedDatabaseRedis#redis_io_threads}

---

##### `RedisLfuDecayTime`<sup>Optional</sup> <a name="RedisLfuDecayTime" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisLfuDecayTime"></a>

```go
RedisLfuDecayTime *f64
```

- *Type:* *f64

LFU maxmemory-policy counter decay time in minutes. Default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis#redis_lfu_decay_time ManagedDatabaseRedis#redis_lfu_decay_time}

---

##### `RedisLfuLogFactor`<sup>Optional</sup> <a name="RedisLfuLogFactor" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisLfuLogFactor"></a>

```go
RedisLfuLogFactor *f64
```

- *Type:* *f64

Counter logarithm factor for volatile-lfu and allkeys-lfu maxmemory-policies. Default is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis#redis_lfu_log_factor ManagedDatabaseRedis#redis_lfu_log_factor}

---

##### `RedisMaxmemoryPolicy`<sup>Optional</sup> <a name="RedisMaxmemoryPolicy" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisMaxmemoryPolicy"></a>

```go
RedisMaxmemoryPolicy *string
```

- *Type:* *string

Redis maxmemory-policy. Default is `noeviction`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis#redis_maxmemory_policy ManagedDatabaseRedis#redis_maxmemory_policy}

---

##### `RedisNotifyKeyspaceEvents`<sup>Optional</sup> <a name="RedisNotifyKeyspaceEvents" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisNotifyKeyspaceEvents"></a>

```go
RedisNotifyKeyspaceEvents *string
```

- *Type:* *string

Set notify-keyspace-events option. Default is "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis#redis_notify_keyspace_events ManagedDatabaseRedis#redis_notify_keyspace_events}

---

##### `RedisNumberOfDatabases`<sup>Optional</sup> <a name="RedisNumberOfDatabases" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisNumberOfDatabases"></a>

```go
RedisNumberOfDatabases *f64
```

- *Type:* *f64

Number of redis databases. Set number of redis databases. Changing this will cause a restart of redis service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis#redis_number_of_databases ManagedDatabaseRedis#redis_number_of_databases}

---

##### `RedisPersistence`<sup>Optional</sup> <a name="RedisPersistence" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisPersistence"></a>

```go
RedisPersistence *string
```

- *Type:* *string

Redis persistence.

When persistence is 'rdb', Redis does RDB dumps each 10 minutes if any key is changed. Also RDB dumps are done according to backup schedule for backup purposes. When persistence is 'off', no RDB dumps and backups are done, so data can be lost at any moment if service is restarted for any reason, or if service is powered off. Also service can't be forked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis#redis_persistence ManagedDatabaseRedis#redis_persistence}

---

##### `RedisPubsubClientOutputBufferLimit`<sup>Optional</sup> <a name="RedisPubsubClientOutputBufferLimit" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisPubsubClientOutputBufferLimit"></a>

```go
RedisPubsubClientOutputBufferLimit *f64
```

- *Type:* *f64

Pub/sub client output buffer hard limit in MB.

Set output buffer limit for pub / sub clients in MB. The value is the hard limit, the soft limit is 1/4 of the hard limit. When setting the limit, be mindful of the available memory in the selected service plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis#redis_pubsub_client_output_buffer_limit ManagedDatabaseRedis#redis_pubsub_client_output_buffer_limit}

---

##### `RedisSsl`<sup>Optional</sup> <a name="RedisSsl" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisSsl"></a>

```go
RedisSsl interface{}
```

- *Type:* interface{}

Require SSL to access Redis. Default is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis#redis_ssl ManagedDatabaseRedis#redis_ssl}

---

##### `RedisTimeout`<sup>Optional</sup> <a name="RedisTimeout" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisTimeout"></a>

```go
RedisTimeout *f64
```

- *Type:* *f64

Redis idle connection timeout in seconds. Default is 300.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis#redis_timeout ManagedDatabaseRedis#redis_timeout}

---

##### `RedisVersion`<sup>Optional</sup> <a name="RedisVersion" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisVersion"></a>

```go
RedisVersion *string
```

- *Type:* *string

Redis major version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis#redis_version ManagedDatabaseRedis#redis_version}

---

##### `ServiceLog`<sup>Optional</sup> <a name="ServiceLog" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.serviceLog"></a>

```go
ServiceLog interface{}
```

- *Type:* interface{}

Store logs for the service so that they are available in the HTTP API and console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis#service_log ManagedDatabaseRedis#service_log}

---

### ManagedDatabaseRedisPropertiesMigration <a name="ManagedDatabaseRedisPropertiesMigration" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabaseredis"

&manageddatabaseredis.ManagedDatabaseRedisPropertiesMigration {
	Dbname: *string,
	Host: *string,
	IgnoreDbs: *string,
	Password: *string,
	Port: *f64,
	Ssl: interface{},
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.dbname">Dbname</a></code> | <code>*string</code> | Database name for bootstrapping the initial connection. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.host">Host</a></code> | <code>*string</code> | Hostname or IP address of the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.ignoreDbs">IgnoreDbs</a></code> | <code>*string</code> | Comma-separated list of databases, which should be ignored during migration (supported by MySQL only at the moment). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.password">Password</a></code> | <code>*string</code> | Password for authentication with the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.port">Port</a></code> | <code>*f64</code> | Port number of the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.ssl">Ssl</a></code> | <code>interface{}</code> | The server where to migrate data from is secured with SSL. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.username">Username</a></code> | <code>*string</code> | User name for authentication with the server where to migrate data from. |

---

##### `Dbname`<sup>Optional</sup> <a name="Dbname" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.dbname"></a>

```go
Dbname *string
```

- *Type:* *string

Database name for bootstrapping the initial connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis#dbname ManagedDatabaseRedis#dbname}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.host"></a>

```go
Host *string
```

- *Type:* *string

Hostname or IP address of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis#host ManagedDatabaseRedis#host}

---

##### `IgnoreDbs`<sup>Optional</sup> <a name="IgnoreDbs" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.ignoreDbs"></a>

```go
IgnoreDbs *string
```

- *Type:* *string

Comma-separated list of databases, which should be ignored during migration (supported by MySQL only at the moment).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis#ignore_dbs ManagedDatabaseRedis#ignore_dbs}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.password"></a>

```go
Password *string
```

- *Type:* *string

Password for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis#password ManagedDatabaseRedis#password}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port number of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis#port ManagedDatabaseRedis#port}

---

##### `Ssl`<sup>Optional</sup> <a name="Ssl" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.ssl"></a>

```go
Ssl interface{}
```

- *Type:* interface{}

The server where to migrate data from is secured with SSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis#ssl ManagedDatabaseRedis#ssl}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.username"></a>

```go
Username *string
```

- *Type:* *string

User name for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.2/docs/resources/managed_database_redis#username ManagedDatabaseRedis#username}

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedDatabaseRedisComponentsList <a name="ManagedDatabaseRedisComponentsList" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabaseredis"

manageddatabaseredis.NewManagedDatabaseRedisComponentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ManagedDatabaseRedisComponentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.get"></a>

```go
func Get(index *f64) ManagedDatabaseRedisComponentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ManagedDatabaseRedisComponentsOutputReference <a name="ManagedDatabaseRedisComponentsOutputReference" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabaseredis"

manageddatabaseredis.NewManagedDatabaseRedisComponentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ManagedDatabaseRedisComponentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.component">Component</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.route">Route</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.usage">Usage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponents">ManagedDatabaseRedisComponents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Component`<sup>Required</sup> <a name="Component" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.component"></a>

```go
func Component() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Route`<sup>Required</sup> <a name="Route" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.route"></a>

```go
func Route() *string
```

- *Type:* *string

---

##### `Usage`<sup>Required</sup> <a name="Usage" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.usage"></a>

```go
func Usage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabaseRedisComponents
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponents">ManagedDatabaseRedisComponents</a>

---


### ManagedDatabaseRedisNodeStatesList <a name="ManagedDatabaseRedisNodeStatesList" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabaseredis"

manageddatabaseredis.NewManagedDatabaseRedisNodeStatesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ManagedDatabaseRedisNodeStatesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.get"></a>

```go
func Get(index *f64) ManagedDatabaseRedisNodeStatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ManagedDatabaseRedisNodeStatesOutputReference <a name="ManagedDatabaseRedisNodeStatesOutputReference" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabaseredis"

manageddatabaseredis.NewManagedDatabaseRedisNodeStatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ManagedDatabaseRedisNodeStatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStates">ManagedDatabaseRedisNodeStates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabaseRedisNodeStates
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStates">ManagedDatabaseRedisNodeStates</a>

---


### ManagedDatabaseRedisPropertiesMigrationOutputReference <a name="ManagedDatabaseRedisPropertiesMigrationOutputReference" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabaseredis"

manageddatabaseredis.NewManagedDatabaseRedisPropertiesMigrationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDatabaseRedisPropertiesMigrationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetDbname">ResetDbname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetIgnoreDbs">ResetIgnoreDbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetSsl">ResetSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDbname` <a name="ResetDbname" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetDbname"></a>

```go
func ResetDbname()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetIgnoreDbs` <a name="ResetIgnoreDbs" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetIgnoreDbs"></a>

```go
func ResetIgnoreDbs()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetSsl` <a name="ResetSsl" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetSsl"></a>

```go
func ResetSsl()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetUsername"></a>

```go
func ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.dbnameInput">DbnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.ignoreDbsInput">IgnoreDbsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.sslInput">SslInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.dbname">Dbname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.ignoreDbs">IgnoreDbs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.ssl">Ssl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration">ManagedDatabaseRedisPropertiesMigration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DbnameInput`<sup>Optional</sup> <a name="DbnameInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.dbnameInput"></a>

```go
func DbnameInput() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `IgnoreDbsInput`<sup>Optional</sup> <a name="IgnoreDbsInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.ignoreDbsInput"></a>

```go
func IgnoreDbsInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `SslInput`<sup>Optional</sup> <a name="SslInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.sslInput"></a>

```go
func SslInput() interface{}
```

- *Type:* interface{}

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Dbname`<sup>Required</sup> <a name="Dbname" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.dbname"></a>

```go
func Dbname() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `IgnoreDbs`<sup>Required</sup> <a name="IgnoreDbs" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.ignoreDbs"></a>

```go
func IgnoreDbs() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Ssl`<sup>Required</sup> <a name="Ssl" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.ssl"></a>

```go
func Ssl() interface{}
```

- *Type:* interface{}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabaseRedisPropertiesMigration
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration">ManagedDatabaseRedisPropertiesMigration</a>

---


### ManagedDatabaseRedisPropertiesOutputReference <a name="ManagedDatabaseRedisPropertiesOutputReference" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabaseredis"

manageddatabaseredis.NewManagedDatabaseRedisPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDatabaseRedisPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.putMigration">PutMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter">ResetAutomaticUtilityNetworkIpFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetIpFilter">ResetIpFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetMigration">ResetMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetPublicAccess">ResetPublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisAclChannelsDefault">ResetRedisAclChannelsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisIoThreads">ResetRedisIoThreads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisLfuDecayTime">ResetRedisLfuDecayTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisLfuLogFactor">ResetRedisLfuLogFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisMaxmemoryPolicy">ResetRedisMaxmemoryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisNotifyKeyspaceEvents">ResetRedisNotifyKeyspaceEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisNumberOfDatabases">ResetRedisNumberOfDatabases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisPersistence">ResetRedisPersistence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisPubsubClientOutputBufferLimit">ResetRedisPubsubClientOutputBufferLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisSsl">ResetRedisSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisTimeout">ResetRedisTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisVersion">ResetRedisVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetServiceLog">ResetServiceLog</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMigration` <a name="PutMigration" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.putMigration"></a>

```go
func PutMigration(value ManagedDatabaseRedisPropertiesMigration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.putMigration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration">ManagedDatabaseRedisPropertiesMigration</a>

---

##### `ResetAutomaticUtilityNetworkIpFilter` <a name="ResetAutomaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter"></a>

```go
func ResetAutomaticUtilityNetworkIpFilter()
```

##### `ResetIpFilter` <a name="ResetIpFilter" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetIpFilter"></a>

```go
func ResetIpFilter()
```

##### `ResetMigration` <a name="ResetMigration" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetMigration"></a>

```go
func ResetMigration()
```

##### `ResetPublicAccess` <a name="ResetPublicAccess" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetPublicAccess"></a>

```go
func ResetPublicAccess()
```

##### `ResetRedisAclChannelsDefault` <a name="ResetRedisAclChannelsDefault" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisAclChannelsDefault"></a>

```go
func ResetRedisAclChannelsDefault()
```

##### `ResetRedisIoThreads` <a name="ResetRedisIoThreads" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisIoThreads"></a>

```go
func ResetRedisIoThreads()
```

##### `ResetRedisLfuDecayTime` <a name="ResetRedisLfuDecayTime" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisLfuDecayTime"></a>

```go
func ResetRedisLfuDecayTime()
```

##### `ResetRedisLfuLogFactor` <a name="ResetRedisLfuLogFactor" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisLfuLogFactor"></a>

```go
func ResetRedisLfuLogFactor()
```

##### `ResetRedisMaxmemoryPolicy` <a name="ResetRedisMaxmemoryPolicy" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisMaxmemoryPolicy"></a>

```go
func ResetRedisMaxmemoryPolicy()
```

##### `ResetRedisNotifyKeyspaceEvents` <a name="ResetRedisNotifyKeyspaceEvents" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisNotifyKeyspaceEvents"></a>

```go
func ResetRedisNotifyKeyspaceEvents()
```

##### `ResetRedisNumberOfDatabases` <a name="ResetRedisNumberOfDatabases" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisNumberOfDatabases"></a>

```go
func ResetRedisNumberOfDatabases()
```

##### `ResetRedisPersistence` <a name="ResetRedisPersistence" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisPersistence"></a>

```go
func ResetRedisPersistence()
```

##### `ResetRedisPubsubClientOutputBufferLimit` <a name="ResetRedisPubsubClientOutputBufferLimit" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisPubsubClientOutputBufferLimit"></a>

```go
func ResetRedisPubsubClientOutputBufferLimit()
```

##### `ResetRedisSsl` <a name="ResetRedisSsl" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisSsl"></a>

```go
func ResetRedisSsl()
```

##### `ResetRedisTimeout` <a name="ResetRedisTimeout" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisTimeout"></a>

```go
func ResetRedisTimeout()
```

##### `ResetRedisVersion` <a name="ResetRedisVersion" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisVersion"></a>

```go
func ResetRedisVersion()
```

##### `ResetServiceLog` <a name="ResetServiceLog" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetServiceLog"></a>

```go
func ResetServiceLog()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.migration">Migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference">ManagedDatabaseRedisPropertiesMigrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput">AutomaticUtilityNetworkIpFilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.ipFilterInput">IpFilterInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.migrationInput">MigrationInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration">ManagedDatabaseRedisPropertiesMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.publicAccessInput">PublicAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisAclChannelsDefaultInput">RedisAclChannelsDefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisIoThreadsInput">RedisIoThreadsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisLfuDecayTimeInput">RedisLfuDecayTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisLfuLogFactorInput">RedisLfuLogFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisMaxmemoryPolicyInput">RedisMaxmemoryPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisNotifyKeyspaceEventsInput">RedisNotifyKeyspaceEventsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisNumberOfDatabasesInput">RedisNumberOfDatabasesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisPersistenceInput">RedisPersistenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisPubsubClientOutputBufferLimitInput">RedisPubsubClientOutputBufferLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisSslInput">RedisSslInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisTimeoutInput">RedisTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisVersionInput">RedisVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.serviceLogInput">ServiceLogInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.automaticUtilityNetworkIpFilter">AutomaticUtilityNetworkIpFilter</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.ipFilter">IpFilter</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.publicAccess">PublicAccess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisAclChannelsDefault">RedisAclChannelsDefault</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisIoThreads">RedisIoThreads</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisLfuDecayTime">RedisLfuDecayTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisLfuLogFactor">RedisLfuLogFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisMaxmemoryPolicy">RedisMaxmemoryPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisNotifyKeyspaceEvents">RedisNotifyKeyspaceEvents</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisNumberOfDatabases">RedisNumberOfDatabases</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisPersistence">RedisPersistence</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisPubsubClientOutputBufferLimit">RedisPubsubClientOutputBufferLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisSsl">RedisSsl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisTimeout">RedisTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisVersion">RedisVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.serviceLog">ServiceLog</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties">ManagedDatabaseRedisProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Migration`<sup>Required</sup> <a name="Migration" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.migration"></a>

```go
func Migration() ManagedDatabaseRedisPropertiesMigrationOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference">ManagedDatabaseRedisPropertiesMigrationOutputReference</a>

---

##### `AutomaticUtilityNetworkIpFilterInput`<sup>Optional</sup> <a name="AutomaticUtilityNetworkIpFilterInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput"></a>

```go
func AutomaticUtilityNetworkIpFilterInput() interface{}
```

- *Type:* interface{}

---

##### `IpFilterInput`<sup>Optional</sup> <a name="IpFilterInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.ipFilterInput"></a>

```go
func IpFilterInput() *[]*string
```

- *Type:* *[]*string

---

##### `MigrationInput`<sup>Optional</sup> <a name="MigrationInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.migrationInput"></a>

```go
func MigrationInput() ManagedDatabaseRedisPropertiesMigration
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration">ManagedDatabaseRedisPropertiesMigration</a>

---

##### `PublicAccessInput`<sup>Optional</sup> <a name="PublicAccessInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.publicAccessInput"></a>

```go
func PublicAccessInput() interface{}
```

- *Type:* interface{}

---

##### `RedisAclChannelsDefaultInput`<sup>Optional</sup> <a name="RedisAclChannelsDefaultInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisAclChannelsDefaultInput"></a>

```go
func RedisAclChannelsDefaultInput() *string
```

- *Type:* *string

---

##### `RedisIoThreadsInput`<sup>Optional</sup> <a name="RedisIoThreadsInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisIoThreadsInput"></a>

```go
func RedisIoThreadsInput() *f64
```

- *Type:* *f64

---

##### `RedisLfuDecayTimeInput`<sup>Optional</sup> <a name="RedisLfuDecayTimeInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisLfuDecayTimeInput"></a>

```go
func RedisLfuDecayTimeInput() *f64
```

- *Type:* *f64

---

##### `RedisLfuLogFactorInput`<sup>Optional</sup> <a name="RedisLfuLogFactorInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisLfuLogFactorInput"></a>

```go
func RedisLfuLogFactorInput() *f64
```

- *Type:* *f64

---

##### `RedisMaxmemoryPolicyInput`<sup>Optional</sup> <a name="RedisMaxmemoryPolicyInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisMaxmemoryPolicyInput"></a>

```go
func RedisMaxmemoryPolicyInput() *string
```

- *Type:* *string

---

##### `RedisNotifyKeyspaceEventsInput`<sup>Optional</sup> <a name="RedisNotifyKeyspaceEventsInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisNotifyKeyspaceEventsInput"></a>

```go
func RedisNotifyKeyspaceEventsInput() *string
```

- *Type:* *string

---

##### `RedisNumberOfDatabasesInput`<sup>Optional</sup> <a name="RedisNumberOfDatabasesInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisNumberOfDatabasesInput"></a>

```go
func RedisNumberOfDatabasesInput() *f64
```

- *Type:* *f64

---

##### `RedisPersistenceInput`<sup>Optional</sup> <a name="RedisPersistenceInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisPersistenceInput"></a>

```go
func RedisPersistenceInput() *string
```

- *Type:* *string

---

##### `RedisPubsubClientOutputBufferLimitInput`<sup>Optional</sup> <a name="RedisPubsubClientOutputBufferLimitInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisPubsubClientOutputBufferLimitInput"></a>

```go
func RedisPubsubClientOutputBufferLimitInput() *f64
```

- *Type:* *f64

---

##### `RedisSslInput`<sup>Optional</sup> <a name="RedisSslInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisSslInput"></a>

```go
func RedisSslInput() interface{}
```

- *Type:* interface{}

---

##### `RedisTimeoutInput`<sup>Optional</sup> <a name="RedisTimeoutInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisTimeoutInput"></a>

```go
func RedisTimeoutInput() *f64
```

- *Type:* *f64

---

##### `RedisVersionInput`<sup>Optional</sup> <a name="RedisVersionInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisVersionInput"></a>

```go
func RedisVersionInput() *string
```

- *Type:* *string

---

##### `ServiceLogInput`<sup>Optional</sup> <a name="ServiceLogInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.serviceLogInput"></a>

```go
func ServiceLogInput() interface{}
```

- *Type:* interface{}

---

##### `AutomaticUtilityNetworkIpFilter`<sup>Required</sup> <a name="AutomaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.automaticUtilityNetworkIpFilter"></a>

```go
func AutomaticUtilityNetworkIpFilter() interface{}
```

- *Type:* interface{}

---

##### `IpFilter`<sup>Required</sup> <a name="IpFilter" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.ipFilter"></a>

```go
func IpFilter() *[]*string
```

- *Type:* *[]*string

---

##### `PublicAccess`<sup>Required</sup> <a name="PublicAccess" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.publicAccess"></a>

```go
func PublicAccess() interface{}
```

- *Type:* interface{}

---

##### `RedisAclChannelsDefault`<sup>Required</sup> <a name="RedisAclChannelsDefault" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisAclChannelsDefault"></a>

```go
func RedisAclChannelsDefault() *string
```

- *Type:* *string

---

##### `RedisIoThreads`<sup>Required</sup> <a name="RedisIoThreads" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisIoThreads"></a>

```go
func RedisIoThreads() *f64
```

- *Type:* *f64

---

##### `RedisLfuDecayTime`<sup>Required</sup> <a name="RedisLfuDecayTime" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisLfuDecayTime"></a>

```go
func RedisLfuDecayTime() *f64
```

- *Type:* *f64

---

##### `RedisLfuLogFactor`<sup>Required</sup> <a name="RedisLfuLogFactor" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisLfuLogFactor"></a>

```go
func RedisLfuLogFactor() *f64
```

- *Type:* *f64

---

##### `RedisMaxmemoryPolicy`<sup>Required</sup> <a name="RedisMaxmemoryPolicy" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisMaxmemoryPolicy"></a>

```go
func RedisMaxmemoryPolicy() *string
```

- *Type:* *string

---

##### `RedisNotifyKeyspaceEvents`<sup>Required</sup> <a name="RedisNotifyKeyspaceEvents" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisNotifyKeyspaceEvents"></a>

```go
func RedisNotifyKeyspaceEvents() *string
```

- *Type:* *string

---

##### `RedisNumberOfDatabases`<sup>Required</sup> <a name="RedisNumberOfDatabases" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisNumberOfDatabases"></a>

```go
func RedisNumberOfDatabases() *f64
```

- *Type:* *f64

---

##### `RedisPersistence`<sup>Required</sup> <a name="RedisPersistence" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisPersistence"></a>

```go
func RedisPersistence() *string
```

- *Type:* *string

---

##### `RedisPubsubClientOutputBufferLimit`<sup>Required</sup> <a name="RedisPubsubClientOutputBufferLimit" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisPubsubClientOutputBufferLimit"></a>

```go
func RedisPubsubClientOutputBufferLimit() *f64
```

- *Type:* *f64

---

##### `RedisSsl`<sup>Required</sup> <a name="RedisSsl" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisSsl"></a>

```go
func RedisSsl() interface{}
```

- *Type:* interface{}

---

##### `RedisTimeout`<sup>Required</sup> <a name="RedisTimeout" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisTimeout"></a>

```go
func RedisTimeout() *f64
```

- *Type:* *f64

---

##### `RedisVersion`<sup>Required</sup> <a name="RedisVersion" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisVersion"></a>

```go
func RedisVersion() *string
```

- *Type:* *string

---

##### `ServiceLog`<sup>Required</sup> <a name="ServiceLog" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.serviceLog"></a>

```go
func ServiceLog() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabaseRedisProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties">ManagedDatabaseRedisProperties</a>

---



