# `managedDatabasePostgresql` Submodule <a name="`managedDatabasePostgresql` Submodule" id="@cdktf/provider-upcloud.managedDatabasePostgresql"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedDatabasePostgresql <a name="ManagedDatabasePostgresql" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql upcloud_managed_database_postgresql}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabasepostgresql"

manageddatabasepostgresql.NewManagedDatabasePostgresql(scope Construct, id *string, config ManagedDatabasePostgresqlConfig) ManagedDatabasePostgresql
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig">ManagedDatabasePostgresqlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig">ManagedDatabasePostgresqlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putNetwork">PutNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetMaintenanceWindowDow">ResetMaintenanceWindowDow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetMaintenanceWindowTime">ResetMaintenanceWindowTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetPowered">ResetPowered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetTerminationProtection">ResetTerminationProtection</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNetwork` <a name="PutNetwork" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putNetwork"></a>

```go
func PutNetwork(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putNetwork.parameter.value"></a>

- *Type:* interface{}

---

##### `PutProperties` <a name="PutProperties" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties"></a>

```go
func PutProperties(value ManagedDatabasePostgresqlProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMaintenanceWindowDow` <a name="ResetMaintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetMaintenanceWindowDow"></a>

```go
func ResetMaintenanceWindowDow()
```

##### `ResetMaintenanceWindowTime` <a name="ResetMaintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetMaintenanceWindowTime"></a>

```go
func ResetMaintenanceWindowTime()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetPowered` <a name="ResetPowered" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetPowered"></a>

```go
func ResetPowered()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetTerminationProtection` <a name="ResetTerminationProtection" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetTerminationProtection"></a>

```go
func ResetTerminationProtection()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedDatabasePostgresql resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabasepostgresql"

manageddatabasepostgresql.ManagedDatabasePostgresql_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabasepostgresql"

manageddatabasepostgresql.ManagedDatabasePostgresql_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabasepostgresql"

manageddatabasepostgresql.ManagedDatabasePostgresql_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabasepostgresql"

manageddatabasepostgresql.ManagedDatabasePostgresql_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ManagedDatabasePostgresql resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ManagedDatabasePostgresql to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ManagedDatabasePostgresql that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ManagedDatabasePostgresql to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.components">Components</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList">ManagedDatabasePostgresqlComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.network">Network</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList">ManagedDatabasePostgresqlNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.nodeStates">NodeStates</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList">ManagedDatabasePostgresqlNodeStatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.primaryDatabase">PrimaryDatabase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference">ManagedDatabasePostgresqlPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.serviceHost">ServiceHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.servicePassword">ServicePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.servicePort">ServicePort</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.serviceUri">ServiceUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.serviceUsername">ServiceUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.sslmode">Sslmode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowDowInput">MaintenanceWindowDowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowTimeInput">MaintenanceWindowTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.networkInput">NetworkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.planInput">PlanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.poweredInput">PoweredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terminationProtectionInput">TerminationProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowDow">MaintenanceWindowDow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowTime">MaintenanceWindowTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.plan">Plan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.powered">Powered</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terminationProtection">TerminationProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Components`<sup>Required</sup> <a name="Components" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.components"></a>

```go
func Components() ManagedDatabasePostgresqlComponentsList
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList">ManagedDatabasePostgresqlComponentsList</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.network"></a>

```go
func Network() ManagedDatabasePostgresqlNetworkList
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList">ManagedDatabasePostgresqlNetworkList</a>

---

##### `NodeStates`<sup>Required</sup> <a name="NodeStates" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.nodeStates"></a>

```go
func NodeStates() ManagedDatabasePostgresqlNodeStatesList
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList">ManagedDatabasePostgresqlNodeStatesList</a>

---

##### `PrimaryDatabase`<sup>Required</sup> <a name="PrimaryDatabase" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.primaryDatabase"></a>

```go
func PrimaryDatabase() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.properties"></a>

```go
func Properties() ManagedDatabasePostgresqlPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference">ManagedDatabasePostgresqlPropertiesOutputReference</a>

---

##### `ServiceHost`<sup>Required</sup> <a name="ServiceHost" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.serviceHost"></a>

```go
func ServiceHost() *string
```

- *Type:* *string

---

##### `ServicePassword`<sup>Required</sup> <a name="ServicePassword" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.servicePassword"></a>

```go
func ServicePassword() *string
```

- *Type:* *string

---

##### `ServicePort`<sup>Required</sup> <a name="ServicePort" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.servicePort"></a>

```go
func ServicePort() *string
```

- *Type:* *string

---

##### `ServiceUri`<sup>Required</sup> <a name="ServiceUri" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.serviceUri"></a>

```go
func ServiceUri() *string
```

- *Type:* *string

---

##### `ServiceUsername`<sup>Required</sup> <a name="ServiceUsername" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.serviceUsername"></a>

```go
func ServiceUsername() *string
```

- *Type:* *string

---

##### `Sslmode`<sup>Required</sup> <a name="Sslmode" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.sslmode"></a>

```go
func Sslmode() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaintenanceWindowDowInput`<sup>Optional</sup> <a name="MaintenanceWindowDowInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowDowInput"></a>

```go
func MaintenanceWindowDowInput() *string
```

- *Type:* *string

---

##### `MaintenanceWindowTimeInput`<sup>Optional</sup> <a name="MaintenanceWindowTimeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowTimeInput"></a>

```go
func MaintenanceWindowTimeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.networkInput"></a>

```go
func NetworkInput() interface{}
```

- *Type:* interface{}

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.planInput"></a>

```go
func PlanInput() *string
```

- *Type:* *string

---

##### `PoweredInput`<sup>Optional</sup> <a name="PoweredInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.poweredInput"></a>

```go
func PoweredInput() interface{}
```

- *Type:* interface{}

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.propertiesInput"></a>

```go
func PropertiesInput() ManagedDatabasePostgresqlProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a>

---

##### `TerminationProtectionInput`<sup>Optional</sup> <a name="TerminationProtectionInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terminationProtectionInput"></a>

```go
func TerminationProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaintenanceWindowDow`<sup>Required</sup> <a name="MaintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowDow"></a>

```go
func MaintenanceWindowDow() *string
```

- *Type:* *string

---

##### `MaintenanceWindowTime`<sup>Required</sup> <a name="MaintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowTime"></a>

```go
func MaintenanceWindowTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.plan"></a>

```go
func Plan() *string
```

- *Type:* *string

---

##### `Powered`<sup>Required</sup> <a name="Powered" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.powered"></a>

```go
func Powered() interface{}
```

- *Type:* interface{}

---

##### `TerminationProtection`<sup>Required</sup> <a name="TerminationProtection" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terminationProtection"></a>

```go
func TerminationProtection() interface{}
```

- *Type:* interface{}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedDatabasePostgresqlComponents <a name="ManagedDatabasePostgresqlComponents" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponents.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabasepostgresql"

&manageddatabasepostgresql.ManagedDatabasePostgresqlComponents {

}
```


### ManagedDatabasePostgresqlConfig <a name="ManagedDatabasePostgresqlConfig" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabasepostgresql"

&manageddatabasepostgresql.ManagedDatabasePostgresqlConfig {
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
	Properties: github.com/cdktf/cdktf-provider-upcloud-go/upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties,
	TerminationProtection: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.name">Name</a></code> | <code>*string</code> | Name of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.plan">Plan</a></code> | <code>*string</code> | Service plan to use. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.title">Title</a></code> | <code>*string</code> | Title of a managed database instance. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.zone">Zone</a></code> | <code>*string</code> | Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#id ManagedDatabasePostgresql#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | User defined key-value pairs to classify the managed database. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.maintenanceWindowDow">MaintenanceWindowDow</a></code> | <code>*string</code> | Maintenance window day of week. Lower case weekday name (monday, tuesday, ...). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.maintenanceWindowTime">MaintenanceWindowTime</a></code> | <code>*string</code> | Maintenance window UTC time in hh:mm:ss format. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.network">Network</a></code> | <code>interface{}</code> | network block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.powered">Powered</a></code> | <code>interface{}</code> | The administrative power state of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.terminationProtection">TerminationProtection</a></code> | <code>interface{}</code> | If set to true, prevents the managed service from being powered off, or deleted. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the service.

The name is used as a prefix for the logical hostname. Must be unique within an account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#name ManagedDatabasePostgresql#name}

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.plan"></a>

```go
Plan *string
```

- *Type:* *string

Service plan to use.

This determines how much resources the instance will have. You can list available plans with `upctl database plans <type>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#plan ManagedDatabasePostgresql#plan}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.title"></a>

```go
Title *string
```

- *Type:* *string

Title of a managed database instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#title ManagedDatabasePostgresql#title}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#zone ManagedDatabasePostgresql#zone}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#id ManagedDatabasePostgresql#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

User defined key-value pairs to classify the managed database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#labels ManagedDatabasePostgresql#labels}

---

##### `MaintenanceWindowDow`<sup>Optional</sup> <a name="MaintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.maintenanceWindowDow"></a>

```go
MaintenanceWindowDow *string
```

- *Type:* *string

Maintenance window day of week. Lower case weekday name (monday, tuesday, ...).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#maintenance_window_dow ManagedDatabasePostgresql#maintenance_window_dow}

---

##### `MaintenanceWindowTime`<sup>Optional</sup> <a name="MaintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.maintenanceWindowTime"></a>

```go
MaintenanceWindowTime *string
```

- *Type:* *string

Maintenance window UTC time in hh:mm:ss format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#maintenance_window_time ManagedDatabasePostgresql#maintenance_window_time}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.network"></a>

```go
Network interface{}
```

- *Type:* interface{}

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#network ManagedDatabasePostgresql#network}

---

##### `Powered`<sup>Optional</sup> <a name="Powered" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.powered"></a>

```go
Powered interface{}
```

- *Type:* interface{}

The administrative power state of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#powered ManagedDatabasePostgresql#powered}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.properties"></a>

```go
Properties ManagedDatabasePostgresqlProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#properties ManagedDatabasePostgresql#properties}

---

##### `TerminationProtection`<sup>Optional</sup> <a name="TerminationProtection" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.terminationProtection"></a>

```go
TerminationProtection interface{}
```

- *Type:* interface{}

If set to true, prevents the managed service from being powered off, or deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#termination_protection ManagedDatabasePostgresql#termination_protection}

---

### ManagedDatabasePostgresqlNetwork <a name="ManagedDatabasePostgresqlNetwork" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabasepostgresql"

&manageddatabasepostgresql.ManagedDatabasePostgresqlNetwork {
	Family: *string,
	Name: *string,
	Type: *string,
	Uuid: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork.property.family">Family</a></code> | <code>*string</code> | Network family. Currently only `IPv4` is supported. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork.property.name">Name</a></code> | <code>*string</code> | The name of the network. Must be unique within the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork.property.type">Type</a></code> | <code>*string</code> | The type of the network. Must be private. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork.property.uuid">Uuid</a></code> | <code>*string</code> | Private network UUID. Must reside in the same zone as the database. |

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork.property.family"></a>

```go
Family *string
```

- *Type:* *string

Network family. Currently only `IPv4` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#family ManagedDatabasePostgresql#family}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the network. Must be unique within the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#name ManagedDatabasePostgresql#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the network. Must be private.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#type ManagedDatabasePostgresql#type}

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork.property.uuid"></a>

```go
Uuid *string
```

- *Type:* *string

Private network UUID. Must reside in the same zone as the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#uuid ManagedDatabasePostgresql#uuid}

---

### ManagedDatabasePostgresqlNodeStates <a name="ManagedDatabasePostgresqlNodeStates" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStates.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabasepostgresql"

&manageddatabasepostgresql.ManagedDatabasePostgresqlNodeStates {

}
```


### ManagedDatabasePostgresqlProperties <a name="ManagedDatabasePostgresqlProperties" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabasepostgresql"

&manageddatabasepostgresql.ManagedDatabasePostgresqlProperties {
	AdminPassword: *string,
	AdminUsername: *string,
	AutomaticUtilityNetworkIpFilter: interface{},
	AutovacuumAnalyzeScaleFactor: *f64,
	AutovacuumAnalyzeThreshold: *f64,
	AutovacuumFreezeMaxAge: *f64,
	AutovacuumMaxWorkers: *f64,
	AutovacuumNaptime: *f64,
	AutovacuumVacuumCostDelay: *f64,
	AutovacuumVacuumCostLimit: *f64,
	AutovacuumVacuumScaleFactor: *f64,
	AutovacuumVacuumThreshold: *f64,
	BackupHour: *f64,
	BackupMinute: *f64,
	BgwriterDelay: *f64,
	BgwriterFlushAfter: *f64,
	BgwriterLruMaxpages: *f64,
	BgwriterLruMultiplier: *f64,
	DeadlockTimeout: *f64,
	DefaultToastCompression: *string,
	IdleInTransactionSessionTimeout: *f64,
	IpFilter: *[]*string,
	Jit: interface{},
	LogAutovacuumMinDuration: *f64,
	LogErrorVerbosity: *string,
	LogLinePrefix: *string,
	LogMinDurationStatement: *f64,
	LogTempFiles: *f64,
	MaxFilesPerProcess: *f64,
	MaxLocksPerTransaction: *f64,
	MaxLogicalReplicationWorkers: *f64,
	MaxParallelWorkers: *f64,
	MaxParallelWorkersPerGather: *f64,
	MaxPredLocksPerTransaction: *f64,
	MaxPreparedTransactions: *f64,
	MaxReplicationSlots: *f64,
	MaxSlotWalKeepSize: *f64,
	MaxStackDepth: *f64,
	MaxStandbyArchiveDelay: *f64,
	MaxStandbyStreamingDelay: *f64,
	MaxWalSenders: *f64,
	MaxWorkerProcesses: *f64,
	Migration: github.com/cdktf/cdktf-provider-upcloud-go/upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration,
	PasswordEncryption: *string,
	Pgbouncer: github.com/cdktf/cdktf-provider-upcloud-go/upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer,
	Pglookout: github.com/cdktf/cdktf-provider-upcloud-go/upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout,
	PgPartmanBgwInterval: *f64,
	PgPartmanBgwRole: *string,
	PgStatMonitorEnable: interface{},
	PgStatMonitorPgsmEnableQueryPlan: interface{},
	PgStatMonitorPgsmMaxBuckets: *f64,
	PgStatStatementsTrack: *string,
	PublicAccess: interface{},
	ServiceLog: interface{},
	SharedBuffersPercentage: *f64,
	SynchronousReplication: *string,
	TempFileLimit: *f64,
	Timescaledb: github.com/cdktf/cdktf-provider-upcloud-go/upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb,
	Timezone: *string,
	TrackActivityQuerySize: *f64,
	TrackCommitTimestamp: *string,
	TrackFunctions: *string,
	TrackIoTiming: *string,
	Variant: *string,
	Version: *string,
	WalSenderTimeout: *f64,
	WalWriterDelay: *f64,
	WorkMem: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.adminPassword">AdminPassword</a></code> | <code>*string</code> | Custom password for admin user. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.adminUsername">AdminUsername</a></code> | <code>*string</code> | Custom username for admin user. This must be set only when a new service is being created. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.automaticUtilityNetworkIpFilter">AutomaticUtilityNetworkIpFilter</a></code> | <code>interface{}</code> | Automatic utility network IP Filter. Automatically allow connections from servers in the utility network within the same zone. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumAnalyzeScaleFactor">AutovacuumAnalyzeScaleFactor</a></code> | <code>*f64</code> | Specifies a fraction of the table size to add to autovacuum_analyze_threshold when deciding whether to trigger an ANALYZE. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumAnalyzeThreshold">AutovacuumAnalyzeThreshold</a></code> | <code>*f64</code> | Specifies the minimum number of inserted, updated or deleted tuples needed to trigger an ANALYZE in any one table. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumFreezeMaxAge">AutovacuumFreezeMaxAge</a></code> | <code>*f64</code> | Specifies the maximum age (in transactions) that a table's pg_class.relfrozenxid field can attain before a VACUUM operation is forced to prevent transaction ID wraparound within the table. Note that the system will launch autovacuum processes to prevent wraparound even when autovacuum is otherwise disabled. This parameter will cause the server to be restarted. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumMaxWorkers">AutovacuumMaxWorkers</a></code> | <code>*f64</code> | Specifies the maximum number of autovacuum processes (other than the autovacuum launcher) that may be running at any one time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumNaptime">AutovacuumNaptime</a></code> | <code>*f64</code> | Specifies the minimum delay between autovacuum runs on any given database. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumCostDelay">AutovacuumVacuumCostDelay</a></code> | <code>*f64</code> | Specifies the cost delay value that will be used in automatic VACUUM operations. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumCostLimit">AutovacuumVacuumCostLimit</a></code> | <code>*f64</code> | Specifies the cost limit value that will be used in automatic VACUUM operations. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumScaleFactor">AutovacuumVacuumScaleFactor</a></code> | <code>*f64</code> | Specifies a fraction of the table size to add to autovacuum_vacuum_threshold when deciding whether to trigger a VACUUM. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumThreshold">AutovacuumVacuumThreshold</a></code> | <code>*f64</code> | Specifies the minimum number of updated or deleted tuples needed to trigger a VACUUM in any one table. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.backupHour">BackupHour</a></code> | <code>*f64</code> | The hour of day (in UTC) when backup for the service is started. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.backupMinute">BackupMinute</a></code> | <code>*f64</code> | The minute of an hour when backup for the service is started. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterDelay">BgwriterDelay</a></code> | <code>*f64</code> | Specifies the delay between activity rounds for the background writer in milliseconds. Default is 200. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterFlushAfter">BgwriterFlushAfter</a></code> | <code>*f64</code> | Whenever more than bgwriter_flush_after bytes have been written by the background writer, attempt to force the OS to issue these writes to the underlying storage. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterLruMaxpages">BgwriterLruMaxpages</a></code> | <code>*f64</code> | In each round, no more than this many buffers will be written by the background writer. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterLruMultiplier">BgwriterLruMultiplier</a></code> | <code>*f64</code> | The average recent need for new buffers is multiplied by bgwriter_lru_multiplier to arrive at an estimate of the number that will be needed during the next round, (up to bgwriter_lru_maxpages). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.deadlockTimeout">DeadlockTimeout</a></code> | <code>*f64</code> | This is the amount of time, in milliseconds, to wait on a lock before checking to see if there is a deadlock condition. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.defaultToastCompression">DefaultToastCompression</a></code> | <code>*string</code> | Specifies the default TOAST compression method for values of compressible columns (the default is lz4). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.idleInTransactionSessionTimeout">IdleInTransactionSessionTimeout</a></code> | <code>*f64</code> | Time out sessions with open transactions after this number of milliseconds. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.ipFilter">IpFilter</a></code> | <code>*[]*string</code> | IP filter. Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.jit">Jit</a></code> | <code>interface{}</code> | Controls system-wide use of Just-in-Time Compilation (JIT). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logAutovacuumMinDuration">LogAutovacuumMinDuration</a></code> | <code>*f64</code> | Causes each action executed by autovacuum to be logged if it ran for at least the specified number of milliseconds. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logErrorVerbosity">LogErrorVerbosity</a></code> | <code>*string</code> | Controls the amount of detail written in the server log for each message that is logged. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logLinePrefix">LogLinePrefix</a></code> | <code>*string</code> | Choose from one of the available log formats. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logMinDurationStatement">LogMinDurationStatement</a></code> | <code>*f64</code> | Log statements that take more than this number of milliseconds to run, -1 disables. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logTempFiles">LogTempFiles</a></code> | <code>*f64</code> | Log statements for each temporary file created larger than this number of kilobytes, -1 disables. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxFilesPerProcess">MaxFilesPerProcess</a></code> | <code>*f64</code> | PostgreSQL maximum number of files that can be open per process. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxLocksPerTransaction">MaxLocksPerTransaction</a></code> | <code>*f64</code> | PostgreSQL maximum locks per transaction. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxLogicalReplicationWorkers">MaxLogicalReplicationWorkers</a></code> | <code>*f64</code> | PostgreSQL maximum logical replication workers (taken from the pool of max_parallel_workers). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxParallelWorkers">MaxParallelWorkers</a></code> | <code>*f64</code> | Sets the maximum number of workers that the system can support for parallel queries. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxParallelWorkersPerGather">MaxParallelWorkersPerGather</a></code> | <code>*f64</code> | Sets the maximum number of workers that can be started by a single Gather or Gather Merge node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxPredLocksPerTransaction">MaxPredLocksPerTransaction</a></code> | <code>*f64</code> | PostgreSQL maximum predicate locks per transaction. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxPreparedTransactions">MaxPreparedTransactions</a></code> | <code>*f64</code> | PostgreSQL maximum prepared transactions. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxReplicationSlots">MaxReplicationSlots</a></code> | <code>*f64</code> | PostgreSQL maximum replication slots. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxSlotWalKeepSize">MaxSlotWalKeepSize</a></code> | <code>*f64</code> | PostgreSQL maximum WAL size (MB) reserved for replication slots. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxStackDepth">MaxStackDepth</a></code> | <code>*f64</code> | Maximum depth of the stack in bytes. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxStandbyArchiveDelay">MaxStandbyArchiveDelay</a></code> | <code>*f64</code> | Max standby archive delay in milliseconds. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxStandbyStreamingDelay">MaxStandbyStreamingDelay</a></code> | <code>*f64</code> | Max standby streaming delay in milliseconds. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxWalSenders">MaxWalSenders</a></code> | <code>*f64</code> | PostgreSQL maximum WAL senders. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxWorkerProcesses">MaxWorkerProcesses</a></code> | <code>*f64</code> | Sets the maximum number of background processes that the system can support. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.migration">Migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration">ManagedDatabasePostgresqlPropertiesMigration</a></code> | migration block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.passwordEncryption">PasswordEncryption</a></code> | <code>*string</code> | Chooses the algorithm for encrypting passwords. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgbouncer">Pgbouncer</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer">ManagedDatabasePostgresqlPropertiesPgbouncer</a></code> | pgbouncer block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pglookout">Pglookout</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout">ManagedDatabasePostgresqlPropertiesPglookout</a></code> | pglookout block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgPartmanBgwInterval">PgPartmanBgwInterval</a></code> | <code>*f64</code> | Sets the time interval to run pg_partman's scheduled tasks. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgPartmanBgwRole">PgPartmanBgwRole</a></code> | <code>*string</code> | Controls which role to use for pg_partman's scheduled background tasks. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatMonitorEnable">PgStatMonitorEnable</a></code> | <code>interface{}</code> | Enable pg_stat_monitor extension if available for the current cluster. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatMonitorPgsmEnableQueryPlan">PgStatMonitorPgsmEnableQueryPlan</a></code> | <code>interface{}</code> | Enables or disables query plan monitoring. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatMonitorPgsmMaxBuckets">PgStatMonitorPgsmMaxBuckets</a></code> | <code>*f64</code> | Sets the maximum number of buckets. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatStatementsTrack">PgStatStatementsTrack</a></code> | <code>*string</code> | Controls which statements are counted. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.publicAccess">PublicAccess</a></code> | <code>interface{}</code> | Public Access. Allow access to the service from the public Internet. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.serviceLog">ServiceLog</a></code> | <code>interface{}</code> | Service logging. Store logs for the service so that they are available in the HTTP API and console. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.sharedBuffersPercentage">SharedBuffersPercentage</a></code> | <code>*f64</code> | Percentage of total RAM that the database server uses for shared memory buffers. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.synchronousReplication">SynchronousReplication</a></code> | <code>*string</code> | Synchronous replication type. Note that the service plan also needs to support synchronous replication. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.tempFileLimit">TempFileLimit</a></code> | <code>*f64</code> | PostgreSQL temporary file limit in KiB, -1 for unlimited. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.timescaledb">Timescaledb</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb">ManagedDatabasePostgresqlPropertiesTimescaledb</a></code> | timescaledb block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.timezone">Timezone</a></code> | <code>*string</code> | PostgreSQL service timezone. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackActivityQuerySize">TrackActivityQuerySize</a></code> | <code>*f64</code> | Specifies the number of bytes reserved to track the currently executing command for each active session. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackCommitTimestamp">TrackCommitTimestamp</a></code> | <code>*string</code> | Record commit time of transactions. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackFunctions">TrackFunctions</a></code> | <code>*string</code> | Enables tracking of function call counts and time used. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackIoTiming">TrackIoTiming</a></code> | <code>*string</code> | Enables timing of database I/O calls. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.variant">Variant</a></code> | <code>*string</code> | Variant of the PostgreSQL service, may affect the features that are exposed by default. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.version">Version</a></code> | <code>*string</code> | PostgreSQL major version. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.walSenderTimeout">WalSenderTimeout</a></code> | <code>*f64</code> | Terminate replication connections that are inactive for longer than this amount of time, in milliseconds. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.walWriterDelay">WalWriterDelay</a></code> | <code>*f64</code> | WAL flush interval in milliseconds. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.workMem">WorkMem</a></code> | <code>*f64</code> | Sets the maximum amount of memory to be used by a query operation (such as a sort or hash table) before writing to temporary disk files, in MB. |

---

##### `AdminPassword`<sup>Optional</sup> <a name="AdminPassword" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.adminPassword"></a>

```go
AdminPassword *string
```

- *Type:* *string

Custom password for admin user.

Defaults to random string. This must be set only when a new service is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#admin_password ManagedDatabasePostgresql#admin_password}

---

##### `AdminUsername`<sup>Optional</sup> <a name="AdminUsername" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.adminUsername"></a>

```go
AdminUsername *string
```

- *Type:* *string

Custom username for admin user. This must be set only when a new service is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#admin_username ManagedDatabasePostgresql#admin_username}

---

##### `AutomaticUtilityNetworkIpFilter`<sup>Optional</sup> <a name="AutomaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.automaticUtilityNetworkIpFilter"></a>

```go
AutomaticUtilityNetworkIpFilter interface{}
```

- *Type:* interface{}

Automatic utility network IP Filter. Automatically allow connections from servers in the utility network within the same zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#automatic_utility_network_ip_filter ManagedDatabasePostgresql#automatic_utility_network_ip_filter}

---

##### `AutovacuumAnalyzeScaleFactor`<sup>Optional</sup> <a name="AutovacuumAnalyzeScaleFactor" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumAnalyzeScaleFactor"></a>

```go
AutovacuumAnalyzeScaleFactor *f64
```

- *Type:* *f64

Specifies a fraction of the table size to add to autovacuum_analyze_threshold when deciding whether to trigger an ANALYZE.

The default is 0.2 (20% of table size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#autovacuum_analyze_scale_factor ManagedDatabasePostgresql#autovacuum_analyze_scale_factor}

---

##### `AutovacuumAnalyzeThreshold`<sup>Optional</sup> <a name="AutovacuumAnalyzeThreshold" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumAnalyzeThreshold"></a>

```go
AutovacuumAnalyzeThreshold *f64
```

- *Type:* *f64

Specifies the minimum number of inserted, updated or deleted tuples needed to trigger an ANALYZE in any one table.

The default is 50 tuples.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#autovacuum_analyze_threshold ManagedDatabasePostgresql#autovacuum_analyze_threshold}

---

##### `AutovacuumFreezeMaxAge`<sup>Optional</sup> <a name="AutovacuumFreezeMaxAge" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumFreezeMaxAge"></a>

```go
AutovacuumFreezeMaxAge *f64
```

- *Type:* *f64

Specifies the maximum age (in transactions) that a table's pg_class.relfrozenxid field can attain before a VACUUM operation is forced to prevent transaction ID wraparound within the table. Note that the system will launch autovacuum processes to prevent wraparound even when autovacuum is otherwise disabled. This parameter will cause the server to be restarted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#autovacuum_freeze_max_age ManagedDatabasePostgresql#autovacuum_freeze_max_age}

---

##### `AutovacuumMaxWorkers`<sup>Optional</sup> <a name="AutovacuumMaxWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumMaxWorkers"></a>

```go
AutovacuumMaxWorkers *f64
```

- *Type:* *f64

Specifies the maximum number of autovacuum processes (other than the autovacuum launcher) that may be running at any one time.

The default is three. This parameter can only be set at server start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#autovacuum_max_workers ManagedDatabasePostgresql#autovacuum_max_workers}

---

##### `AutovacuumNaptime`<sup>Optional</sup> <a name="AutovacuumNaptime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumNaptime"></a>

```go
AutovacuumNaptime *f64
```

- *Type:* *f64

Specifies the minimum delay between autovacuum runs on any given database.

The delay is measured in seconds, and the default is one minute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#autovacuum_naptime ManagedDatabasePostgresql#autovacuum_naptime}

---

##### `AutovacuumVacuumCostDelay`<sup>Optional</sup> <a name="AutovacuumVacuumCostDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumCostDelay"></a>

```go
AutovacuumVacuumCostDelay *f64
```

- *Type:* *f64

Specifies the cost delay value that will be used in automatic VACUUM operations.

If -1 is specified, the regular vacuum_cost_delay value will be used. The default value is 20 milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#autovacuum_vacuum_cost_delay ManagedDatabasePostgresql#autovacuum_vacuum_cost_delay}

---

##### `AutovacuumVacuumCostLimit`<sup>Optional</sup> <a name="AutovacuumVacuumCostLimit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumCostLimit"></a>

```go
AutovacuumVacuumCostLimit *f64
```

- *Type:* *f64

Specifies the cost limit value that will be used in automatic VACUUM operations.

If -1 is specified (which is the default), the regular vacuum_cost_limit value will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#autovacuum_vacuum_cost_limit ManagedDatabasePostgresql#autovacuum_vacuum_cost_limit}

---

##### `AutovacuumVacuumScaleFactor`<sup>Optional</sup> <a name="AutovacuumVacuumScaleFactor" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumScaleFactor"></a>

```go
AutovacuumVacuumScaleFactor *f64
```

- *Type:* *f64

Specifies a fraction of the table size to add to autovacuum_vacuum_threshold when deciding whether to trigger a VACUUM.

The default is 0.2 (20% of table size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#autovacuum_vacuum_scale_factor ManagedDatabasePostgresql#autovacuum_vacuum_scale_factor}

---

##### `AutovacuumVacuumThreshold`<sup>Optional</sup> <a name="AutovacuumVacuumThreshold" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumThreshold"></a>

```go
AutovacuumVacuumThreshold *f64
```

- *Type:* *f64

Specifies the minimum number of updated or deleted tuples needed to trigger a VACUUM in any one table.

The default is 50 tuples.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#autovacuum_vacuum_threshold ManagedDatabasePostgresql#autovacuum_vacuum_threshold}

---

##### `BackupHour`<sup>Optional</sup> <a name="BackupHour" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.backupHour"></a>

```go
BackupHour *f64
```

- *Type:* *f64

The hour of day (in UTC) when backup for the service is started.

New backup is only started if previous backup has already completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#backup_hour ManagedDatabasePostgresql#backup_hour}

---

##### `BackupMinute`<sup>Optional</sup> <a name="BackupMinute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.backupMinute"></a>

```go
BackupMinute *f64
```

- *Type:* *f64

The minute of an hour when backup for the service is started.

New backup is only started if previous backup has already completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#backup_minute ManagedDatabasePostgresql#backup_minute}

---

##### `BgwriterDelay`<sup>Optional</sup> <a name="BgwriterDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterDelay"></a>

```go
BgwriterDelay *f64
```

- *Type:* *f64

Specifies the delay between activity rounds for the background writer in milliseconds. Default is 200.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#bgwriter_delay ManagedDatabasePostgresql#bgwriter_delay}

---

##### `BgwriterFlushAfter`<sup>Optional</sup> <a name="BgwriterFlushAfter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterFlushAfter"></a>

```go
BgwriterFlushAfter *f64
```

- *Type:* *f64

Whenever more than bgwriter_flush_after bytes have been written by the background writer, attempt to force the OS to issue these writes to the underlying storage.

Specified in kilobytes, default is 512. Setting of 0 disables forced writeback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#bgwriter_flush_after ManagedDatabasePostgresql#bgwriter_flush_after}

---

##### `BgwriterLruMaxpages`<sup>Optional</sup> <a name="BgwriterLruMaxpages" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterLruMaxpages"></a>

```go
BgwriterLruMaxpages *f64
```

- *Type:* *f64

In each round, no more than this many buffers will be written by the background writer.

Setting this to zero disables background writing. Default is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#bgwriter_lru_maxpages ManagedDatabasePostgresql#bgwriter_lru_maxpages}

---

##### `BgwriterLruMultiplier`<sup>Optional</sup> <a name="BgwriterLruMultiplier" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterLruMultiplier"></a>

```go
BgwriterLruMultiplier *f64
```

- *Type:* *f64

The average recent need for new buffers is multiplied by bgwriter_lru_multiplier to arrive at an estimate of the number that will be needed during the next round, (up to bgwriter_lru_maxpages).

1.0 represents a “just in time” policy of writing exactly the number of buffers predicted to be needed. Larger values provide some cushion against spikes in demand, while smaller values intentionally leave writes to be done by server processes. The default is 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#bgwriter_lru_multiplier ManagedDatabasePostgresql#bgwriter_lru_multiplier}

---

##### `DeadlockTimeout`<sup>Optional</sup> <a name="DeadlockTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.deadlockTimeout"></a>

```go
DeadlockTimeout *f64
```

- *Type:* *f64

This is the amount of time, in milliseconds, to wait on a lock before checking to see if there is a deadlock condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#deadlock_timeout ManagedDatabasePostgresql#deadlock_timeout}

---

##### `DefaultToastCompression`<sup>Optional</sup> <a name="DefaultToastCompression" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.defaultToastCompression"></a>

```go
DefaultToastCompression *string
```

- *Type:* *string

Specifies the default TOAST compression method for values of compressible columns (the default is lz4).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#default_toast_compression ManagedDatabasePostgresql#default_toast_compression}

---

##### `IdleInTransactionSessionTimeout`<sup>Optional</sup> <a name="IdleInTransactionSessionTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.idleInTransactionSessionTimeout"></a>

```go
IdleInTransactionSessionTimeout *f64
```

- *Type:* *f64

Time out sessions with open transactions after this number of milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#idle_in_transaction_session_timeout ManagedDatabasePostgresql#idle_in_transaction_session_timeout}

---

##### `IpFilter`<sup>Optional</sup> <a name="IpFilter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.ipFilter"></a>

```go
IpFilter *[]*string
```

- *Type:* *[]*string

IP filter. Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#ip_filter ManagedDatabasePostgresql#ip_filter}

---

##### `Jit`<sup>Optional</sup> <a name="Jit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.jit"></a>

```go
Jit interface{}
```

- *Type:* interface{}

Controls system-wide use of Just-in-Time Compilation (JIT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#jit ManagedDatabasePostgresql#jit}

---

##### `LogAutovacuumMinDuration`<sup>Optional</sup> <a name="LogAutovacuumMinDuration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logAutovacuumMinDuration"></a>

```go
LogAutovacuumMinDuration *f64
```

- *Type:* *f64

Causes each action executed by autovacuum to be logged if it ran for at least the specified number of milliseconds.

Setting this to zero logs all autovacuum actions. Minus-one (the default) disables logging autovacuum actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#log_autovacuum_min_duration ManagedDatabasePostgresql#log_autovacuum_min_duration}

---

##### `LogErrorVerbosity`<sup>Optional</sup> <a name="LogErrorVerbosity" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logErrorVerbosity"></a>

```go
LogErrorVerbosity *string
```

- *Type:* *string

Controls the amount of detail written in the server log for each message that is logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#log_error_verbosity ManagedDatabasePostgresql#log_error_verbosity}

---

##### `LogLinePrefix`<sup>Optional</sup> <a name="LogLinePrefix" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logLinePrefix"></a>

```go
LogLinePrefix *string
```

- *Type:* *string

Choose from one of the available log formats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#log_line_prefix ManagedDatabasePostgresql#log_line_prefix}

---

##### `LogMinDurationStatement`<sup>Optional</sup> <a name="LogMinDurationStatement" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logMinDurationStatement"></a>

```go
LogMinDurationStatement *f64
```

- *Type:* *f64

Log statements that take more than this number of milliseconds to run, -1 disables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#log_min_duration_statement ManagedDatabasePostgresql#log_min_duration_statement}

---

##### `LogTempFiles`<sup>Optional</sup> <a name="LogTempFiles" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logTempFiles"></a>

```go
LogTempFiles *f64
```

- *Type:* *f64

Log statements for each temporary file created larger than this number of kilobytes, -1 disables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#log_temp_files ManagedDatabasePostgresql#log_temp_files}

---

##### `MaxFilesPerProcess`<sup>Optional</sup> <a name="MaxFilesPerProcess" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxFilesPerProcess"></a>

```go
MaxFilesPerProcess *f64
```

- *Type:* *f64

PostgreSQL maximum number of files that can be open per process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#max_files_per_process ManagedDatabasePostgresql#max_files_per_process}

---

##### `MaxLocksPerTransaction`<sup>Optional</sup> <a name="MaxLocksPerTransaction" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxLocksPerTransaction"></a>

```go
MaxLocksPerTransaction *f64
```

- *Type:* *f64

PostgreSQL maximum locks per transaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#max_locks_per_transaction ManagedDatabasePostgresql#max_locks_per_transaction}

---

##### `MaxLogicalReplicationWorkers`<sup>Optional</sup> <a name="MaxLogicalReplicationWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxLogicalReplicationWorkers"></a>

```go
MaxLogicalReplicationWorkers *f64
```

- *Type:* *f64

PostgreSQL maximum logical replication workers (taken from the pool of max_parallel_workers).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#max_logical_replication_workers ManagedDatabasePostgresql#max_logical_replication_workers}

---

##### `MaxParallelWorkers`<sup>Optional</sup> <a name="MaxParallelWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxParallelWorkers"></a>

```go
MaxParallelWorkers *f64
```

- *Type:* *f64

Sets the maximum number of workers that the system can support for parallel queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#max_parallel_workers ManagedDatabasePostgresql#max_parallel_workers}

---

##### `MaxParallelWorkersPerGather`<sup>Optional</sup> <a name="MaxParallelWorkersPerGather" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxParallelWorkersPerGather"></a>

```go
MaxParallelWorkersPerGather *f64
```

- *Type:* *f64

Sets the maximum number of workers that can be started by a single Gather or Gather Merge node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#max_parallel_workers_per_gather ManagedDatabasePostgresql#max_parallel_workers_per_gather}

---

##### `MaxPredLocksPerTransaction`<sup>Optional</sup> <a name="MaxPredLocksPerTransaction" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxPredLocksPerTransaction"></a>

```go
MaxPredLocksPerTransaction *f64
```

- *Type:* *f64

PostgreSQL maximum predicate locks per transaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#max_pred_locks_per_transaction ManagedDatabasePostgresql#max_pred_locks_per_transaction}

---

##### `MaxPreparedTransactions`<sup>Optional</sup> <a name="MaxPreparedTransactions" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxPreparedTransactions"></a>

```go
MaxPreparedTransactions *f64
```

- *Type:* *f64

PostgreSQL maximum prepared transactions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#max_prepared_transactions ManagedDatabasePostgresql#max_prepared_transactions}

---

##### `MaxReplicationSlots`<sup>Optional</sup> <a name="MaxReplicationSlots" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxReplicationSlots"></a>

```go
MaxReplicationSlots *f64
```

- *Type:* *f64

PostgreSQL maximum replication slots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#max_replication_slots ManagedDatabasePostgresql#max_replication_slots}

---

##### `MaxSlotWalKeepSize`<sup>Optional</sup> <a name="MaxSlotWalKeepSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxSlotWalKeepSize"></a>

```go
MaxSlotWalKeepSize *f64
```

- *Type:* *f64

PostgreSQL maximum WAL size (MB) reserved for replication slots.

Default is -1 (unlimited). wal_keep_size minimum WAL size setting takes precedence over this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#max_slot_wal_keep_size ManagedDatabasePostgresql#max_slot_wal_keep_size}

---

##### `MaxStackDepth`<sup>Optional</sup> <a name="MaxStackDepth" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxStackDepth"></a>

```go
MaxStackDepth *f64
```

- *Type:* *f64

Maximum depth of the stack in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#max_stack_depth ManagedDatabasePostgresql#max_stack_depth}

---

##### `MaxStandbyArchiveDelay`<sup>Optional</sup> <a name="MaxStandbyArchiveDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxStandbyArchiveDelay"></a>

```go
MaxStandbyArchiveDelay *f64
```

- *Type:* *f64

Max standby archive delay in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#max_standby_archive_delay ManagedDatabasePostgresql#max_standby_archive_delay}

---

##### `MaxStandbyStreamingDelay`<sup>Optional</sup> <a name="MaxStandbyStreamingDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxStandbyStreamingDelay"></a>

```go
MaxStandbyStreamingDelay *f64
```

- *Type:* *f64

Max standby streaming delay in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#max_standby_streaming_delay ManagedDatabasePostgresql#max_standby_streaming_delay}

---

##### `MaxWalSenders`<sup>Optional</sup> <a name="MaxWalSenders" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxWalSenders"></a>

```go
MaxWalSenders *f64
```

- *Type:* *f64

PostgreSQL maximum WAL senders.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#max_wal_senders ManagedDatabasePostgresql#max_wal_senders}

---

##### `MaxWorkerProcesses`<sup>Optional</sup> <a name="MaxWorkerProcesses" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxWorkerProcesses"></a>

```go
MaxWorkerProcesses *f64
```

- *Type:* *f64

Sets the maximum number of background processes that the system can support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#max_worker_processes ManagedDatabasePostgresql#max_worker_processes}

---

##### `Migration`<sup>Optional</sup> <a name="Migration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.migration"></a>

```go
Migration ManagedDatabasePostgresqlPropertiesMigration
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration">ManagedDatabasePostgresqlPropertiesMigration</a>

migration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#migration ManagedDatabasePostgresql#migration}

---

##### `PasswordEncryption`<sup>Optional</sup> <a name="PasswordEncryption" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.passwordEncryption"></a>

```go
PasswordEncryption *string
```

- *Type:* *string

Chooses the algorithm for encrypting passwords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#password_encryption ManagedDatabasePostgresql#password_encryption}

---

##### `Pgbouncer`<sup>Optional</sup> <a name="Pgbouncer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgbouncer"></a>

```go
Pgbouncer ManagedDatabasePostgresqlPropertiesPgbouncer
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer">ManagedDatabasePostgresqlPropertiesPgbouncer</a>

pgbouncer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#pgbouncer ManagedDatabasePostgresql#pgbouncer}

---

##### `Pglookout`<sup>Optional</sup> <a name="Pglookout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pglookout"></a>

```go
Pglookout ManagedDatabasePostgresqlPropertiesPglookout
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout">ManagedDatabasePostgresqlPropertiesPglookout</a>

pglookout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#pglookout ManagedDatabasePostgresql#pglookout}

---

##### `PgPartmanBgwInterval`<sup>Optional</sup> <a name="PgPartmanBgwInterval" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgPartmanBgwInterval"></a>

```go
PgPartmanBgwInterval *f64
```

- *Type:* *f64

Sets the time interval to run pg_partman's scheduled tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#pg_partman_bgw_interval ManagedDatabasePostgresql#pg_partman_bgw_interval}

---

##### `PgPartmanBgwRole`<sup>Optional</sup> <a name="PgPartmanBgwRole" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgPartmanBgwRole"></a>

```go
PgPartmanBgwRole *string
```

- *Type:* *string

Controls which role to use for pg_partman's scheduled background tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#pg_partman_bgw_role ManagedDatabasePostgresql#pg_partman_bgw_role}

---

##### `PgStatMonitorEnable`<sup>Optional</sup> <a name="PgStatMonitorEnable" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatMonitorEnable"></a>

```go
PgStatMonitorEnable interface{}
```

- *Type:* interface{}

Enable pg_stat_monitor extension if available for the current cluster.

Enable the pg_stat_monitor extension. Enabling this extension will cause the cluster to be restarted.When this extension is enabled, pg_stat_statements results for utility commands are unreliable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#pg_stat_monitor_enable ManagedDatabasePostgresql#pg_stat_monitor_enable}

---

##### `PgStatMonitorPgsmEnableQueryPlan`<sup>Optional</sup> <a name="PgStatMonitorPgsmEnableQueryPlan" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatMonitorPgsmEnableQueryPlan"></a>

```go
PgStatMonitorPgsmEnableQueryPlan interface{}
```

- *Type:* interface{}

Enables or disables query plan monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#pg_stat_monitor_pgsm_enable_query_plan ManagedDatabasePostgresql#pg_stat_monitor_pgsm_enable_query_plan}

---

##### `PgStatMonitorPgsmMaxBuckets`<sup>Optional</sup> <a name="PgStatMonitorPgsmMaxBuckets" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatMonitorPgsmMaxBuckets"></a>

```go
PgStatMonitorPgsmMaxBuckets *f64
```

- *Type:* *f64

Sets the maximum number of buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#pg_stat_monitor_pgsm_max_buckets ManagedDatabasePostgresql#pg_stat_monitor_pgsm_max_buckets}

---

##### `PgStatStatementsTrack`<sup>Optional</sup> <a name="PgStatStatementsTrack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatStatementsTrack"></a>

```go
PgStatStatementsTrack *string
```

- *Type:* *string

Controls which statements are counted.

Specify top to track top-level statements (those issued directly by clients), all to also track nested statements (such as statements invoked within functions), or none to disable statement statistics collection. The default value is top.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#pg_stat_statements_track ManagedDatabasePostgresql#pg_stat_statements_track}

---

##### `PublicAccess`<sup>Optional</sup> <a name="PublicAccess" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.publicAccess"></a>

```go
PublicAccess interface{}
```

- *Type:* interface{}

Public Access. Allow access to the service from the public Internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#public_access ManagedDatabasePostgresql#public_access}

---

##### `ServiceLog`<sup>Optional</sup> <a name="ServiceLog" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.serviceLog"></a>

```go
ServiceLog interface{}
```

- *Type:* interface{}

Service logging. Store logs for the service so that they are available in the HTTP API and console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#service_log ManagedDatabasePostgresql#service_log}

---

##### `SharedBuffersPercentage`<sup>Optional</sup> <a name="SharedBuffersPercentage" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.sharedBuffersPercentage"></a>

```go
SharedBuffersPercentage *f64
```

- *Type:* *f64

Percentage of total RAM that the database server uses for shared memory buffers.

Valid range is 20-60 (float), which corresponds to 20% - 60%. This setting adjusts the shared_buffers configuration value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#shared_buffers_percentage ManagedDatabasePostgresql#shared_buffers_percentage}

---

##### `SynchronousReplication`<sup>Optional</sup> <a name="SynchronousReplication" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.synchronousReplication"></a>

```go
SynchronousReplication *string
```

- *Type:* *string

Synchronous replication type. Note that the service plan also needs to support synchronous replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#synchronous_replication ManagedDatabasePostgresql#synchronous_replication}

---

##### `TempFileLimit`<sup>Optional</sup> <a name="TempFileLimit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.tempFileLimit"></a>

```go
TempFileLimit *f64
```

- *Type:* *f64

PostgreSQL temporary file limit in KiB, -1 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#temp_file_limit ManagedDatabasePostgresql#temp_file_limit}

---

##### `Timescaledb`<sup>Optional</sup> <a name="Timescaledb" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.timescaledb"></a>

```go
Timescaledb ManagedDatabasePostgresqlPropertiesTimescaledb
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb">ManagedDatabasePostgresqlPropertiesTimescaledb</a>

timescaledb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#timescaledb ManagedDatabasePostgresql#timescaledb}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.timezone"></a>

```go
Timezone *string
```

- *Type:* *string

PostgreSQL service timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#timezone ManagedDatabasePostgresql#timezone}

---

##### `TrackActivityQuerySize`<sup>Optional</sup> <a name="TrackActivityQuerySize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackActivityQuerySize"></a>

```go
TrackActivityQuerySize *f64
```

- *Type:* *f64

Specifies the number of bytes reserved to track the currently executing command for each active session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#track_activity_query_size ManagedDatabasePostgresql#track_activity_query_size}

---

##### `TrackCommitTimestamp`<sup>Optional</sup> <a name="TrackCommitTimestamp" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackCommitTimestamp"></a>

```go
TrackCommitTimestamp *string
```

- *Type:* *string

Record commit time of transactions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#track_commit_timestamp ManagedDatabasePostgresql#track_commit_timestamp}

---

##### `TrackFunctions`<sup>Optional</sup> <a name="TrackFunctions" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackFunctions"></a>

```go
TrackFunctions *string
```

- *Type:* *string

Enables tracking of function call counts and time used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#track_functions ManagedDatabasePostgresql#track_functions}

---

##### `TrackIoTiming`<sup>Optional</sup> <a name="TrackIoTiming" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackIoTiming"></a>

```go
TrackIoTiming *string
```

- *Type:* *string

Enables timing of database I/O calls.

This parameter is off by default, because it will repeatedly query the operating system for the current time, which may cause significant overhead on some platforms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#track_io_timing ManagedDatabasePostgresql#track_io_timing}

---

##### `Variant`<sup>Optional</sup> <a name="Variant" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.variant"></a>

```go
Variant *string
```

- *Type:* *string

Variant of the PostgreSQL service, may affect the features that are exposed by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#variant ManagedDatabasePostgresql#variant}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.version"></a>

```go
Version *string
```

- *Type:* *string

PostgreSQL major version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#version ManagedDatabasePostgresql#version}

---

##### `WalSenderTimeout`<sup>Optional</sup> <a name="WalSenderTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.walSenderTimeout"></a>

```go
WalSenderTimeout *f64
```

- *Type:* *f64

Terminate replication connections that are inactive for longer than this amount of time, in milliseconds.

Setting this value to zero disables the timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#wal_sender_timeout ManagedDatabasePostgresql#wal_sender_timeout}

---

##### `WalWriterDelay`<sup>Optional</sup> <a name="WalWriterDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.walWriterDelay"></a>

```go
WalWriterDelay *f64
```

- *Type:* *f64

WAL flush interval in milliseconds.

Note that setting this value to lower than the default 200ms may negatively impact performance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#wal_writer_delay ManagedDatabasePostgresql#wal_writer_delay}

---

##### `WorkMem`<sup>Optional</sup> <a name="WorkMem" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.workMem"></a>

```go
WorkMem *f64
```

- *Type:* *f64

Sets the maximum amount of memory to be used by a query operation (such as a sort or hash table) before writing to temporary disk files, in MB.

Default is 1MB + 0.075% of total RAM (up to 32MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#work_mem ManagedDatabasePostgresql#work_mem}

---

### ManagedDatabasePostgresqlPropertiesMigration <a name="ManagedDatabasePostgresqlPropertiesMigration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabasepostgresql"

&manageddatabasepostgresql.ManagedDatabasePostgresqlPropertiesMigration {
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
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.dbname">Dbname</a></code> | <code>*string</code> | Database name for bootstrapping the initial connection. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.host">Host</a></code> | <code>*string</code> | Hostname or IP address of the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.ignoreDbs">IgnoreDbs</a></code> | <code>*string</code> | Comma-separated list of databases, which should be ignored during migration (supported by MySQL and PostgreSQL only at the moment). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.ignoreRoles">IgnoreRoles</a></code> | <code>*string</code> | Comma-separated list of database roles, which should be ignored during migration (supported by PostgreSQL only at the moment). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.method">Method</a></code> | <code>*string</code> | The migration method to be used (currently supported only by Redis, Dragonfly, MySQL and PostgreSQL service types). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.password">Password</a></code> | <code>*string</code> | Password for authentication with the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.port">Port</a></code> | <code>*f64</code> | Port number of the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.ssl">Ssl</a></code> | <code>interface{}</code> | The server where to migrate data from is secured with SSL. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.username">Username</a></code> | <code>*string</code> | User name for authentication with the server where to migrate data from. |

---

##### `Dbname`<sup>Optional</sup> <a name="Dbname" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.dbname"></a>

```go
Dbname *string
```

- *Type:* *string

Database name for bootstrapping the initial connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#dbname ManagedDatabasePostgresql#dbname}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.host"></a>

```go
Host *string
```

- *Type:* *string

Hostname or IP address of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#host ManagedDatabasePostgresql#host}

---

##### `IgnoreDbs`<sup>Optional</sup> <a name="IgnoreDbs" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.ignoreDbs"></a>

```go
IgnoreDbs *string
```

- *Type:* *string

Comma-separated list of databases, which should be ignored during migration (supported by MySQL and PostgreSQL only at the moment).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#ignore_dbs ManagedDatabasePostgresql#ignore_dbs}

---

##### `IgnoreRoles`<sup>Optional</sup> <a name="IgnoreRoles" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.ignoreRoles"></a>

```go
IgnoreRoles *string
```

- *Type:* *string

Comma-separated list of database roles, which should be ignored during migration (supported by PostgreSQL only at the moment).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#ignore_roles ManagedDatabasePostgresql#ignore_roles}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.method"></a>

```go
Method *string
```

- *Type:* *string

The migration method to be used (currently supported only by Redis, Dragonfly, MySQL and PostgreSQL service types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#method ManagedDatabasePostgresql#method}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.password"></a>

```go
Password *string
```

- *Type:* *string

Password for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#password ManagedDatabasePostgresql#password}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port number of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#port ManagedDatabasePostgresql#port}

---

##### `Ssl`<sup>Optional</sup> <a name="Ssl" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.ssl"></a>

```go
Ssl interface{}
```

- *Type:* interface{}

The server where to migrate data from is secured with SSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#ssl ManagedDatabasePostgresql#ssl}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.username"></a>

```go
Username *string
```

- *Type:* *string

User name for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#username ManagedDatabasePostgresql#username}

---

### ManagedDatabasePostgresqlPropertiesPgbouncer <a name="ManagedDatabasePostgresqlPropertiesPgbouncer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabasepostgresql"

&manageddatabasepostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer {
	AutodbIdleTimeout: *f64,
	AutodbMaxDbConnections: *f64,
	AutodbPoolMode: *string,
	AutodbPoolSize: *f64,
	IgnoreStartupParameters: *[]*string,
	MaxPreparedStatements: *f64,
	MinPoolSize: *f64,
	ServerIdleTimeout: *f64,
	ServerLifetime: *f64,
	ServerResetQueryAlways: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbIdleTimeout">AutodbIdleTimeout</a></code> | <code>*f64</code> | If the automatically created database pools have been unused this many seconds, they are freed. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbMaxDbConnections">AutodbMaxDbConnections</a></code> | <code>*f64</code> | Do not allow more than this many server connections per database (regardless of user). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbPoolMode">AutodbPoolMode</a></code> | <code>*string</code> | PGBouncer pool mode. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbPoolSize">AutodbPoolSize</a></code> | <code>*f64</code> | If non-zero then create automatically a pool of that size per user when a pool doesn't exist. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.ignoreStartupParameters">IgnoreStartupParameters</a></code> | <code>*[]*string</code> | List of parameters to ignore when given in startup packet. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.maxPreparedStatements">MaxPreparedStatements</a></code> | <code>*f64</code> | PgBouncer tracks protocol-level named prepared statements related commands sent by the client in transaction and statement pooling modes when max_prepared_statements is set to a non-zero value. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.minPoolSize">MinPoolSize</a></code> | <code>*f64</code> | Add more server connections to pool if below this number. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.serverIdleTimeout">ServerIdleTimeout</a></code> | <code>*f64</code> | If a server connection has been idle more than this many seconds it will be dropped. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.serverLifetime">ServerLifetime</a></code> | <code>*f64</code> | The pooler will close an unused server connection that has been connected longer than this. [seconds]. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.serverResetQueryAlways">ServerResetQueryAlways</a></code> | <code>interface{}</code> | Run server_reset_query (DISCARD ALL) in all pooling modes. |

---

##### `AutodbIdleTimeout`<sup>Optional</sup> <a name="AutodbIdleTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbIdleTimeout"></a>

```go
AutodbIdleTimeout *f64
```

- *Type:* *f64

If the automatically created database pools have been unused this many seconds, they are freed.

If 0 then timeout is disabled. [seconds].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#autodb_idle_timeout ManagedDatabasePostgresql#autodb_idle_timeout}

---

##### `AutodbMaxDbConnections`<sup>Optional</sup> <a name="AutodbMaxDbConnections" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbMaxDbConnections"></a>

```go
AutodbMaxDbConnections *f64
```

- *Type:* *f64

Do not allow more than this many server connections per database (regardless of user).

Setting it to 0 means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#autodb_max_db_connections ManagedDatabasePostgresql#autodb_max_db_connections}

---

##### `AutodbPoolMode`<sup>Optional</sup> <a name="AutodbPoolMode" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbPoolMode"></a>

```go
AutodbPoolMode *string
```

- *Type:* *string

PGBouncer pool mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#autodb_pool_mode ManagedDatabasePostgresql#autodb_pool_mode}

---

##### `AutodbPoolSize`<sup>Optional</sup> <a name="AutodbPoolSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbPoolSize"></a>

```go
AutodbPoolSize *f64
```

- *Type:* *f64

If non-zero then create automatically a pool of that size per user when a pool doesn't exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#autodb_pool_size ManagedDatabasePostgresql#autodb_pool_size}

---

##### `IgnoreStartupParameters`<sup>Optional</sup> <a name="IgnoreStartupParameters" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.ignoreStartupParameters"></a>

```go
IgnoreStartupParameters *[]*string
```

- *Type:* *[]*string

List of parameters to ignore when given in startup packet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#ignore_startup_parameters ManagedDatabasePostgresql#ignore_startup_parameters}

---

##### `MaxPreparedStatements`<sup>Optional</sup> <a name="MaxPreparedStatements" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.maxPreparedStatements"></a>

```go
MaxPreparedStatements *f64
```

- *Type:* *f64

PgBouncer tracks protocol-level named prepared statements related commands sent by the client in transaction and statement pooling modes when max_prepared_statements is set to a non-zero value.

Setting it to 0 disables prepared statements. max_prepared_statements defaults to 100, and its maximum is 3000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#max_prepared_statements ManagedDatabasePostgresql#max_prepared_statements}

---

##### `MinPoolSize`<sup>Optional</sup> <a name="MinPoolSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.minPoolSize"></a>

```go
MinPoolSize *f64
```

- *Type:* *f64

Add more server connections to pool if below this number.

Improves behavior when usual load comes suddenly back after period of total inactivity. The value is effectively capped at the pool size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#min_pool_size ManagedDatabasePostgresql#min_pool_size}

---

##### `ServerIdleTimeout`<sup>Optional</sup> <a name="ServerIdleTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.serverIdleTimeout"></a>

```go
ServerIdleTimeout *f64
```

- *Type:* *f64

If a server connection has been idle more than this many seconds it will be dropped.

If 0 then timeout is disabled. [seconds].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#server_idle_timeout ManagedDatabasePostgresql#server_idle_timeout}

---

##### `ServerLifetime`<sup>Optional</sup> <a name="ServerLifetime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.serverLifetime"></a>

```go
ServerLifetime *f64
```

- *Type:* *f64

The pooler will close an unused server connection that has been connected longer than this. [seconds].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#server_lifetime ManagedDatabasePostgresql#server_lifetime}

---

##### `ServerResetQueryAlways`<sup>Optional</sup> <a name="ServerResetQueryAlways" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.serverResetQueryAlways"></a>

```go
ServerResetQueryAlways interface{}
```

- *Type:* interface{}

Run server_reset_query (DISCARD ALL) in all pooling modes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#server_reset_query_always ManagedDatabasePostgresql#server_reset_query_always}

---

### ManagedDatabasePostgresqlPropertiesPglookout <a name="ManagedDatabasePostgresqlPropertiesPglookout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabasepostgresql"

&manageddatabasepostgresql.ManagedDatabasePostgresqlPropertiesPglookout {
	MaxFailoverReplicationTimeLag: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout.property.maxFailoverReplicationTimeLag">MaxFailoverReplicationTimeLag</a></code> | <code>*f64</code> | Number of seconds of master unavailability before triggering database failover to standby. |

---

##### `MaxFailoverReplicationTimeLag`<sup>Optional</sup> <a name="MaxFailoverReplicationTimeLag" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout.property.maxFailoverReplicationTimeLag"></a>

```go
MaxFailoverReplicationTimeLag *f64
```

- *Type:* *f64

Number of seconds of master unavailability before triggering database failover to standby.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#max_failover_replication_time_lag ManagedDatabasePostgresql#max_failover_replication_time_lag}

---

### ManagedDatabasePostgresqlPropertiesTimescaledb <a name="ManagedDatabasePostgresqlPropertiesTimescaledb" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabasepostgresql"

&manageddatabasepostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb {
	MaxBackgroundWorkers: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb.property.maxBackgroundWorkers">MaxBackgroundWorkers</a></code> | <code>*f64</code> | The number of background workers for timescaledb operations. |

---

##### `MaxBackgroundWorkers`<sup>Optional</sup> <a name="MaxBackgroundWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb.property.maxBackgroundWorkers"></a>

```go
MaxBackgroundWorkers *f64
```

- *Type:* *f64

The number of background workers for timescaledb operations.

You should configure this setting to the sum of your number of databases and the total number of concurrent background workers you want running at any given point in time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.1/docs/resources/managed_database_postgresql#max_background_workers ManagedDatabasePostgresql#max_background_workers}

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedDatabasePostgresqlComponentsList <a name="ManagedDatabasePostgresqlComponentsList" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabasepostgresql"

manageddatabasepostgresql.NewManagedDatabasePostgresqlComponentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ManagedDatabasePostgresqlComponentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.get"></a>

```go
func Get(index *f64) ManagedDatabasePostgresqlComponentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ManagedDatabasePostgresqlComponentsOutputReference <a name="ManagedDatabasePostgresqlComponentsOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabasepostgresql"

manageddatabasepostgresql.NewManagedDatabasePostgresqlComponentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ManagedDatabasePostgresqlComponentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.component">Component</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.route">Route</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.usage">Usage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponents">ManagedDatabasePostgresqlComponents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Component`<sup>Required</sup> <a name="Component" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.component"></a>

```go
func Component() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Route`<sup>Required</sup> <a name="Route" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.route"></a>

```go
func Route() *string
```

- *Type:* *string

---

##### `Usage`<sup>Required</sup> <a name="Usage" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.usage"></a>

```go
func Usage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabasePostgresqlComponents
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponents">ManagedDatabasePostgresqlComponents</a>

---


### ManagedDatabasePostgresqlNetworkList <a name="ManagedDatabasePostgresqlNetworkList" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabasepostgresql"

manageddatabasepostgresql.NewManagedDatabasePostgresqlNetworkList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ManagedDatabasePostgresqlNetworkList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.get"></a>

```go
func Get(index *f64) ManagedDatabasePostgresqlNetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ManagedDatabasePostgresqlNetworkOutputReference <a name="ManagedDatabasePostgresqlNetworkOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabasepostgresql"

manageddatabasepostgresql.NewManagedDatabasePostgresqlNetworkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ManagedDatabasePostgresqlNetworkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.familyInput">FamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.uuidInput">UuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.family">Family</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FamilyInput`<sup>Optional</sup> <a name="FamilyInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.familyInput"></a>

```go
func FamilyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UuidInput`<sup>Optional</sup> <a name="UuidInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.uuidInput"></a>

```go
func UuidInput() *string
```

- *Type:* *string

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.family"></a>

```go
func Family() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ManagedDatabasePostgresqlNodeStatesList <a name="ManagedDatabasePostgresqlNodeStatesList" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabasepostgresql"

manageddatabasepostgresql.NewManagedDatabasePostgresqlNodeStatesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ManagedDatabasePostgresqlNodeStatesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.get"></a>

```go
func Get(index *f64) ManagedDatabasePostgresqlNodeStatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ManagedDatabasePostgresqlNodeStatesOutputReference <a name="ManagedDatabasePostgresqlNodeStatesOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabasepostgresql"

manageddatabasepostgresql.NewManagedDatabasePostgresqlNodeStatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ManagedDatabasePostgresqlNodeStatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStates">ManagedDatabasePostgresqlNodeStates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabasePostgresqlNodeStates
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStates">ManagedDatabasePostgresqlNodeStates</a>

---


### ManagedDatabasePostgresqlPropertiesMigrationOutputReference <a name="ManagedDatabasePostgresqlPropertiesMigrationOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabasepostgresql"

manageddatabasepostgresql.NewManagedDatabasePostgresqlPropertiesMigrationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDatabasePostgresqlPropertiesMigrationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetDbname">ResetDbname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetIgnoreDbs">ResetIgnoreDbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetIgnoreRoles">ResetIgnoreRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetSsl">ResetSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDbname` <a name="ResetDbname" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetDbname"></a>

```go
func ResetDbname()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetIgnoreDbs` <a name="ResetIgnoreDbs" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetIgnoreDbs"></a>

```go
func ResetIgnoreDbs()
```

##### `ResetIgnoreRoles` <a name="ResetIgnoreRoles" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetIgnoreRoles"></a>

```go
func ResetIgnoreRoles()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetSsl` <a name="ResetSsl" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetSsl"></a>

```go
func ResetSsl()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetUsername"></a>

```go
func ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.dbnameInput">DbnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ignoreDbsInput">IgnoreDbsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ignoreRolesInput">IgnoreRolesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.sslInput">SslInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.dbname">Dbname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ignoreDbs">IgnoreDbs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ignoreRoles">IgnoreRoles</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ssl">Ssl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration">ManagedDatabasePostgresqlPropertiesMigration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DbnameInput`<sup>Optional</sup> <a name="DbnameInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.dbnameInput"></a>

```go
func DbnameInput() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `IgnoreDbsInput`<sup>Optional</sup> <a name="IgnoreDbsInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ignoreDbsInput"></a>

```go
func IgnoreDbsInput() *string
```

- *Type:* *string

---

##### `IgnoreRolesInput`<sup>Optional</sup> <a name="IgnoreRolesInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ignoreRolesInput"></a>

```go
func IgnoreRolesInput() *string
```

- *Type:* *string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `SslInput`<sup>Optional</sup> <a name="SslInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.sslInput"></a>

```go
func SslInput() interface{}
```

- *Type:* interface{}

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Dbname`<sup>Required</sup> <a name="Dbname" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.dbname"></a>

```go
func Dbname() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `IgnoreDbs`<sup>Required</sup> <a name="IgnoreDbs" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ignoreDbs"></a>

```go
func IgnoreDbs() *string
```

- *Type:* *string

---

##### `IgnoreRoles`<sup>Required</sup> <a name="IgnoreRoles" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ignoreRoles"></a>

```go
func IgnoreRoles() *string
```

- *Type:* *string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Ssl`<sup>Required</sup> <a name="Ssl" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ssl"></a>

```go
func Ssl() interface{}
```

- *Type:* interface{}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabasePostgresqlPropertiesMigration
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration">ManagedDatabasePostgresqlPropertiesMigration</a>

---


### ManagedDatabasePostgresqlPropertiesOutputReference <a name="ManagedDatabasePostgresqlPropertiesOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabasepostgresql"

manageddatabasepostgresql.NewManagedDatabasePostgresqlPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDatabasePostgresqlPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putMigration">PutMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPgbouncer">PutPgbouncer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPglookout">PutPglookout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putTimescaledb">PutTimescaledb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAdminPassword">ResetAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAdminUsername">ResetAdminUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter">ResetAutomaticUtilityNetworkIpFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumAnalyzeScaleFactor">ResetAutovacuumAnalyzeScaleFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumAnalyzeThreshold">ResetAutovacuumAnalyzeThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumFreezeMaxAge">ResetAutovacuumFreezeMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumMaxWorkers">ResetAutovacuumMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumNaptime">ResetAutovacuumNaptime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumCostDelay">ResetAutovacuumVacuumCostDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumCostLimit">ResetAutovacuumVacuumCostLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumScaleFactor">ResetAutovacuumVacuumScaleFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumThreshold">ResetAutovacuumVacuumThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBackupHour">ResetBackupHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBackupMinute">ResetBackupMinute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterDelay">ResetBgwriterDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterFlushAfter">ResetBgwriterFlushAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterLruMaxpages">ResetBgwriterLruMaxpages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterLruMultiplier">ResetBgwriterLruMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetDeadlockTimeout">ResetDeadlockTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetDefaultToastCompression">ResetDefaultToastCompression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetIdleInTransactionSessionTimeout">ResetIdleInTransactionSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetIpFilter">ResetIpFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetJit">ResetJit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogAutovacuumMinDuration">ResetLogAutovacuumMinDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogErrorVerbosity">ResetLogErrorVerbosity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogLinePrefix">ResetLogLinePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogMinDurationStatement">ResetLogMinDurationStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogTempFiles">ResetLogTempFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxFilesPerProcess">ResetMaxFilesPerProcess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxLocksPerTransaction">ResetMaxLocksPerTransaction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxLogicalReplicationWorkers">ResetMaxLogicalReplicationWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxParallelWorkers">ResetMaxParallelWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxParallelWorkersPerGather">ResetMaxParallelWorkersPerGather</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxPredLocksPerTransaction">ResetMaxPredLocksPerTransaction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxPreparedTransactions">ResetMaxPreparedTransactions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxReplicationSlots">ResetMaxReplicationSlots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxSlotWalKeepSize">ResetMaxSlotWalKeepSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxStackDepth">ResetMaxStackDepth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxStandbyArchiveDelay">ResetMaxStandbyArchiveDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxStandbyStreamingDelay">ResetMaxStandbyStreamingDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxWalSenders">ResetMaxWalSenders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxWorkerProcesses">ResetMaxWorkerProcesses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMigration">ResetMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPasswordEncryption">ResetPasswordEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgbouncer">ResetPgbouncer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPglookout">ResetPglookout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgPartmanBgwInterval">ResetPgPartmanBgwInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgPartmanBgwRole">ResetPgPartmanBgwRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatMonitorEnable">ResetPgStatMonitorEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatMonitorPgsmEnableQueryPlan">ResetPgStatMonitorPgsmEnableQueryPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatMonitorPgsmMaxBuckets">ResetPgStatMonitorPgsmMaxBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatStatementsTrack">ResetPgStatStatementsTrack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPublicAccess">ResetPublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetServiceLog">ResetServiceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetSharedBuffersPercentage">ResetSharedBuffersPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetSynchronousReplication">ResetSynchronousReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTempFileLimit">ResetTempFileLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTimescaledb">ResetTimescaledb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTimezone">ResetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackActivityQuerySize">ResetTrackActivityQuerySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackCommitTimestamp">ResetTrackCommitTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackFunctions">ResetTrackFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackIoTiming">ResetTrackIoTiming</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetVariant">ResetVariant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetWalSenderTimeout">ResetWalSenderTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetWalWriterDelay">ResetWalWriterDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetWorkMem">ResetWorkMem</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMigration` <a name="PutMigration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putMigration"></a>

```go
func PutMigration(value ManagedDatabasePostgresqlPropertiesMigration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putMigration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration">ManagedDatabasePostgresqlPropertiesMigration</a>

---

##### `PutPgbouncer` <a name="PutPgbouncer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPgbouncer"></a>

```go
func PutPgbouncer(value ManagedDatabasePostgresqlPropertiesPgbouncer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPgbouncer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer">ManagedDatabasePostgresqlPropertiesPgbouncer</a>

---

##### `PutPglookout` <a name="PutPglookout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPglookout"></a>

```go
func PutPglookout(value ManagedDatabasePostgresqlPropertiesPglookout)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPglookout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout">ManagedDatabasePostgresqlPropertiesPglookout</a>

---

##### `PutTimescaledb` <a name="PutTimescaledb" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putTimescaledb"></a>

```go
func PutTimescaledb(value ManagedDatabasePostgresqlPropertiesTimescaledb)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putTimescaledb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb">ManagedDatabasePostgresqlPropertiesTimescaledb</a>

---

##### `ResetAdminPassword` <a name="ResetAdminPassword" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAdminPassword"></a>

```go
func ResetAdminPassword()
```

##### `ResetAdminUsername` <a name="ResetAdminUsername" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAdminUsername"></a>

```go
func ResetAdminUsername()
```

##### `ResetAutomaticUtilityNetworkIpFilter` <a name="ResetAutomaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter"></a>

```go
func ResetAutomaticUtilityNetworkIpFilter()
```

##### `ResetAutovacuumAnalyzeScaleFactor` <a name="ResetAutovacuumAnalyzeScaleFactor" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumAnalyzeScaleFactor"></a>

```go
func ResetAutovacuumAnalyzeScaleFactor()
```

##### `ResetAutovacuumAnalyzeThreshold` <a name="ResetAutovacuumAnalyzeThreshold" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumAnalyzeThreshold"></a>

```go
func ResetAutovacuumAnalyzeThreshold()
```

##### `ResetAutovacuumFreezeMaxAge` <a name="ResetAutovacuumFreezeMaxAge" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumFreezeMaxAge"></a>

```go
func ResetAutovacuumFreezeMaxAge()
```

##### `ResetAutovacuumMaxWorkers` <a name="ResetAutovacuumMaxWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumMaxWorkers"></a>

```go
func ResetAutovacuumMaxWorkers()
```

##### `ResetAutovacuumNaptime` <a name="ResetAutovacuumNaptime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumNaptime"></a>

```go
func ResetAutovacuumNaptime()
```

##### `ResetAutovacuumVacuumCostDelay` <a name="ResetAutovacuumVacuumCostDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumCostDelay"></a>

```go
func ResetAutovacuumVacuumCostDelay()
```

##### `ResetAutovacuumVacuumCostLimit` <a name="ResetAutovacuumVacuumCostLimit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumCostLimit"></a>

```go
func ResetAutovacuumVacuumCostLimit()
```

##### `ResetAutovacuumVacuumScaleFactor` <a name="ResetAutovacuumVacuumScaleFactor" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumScaleFactor"></a>

```go
func ResetAutovacuumVacuumScaleFactor()
```

##### `ResetAutovacuumVacuumThreshold` <a name="ResetAutovacuumVacuumThreshold" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumThreshold"></a>

```go
func ResetAutovacuumVacuumThreshold()
```

##### `ResetBackupHour` <a name="ResetBackupHour" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBackupHour"></a>

```go
func ResetBackupHour()
```

##### `ResetBackupMinute` <a name="ResetBackupMinute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBackupMinute"></a>

```go
func ResetBackupMinute()
```

##### `ResetBgwriterDelay` <a name="ResetBgwriterDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterDelay"></a>

```go
func ResetBgwriterDelay()
```

##### `ResetBgwriterFlushAfter` <a name="ResetBgwriterFlushAfter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterFlushAfter"></a>

```go
func ResetBgwriterFlushAfter()
```

##### `ResetBgwriterLruMaxpages` <a name="ResetBgwriterLruMaxpages" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterLruMaxpages"></a>

```go
func ResetBgwriterLruMaxpages()
```

##### `ResetBgwriterLruMultiplier` <a name="ResetBgwriterLruMultiplier" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterLruMultiplier"></a>

```go
func ResetBgwriterLruMultiplier()
```

##### `ResetDeadlockTimeout` <a name="ResetDeadlockTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetDeadlockTimeout"></a>

```go
func ResetDeadlockTimeout()
```

##### `ResetDefaultToastCompression` <a name="ResetDefaultToastCompression" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetDefaultToastCompression"></a>

```go
func ResetDefaultToastCompression()
```

##### `ResetIdleInTransactionSessionTimeout` <a name="ResetIdleInTransactionSessionTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetIdleInTransactionSessionTimeout"></a>

```go
func ResetIdleInTransactionSessionTimeout()
```

##### `ResetIpFilter` <a name="ResetIpFilter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetIpFilter"></a>

```go
func ResetIpFilter()
```

##### `ResetJit` <a name="ResetJit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetJit"></a>

```go
func ResetJit()
```

##### `ResetLogAutovacuumMinDuration` <a name="ResetLogAutovacuumMinDuration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogAutovacuumMinDuration"></a>

```go
func ResetLogAutovacuumMinDuration()
```

##### `ResetLogErrorVerbosity` <a name="ResetLogErrorVerbosity" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogErrorVerbosity"></a>

```go
func ResetLogErrorVerbosity()
```

##### `ResetLogLinePrefix` <a name="ResetLogLinePrefix" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogLinePrefix"></a>

```go
func ResetLogLinePrefix()
```

##### `ResetLogMinDurationStatement` <a name="ResetLogMinDurationStatement" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogMinDurationStatement"></a>

```go
func ResetLogMinDurationStatement()
```

##### `ResetLogTempFiles` <a name="ResetLogTempFiles" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogTempFiles"></a>

```go
func ResetLogTempFiles()
```

##### `ResetMaxFilesPerProcess` <a name="ResetMaxFilesPerProcess" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxFilesPerProcess"></a>

```go
func ResetMaxFilesPerProcess()
```

##### `ResetMaxLocksPerTransaction` <a name="ResetMaxLocksPerTransaction" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxLocksPerTransaction"></a>

```go
func ResetMaxLocksPerTransaction()
```

##### `ResetMaxLogicalReplicationWorkers` <a name="ResetMaxLogicalReplicationWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxLogicalReplicationWorkers"></a>

```go
func ResetMaxLogicalReplicationWorkers()
```

##### `ResetMaxParallelWorkers` <a name="ResetMaxParallelWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxParallelWorkers"></a>

```go
func ResetMaxParallelWorkers()
```

##### `ResetMaxParallelWorkersPerGather` <a name="ResetMaxParallelWorkersPerGather" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxParallelWorkersPerGather"></a>

```go
func ResetMaxParallelWorkersPerGather()
```

##### `ResetMaxPredLocksPerTransaction` <a name="ResetMaxPredLocksPerTransaction" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxPredLocksPerTransaction"></a>

```go
func ResetMaxPredLocksPerTransaction()
```

##### `ResetMaxPreparedTransactions` <a name="ResetMaxPreparedTransactions" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxPreparedTransactions"></a>

```go
func ResetMaxPreparedTransactions()
```

##### `ResetMaxReplicationSlots` <a name="ResetMaxReplicationSlots" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxReplicationSlots"></a>

```go
func ResetMaxReplicationSlots()
```

##### `ResetMaxSlotWalKeepSize` <a name="ResetMaxSlotWalKeepSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxSlotWalKeepSize"></a>

```go
func ResetMaxSlotWalKeepSize()
```

##### `ResetMaxStackDepth` <a name="ResetMaxStackDepth" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxStackDepth"></a>

```go
func ResetMaxStackDepth()
```

##### `ResetMaxStandbyArchiveDelay` <a name="ResetMaxStandbyArchiveDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxStandbyArchiveDelay"></a>

```go
func ResetMaxStandbyArchiveDelay()
```

##### `ResetMaxStandbyStreamingDelay` <a name="ResetMaxStandbyStreamingDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxStandbyStreamingDelay"></a>

```go
func ResetMaxStandbyStreamingDelay()
```

##### `ResetMaxWalSenders` <a name="ResetMaxWalSenders" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxWalSenders"></a>

```go
func ResetMaxWalSenders()
```

##### `ResetMaxWorkerProcesses` <a name="ResetMaxWorkerProcesses" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxWorkerProcesses"></a>

```go
func ResetMaxWorkerProcesses()
```

##### `ResetMigration` <a name="ResetMigration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMigration"></a>

```go
func ResetMigration()
```

##### `ResetPasswordEncryption` <a name="ResetPasswordEncryption" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPasswordEncryption"></a>

```go
func ResetPasswordEncryption()
```

##### `ResetPgbouncer` <a name="ResetPgbouncer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgbouncer"></a>

```go
func ResetPgbouncer()
```

##### `ResetPglookout` <a name="ResetPglookout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPglookout"></a>

```go
func ResetPglookout()
```

##### `ResetPgPartmanBgwInterval` <a name="ResetPgPartmanBgwInterval" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgPartmanBgwInterval"></a>

```go
func ResetPgPartmanBgwInterval()
```

##### `ResetPgPartmanBgwRole` <a name="ResetPgPartmanBgwRole" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgPartmanBgwRole"></a>

```go
func ResetPgPartmanBgwRole()
```

##### `ResetPgStatMonitorEnable` <a name="ResetPgStatMonitorEnable" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatMonitorEnable"></a>

```go
func ResetPgStatMonitorEnable()
```

##### `ResetPgStatMonitorPgsmEnableQueryPlan` <a name="ResetPgStatMonitorPgsmEnableQueryPlan" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatMonitorPgsmEnableQueryPlan"></a>

```go
func ResetPgStatMonitorPgsmEnableQueryPlan()
```

##### `ResetPgStatMonitorPgsmMaxBuckets` <a name="ResetPgStatMonitorPgsmMaxBuckets" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatMonitorPgsmMaxBuckets"></a>

```go
func ResetPgStatMonitorPgsmMaxBuckets()
```

##### `ResetPgStatStatementsTrack` <a name="ResetPgStatStatementsTrack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatStatementsTrack"></a>

```go
func ResetPgStatStatementsTrack()
```

##### `ResetPublicAccess` <a name="ResetPublicAccess" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPublicAccess"></a>

```go
func ResetPublicAccess()
```

##### `ResetServiceLog` <a name="ResetServiceLog" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetServiceLog"></a>

```go
func ResetServiceLog()
```

##### `ResetSharedBuffersPercentage` <a name="ResetSharedBuffersPercentage" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetSharedBuffersPercentage"></a>

```go
func ResetSharedBuffersPercentage()
```

##### `ResetSynchronousReplication` <a name="ResetSynchronousReplication" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetSynchronousReplication"></a>

```go
func ResetSynchronousReplication()
```

##### `ResetTempFileLimit` <a name="ResetTempFileLimit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTempFileLimit"></a>

```go
func ResetTempFileLimit()
```

##### `ResetTimescaledb` <a name="ResetTimescaledb" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTimescaledb"></a>

```go
func ResetTimescaledb()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTimezone"></a>

```go
func ResetTimezone()
```

##### `ResetTrackActivityQuerySize` <a name="ResetTrackActivityQuerySize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackActivityQuerySize"></a>

```go
func ResetTrackActivityQuerySize()
```

##### `ResetTrackCommitTimestamp` <a name="ResetTrackCommitTimestamp" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackCommitTimestamp"></a>

```go
func ResetTrackCommitTimestamp()
```

##### `ResetTrackFunctions` <a name="ResetTrackFunctions" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackFunctions"></a>

```go
func ResetTrackFunctions()
```

##### `ResetTrackIoTiming` <a name="ResetTrackIoTiming" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackIoTiming"></a>

```go
func ResetTrackIoTiming()
```

##### `ResetVariant` <a name="ResetVariant" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetVariant"></a>

```go
func ResetVariant()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetVersion"></a>

```go
func ResetVersion()
```

##### `ResetWalSenderTimeout` <a name="ResetWalSenderTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetWalSenderTimeout"></a>

```go
func ResetWalSenderTimeout()
```

##### `ResetWalWriterDelay` <a name="ResetWalWriterDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetWalWriterDelay"></a>

```go
func ResetWalWriterDelay()
```

##### `ResetWorkMem` <a name="ResetWorkMem" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetWorkMem"></a>

```go
func ResetWorkMem()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.migration">Migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference">ManagedDatabasePostgresqlPropertiesMigrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgbouncer">Pgbouncer</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference">ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pglookout">Pglookout</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference">ManagedDatabasePostgresqlPropertiesPglookoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timescaledb">Timescaledb</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference">ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminPasswordInput">AdminPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminUsernameInput">AdminUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput">AutomaticUtilityNetworkIpFilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeScaleFactorInput">AutovacuumAnalyzeScaleFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeThresholdInput">AutovacuumAnalyzeThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumFreezeMaxAgeInput">AutovacuumFreezeMaxAgeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumMaxWorkersInput">AutovacuumMaxWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumNaptimeInput">AutovacuumNaptimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostDelayInput">AutovacuumVacuumCostDelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostLimitInput">AutovacuumVacuumCostLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumScaleFactorInput">AutovacuumVacuumScaleFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumThresholdInput">AutovacuumVacuumThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupHourInput">BackupHourInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupMinuteInput">BackupMinuteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterDelayInput">BgwriterDelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterFlushAfterInput">BgwriterFlushAfterInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMaxpagesInput">BgwriterLruMaxpagesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMultiplierInput">BgwriterLruMultiplierInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.deadlockTimeoutInput">DeadlockTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.defaultToastCompressionInput">DefaultToastCompressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.idleInTransactionSessionTimeoutInput">IdleInTransactionSessionTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.ipFilterInput">IpFilterInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.jitInput">JitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logAutovacuumMinDurationInput">LogAutovacuumMinDurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logErrorVerbosityInput">LogErrorVerbosityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logLinePrefixInput">LogLinePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logMinDurationStatementInput">LogMinDurationStatementInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logTempFilesInput">LogTempFilesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxFilesPerProcessInput">MaxFilesPerProcessInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLocksPerTransactionInput">MaxLocksPerTransactionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLogicalReplicationWorkersInput">MaxLogicalReplicationWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkersInput">MaxParallelWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkersPerGatherInput">MaxParallelWorkersPerGatherInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPredLocksPerTransactionInput">MaxPredLocksPerTransactionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPreparedTransactionsInput">MaxPreparedTransactionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxReplicationSlotsInput">MaxReplicationSlotsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxSlotWalKeepSizeInput">MaxSlotWalKeepSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStackDepthInput">MaxStackDepthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyArchiveDelayInput">MaxStandbyArchiveDelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyStreamingDelayInput">MaxStandbyStreamingDelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWalSendersInput">MaxWalSendersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWorkerProcessesInput">MaxWorkerProcessesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.migrationInput">MigrationInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration">ManagedDatabasePostgresqlPropertiesMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.passwordEncryptionInput">PasswordEncryptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgbouncerInput">PgbouncerInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer">ManagedDatabasePostgresqlPropertiesPgbouncer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pglookoutInput">PglookoutInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout">ManagedDatabasePostgresqlPropertiesPglookout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwIntervalInput">PgPartmanBgwIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwRoleInput">PgPartmanBgwRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorEnableInput">PgStatMonitorEnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmEnableQueryPlanInput">PgStatMonitorPgsmEnableQueryPlanInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmMaxBucketsInput">PgStatMonitorPgsmMaxBucketsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatStatementsTrackInput">PgStatStatementsTrackInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.publicAccessInput">PublicAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.serviceLogInput">ServiceLogInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.sharedBuffersPercentageInput">SharedBuffersPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.synchronousReplicationInput">SynchronousReplicationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.tempFileLimitInput">TempFileLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timescaledbInput">TimescaledbInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb">ManagedDatabasePostgresqlPropertiesTimescaledb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackActivityQuerySizeInput">TrackActivityQuerySizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackCommitTimestampInput">TrackCommitTimestampInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackFunctionsInput">TrackFunctionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackIoTimingInput">TrackIoTimingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.variantInput">VariantInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walSenderTimeoutInput">WalSenderTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walWriterDelayInput">WalWriterDelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.workMemInput">WorkMemInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminPassword">AdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminUsername">AdminUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.automaticUtilityNetworkIpFilter">AutomaticUtilityNetworkIpFilter</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeScaleFactor">AutovacuumAnalyzeScaleFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeThreshold">AutovacuumAnalyzeThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumFreezeMaxAge">AutovacuumFreezeMaxAge</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumMaxWorkers">AutovacuumMaxWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumNaptime">AutovacuumNaptime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostDelay">AutovacuumVacuumCostDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostLimit">AutovacuumVacuumCostLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumScaleFactor">AutovacuumVacuumScaleFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumThreshold">AutovacuumVacuumThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupHour">BackupHour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupMinute">BackupMinute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterDelay">BgwriterDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterFlushAfter">BgwriterFlushAfter</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMaxpages">BgwriterLruMaxpages</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMultiplier">BgwriterLruMultiplier</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.deadlockTimeout">DeadlockTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.defaultToastCompression">DefaultToastCompression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.idleInTransactionSessionTimeout">IdleInTransactionSessionTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.ipFilter">IpFilter</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.jit">Jit</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logAutovacuumMinDuration">LogAutovacuumMinDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logErrorVerbosity">LogErrorVerbosity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logLinePrefix">LogLinePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logMinDurationStatement">LogMinDurationStatement</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logTempFiles">LogTempFiles</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxFilesPerProcess">MaxFilesPerProcess</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLocksPerTransaction">MaxLocksPerTransaction</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLogicalReplicationWorkers">MaxLogicalReplicationWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkers">MaxParallelWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkersPerGather">MaxParallelWorkersPerGather</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPredLocksPerTransaction">MaxPredLocksPerTransaction</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPreparedTransactions">MaxPreparedTransactions</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxReplicationSlots">MaxReplicationSlots</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxSlotWalKeepSize">MaxSlotWalKeepSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStackDepth">MaxStackDepth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyArchiveDelay">MaxStandbyArchiveDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyStreamingDelay">MaxStandbyStreamingDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWalSenders">MaxWalSenders</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWorkerProcesses">MaxWorkerProcesses</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.passwordEncryption">PasswordEncryption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwInterval">PgPartmanBgwInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwRole">PgPartmanBgwRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorEnable">PgStatMonitorEnable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmEnableQueryPlan">PgStatMonitorPgsmEnableQueryPlan</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmMaxBuckets">PgStatMonitorPgsmMaxBuckets</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatStatementsTrack">PgStatStatementsTrack</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.publicAccess">PublicAccess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.serviceLog">ServiceLog</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.sharedBuffersPercentage">SharedBuffersPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.synchronousReplication">SynchronousReplication</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.tempFileLimit">TempFileLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackActivityQuerySize">TrackActivityQuerySize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackCommitTimestamp">TrackCommitTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackFunctions">TrackFunctions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackIoTiming">TrackIoTiming</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.variant">Variant</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walSenderTimeout">WalSenderTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walWriterDelay">WalWriterDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.workMem">WorkMem</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Migration`<sup>Required</sup> <a name="Migration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.migration"></a>

```go
func Migration() ManagedDatabasePostgresqlPropertiesMigrationOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference">ManagedDatabasePostgresqlPropertiesMigrationOutputReference</a>

---

##### `Pgbouncer`<sup>Required</sup> <a name="Pgbouncer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgbouncer"></a>

```go
func Pgbouncer() ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference">ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference</a>

---

##### `Pglookout`<sup>Required</sup> <a name="Pglookout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pglookout"></a>

```go
func Pglookout() ManagedDatabasePostgresqlPropertiesPglookoutOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference">ManagedDatabasePostgresqlPropertiesPglookoutOutputReference</a>

---

##### `Timescaledb`<sup>Required</sup> <a name="Timescaledb" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timescaledb"></a>

```go
func Timescaledb() ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference">ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference</a>

---

##### `AdminPasswordInput`<sup>Optional</sup> <a name="AdminPasswordInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminPasswordInput"></a>

```go
func AdminPasswordInput() *string
```

- *Type:* *string

---

##### `AdminUsernameInput`<sup>Optional</sup> <a name="AdminUsernameInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminUsernameInput"></a>

```go
func AdminUsernameInput() *string
```

- *Type:* *string

---

##### `AutomaticUtilityNetworkIpFilterInput`<sup>Optional</sup> <a name="AutomaticUtilityNetworkIpFilterInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput"></a>

```go
func AutomaticUtilityNetworkIpFilterInput() interface{}
```

- *Type:* interface{}

---

##### `AutovacuumAnalyzeScaleFactorInput`<sup>Optional</sup> <a name="AutovacuumAnalyzeScaleFactorInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeScaleFactorInput"></a>

```go
func AutovacuumAnalyzeScaleFactorInput() *f64
```

- *Type:* *f64

---

##### `AutovacuumAnalyzeThresholdInput`<sup>Optional</sup> <a name="AutovacuumAnalyzeThresholdInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeThresholdInput"></a>

```go
func AutovacuumAnalyzeThresholdInput() *f64
```

- *Type:* *f64

---

##### `AutovacuumFreezeMaxAgeInput`<sup>Optional</sup> <a name="AutovacuumFreezeMaxAgeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumFreezeMaxAgeInput"></a>

```go
func AutovacuumFreezeMaxAgeInput() *f64
```

- *Type:* *f64

---

##### `AutovacuumMaxWorkersInput`<sup>Optional</sup> <a name="AutovacuumMaxWorkersInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumMaxWorkersInput"></a>

```go
func AutovacuumMaxWorkersInput() *f64
```

- *Type:* *f64

---

##### `AutovacuumNaptimeInput`<sup>Optional</sup> <a name="AutovacuumNaptimeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumNaptimeInput"></a>

```go
func AutovacuumNaptimeInput() *f64
```

- *Type:* *f64

---

##### `AutovacuumVacuumCostDelayInput`<sup>Optional</sup> <a name="AutovacuumVacuumCostDelayInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostDelayInput"></a>

```go
func AutovacuumVacuumCostDelayInput() *f64
```

- *Type:* *f64

---

##### `AutovacuumVacuumCostLimitInput`<sup>Optional</sup> <a name="AutovacuumVacuumCostLimitInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostLimitInput"></a>

```go
func AutovacuumVacuumCostLimitInput() *f64
```

- *Type:* *f64

---

##### `AutovacuumVacuumScaleFactorInput`<sup>Optional</sup> <a name="AutovacuumVacuumScaleFactorInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumScaleFactorInput"></a>

```go
func AutovacuumVacuumScaleFactorInput() *f64
```

- *Type:* *f64

---

##### `AutovacuumVacuumThresholdInput`<sup>Optional</sup> <a name="AutovacuumVacuumThresholdInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumThresholdInput"></a>

```go
func AutovacuumVacuumThresholdInput() *f64
```

- *Type:* *f64

---

##### `BackupHourInput`<sup>Optional</sup> <a name="BackupHourInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupHourInput"></a>

```go
func BackupHourInput() *f64
```

- *Type:* *f64

---

##### `BackupMinuteInput`<sup>Optional</sup> <a name="BackupMinuteInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupMinuteInput"></a>

```go
func BackupMinuteInput() *f64
```

- *Type:* *f64

---

##### `BgwriterDelayInput`<sup>Optional</sup> <a name="BgwriterDelayInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterDelayInput"></a>

```go
func BgwriterDelayInput() *f64
```

- *Type:* *f64

---

##### `BgwriterFlushAfterInput`<sup>Optional</sup> <a name="BgwriterFlushAfterInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterFlushAfterInput"></a>

```go
func BgwriterFlushAfterInput() *f64
```

- *Type:* *f64

---

##### `BgwriterLruMaxpagesInput`<sup>Optional</sup> <a name="BgwriterLruMaxpagesInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMaxpagesInput"></a>

```go
func BgwriterLruMaxpagesInput() *f64
```

- *Type:* *f64

---

##### `BgwriterLruMultiplierInput`<sup>Optional</sup> <a name="BgwriterLruMultiplierInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMultiplierInput"></a>

```go
func BgwriterLruMultiplierInput() *f64
```

- *Type:* *f64

---

##### `DeadlockTimeoutInput`<sup>Optional</sup> <a name="DeadlockTimeoutInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.deadlockTimeoutInput"></a>

```go
func DeadlockTimeoutInput() *f64
```

- *Type:* *f64

---

##### `DefaultToastCompressionInput`<sup>Optional</sup> <a name="DefaultToastCompressionInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.defaultToastCompressionInput"></a>

```go
func DefaultToastCompressionInput() *string
```

- *Type:* *string

---

##### `IdleInTransactionSessionTimeoutInput`<sup>Optional</sup> <a name="IdleInTransactionSessionTimeoutInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.idleInTransactionSessionTimeoutInput"></a>

```go
func IdleInTransactionSessionTimeoutInput() *f64
```

- *Type:* *f64

---

##### `IpFilterInput`<sup>Optional</sup> <a name="IpFilterInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.ipFilterInput"></a>

```go
func IpFilterInput() *[]*string
```

- *Type:* *[]*string

---

##### `JitInput`<sup>Optional</sup> <a name="JitInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.jitInput"></a>

```go
func JitInput() interface{}
```

- *Type:* interface{}

---

##### `LogAutovacuumMinDurationInput`<sup>Optional</sup> <a name="LogAutovacuumMinDurationInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logAutovacuumMinDurationInput"></a>

```go
func LogAutovacuumMinDurationInput() *f64
```

- *Type:* *f64

---

##### `LogErrorVerbosityInput`<sup>Optional</sup> <a name="LogErrorVerbosityInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logErrorVerbosityInput"></a>

```go
func LogErrorVerbosityInput() *string
```

- *Type:* *string

---

##### `LogLinePrefixInput`<sup>Optional</sup> <a name="LogLinePrefixInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logLinePrefixInput"></a>

```go
func LogLinePrefixInput() *string
```

- *Type:* *string

---

##### `LogMinDurationStatementInput`<sup>Optional</sup> <a name="LogMinDurationStatementInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logMinDurationStatementInput"></a>

```go
func LogMinDurationStatementInput() *f64
```

- *Type:* *f64

---

##### `LogTempFilesInput`<sup>Optional</sup> <a name="LogTempFilesInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logTempFilesInput"></a>

```go
func LogTempFilesInput() *f64
```

- *Type:* *f64

---

##### `MaxFilesPerProcessInput`<sup>Optional</sup> <a name="MaxFilesPerProcessInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxFilesPerProcessInput"></a>

```go
func MaxFilesPerProcessInput() *f64
```

- *Type:* *f64

---

##### `MaxLocksPerTransactionInput`<sup>Optional</sup> <a name="MaxLocksPerTransactionInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLocksPerTransactionInput"></a>

```go
func MaxLocksPerTransactionInput() *f64
```

- *Type:* *f64

---

##### `MaxLogicalReplicationWorkersInput`<sup>Optional</sup> <a name="MaxLogicalReplicationWorkersInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLogicalReplicationWorkersInput"></a>

```go
func MaxLogicalReplicationWorkersInput() *f64
```

- *Type:* *f64

---

##### `MaxParallelWorkersInput`<sup>Optional</sup> <a name="MaxParallelWorkersInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkersInput"></a>

```go
func MaxParallelWorkersInput() *f64
```

- *Type:* *f64

---

##### `MaxParallelWorkersPerGatherInput`<sup>Optional</sup> <a name="MaxParallelWorkersPerGatherInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkersPerGatherInput"></a>

```go
func MaxParallelWorkersPerGatherInput() *f64
```

- *Type:* *f64

---

##### `MaxPredLocksPerTransactionInput`<sup>Optional</sup> <a name="MaxPredLocksPerTransactionInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPredLocksPerTransactionInput"></a>

```go
func MaxPredLocksPerTransactionInput() *f64
```

- *Type:* *f64

---

##### `MaxPreparedTransactionsInput`<sup>Optional</sup> <a name="MaxPreparedTransactionsInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPreparedTransactionsInput"></a>

```go
func MaxPreparedTransactionsInput() *f64
```

- *Type:* *f64

---

##### `MaxReplicationSlotsInput`<sup>Optional</sup> <a name="MaxReplicationSlotsInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxReplicationSlotsInput"></a>

```go
func MaxReplicationSlotsInput() *f64
```

- *Type:* *f64

---

##### `MaxSlotWalKeepSizeInput`<sup>Optional</sup> <a name="MaxSlotWalKeepSizeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxSlotWalKeepSizeInput"></a>

```go
func MaxSlotWalKeepSizeInput() *f64
```

- *Type:* *f64

---

##### `MaxStackDepthInput`<sup>Optional</sup> <a name="MaxStackDepthInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStackDepthInput"></a>

```go
func MaxStackDepthInput() *f64
```

- *Type:* *f64

---

##### `MaxStandbyArchiveDelayInput`<sup>Optional</sup> <a name="MaxStandbyArchiveDelayInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyArchiveDelayInput"></a>

```go
func MaxStandbyArchiveDelayInput() *f64
```

- *Type:* *f64

---

##### `MaxStandbyStreamingDelayInput`<sup>Optional</sup> <a name="MaxStandbyStreamingDelayInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyStreamingDelayInput"></a>

```go
func MaxStandbyStreamingDelayInput() *f64
```

- *Type:* *f64

---

##### `MaxWalSendersInput`<sup>Optional</sup> <a name="MaxWalSendersInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWalSendersInput"></a>

```go
func MaxWalSendersInput() *f64
```

- *Type:* *f64

---

##### `MaxWorkerProcessesInput`<sup>Optional</sup> <a name="MaxWorkerProcessesInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWorkerProcessesInput"></a>

```go
func MaxWorkerProcessesInput() *f64
```

- *Type:* *f64

---

##### `MigrationInput`<sup>Optional</sup> <a name="MigrationInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.migrationInput"></a>

```go
func MigrationInput() ManagedDatabasePostgresqlPropertiesMigration
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration">ManagedDatabasePostgresqlPropertiesMigration</a>

---

##### `PasswordEncryptionInput`<sup>Optional</sup> <a name="PasswordEncryptionInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.passwordEncryptionInput"></a>

```go
func PasswordEncryptionInput() *string
```

- *Type:* *string

---

##### `PgbouncerInput`<sup>Optional</sup> <a name="PgbouncerInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgbouncerInput"></a>

```go
func PgbouncerInput() ManagedDatabasePostgresqlPropertiesPgbouncer
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer">ManagedDatabasePostgresqlPropertiesPgbouncer</a>

---

##### `PglookoutInput`<sup>Optional</sup> <a name="PglookoutInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pglookoutInput"></a>

```go
func PglookoutInput() ManagedDatabasePostgresqlPropertiesPglookout
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout">ManagedDatabasePostgresqlPropertiesPglookout</a>

---

##### `PgPartmanBgwIntervalInput`<sup>Optional</sup> <a name="PgPartmanBgwIntervalInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwIntervalInput"></a>

```go
func PgPartmanBgwIntervalInput() *f64
```

- *Type:* *f64

---

##### `PgPartmanBgwRoleInput`<sup>Optional</sup> <a name="PgPartmanBgwRoleInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwRoleInput"></a>

```go
func PgPartmanBgwRoleInput() *string
```

- *Type:* *string

---

##### `PgStatMonitorEnableInput`<sup>Optional</sup> <a name="PgStatMonitorEnableInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorEnableInput"></a>

```go
func PgStatMonitorEnableInput() interface{}
```

- *Type:* interface{}

---

##### `PgStatMonitorPgsmEnableQueryPlanInput`<sup>Optional</sup> <a name="PgStatMonitorPgsmEnableQueryPlanInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmEnableQueryPlanInput"></a>

```go
func PgStatMonitorPgsmEnableQueryPlanInput() interface{}
```

- *Type:* interface{}

---

##### `PgStatMonitorPgsmMaxBucketsInput`<sup>Optional</sup> <a name="PgStatMonitorPgsmMaxBucketsInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmMaxBucketsInput"></a>

```go
func PgStatMonitorPgsmMaxBucketsInput() *f64
```

- *Type:* *f64

---

##### `PgStatStatementsTrackInput`<sup>Optional</sup> <a name="PgStatStatementsTrackInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatStatementsTrackInput"></a>

```go
func PgStatStatementsTrackInput() *string
```

- *Type:* *string

---

##### `PublicAccessInput`<sup>Optional</sup> <a name="PublicAccessInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.publicAccessInput"></a>

```go
func PublicAccessInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceLogInput`<sup>Optional</sup> <a name="ServiceLogInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.serviceLogInput"></a>

```go
func ServiceLogInput() interface{}
```

- *Type:* interface{}

---

##### `SharedBuffersPercentageInput`<sup>Optional</sup> <a name="SharedBuffersPercentageInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.sharedBuffersPercentageInput"></a>

```go
func SharedBuffersPercentageInput() *f64
```

- *Type:* *f64

---

##### `SynchronousReplicationInput`<sup>Optional</sup> <a name="SynchronousReplicationInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.synchronousReplicationInput"></a>

```go
func SynchronousReplicationInput() *string
```

- *Type:* *string

---

##### `TempFileLimitInput`<sup>Optional</sup> <a name="TempFileLimitInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.tempFileLimitInput"></a>

```go
func TempFileLimitInput() *f64
```

- *Type:* *f64

---

##### `TimescaledbInput`<sup>Optional</sup> <a name="TimescaledbInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timescaledbInput"></a>

```go
func TimescaledbInput() ManagedDatabasePostgresqlPropertiesTimescaledb
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb">ManagedDatabasePostgresqlPropertiesTimescaledb</a>

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timezoneInput"></a>

```go
func TimezoneInput() *string
```

- *Type:* *string

---

##### `TrackActivityQuerySizeInput`<sup>Optional</sup> <a name="TrackActivityQuerySizeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackActivityQuerySizeInput"></a>

```go
func TrackActivityQuerySizeInput() *f64
```

- *Type:* *f64

---

##### `TrackCommitTimestampInput`<sup>Optional</sup> <a name="TrackCommitTimestampInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackCommitTimestampInput"></a>

```go
func TrackCommitTimestampInput() *string
```

- *Type:* *string

---

##### `TrackFunctionsInput`<sup>Optional</sup> <a name="TrackFunctionsInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackFunctionsInput"></a>

```go
func TrackFunctionsInput() *string
```

- *Type:* *string

---

##### `TrackIoTimingInput`<sup>Optional</sup> <a name="TrackIoTimingInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackIoTimingInput"></a>

```go
func TrackIoTimingInput() *string
```

- *Type:* *string

---

##### `VariantInput`<sup>Optional</sup> <a name="VariantInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.variantInput"></a>

```go
func VariantInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `WalSenderTimeoutInput`<sup>Optional</sup> <a name="WalSenderTimeoutInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walSenderTimeoutInput"></a>

```go
func WalSenderTimeoutInput() *f64
```

- *Type:* *f64

---

##### `WalWriterDelayInput`<sup>Optional</sup> <a name="WalWriterDelayInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walWriterDelayInput"></a>

```go
func WalWriterDelayInput() *f64
```

- *Type:* *f64

---

##### `WorkMemInput`<sup>Optional</sup> <a name="WorkMemInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.workMemInput"></a>

```go
func WorkMemInput() *f64
```

- *Type:* *f64

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminPassword"></a>

```go
func AdminPassword() *string
```

- *Type:* *string

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminUsername"></a>

```go
func AdminUsername() *string
```

- *Type:* *string

---

##### `AutomaticUtilityNetworkIpFilter`<sup>Required</sup> <a name="AutomaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.automaticUtilityNetworkIpFilter"></a>

```go
func AutomaticUtilityNetworkIpFilter() interface{}
```

- *Type:* interface{}

---

##### `AutovacuumAnalyzeScaleFactor`<sup>Required</sup> <a name="AutovacuumAnalyzeScaleFactor" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeScaleFactor"></a>

```go
func AutovacuumAnalyzeScaleFactor() *f64
```

- *Type:* *f64

---

##### `AutovacuumAnalyzeThreshold`<sup>Required</sup> <a name="AutovacuumAnalyzeThreshold" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeThreshold"></a>

```go
func AutovacuumAnalyzeThreshold() *f64
```

- *Type:* *f64

---

##### `AutovacuumFreezeMaxAge`<sup>Required</sup> <a name="AutovacuumFreezeMaxAge" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumFreezeMaxAge"></a>

```go
func AutovacuumFreezeMaxAge() *f64
```

- *Type:* *f64

---

##### `AutovacuumMaxWorkers`<sup>Required</sup> <a name="AutovacuumMaxWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumMaxWorkers"></a>

```go
func AutovacuumMaxWorkers() *f64
```

- *Type:* *f64

---

##### `AutovacuumNaptime`<sup>Required</sup> <a name="AutovacuumNaptime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumNaptime"></a>

```go
func AutovacuumNaptime() *f64
```

- *Type:* *f64

---

##### `AutovacuumVacuumCostDelay`<sup>Required</sup> <a name="AutovacuumVacuumCostDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostDelay"></a>

```go
func AutovacuumVacuumCostDelay() *f64
```

- *Type:* *f64

---

##### `AutovacuumVacuumCostLimit`<sup>Required</sup> <a name="AutovacuumVacuumCostLimit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostLimit"></a>

```go
func AutovacuumVacuumCostLimit() *f64
```

- *Type:* *f64

---

##### `AutovacuumVacuumScaleFactor`<sup>Required</sup> <a name="AutovacuumVacuumScaleFactor" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumScaleFactor"></a>

```go
func AutovacuumVacuumScaleFactor() *f64
```

- *Type:* *f64

---

##### `AutovacuumVacuumThreshold`<sup>Required</sup> <a name="AutovacuumVacuumThreshold" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumThreshold"></a>

```go
func AutovacuumVacuumThreshold() *f64
```

- *Type:* *f64

---

##### `BackupHour`<sup>Required</sup> <a name="BackupHour" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupHour"></a>

```go
func BackupHour() *f64
```

- *Type:* *f64

---

##### `BackupMinute`<sup>Required</sup> <a name="BackupMinute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupMinute"></a>

```go
func BackupMinute() *f64
```

- *Type:* *f64

---

##### `BgwriterDelay`<sup>Required</sup> <a name="BgwriterDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterDelay"></a>

```go
func BgwriterDelay() *f64
```

- *Type:* *f64

---

##### `BgwriterFlushAfter`<sup>Required</sup> <a name="BgwriterFlushAfter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterFlushAfter"></a>

```go
func BgwriterFlushAfter() *f64
```

- *Type:* *f64

---

##### `BgwriterLruMaxpages`<sup>Required</sup> <a name="BgwriterLruMaxpages" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMaxpages"></a>

```go
func BgwriterLruMaxpages() *f64
```

- *Type:* *f64

---

##### `BgwriterLruMultiplier`<sup>Required</sup> <a name="BgwriterLruMultiplier" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMultiplier"></a>

```go
func BgwriterLruMultiplier() *f64
```

- *Type:* *f64

---

##### `DeadlockTimeout`<sup>Required</sup> <a name="DeadlockTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.deadlockTimeout"></a>

```go
func DeadlockTimeout() *f64
```

- *Type:* *f64

---

##### `DefaultToastCompression`<sup>Required</sup> <a name="DefaultToastCompression" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.defaultToastCompression"></a>

```go
func DefaultToastCompression() *string
```

- *Type:* *string

---

##### `IdleInTransactionSessionTimeout`<sup>Required</sup> <a name="IdleInTransactionSessionTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.idleInTransactionSessionTimeout"></a>

```go
func IdleInTransactionSessionTimeout() *f64
```

- *Type:* *f64

---

##### `IpFilter`<sup>Required</sup> <a name="IpFilter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.ipFilter"></a>

```go
func IpFilter() *[]*string
```

- *Type:* *[]*string

---

##### `Jit`<sup>Required</sup> <a name="Jit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.jit"></a>

```go
func Jit() interface{}
```

- *Type:* interface{}

---

##### `LogAutovacuumMinDuration`<sup>Required</sup> <a name="LogAutovacuumMinDuration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logAutovacuumMinDuration"></a>

```go
func LogAutovacuumMinDuration() *f64
```

- *Type:* *f64

---

##### `LogErrorVerbosity`<sup>Required</sup> <a name="LogErrorVerbosity" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logErrorVerbosity"></a>

```go
func LogErrorVerbosity() *string
```

- *Type:* *string

---

##### `LogLinePrefix`<sup>Required</sup> <a name="LogLinePrefix" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logLinePrefix"></a>

```go
func LogLinePrefix() *string
```

- *Type:* *string

---

##### `LogMinDurationStatement`<sup>Required</sup> <a name="LogMinDurationStatement" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logMinDurationStatement"></a>

```go
func LogMinDurationStatement() *f64
```

- *Type:* *f64

---

##### `LogTempFiles`<sup>Required</sup> <a name="LogTempFiles" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logTempFiles"></a>

```go
func LogTempFiles() *f64
```

- *Type:* *f64

---

##### `MaxFilesPerProcess`<sup>Required</sup> <a name="MaxFilesPerProcess" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxFilesPerProcess"></a>

```go
func MaxFilesPerProcess() *f64
```

- *Type:* *f64

---

##### `MaxLocksPerTransaction`<sup>Required</sup> <a name="MaxLocksPerTransaction" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLocksPerTransaction"></a>

```go
func MaxLocksPerTransaction() *f64
```

- *Type:* *f64

---

##### `MaxLogicalReplicationWorkers`<sup>Required</sup> <a name="MaxLogicalReplicationWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLogicalReplicationWorkers"></a>

```go
func MaxLogicalReplicationWorkers() *f64
```

- *Type:* *f64

---

##### `MaxParallelWorkers`<sup>Required</sup> <a name="MaxParallelWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkers"></a>

```go
func MaxParallelWorkers() *f64
```

- *Type:* *f64

---

##### `MaxParallelWorkersPerGather`<sup>Required</sup> <a name="MaxParallelWorkersPerGather" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkersPerGather"></a>

```go
func MaxParallelWorkersPerGather() *f64
```

- *Type:* *f64

---

##### `MaxPredLocksPerTransaction`<sup>Required</sup> <a name="MaxPredLocksPerTransaction" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPredLocksPerTransaction"></a>

```go
func MaxPredLocksPerTransaction() *f64
```

- *Type:* *f64

---

##### `MaxPreparedTransactions`<sup>Required</sup> <a name="MaxPreparedTransactions" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPreparedTransactions"></a>

```go
func MaxPreparedTransactions() *f64
```

- *Type:* *f64

---

##### `MaxReplicationSlots`<sup>Required</sup> <a name="MaxReplicationSlots" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxReplicationSlots"></a>

```go
func MaxReplicationSlots() *f64
```

- *Type:* *f64

---

##### `MaxSlotWalKeepSize`<sup>Required</sup> <a name="MaxSlotWalKeepSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxSlotWalKeepSize"></a>

```go
func MaxSlotWalKeepSize() *f64
```

- *Type:* *f64

---

##### `MaxStackDepth`<sup>Required</sup> <a name="MaxStackDepth" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStackDepth"></a>

```go
func MaxStackDepth() *f64
```

- *Type:* *f64

---

##### `MaxStandbyArchiveDelay`<sup>Required</sup> <a name="MaxStandbyArchiveDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyArchiveDelay"></a>

```go
func MaxStandbyArchiveDelay() *f64
```

- *Type:* *f64

---

##### `MaxStandbyStreamingDelay`<sup>Required</sup> <a name="MaxStandbyStreamingDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyStreamingDelay"></a>

```go
func MaxStandbyStreamingDelay() *f64
```

- *Type:* *f64

---

##### `MaxWalSenders`<sup>Required</sup> <a name="MaxWalSenders" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWalSenders"></a>

```go
func MaxWalSenders() *f64
```

- *Type:* *f64

---

##### `MaxWorkerProcesses`<sup>Required</sup> <a name="MaxWorkerProcesses" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWorkerProcesses"></a>

```go
func MaxWorkerProcesses() *f64
```

- *Type:* *f64

---

##### `PasswordEncryption`<sup>Required</sup> <a name="PasswordEncryption" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.passwordEncryption"></a>

```go
func PasswordEncryption() *string
```

- *Type:* *string

---

##### `PgPartmanBgwInterval`<sup>Required</sup> <a name="PgPartmanBgwInterval" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwInterval"></a>

```go
func PgPartmanBgwInterval() *f64
```

- *Type:* *f64

---

##### `PgPartmanBgwRole`<sup>Required</sup> <a name="PgPartmanBgwRole" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwRole"></a>

```go
func PgPartmanBgwRole() *string
```

- *Type:* *string

---

##### `PgStatMonitorEnable`<sup>Required</sup> <a name="PgStatMonitorEnable" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorEnable"></a>

```go
func PgStatMonitorEnable() interface{}
```

- *Type:* interface{}

---

##### `PgStatMonitorPgsmEnableQueryPlan`<sup>Required</sup> <a name="PgStatMonitorPgsmEnableQueryPlan" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmEnableQueryPlan"></a>

```go
func PgStatMonitorPgsmEnableQueryPlan() interface{}
```

- *Type:* interface{}

---

##### `PgStatMonitorPgsmMaxBuckets`<sup>Required</sup> <a name="PgStatMonitorPgsmMaxBuckets" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmMaxBuckets"></a>

```go
func PgStatMonitorPgsmMaxBuckets() *f64
```

- *Type:* *f64

---

##### `PgStatStatementsTrack`<sup>Required</sup> <a name="PgStatStatementsTrack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatStatementsTrack"></a>

```go
func PgStatStatementsTrack() *string
```

- *Type:* *string

---

##### `PublicAccess`<sup>Required</sup> <a name="PublicAccess" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.publicAccess"></a>

```go
func PublicAccess() interface{}
```

- *Type:* interface{}

---

##### `ServiceLog`<sup>Required</sup> <a name="ServiceLog" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.serviceLog"></a>

```go
func ServiceLog() interface{}
```

- *Type:* interface{}

---

##### `SharedBuffersPercentage`<sup>Required</sup> <a name="SharedBuffersPercentage" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.sharedBuffersPercentage"></a>

```go
func SharedBuffersPercentage() *f64
```

- *Type:* *f64

---

##### `SynchronousReplication`<sup>Required</sup> <a name="SynchronousReplication" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.synchronousReplication"></a>

```go
func SynchronousReplication() *string
```

- *Type:* *string

---

##### `TempFileLimit`<sup>Required</sup> <a name="TempFileLimit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.tempFileLimit"></a>

```go
func TempFileLimit() *f64
```

- *Type:* *f64

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

##### `TrackActivityQuerySize`<sup>Required</sup> <a name="TrackActivityQuerySize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackActivityQuerySize"></a>

```go
func TrackActivityQuerySize() *f64
```

- *Type:* *f64

---

##### `TrackCommitTimestamp`<sup>Required</sup> <a name="TrackCommitTimestamp" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackCommitTimestamp"></a>

```go
func TrackCommitTimestamp() *string
```

- *Type:* *string

---

##### `TrackFunctions`<sup>Required</sup> <a name="TrackFunctions" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackFunctions"></a>

```go
func TrackFunctions() *string
```

- *Type:* *string

---

##### `TrackIoTiming`<sup>Required</sup> <a name="TrackIoTiming" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackIoTiming"></a>

```go
func TrackIoTiming() *string
```

- *Type:* *string

---

##### `Variant`<sup>Required</sup> <a name="Variant" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.variant"></a>

```go
func Variant() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `WalSenderTimeout`<sup>Required</sup> <a name="WalSenderTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walSenderTimeout"></a>

```go
func WalSenderTimeout() *f64
```

- *Type:* *f64

---

##### `WalWriterDelay`<sup>Required</sup> <a name="WalWriterDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walWriterDelay"></a>

```go
func WalWriterDelay() *f64
```

- *Type:* *f64

---

##### `WorkMem`<sup>Required</sup> <a name="WorkMem" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.workMem"></a>

```go
func WorkMem() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabasePostgresqlProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a>

---


### ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference <a name="ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabasepostgresql"

manageddatabasepostgresql.NewManagedDatabasePostgresqlPropertiesPgbouncerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbIdleTimeout">ResetAutodbIdleTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbMaxDbConnections">ResetAutodbMaxDbConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbPoolMode">ResetAutodbPoolMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbPoolSize">ResetAutodbPoolSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetIgnoreStartupParameters">ResetIgnoreStartupParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetMaxPreparedStatements">ResetMaxPreparedStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetMinPoolSize">ResetMinPoolSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetServerIdleTimeout">ResetServerIdleTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetServerLifetime">ResetServerLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetServerResetQueryAlways">ResetServerResetQueryAlways</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutodbIdleTimeout` <a name="ResetAutodbIdleTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbIdleTimeout"></a>

```go
func ResetAutodbIdleTimeout()
```

##### `ResetAutodbMaxDbConnections` <a name="ResetAutodbMaxDbConnections" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbMaxDbConnections"></a>

```go
func ResetAutodbMaxDbConnections()
```

##### `ResetAutodbPoolMode` <a name="ResetAutodbPoolMode" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbPoolMode"></a>

```go
func ResetAutodbPoolMode()
```

##### `ResetAutodbPoolSize` <a name="ResetAutodbPoolSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbPoolSize"></a>

```go
func ResetAutodbPoolSize()
```

##### `ResetIgnoreStartupParameters` <a name="ResetIgnoreStartupParameters" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetIgnoreStartupParameters"></a>

```go
func ResetIgnoreStartupParameters()
```

##### `ResetMaxPreparedStatements` <a name="ResetMaxPreparedStatements" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetMaxPreparedStatements"></a>

```go
func ResetMaxPreparedStatements()
```

##### `ResetMinPoolSize` <a name="ResetMinPoolSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetMinPoolSize"></a>

```go
func ResetMinPoolSize()
```

##### `ResetServerIdleTimeout` <a name="ResetServerIdleTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetServerIdleTimeout"></a>

```go
func ResetServerIdleTimeout()
```

##### `ResetServerLifetime` <a name="ResetServerLifetime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetServerLifetime"></a>

```go
func ResetServerLifetime()
```

##### `ResetServerResetQueryAlways` <a name="ResetServerResetQueryAlways" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetServerResetQueryAlways"></a>

```go
func ResetServerResetQueryAlways()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbIdleTimeoutInput">AutodbIdleTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbMaxDbConnectionsInput">AutodbMaxDbConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolModeInput">AutodbPoolModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolSizeInput">AutodbPoolSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.ignoreStartupParametersInput">IgnoreStartupParametersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.maxPreparedStatementsInput">MaxPreparedStatementsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.minPoolSizeInput">MinPoolSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverIdleTimeoutInput">ServerIdleTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverLifetimeInput">ServerLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverResetQueryAlwaysInput">ServerResetQueryAlwaysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbIdleTimeout">AutodbIdleTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbMaxDbConnections">AutodbMaxDbConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolMode">AutodbPoolMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolSize">AutodbPoolSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.ignoreStartupParameters">IgnoreStartupParameters</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.maxPreparedStatements">MaxPreparedStatements</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.minPoolSize">MinPoolSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverIdleTimeout">ServerIdleTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverLifetime">ServerLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverResetQueryAlways">ServerResetQueryAlways</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer">ManagedDatabasePostgresqlPropertiesPgbouncer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutodbIdleTimeoutInput`<sup>Optional</sup> <a name="AutodbIdleTimeoutInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbIdleTimeoutInput"></a>

```go
func AutodbIdleTimeoutInput() *f64
```

- *Type:* *f64

---

##### `AutodbMaxDbConnectionsInput`<sup>Optional</sup> <a name="AutodbMaxDbConnectionsInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbMaxDbConnectionsInput"></a>

```go
func AutodbMaxDbConnectionsInput() *f64
```

- *Type:* *f64

---

##### `AutodbPoolModeInput`<sup>Optional</sup> <a name="AutodbPoolModeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolModeInput"></a>

```go
func AutodbPoolModeInput() *string
```

- *Type:* *string

---

##### `AutodbPoolSizeInput`<sup>Optional</sup> <a name="AutodbPoolSizeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolSizeInput"></a>

```go
func AutodbPoolSizeInput() *f64
```

- *Type:* *f64

---

##### `IgnoreStartupParametersInput`<sup>Optional</sup> <a name="IgnoreStartupParametersInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.ignoreStartupParametersInput"></a>

```go
func IgnoreStartupParametersInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaxPreparedStatementsInput`<sup>Optional</sup> <a name="MaxPreparedStatementsInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.maxPreparedStatementsInput"></a>

```go
func MaxPreparedStatementsInput() *f64
```

- *Type:* *f64

---

##### `MinPoolSizeInput`<sup>Optional</sup> <a name="MinPoolSizeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.minPoolSizeInput"></a>

```go
func MinPoolSizeInput() *f64
```

- *Type:* *f64

---

##### `ServerIdleTimeoutInput`<sup>Optional</sup> <a name="ServerIdleTimeoutInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverIdleTimeoutInput"></a>

```go
func ServerIdleTimeoutInput() *f64
```

- *Type:* *f64

---

##### `ServerLifetimeInput`<sup>Optional</sup> <a name="ServerLifetimeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverLifetimeInput"></a>

```go
func ServerLifetimeInput() *f64
```

- *Type:* *f64

---

##### `ServerResetQueryAlwaysInput`<sup>Optional</sup> <a name="ServerResetQueryAlwaysInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverResetQueryAlwaysInput"></a>

```go
func ServerResetQueryAlwaysInput() interface{}
```

- *Type:* interface{}

---

##### `AutodbIdleTimeout`<sup>Required</sup> <a name="AutodbIdleTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbIdleTimeout"></a>

```go
func AutodbIdleTimeout() *f64
```

- *Type:* *f64

---

##### `AutodbMaxDbConnections`<sup>Required</sup> <a name="AutodbMaxDbConnections" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbMaxDbConnections"></a>

```go
func AutodbMaxDbConnections() *f64
```

- *Type:* *f64

---

##### `AutodbPoolMode`<sup>Required</sup> <a name="AutodbPoolMode" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolMode"></a>

```go
func AutodbPoolMode() *string
```

- *Type:* *string

---

##### `AutodbPoolSize`<sup>Required</sup> <a name="AutodbPoolSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolSize"></a>

```go
func AutodbPoolSize() *f64
```

- *Type:* *f64

---

##### `IgnoreStartupParameters`<sup>Required</sup> <a name="IgnoreStartupParameters" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.ignoreStartupParameters"></a>

```go
func IgnoreStartupParameters() *[]*string
```

- *Type:* *[]*string

---

##### `MaxPreparedStatements`<sup>Required</sup> <a name="MaxPreparedStatements" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.maxPreparedStatements"></a>

```go
func MaxPreparedStatements() *f64
```

- *Type:* *f64

---

##### `MinPoolSize`<sup>Required</sup> <a name="MinPoolSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.minPoolSize"></a>

```go
func MinPoolSize() *f64
```

- *Type:* *f64

---

##### `ServerIdleTimeout`<sup>Required</sup> <a name="ServerIdleTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverIdleTimeout"></a>

```go
func ServerIdleTimeout() *f64
```

- *Type:* *f64

---

##### `ServerLifetime`<sup>Required</sup> <a name="ServerLifetime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverLifetime"></a>

```go
func ServerLifetime() *f64
```

- *Type:* *f64

---

##### `ServerResetQueryAlways`<sup>Required</sup> <a name="ServerResetQueryAlways" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverResetQueryAlways"></a>

```go
func ServerResetQueryAlways() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabasePostgresqlPropertiesPgbouncer
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer">ManagedDatabasePostgresqlPropertiesPgbouncer</a>

---


### ManagedDatabasePostgresqlPropertiesPglookoutOutputReference <a name="ManagedDatabasePostgresqlPropertiesPglookoutOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabasepostgresql"

manageddatabasepostgresql.NewManagedDatabasePostgresqlPropertiesPglookoutOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDatabasePostgresqlPropertiesPglookoutOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.resetMaxFailoverReplicationTimeLag">ResetMaxFailoverReplicationTimeLag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxFailoverReplicationTimeLag` <a name="ResetMaxFailoverReplicationTimeLag" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.resetMaxFailoverReplicationTimeLag"></a>

```go
func ResetMaxFailoverReplicationTimeLag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.maxFailoverReplicationTimeLagInput">MaxFailoverReplicationTimeLagInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.maxFailoverReplicationTimeLag">MaxFailoverReplicationTimeLag</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout">ManagedDatabasePostgresqlPropertiesPglookout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxFailoverReplicationTimeLagInput`<sup>Optional</sup> <a name="MaxFailoverReplicationTimeLagInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.maxFailoverReplicationTimeLagInput"></a>

```go
func MaxFailoverReplicationTimeLagInput() *f64
```

- *Type:* *f64

---

##### `MaxFailoverReplicationTimeLag`<sup>Required</sup> <a name="MaxFailoverReplicationTimeLag" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.maxFailoverReplicationTimeLag"></a>

```go
func MaxFailoverReplicationTimeLag() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabasePostgresqlPropertiesPglookout
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout">ManagedDatabasePostgresqlPropertiesPglookout</a>

---


### ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference <a name="ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/manageddatabasepostgresql"

manageddatabasepostgresql.NewManagedDatabasePostgresqlPropertiesTimescaledbOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.resetMaxBackgroundWorkers">ResetMaxBackgroundWorkers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxBackgroundWorkers` <a name="ResetMaxBackgroundWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.resetMaxBackgroundWorkers"></a>

```go
func ResetMaxBackgroundWorkers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.maxBackgroundWorkersInput">MaxBackgroundWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.maxBackgroundWorkers">MaxBackgroundWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb">ManagedDatabasePostgresqlPropertiesTimescaledb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxBackgroundWorkersInput`<sup>Optional</sup> <a name="MaxBackgroundWorkersInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.maxBackgroundWorkersInput"></a>

```go
func MaxBackgroundWorkersInput() *f64
```

- *Type:* *f64

---

##### `MaxBackgroundWorkers`<sup>Required</sup> <a name="MaxBackgroundWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.maxBackgroundWorkers"></a>

```go
func MaxBackgroundWorkers() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabasePostgresqlPropertiesTimescaledb
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb">ManagedDatabasePostgresqlPropertiesTimescaledb</a>

---



