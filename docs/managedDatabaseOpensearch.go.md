# `managedDatabaseOpensearch` Submodule <a name="`managedDatabaseOpensearch` Submodule" id="@cdktf/provider-upcloud.managedDatabaseOpensearch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedDatabaseOpensearch <a name="ManagedDatabaseOpensearch" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch upcloud_managed_database_opensearch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.NewManagedDatabaseOpensearch(scope Construct, id *string, config ManagedDatabaseOpensearchConfig) ManagedDatabaseOpensearch
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig">ManagedDatabaseOpensearchConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig">ManagedDatabaseOpensearchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.putNetwork">PutNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetAccessControl">ResetAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetExtendedAccessControl">ResetExtendedAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetMaintenanceWindowDow">ResetMaintenanceWindowDow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetMaintenanceWindowTime">ResetMaintenanceWindowTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetPowered">ResetPowered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetTerminationProtection">ResetTerminationProtection</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNetwork` <a name="PutNetwork" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.putNetwork"></a>

```go
func PutNetwork(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.putNetwork.parameter.value"></a>

- *Type:* interface{}

---

##### `PutProperties` <a name="PutProperties" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.putProperties"></a>

```go
func PutProperties(value ManagedDatabaseOpensearchProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties">ManagedDatabaseOpensearchProperties</a>

---

##### `ResetAccessControl` <a name="ResetAccessControl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetAccessControl"></a>

```go
func ResetAccessControl()
```

##### `ResetExtendedAccessControl` <a name="ResetExtendedAccessControl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetExtendedAccessControl"></a>

```go
func ResetExtendedAccessControl()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMaintenanceWindowDow` <a name="ResetMaintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetMaintenanceWindowDow"></a>

```go
func ResetMaintenanceWindowDow()
```

##### `ResetMaintenanceWindowTime` <a name="ResetMaintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetMaintenanceWindowTime"></a>

```go
func ResetMaintenanceWindowTime()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetPowered` <a name="ResetPowered" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetPowered"></a>

```go
func ResetPowered()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetTerminationProtection` <a name="ResetTerminationProtection" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.resetTerminationProtection"></a>

```go
func ResetTerminationProtection()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedDatabaseOpensearch resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.ManagedDatabaseOpensearch_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.ManagedDatabaseOpensearch_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.ManagedDatabaseOpensearch_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.ManagedDatabaseOpensearch_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ManagedDatabaseOpensearch resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ManagedDatabaseOpensearch to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ManagedDatabaseOpensearch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ManagedDatabaseOpensearch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.components">Components</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList">ManagedDatabaseOpensearchComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.network">Network</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList">ManagedDatabaseOpensearchNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.nodeStates">NodeStates</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList">ManagedDatabaseOpensearchNodeStatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.primaryDatabase">PrimaryDatabase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference">ManagedDatabaseOpensearchPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.serviceHost">ServiceHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.servicePassword">ServicePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.servicePort">ServicePort</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.serviceUri">ServiceUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.serviceUsername">ServiceUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.accessControlInput">AccessControlInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.extendedAccessControlInput">ExtendedAccessControlInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.maintenanceWindowDowInput">MaintenanceWindowDowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.maintenanceWindowTimeInput">MaintenanceWindowTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.networkInput">NetworkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.planInput">PlanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.poweredInput">PoweredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties">ManagedDatabaseOpensearchProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.terminationProtectionInput">TerminationProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.accessControl">AccessControl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.extendedAccessControl">ExtendedAccessControl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.maintenanceWindowDow">MaintenanceWindowDow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.maintenanceWindowTime">MaintenanceWindowTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.plan">Plan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.powered">Powered</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.terminationProtection">TerminationProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Components`<sup>Required</sup> <a name="Components" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.components"></a>

```go
func Components() ManagedDatabaseOpensearchComponentsList
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList">ManagedDatabaseOpensearchComponentsList</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.network"></a>

```go
func Network() ManagedDatabaseOpensearchNetworkList
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList">ManagedDatabaseOpensearchNetworkList</a>

---

##### `NodeStates`<sup>Required</sup> <a name="NodeStates" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.nodeStates"></a>

```go
func NodeStates() ManagedDatabaseOpensearchNodeStatesList
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList">ManagedDatabaseOpensearchNodeStatesList</a>

---

##### `PrimaryDatabase`<sup>Required</sup> <a name="PrimaryDatabase" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.primaryDatabase"></a>

```go
func PrimaryDatabase() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.properties"></a>

```go
func Properties() ManagedDatabaseOpensearchPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference">ManagedDatabaseOpensearchPropertiesOutputReference</a>

---

##### `ServiceHost`<sup>Required</sup> <a name="ServiceHost" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.serviceHost"></a>

```go
func ServiceHost() *string
```

- *Type:* *string

---

##### `ServicePassword`<sup>Required</sup> <a name="ServicePassword" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.servicePassword"></a>

```go
func ServicePassword() *string
```

- *Type:* *string

---

##### `ServicePort`<sup>Required</sup> <a name="ServicePort" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.servicePort"></a>

```go
func ServicePort() *string
```

- *Type:* *string

---

##### `ServiceUri`<sup>Required</sup> <a name="ServiceUri" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.serviceUri"></a>

```go
func ServiceUri() *string
```

- *Type:* *string

---

##### `ServiceUsername`<sup>Required</sup> <a name="ServiceUsername" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.serviceUsername"></a>

```go
func ServiceUsername() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `AccessControlInput`<sup>Optional</sup> <a name="AccessControlInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.accessControlInput"></a>

```go
func AccessControlInput() interface{}
```

- *Type:* interface{}

---

##### `ExtendedAccessControlInput`<sup>Optional</sup> <a name="ExtendedAccessControlInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.extendedAccessControlInput"></a>

```go
func ExtendedAccessControlInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaintenanceWindowDowInput`<sup>Optional</sup> <a name="MaintenanceWindowDowInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.maintenanceWindowDowInput"></a>

```go
func MaintenanceWindowDowInput() *string
```

- *Type:* *string

---

##### `MaintenanceWindowTimeInput`<sup>Optional</sup> <a name="MaintenanceWindowTimeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.maintenanceWindowTimeInput"></a>

```go
func MaintenanceWindowTimeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.networkInput"></a>

```go
func NetworkInput() interface{}
```

- *Type:* interface{}

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.planInput"></a>

```go
func PlanInput() *string
```

- *Type:* *string

---

##### `PoweredInput`<sup>Optional</sup> <a name="PoweredInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.poweredInput"></a>

```go
func PoweredInput() interface{}
```

- *Type:* interface{}

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.propertiesInput"></a>

```go
func PropertiesInput() ManagedDatabaseOpensearchProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties">ManagedDatabaseOpensearchProperties</a>

---

##### `TerminationProtectionInput`<sup>Optional</sup> <a name="TerminationProtectionInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.terminationProtectionInput"></a>

```go
func TerminationProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `AccessControl`<sup>Required</sup> <a name="AccessControl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.accessControl"></a>

```go
func AccessControl() interface{}
```

- *Type:* interface{}

---

##### `ExtendedAccessControl`<sup>Required</sup> <a name="ExtendedAccessControl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.extendedAccessControl"></a>

```go
func ExtendedAccessControl() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaintenanceWindowDow`<sup>Required</sup> <a name="MaintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.maintenanceWindowDow"></a>

```go
func MaintenanceWindowDow() *string
```

- *Type:* *string

---

##### `MaintenanceWindowTime`<sup>Required</sup> <a name="MaintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.maintenanceWindowTime"></a>

```go
func MaintenanceWindowTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.plan"></a>

```go
func Plan() *string
```

- *Type:* *string

---

##### `Powered`<sup>Required</sup> <a name="Powered" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.powered"></a>

```go
func Powered() interface{}
```

- *Type:* interface{}

---

##### `TerminationProtection`<sup>Required</sup> <a name="TerminationProtection" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.terminationProtection"></a>

```go
func TerminationProtection() interface{}
```

- *Type:* interface{}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearch.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedDatabaseOpensearchComponents <a name="ManagedDatabaseOpensearchComponents" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponents.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

&manageddatabaseopensearch.ManagedDatabaseOpensearchComponents {

}
```


### ManagedDatabaseOpensearchConfig <a name="ManagedDatabaseOpensearchConfig" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

&manageddatabaseopensearch.ManagedDatabaseOpensearchConfig {
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
	AccessControl: interface{},
	ExtendedAccessControl: interface{},
	Id: *string,
	Labels: *map[string]*string,
	MaintenanceWindowDow: *string,
	MaintenanceWindowTime: *string,
	Network: interface{},
	Powered: interface{},
	Properties: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties,
	TerminationProtection: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.name">Name</a></code> | <code>*string</code> | Name of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.plan">Plan</a></code> | <code>*string</code> | Service plan to use. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.title">Title</a></code> | <code>*string</code> | Title of a managed database instance. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.zone">Zone</a></code> | <code>*string</code> | Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.accessControl">AccessControl</a></code> | <code>interface{}</code> | Enables users access control for OpenSearch service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.extendedAccessControl">ExtendedAccessControl</a></code> | <code>interface{}</code> | Grant access to top-level `_mget`, `_msearch` and `_bulk` APIs. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#id ManagedDatabaseOpensearch#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | User defined key-value pairs to classify the managed database. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.maintenanceWindowDow">MaintenanceWindowDow</a></code> | <code>*string</code> | Maintenance window day of week. Lower case weekday name (monday, tuesday, ...). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.maintenanceWindowTime">MaintenanceWindowTime</a></code> | <code>*string</code> | Maintenance window UTC time in hh:mm:ss format. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.network">Network</a></code> | <code>interface{}</code> | network block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.powered">Powered</a></code> | <code>interface{}</code> | The administrative power state of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties">ManagedDatabaseOpensearchProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.terminationProtection">TerminationProtection</a></code> | <code>interface{}</code> | If set to true, prevents the managed service from being powered off, or deleted. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the service.

The name is used as a prefix for the logical hostname. Must be unique within an account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#name ManagedDatabaseOpensearch#name}

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.plan"></a>

```go
Plan *string
```

- *Type:* *string

Service plan to use.

This determines how much resources the instance will have. You can list available plans with `upctl database plans <type>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#plan ManagedDatabaseOpensearch#plan}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.title"></a>

```go
Title *string
```

- *Type:* *string

Title of a managed database instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#title ManagedDatabaseOpensearch#title}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#zone ManagedDatabaseOpensearch#zone}

---

##### `AccessControl`<sup>Optional</sup> <a name="AccessControl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.accessControl"></a>

```go
AccessControl interface{}
```

- *Type:* interface{}

Enables users access control for OpenSearch service.

User access control rules will only be enforced if this attribute is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#access_control ManagedDatabaseOpensearch#access_control}

---

##### `ExtendedAccessControl`<sup>Optional</sup> <a name="ExtendedAccessControl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.extendedAccessControl"></a>

```go
ExtendedAccessControl interface{}
```

- *Type:* interface{}

Grant access to top-level `_mget`, `_msearch` and `_bulk` APIs.

Users are limited to perform operations on indices based on the user-specific access control rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#extended_access_control ManagedDatabaseOpensearch#extended_access_control}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#id ManagedDatabaseOpensearch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

User defined key-value pairs to classify the managed database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#labels ManagedDatabaseOpensearch#labels}

---

##### `MaintenanceWindowDow`<sup>Optional</sup> <a name="MaintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.maintenanceWindowDow"></a>

```go
MaintenanceWindowDow *string
```

- *Type:* *string

Maintenance window day of week. Lower case weekday name (monday, tuesday, ...).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#maintenance_window_dow ManagedDatabaseOpensearch#maintenance_window_dow}

---

##### `MaintenanceWindowTime`<sup>Optional</sup> <a name="MaintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.maintenanceWindowTime"></a>

```go
MaintenanceWindowTime *string
```

- *Type:* *string

Maintenance window UTC time in hh:mm:ss format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#maintenance_window_time ManagedDatabaseOpensearch#maintenance_window_time}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.network"></a>

```go
Network interface{}
```

- *Type:* interface{}

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#network ManagedDatabaseOpensearch#network}

---

##### `Powered`<sup>Optional</sup> <a name="Powered" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.powered"></a>

```go
Powered interface{}
```

- *Type:* interface{}

The administrative power state of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#powered ManagedDatabaseOpensearch#powered}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.properties"></a>

```go
Properties ManagedDatabaseOpensearchProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties">ManagedDatabaseOpensearchProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#properties ManagedDatabaseOpensearch#properties}

---

##### `TerminationProtection`<sup>Optional</sup> <a name="TerminationProtection" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchConfig.property.terminationProtection"></a>

```go
TerminationProtection interface{}
```

- *Type:* interface{}

If set to true, prevents the managed service from being powered off, or deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#termination_protection ManagedDatabaseOpensearch#termination_protection}

---

### ManagedDatabaseOpensearchNetwork <a name="ManagedDatabaseOpensearchNetwork" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

&manageddatabaseopensearch.ManagedDatabaseOpensearchNetwork {
	Family: *string,
	Name: *string,
	Type: *string,
	Uuid: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork.property.family">Family</a></code> | <code>*string</code> | Network family. Currently only `IPv4` is supported. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork.property.name">Name</a></code> | <code>*string</code> | The name of the network. Must be unique within the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork.property.type">Type</a></code> | <code>*string</code> | The type of the network. Must be private. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork.property.uuid">Uuid</a></code> | <code>*string</code> | Private network UUID. Must reside in the same zone as the database. |

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork.property.family"></a>

```go
Family *string
```

- *Type:* *string

Network family. Currently only `IPv4` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#family ManagedDatabaseOpensearch#family}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the network. Must be unique within the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#name ManagedDatabaseOpensearch#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the network. Must be private.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#type ManagedDatabaseOpensearch#type}

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetwork.property.uuid"></a>

```go
Uuid *string
```

- *Type:* *string

Private network UUID. Must reside in the same zone as the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#uuid ManagedDatabaseOpensearch#uuid}

---

### ManagedDatabaseOpensearchNodeStates <a name="ManagedDatabaseOpensearchNodeStates" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStates.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

&manageddatabaseopensearch.ManagedDatabaseOpensearchNodeStates {

}
```


### ManagedDatabaseOpensearchProperties <a name="ManagedDatabaseOpensearchProperties" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

&manageddatabaseopensearch.ManagedDatabaseOpensearchProperties {
	ActionAutoCreateIndexEnabled: interface{},
	ActionDestructiveRequiresName: interface{},
	AuthFailureListeners: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners,
	AutomaticUtilityNetworkIpFilter: interface{},
	ClusterMaxShardsPerNode: *f64,
	ClusterRoutingAllocationBalancePreferPrimary: interface{},
	ClusterRoutingAllocationNodeConcurrentRecoveries: *f64,
	ClusterSearchRequestSlowlog: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlog,
	CustomDomain: *string,
	ElasticsearchVersion: *string,
	EmailSenderName: *string,
	EmailSenderPassword: *string,
	EmailSenderUsername: *string,
	EnableRemoteBackedStorage: interface{},
	EnableSecurityAudit: interface{},
	HttpMaxContentLength: *f64,
	HttpMaxHeaderSize: *f64,
	HttpMaxInitialLineLength: *f64,
	IndexPatterns: *[]*string,
	IndexRollup: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup,
	IndexTemplate: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate,
	IndicesFielddataCacheSize: *f64,
	IndicesMemoryIndexBufferSize: *f64,
	IndicesMemoryMaxIndexBufferSize: *f64,
	IndicesMemoryMinIndexBufferSize: *f64,
	IndicesQueriesCacheSize: *f64,
	IndicesQueryBoolMaxClauseCount: *f64,
	IndicesRecoveryMaxBytesPerSec: *f64,
	IndicesRecoveryMaxConcurrentFileChunks: *f64,
	IpFilter: *[]*string,
	IsmEnabled: interface{},
	IsmHistoryEnabled: interface{},
	IsmHistoryMaxAge: *f64,
	IsmHistoryMaxDocs: *f64,
	IsmHistoryRolloverCheckPeriod: *f64,
	IsmHistoryRolloverRetentionPeriod: *f64,
	KeepIndexRefreshInterval: interface{},
	KnnMemoryCircuitBreakerEnabled: interface{},
	KnnMemoryCircuitBreakerLimit: *f64,
	Openid: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid,
	OpensearchDashboards: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards,
	OverrideMainResponseVersion: interface{},
	PluginsAlertingFilterByBackendRoles: interface{},
	PublicAccess: interface{},
	ReindexRemoteWhitelist: *[]*string,
	Saml: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml,
	ScriptMaxCompilationsRate: *string,
	SearchBackpressure: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressure,
	SearchInsightsTopQueries: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries,
	SearchMaxBuckets: *f64,
	Segrep: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrep,
	ServiceLog: interface{},
	ShardIndexingPressure: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressure,
	ThreadPoolAnalyzeQueueSize: *f64,
	ThreadPoolAnalyzeSize: *f64,
	ThreadPoolForceMergeSize: *f64,
	ThreadPoolGetQueueSize: *f64,
	ThreadPoolGetSize: *f64,
	ThreadPoolSearchQueueSize: *f64,
	ThreadPoolSearchSize: *f64,
	ThreadPoolSearchThrottledQueueSize: *f64,
	ThreadPoolSearchThrottledSize: *f64,
	ThreadPoolWriteQueueSize: *f64,
	ThreadPoolWriteSize: *f64,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.actionAutoCreateIndexEnabled">ActionAutoCreateIndexEnabled</a></code> | <code>interface{}</code> | action.auto_create_index. Explicitly allow or block automatic creation of indices. Defaults to true. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.actionDestructiveRequiresName">ActionDestructiveRequiresName</a></code> | <code>interface{}</code> | Require explicit index names when deleting. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.authFailureListeners">AuthFailureListeners</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners">ManagedDatabaseOpensearchPropertiesAuthFailureListeners</a></code> | auth_failure_listeners block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.automaticUtilityNetworkIpFilter">AutomaticUtilityNetworkIpFilter</a></code> | <code>interface{}</code> | Automatic utility network IP Filter. Automatically allow connections from servers in the utility network within the same zone. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.clusterMaxShardsPerNode">ClusterMaxShardsPerNode</a></code> | <code>*f64</code> | Controls the number of shards allowed in the cluster per data node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.clusterRoutingAllocationBalancePreferPrimary">ClusterRoutingAllocationBalancePreferPrimary</a></code> | <code>interface{}</code> | When set to true, OpenSearch attempts to evenly distribute the primary shards between the cluster nodes. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.clusterRoutingAllocationNodeConcurrentRecoveries">ClusterRoutingAllocationNodeConcurrentRecoveries</a></code> | <code>*f64</code> | Concurrent incoming/outgoing shard recoveries per node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.clusterSearchRequestSlowlog">ClusterSearchRequestSlowlog</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlog">ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlog</a></code> | cluster_search_request_slowlog block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.customDomain">CustomDomain</a></code> | <code>*string</code> | Custom domain. Serve the web frontend using a custom CNAME pointing to the Aiven DNS name. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.elasticsearchVersion">ElasticsearchVersion</a></code> | <code>*string</code> | Elasticsearch major version. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.emailSenderName">EmailSenderName</a></code> | <code>*string</code> | Sender name placeholder to be used in Opensearch Dashboards and Opensearch keystore. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.emailSenderPassword">EmailSenderPassword</a></code> | <code>*string</code> | Sender password for Opensearch alerts to authenticate with SMTP server. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.emailSenderUsername">EmailSenderUsername</a></code> | <code>*string</code> | Sender username for Opensearch alerts. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.enableRemoteBackedStorage">EnableRemoteBackedStorage</a></code> | <code>interface{}</code> | Enable remote-backed storage. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.enableSecurityAudit">EnableSecurityAudit</a></code> | <code>interface{}</code> | Enable/Disable security audit. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.httpMaxContentLength">HttpMaxContentLength</a></code> | <code>*f64</code> | Maximum content length for HTTP requests to the OpenSearch HTTP API, in bytes. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.httpMaxHeaderSize">HttpMaxHeaderSize</a></code> | <code>*f64</code> | The max size of allowed headers, in bytes. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.httpMaxInitialLineLength">HttpMaxInitialLineLength</a></code> | <code>*f64</code> | The max length of an HTTP URL, in bytes. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indexPatterns">IndexPatterns</a></code> | <code>*[]*string</code> | Index patterns. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indexRollup">IndexRollup</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup">ManagedDatabaseOpensearchPropertiesIndexRollup</a></code> | index_rollup block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indexTemplate">IndexTemplate</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate">ManagedDatabaseOpensearchPropertiesIndexTemplate</a></code> | index_template block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesFielddataCacheSize">IndicesFielddataCacheSize</a></code> | <code>*f64</code> | Relative amount. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesMemoryIndexBufferSize">IndicesMemoryIndexBufferSize</a></code> | <code>*f64</code> | Percentage value. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesMemoryMaxIndexBufferSize">IndicesMemoryMaxIndexBufferSize</a></code> | <code>*f64</code> | Absolute value. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesMemoryMinIndexBufferSize">IndicesMemoryMinIndexBufferSize</a></code> | <code>*f64</code> | Absolute value. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesQueriesCacheSize">IndicesQueriesCacheSize</a></code> | <code>*f64</code> | Percentage value. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesQueryBoolMaxClauseCount">IndicesQueryBoolMaxClauseCount</a></code> | <code>*f64</code> | Maximum number of clauses Lucene BooleanQuery can have. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesRecoveryMaxBytesPerSec">IndicesRecoveryMaxBytesPerSec</a></code> | <code>*f64</code> | Limits total inbound and outbound recovery traffic for each node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesRecoveryMaxConcurrentFileChunks">IndicesRecoveryMaxConcurrentFileChunks</a></code> | <code>*f64</code> | Number of file chunks sent in parallel for each recovery. Defaults to 2. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ipFilter">IpFilter</a></code> | <code>*[]*string</code> | IP filter. Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismEnabled">IsmEnabled</a></code> | <code>interface{}</code> | Specifies whether ISM is enabled or not. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismHistoryEnabled">IsmHistoryEnabled</a></code> | <code>interface{}</code> | Specifies whether audit history is enabled or not. The logs from ISM are automatically indexed to a logs document. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismHistoryMaxAge">IsmHistoryMaxAge</a></code> | <code>*f64</code> | The maximum age before rolling over the audit history index in hours. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismHistoryMaxDocs">IsmHistoryMaxDocs</a></code> | <code>*f64</code> | The maximum number of documents before rolling over the audit history index. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismHistoryRolloverCheckPeriod">IsmHistoryRolloverCheckPeriod</a></code> | <code>*f64</code> | The time between rollover checks for the audit history index in hours. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismHistoryRolloverRetentionPeriod">IsmHistoryRolloverRetentionPeriod</a></code> | <code>*f64</code> | How long audit history indices are kept in days. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.keepIndexRefreshInterval">KeepIndexRefreshInterval</a></code> | <code>interface{}</code> | Don't reset index.refresh_interval to the default value. Aiven automation resets index.refresh_interval to default value for every index to be sure that indices are always visible to search. If it doesn't fit your case, you can disable this by setting up this flag to true. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.knnMemoryCircuitBreakerEnabled">KnnMemoryCircuitBreakerEnabled</a></code> | <code>interface{}</code> | Enable or disable KNN memory circuit breaker. Defaults to true. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.knnMemoryCircuitBreakerLimit">KnnMemoryCircuitBreakerLimit</a></code> | <code>*f64</code> | Maximum amount of memory that can be used for KNN index. Defaults to 50% of the JVM heap size. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.openid">Openid</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid">ManagedDatabaseOpensearchPropertiesOpenid</a></code> | openid block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.opensearchDashboards">OpensearchDashboards</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards">ManagedDatabaseOpensearchPropertiesOpensearchDashboards</a></code> | opensearch_dashboards block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.overrideMainResponseVersion">OverrideMainResponseVersion</a></code> | <code>interface{}</code> | Compatibility mode sets OpenSearch to report its version as 7.10 so clients continue to work. Default is false. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.pluginsAlertingFilterByBackendRoles">PluginsAlertingFilterByBackendRoles</a></code> | <code>interface{}</code> | Enable or disable filtering of alerting by backend roles. Requires Security plugin. Defaults to false. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.publicAccess">PublicAccess</a></code> | <code>interface{}</code> | Public Access. Allow access to the service from the public Internet. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.reindexRemoteWhitelist">ReindexRemoteWhitelist</a></code> | <code>*[]*string</code> | Whitelisted addresses for reindexing. Changing this value will cause all OpenSearch instances to restart. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.saml">Saml</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml">ManagedDatabaseOpensearchPropertiesSaml</a></code> | saml block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.scriptMaxCompilationsRate">ScriptMaxCompilationsRate</a></code> | <code>*string</code> | Script max compilation rate - circuit breaker to prevent/minimize OOMs. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.searchBackpressure">SearchBackpressure</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressure">ManagedDatabaseOpensearchPropertiesSearchBackpressure</a></code> | search_backpressure block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.searchInsightsTopQueries">SearchInsightsTopQueries</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries</a></code> | search_insights_top_queries block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.searchMaxBuckets">SearchMaxBuckets</a></code> | <code>*f64</code> | Maximum number of aggregation buckets allowed in a single response. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.segrep">Segrep</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrep">ManagedDatabaseOpensearchPropertiesSegrep</a></code> | segrep block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.serviceLog">ServiceLog</a></code> | <code>interface{}</code> | Service logging. Store logs for the service so that they are available in the HTTP API and console. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.shardIndexingPressure">ShardIndexingPressure</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressure">ManagedDatabaseOpensearchPropertiesShardIndexingPressure</a></code> | shard_indexing_pressure block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolAnalyzeQueueSize">ThreadPoolAnalyzeQueueSize</a></code> | <code>*f64</code> | analyze thread pool queue size. Size for the thread pool queue. See documentation for exact details. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolAnalyzeSize">ThreadPoolAnalyzeSize</a></code> | <code>*f64</code> | analyze thread pool size. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolForceMergeSize">ThreadPoolForceMergeSize</a></code> | <code>*f64</code> | force_merge thread pool size. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolGetQueueSize">ThreadPoolGetQueueSize</a></code> | <code>*f64</code> | get thread pool queue size. Size for the thread pool queue. See documentation for exact details. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolGetSize">ThreadPoolGetSize</a></code> | <code>*f64</code> | get thread pool size. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolSearchQueueSize">ThreadPoolSearchQueueSize</a></code> | <code>*f64</code> | search thread pool queue size. Size for the thread pool queue. See documentation for exact details. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolSearchSize">ThreadPoolSearchSize</a></code> | <code>*f64</code> | search thread pool size. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolSearchThrottledQueueSize">ThreadPoolSearchThrottledQueueSize</a></code> | <code>*f64</code> | search_throttled thread pool queue size. Size for the thread pool queue. See documentation for exact details. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolSearchThrottledSize">ThreadPoolSearchThrottledSize</a></code> | <code>*f64</code> | search_throttled thread pool size. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolWriteQueueSize">ThreadPoolWriteQueueSize</a></code> | <code>*f64</code> | write thread pool queue size. Size for the thread pool queue. See documentation for exact details. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolWriteSize">ThreadPoolWriteSize</a></code> | <code>*f64</code> | write thread pool size. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.version">Version</a></code> | <code>*string</code> | OpenSearch major version. |

---

##### `ActionAutoCreateIndexEnabled`<sup>Optional</sup> <a name="ActionAutoCreateIndexEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.actionAutoCreateIndexEnabled"></a>

```go
ActionAutoCreateIndexEnabled interface{}
```

- *Type:* interface{}

action.auto_create_index. Explicitly allow or block automatic creation of indices. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#action_auto_create_index_enabled ManagedDatabaseOpensearch#action_auto_create_index_enabled}

---

##### `ActionDestructiveRequiresName`<sup>Optional</sup> <a name="ActionDestructiveRequiresName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.actionDestructiveRequiresName"></a>

```go
ActionDestructiveRequiresName interface{}
```

- *Type:* interface{}

Require explicit index names when deleting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#action_destructive_requires_name ManagedDatabaseOpensearch#action_destructive_requires_name}

---

##### `AuthFailureListeners`<sup>Optional</sup> <a name="AuthFailureListeners" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.authFailureListeners"></a>

```go
AuthFailureListeners ManagedDatabaseOpensearchPropertiesAuthFailureListeners
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners">ManagedDatabaseOpensearchPropertiesAuthFailureListeners</a>

auth_failure_listeners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#auth_failure_listeners ManagedDatabaseOpensearch#auth_failure_listeners}

---

##### `AutomaticUtilityNetworkIpFilter`<sup>Optional</sup> <a name="AutomaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.automaticUtilityNetworkIpFilter"></a>

```go
AutomaticUtilityNetworkIpFilter interface{}
```

- *Type:* interface{}

Automatic utility network IP Filter. Automatically allow connections from servers in the utility network within the same zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#automatic_utility_network_ip_filter ManagedDatabaseOpensearch#automatic_utility_network_ip_filter}

---

##### `ClusterMaxShardsPerNode`<sup>Optional</sup> <a name="ClusterMaxShardsPerNode" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.clusterMaxShardsPerNode"></a>

```go
ClusterMaxShardsPerNode *f64
```

- *Type:* *f64

Controls the number of shards allowed in the cluster per data node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#cluster_max_shards_per_node ManagedDatabaseOpensearch#cluster_max_shards_per_node}

---

##### `ClusterRoutingAllocationBalancePreferPrimary`<sup>Optional</sup> <a name="ClusterRoutingAllocationBalancePreferPrimary" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.clusterRoutingAllocationBalancePreferPrimary"></a>

```go
ClusterRoutingAllocationBalancePreferPrimary interface{}
```

- *Type:* interface{}

When set to true, OpenSearch attempts to evenly distribute the primary shards between the cluster nodes.

Enabling this setting does not always guarantee an equal number of primary shards on each node, especially in the event of a failover. Changing this setting to false after it was set to true does not invoke redistribution of primary shards. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#cluster_routing_allocation_balance_prefer_primary ManagedDatabaseOpensearch#cluster_routing_allocation_balance_prefer_primary}

---

##### `ClusterRoutingAllocationNodeConcurrentRecoveries`<sup>Optional</sup> <a name="ClusterRoutingAllocationNodeConcurrentRecoveries" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.clusterRoutingAllocationNodeConcurrentRecoveries"></a>

```go
ClusterRoutingAllocationNodeConcurrentRecoveries *f64
```

- *Type:* *f64

Concurrent incoming/outgoing shard recoveries per node.

How many concurrent incoming/outgoing shard recoveries (normally replicas) are allowed to happen on a node. Defaults to node cpu count * 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#cluster_routing_allocation_node_concurrent_recoveries ManagedDatabaseOpensearch#cluster_routing_allocation_node_concurrent_recoveries}

---

##### `ClusterSearchRequestSlowlog`<sup>Optional</sup> <a name="ClusterSearchRequestSlowlog" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.clusterSearchRequestSlowlog"></a>

```go
ClusterSearchRequestSlowlog ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlog
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlog">ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlog</a>

cluster_search_request_slowlog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#cluster_search_request_slowlog ManagedDatabaseOpensearch#cluster_search_request_slowlog}

---

##### `CustomDomain`<sup>Optional</sup> <a name="CustomDomain" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.customDomain"></a>

```go
CustomDomain *string
```

- *Type:* *string

Custom domain. Serve the web frontend using a custom CNAME pointing to the Aiven DNS name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#custom_domain ManagedDatabaseOpensearch#custom_domain}

---

##### `ElasticsearchVersion`<sup>Optional</sup> <a name="ElasticsearchVersion" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.elasticsearchVersion"></a>

```go
ElasticsearchVersion *string
```

- *Type:* *string

Elasticsearch major version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#elasticsearch_version ManagedDatabaseOpensearch#elasticsearch_version}

---

##### `EmailSenderName`<sup>Optional</sup> <a name="EmailSenderName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.emailSenderName"></a>

```go
EmailSenderName *string
```

- *Type:* *string

Sender name placeholder to be used in Opensearch Dashboards and Opensearch keystore.

This should be identical to the Sender name defined in Opensearch dashboards.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#email_sender_name ManagedDatabaseOpensearch#email_sender_name}

---

##### `EmailSenderPassword`<sup>Optional</sup> <a name="EmailSenderPassword" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.emailSenderPassword"></a>

```go
EmailSenderPassword *string
```

- *Type:* *string

Sender password for Opensearch alerts to authenticate with SMTP server.

Sender password for Opensearch alerts to authenticate with SMTP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#email_sender_password ManagedDatabaseOpensearch#email_sender_password}

---

##### `EmailSenderUsername`<sup>Optional</sup> <a name="EmailSenderUsername" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.emailSenderUsername"></a>

```go
EmailSenderUsername *string
```

- *Type:* *string

Sender username for Opensearch alerts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#email_sender_username ManagedDatabaseOpensearch#email_sender_username}

---

##### `EnableRemoteBackedStorage`<sup>Optional</sup> <a name="EnableRemoteBackedStorage" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.enableRemoteBackedStorage"></a>

```go
EnableRemoteBackedStorage interface{}
```

- *Type:* interface{}

Enable remote-backed storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#enable_remote_backed_storage ManagedDatabaseOpensearch#enable_remote_backed_storage}

---

##### `EnableSecurityAudit`<sup>Optional</sup> <a name="EnableSecurityAudit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.enableSecurityAudit"></a>

```go
EnableSecurityAudit interface{}
```

- *Type:* interface{}

Enable/Disable security audit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#enable_security_audit ManagedDatabaseOpensearch#enable_security_audit}

---

##### `HttpMaxContentLength`<sup>Optional</sup> <a name="HttpMaxContentLength" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.httpMaxContentLength"></a>

```go
HttpMaxContentLength *f64
```

- *Type:* *f64

Maximum content length for HTTP requests to the OpenSearch HTTP API, in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#http_max_content_length ManagedDatabaseOpensearch#http_max_content_length}

---

##### `HttpMaxHeaderSize`<sup>Optional</sup> <a name="HttpMaxHeaderSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.httpMaxHeaderSize"></a>

```go
HttpMaxHeaderSize *f64
```

- *Type:* *f64

The max size of allowed headers, in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#http_max_header_size ManagedDatabaseOpensearch#http_max_header_size}

---

##### `HttpMaxInitialLineLength`<sup>Optional</sup> <a name="HttpMaxInitialLineLength" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.httpMaxInitialLineLength"></a>

```go
HttpMaxInitialLineLength *f64
```

- *Type:* *f64

The max length of an HTTP URL, in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#http_max_initial_line_length ManagedDatabaseOpensearch#http_max_initial_line_length}

---

##### `IndexPatterns`<sup>Optional</sup> <a name="IndexPatterns" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indexPatterns"></a>

```go
IndexPatterns *[]*string
```

- *Type:* *[]*string

Index patterns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#index_patterns ManagedDatabaseOpensearch#index_patterns}

---

##### `IndexRollup`<sup>Optional</sup> <a name="IndexRollup" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indexRollup"></a>

```go
IndexRollup ManagedDatabaseOpensearchPropertiesIndexRollup
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup">ManagedDatabaseOpensearchPropertiesIndexRollup</a>

index_rollup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#index_rollup ManagedDatabaseOpensearch#index_rollup}

---

##### `IndexTemplate`<sup>Optional</sup> <a name="IndexTemplate" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indexTemplate"></a>

```go
IndexTemplate ManagedDatabaseOpensearchPropertiesIndexTemplate
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate">ManagedDatabaseOpensearchPropertiesIndexTemplate</a>

index_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#index_template ManagedDatabaseOpensearch#index_template}

---

##### `IndicesFielddataCacheSize`<sup>Optional</sup> <a name="IndicesFielddataCacheSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesFielddataCacheSize"></a>

```go
IndicesFielddataCacheSize *f64
```

- *Type:* *f64

Relative amount.

Maximum amount of heap memory used for field data cache. This is an expert setting; decreasing the value too much will increase overhead of loading field data; too much memory used for field data cache will decrease amount of heap available for other operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#indices_fielddata_cache_size ManagedDatabaseOpensearch#indices_fielddata_cache_size}

---

##### `IndicesMemoryIndexBufferSize`<sup>Optional</sup> <a name="IndicesMemoryIndexBufferSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesMemoryIndexBufferSize"></a>

```go
IndicesMemoryIndexBufferSize *f64
```

- *Type:* *f64

Percentage value.

Default is 10%. Total amount of heap used for indexing buffer, before writing segments to disk. This is an expert setting. Too low value will slow down indexing; too high value will increase indexing performance but causes performance issues for query performance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#indices_memory_index_buffer_size ManagedDatabaseOpensearch#indices_memory_index_buffer_size}

---

##### `IndicesMemoryMaxIndexBufferSize`<sup>Optional</sup> <a name="IndicesMemoryMaxIndexBufferSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesMemoryMaxIndexBufferSize"></a>

```go
IndicesMemoryMaxIndexBufferSize *f64
```

- *Type:* *f64

Absolute value.

Default is unbound. Doesn't work without indices.memory.index_buffer_size. Maximum amount of heap used for query cache, an absolute indices.memory.index_buffer_size maximum hard limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#indices_memory_max_index_buffer_size ManagedDatabaseOpensearch#indices_memory_max_index_buffer_size}

---

##### `IndicesMemoryMinIndexBufferSize`<sup>Optional</sup> <a name="IndicesMemoryMinIndexBufferSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesMemoryMinIndexBufferSize"></a>

```go
IndicesMemoryMinIndexBufferSize *f64
```

- *Type:* *f64

Absolute value.

Default is 48mb. Doesn't work without indices.memory.index_buffer_size. Minimum amount of heap used for query cache, an absolute indices.memory.index_buffer_size minimal hard limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#indices_memory_min_index_buffer_size ManagedDatabaseOpensearch#indices_memory_min_index_buffer_size}

---

##### `IndicesQueriesCacheSize`<sup>Optional</sup> <a name="IndicesQueriesCacheSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesQueriesCacheSize"></a>

```go
IndicesQueriesCacheSize *f64
```

- *Type:* *f64

Percentage value.

Default is 10%. Maximum amount of heap used for query cache. This is an expert setting. Too low value will decrease query performance and increase performance for other operations; too high value will cause issues with other OpenSearch functionality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#indices_queries_cache_size ManagedDatabaseOpensearch#indices_queries_cache_size}

---

##### `IndicesQueryBoolMaxClauseCount`<sup>Optional</sup> <a name="IndicesQueryBoolMaxClauseCount" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesQueryBoolMaxClauseCount"></a>

```go
IndicesQueryBoolMaxClauseCount *f64
```

- *Type:* *f64

Maximum number of clauses Lucene BooleanQuery can have.

The default value (1024) is relatively high, and increasing it may cause performance issues. Investigate other approaches first before increasing this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#indices_query_bool_max_clause_count ManagedDatabaseOpensearch#indices_query_bool_max_clause_count}

---

##### `IndicesRecoveryMaxBytesPerSec`<sup>Optional</sup> <a name="IndicesRecoveryMaxBytesPerSec" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesRecoveryMaxBytesPerSec"></a>

```go
IndicesRecoveryMaxBytesPerSec *f64
```

- *Type:* *f64

Limits total inbound and outbound recovery traffic for each node.

Applies to both peer recoveries as well as snapshot recoveries (i.e., restores from a snapshot). Defaults to 40mb.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#indices_recovery_max_bytes_per_sec ManagedDatabaseOpensearch#indices_recovery_max_bytes_per_sec}

---

##### `IndicesRecoveryMaxConcurrentFileChunks`<sup>Optional</sup> <a name="IndicesRecoveryMaxConcurrentFileChunks" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.indicesRecoveryMaxConcurrentFileChunks"></a>

```go
IndicesRecoveryMaxConcurrentFileChunks *f64
```

- *Type:* *f64

Number of file chunks sent in parallel for each recovery. Defaults to 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#indices_recovery_max_concurrent_file_chunks ManagedDatabaseOpensearch#indices_recovery_max_concurrent_file_chunks}

---

##### `IpFilter`<sup>Optional</sup> <a name="IpFilter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ipFilter"></a>

```go
IpFilter *[]*string
```

- *Type:* *[]*string

IP filter. Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#ip_filter ManagedDatabaseOpensearch#ip_filter}

---

##### `IsmEnabled`<sup>Optional</sup> <a name="IsmEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismEnabled"></a>

```go
IsmEnabled interface{}
```

- *Type:* interface{}

Specifies whether ISM is enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#ism_enabled ManagedDatabaseOpensearch#ism_enabled}

---

##### `IsmHistoryEnabled`<sup>Optional</sup> <a name="IsmHistoryEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismHistoryEnabled"></a>

```go
IsmHistoryEnabled interface{}
```

- *Type:* interface{}

Specifies whether audit history is enabled or not. The logs from ISM are automatically indexed to a logs document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#ism_history_enabled ManagedDatabaseOpensearch#ism_history_enabled}

---

##### `IsmHistoryMaxAge`<sup>Optional</sup> <a name="IsmHistoryMaxAge" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismHistoryMaxAge"></a>

```go
IsmHistoryMaxAge *f64
```

- *Type:* *f64

The maximum age before rolling over the audit history index in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#ism_history_max_age ManagedDatabaseOpensearch#ism_history_max_age}

---

##### `IsmHistoryMaxDocs`<sup>Optional</sup> <a name="IsmHistoryMaxDocs" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismHistoryMaxDocs"></a>

```go
IsmHistoryMaxDocs *f64
```

- *Type:* *f64

The maximum number of documents before rolling over the audit history index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#ism_history_max_docs ManagedDatabaseOpensearch#ism_history_max_docs}

---

##### `IsmHistoryRolloverCheckPeriod`<sup>Optional</sup> <a name="IsmHistoryRolloverCheckPeriod" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismHistoryRolloverCheckPeriod"></a>

```go
IsmHistoryRolloverCheckPeriod *f64
```

- *Type:* *f64

The time between rollover checks for the audit history index in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#ism_history_rollover_check_period ManagedDatabaseOpensearch#ism_history_rollover_check_period}

---

##### `IsmHistoryRolloverRetentionPeriod`<sup>Optional</sup> <a name="IsmHistoryRolloverRetentionPeriod" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.ismHistoryRolloverRetentionPeriod"></a>

```go
IsmHistoryRolloverRetentionPeriod *f64
```

- *Type:* *f64

How long audit history indices are kept in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#ism_history_rollover_retention_period ManagedDatabaseOpensearch#ism_history_rollover_retention_period}

---

##### `KeepIndexRefreshInterval`<sup>Optional</sup> <a name="KeepIndexRefreshInterval" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.keepIndexRefreshInterval"></a>

```go
KeepIndexRefreshInterval interface{}
```

- *Type:* interface{}

Don't reset index.refresh_interval to the default value. Aiven automation resets index.refresh_interval to default value for every index to be sure that indices are always visible to search. If it doesn't fit your case, you can disable this by setting up this flag to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#keep_index_refresh_interval ManagedDatabaseOpensearch#keep_index_refresh_interval}

---

##### `KnnMemoryCircuitBreakerEnabled`<sup>Optional</sup> <a name="KnnMemoryCircuitBreakerEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.knnMemoryCircuitBreakerEnabled"></a>

```go
KnnMemoryCircuitBreakerEnabled interface{}
```

- *Type:* interface{}

Enable or disable KNN memory circuit breaker. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#knn_memory_circuit_breaker_enabled ManagedDatabaseOpensearch#knn_memory_circuit_breaker_enabled}

---

##### `KnnMemoryCircuitBreakerLimit`<sup>Optional</sup> <a name="KnnMemoryCircuitBreakerLimit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.knnMemoryCircuitBreakerLimit"></a>

```go
KnnMemoryCircuitBreakerLimit *f64
```

- *Type:* *f64

Maximum amount of memory that can be used for KNN index. Defaults to 50% of the JVM heap size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#knn_memory_circuit_breaker_limit ManagedDatabaseOpensearch#knn_memory_circuit_breaker_limit}

---

##### `Openid`<sup>Optional</sup> <a name="Openid" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.openid"></a>

```go
Openid ManagedDatabaseOpensearchPropertiesOpenid
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid">ManagedDatabaseOpensearchPropertiesOpenid</a>

openid block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#openid ManagedDatabaseOpensearch#openid}

---

##### `OpensearchDashboards`<sup>Optional</sup> <a name="OpensearchDashboards" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.opensearchDashboards"></a>

```go
OpensearchDashboards ManagedDatabaseOpensearchPropertiesOpensearchDashboards
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards">ManagedDatabaseOpensearchPropertiesOpensearchDashboards</a>

opensearch_dashboards block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#opensearch_dashboards ManagedDatabaseOpensearch#opensearch_dashboards}

---

##### `OverrideMainResponseVersion`<sup>Optional</sup> <a name="OverrideMainResponseVersion" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.overrideMainResponseVersion"></a>

```go
OverrideMainResponseVersion interface{}
```

- *Type:* interface{}

Compatibility mode sets OpenSearch to report its version as 7.10 so clients continue to work. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#override_main_response_version ManagedDatabaseOpensearch#override_main_response_version}

---

##### `PluginsAlertingFilterByBackendRoles`<sup>Optional</sup> <a name="PluginsAlertingFilterByBackendRoles" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.pluginsAlertingFilterByBackendRoles"></a>

```go
PluginsAlertingFilterByBackendRoles interface{}
```

- *Type:* interface{}

Enable or disable filtering of alerting by backend roles. Requires Security plugin. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#plugins_alerting_filter_by_backend_roles ManagedDatabaseOpensearch#plugins_alerting_filter_by_backend_roles}

---

##### `PublicAccess`<sup>Optional</sup> <a name="PublicAccess" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.publicAccess"></a>

```go
PublicAccess interface{}
```

- *Type:* interface{}

Public Access. Allow access to the service from the public Internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#public_access ManagedDatabaseOpensearch#public_access}

---

##### `ReindexRemoteWhitelist`<sup>Optional</sup> <a name="ReindexRemoteWhitelist" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.reindexRemoteWhitelist"></a>

```go
ReindexRemoteWhitelist *[]*string
```

- *Type:* *[]*string

Whitelisted addresses for reindexing. Changing this value will cause all OpenSearch instances to restart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#reindex_remote_whitelist ManagedDatabaseOpensearch#reindex_remote_whitelist}

---

##### `Saml`<sup>Optional</sup> <a name="Saml" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.saml"></a>

```go
Saml ManagedDatabaseOpensearchPropertiesSaml
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml">ManagedDatabaseOpensearchPropertiesSaml</a>

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#saml ManagedDatabaseOpensearch#saml}

---

##### `ScriptMaxCompilationsRate`<sup>Optional</sup> <a name="ScriptMaxCompilationsRate" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.scriptMaxCompilationsRate"></a>

```go
ScriptMaxCompilationsRate *string
```

- *Type:* *string

Script max compilation rate - circuit breaker to prevent/minimize OOMs.

Script compilation circuit breaker limits the number of inline script compilations within a period of time. Default is use-context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#script_max_compilations_rate ManagedDatabaseOpensearch#script_max_compilations_rate}

---

##### `SearchBackpressure`<sup>Optional</sup> <a name="SearchBackpressure" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.searchBackpressure"></a>

```go
SearchBackpressure ManagedDatabaseOpensearchPropertiesSearchBackpressure
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressure">ManagedDatabaseOpensearchPropertiesSearchBackpressure</a>

search_backpressure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#search_backpressure ManagedDatabaseOpensearch#search_backpressure}

---

##### `SearchInsightsTopQueries`<sup>Optional</sup> <a name="SearchInsightsTopQueries" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.searchInsightsTopQueries"></a>

```go
SearchInsightsTopQueries ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries</a>

search_insights_top_queries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#search_insights_top_queries ManagedDatabaseOpensearch#search_insights_top_queries}

---

##### `SearchMaxBuckets`<sup>Optional</sup> <a name="SearchMaxBuckets" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.searchMaxBuckets"></a>

```go
SearchMaxBuckets *f64
```

- *Type:* *f64

Maximum number of aggregation buckets allowed in a single response.

OpenSearch default value is used when this is not defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#search_max_buckets ManagedDatabaseOpensearch#search_max_buckets}

---

##### `Segrep`<sup>Optional</sup> <a name="Segrep" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.segrep"></a>

```go
Segrep ManagedDatabaseOpensearchPropertiesSegrep
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrep">ManagedDatabaseOpensearchPropertiesSegrep</a>

segrep block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#segrep ManagedDatabaseOpensearch#segrep}

---

##### `ServiceLog`<sup>Optional</sup> <a name="ServiceLog" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.serviceLog"></a>

```go
ServiceLog interface{}
```

- *Type:* interface{}

Service logging. Store logs for the service so that they are available in the HTTP API and console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#service_log ManagedDatabaseOpensearch#service_log}

---

##### `ShardIndexingPressure`<sup>Optional</sup> <a name="ShardIndexingPressure" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.shardIndexingPressure"></a>

```go
ShardIndexingPressure ManagedDatabaseOpensearchPropertiesShardIndexingPressure
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressure">ManagedDatabaseOpensearchPropertiesShardIndexingPressure</a>

shard_indexing_pressure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#shard_indexing_pressure ManagedDatabaseOpensearch#shard_indexing_pressure}

---

##### `ThreadPoolAnalyzeQueueSize`<sup>Optional</sup> <a name="ThreadPoolAnalyzeQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolAnalyzeQueueSize"></a>

```go
ThreadPoolAnalyzeQueueSize *f64
```

- *Type:* *f64

analyze thread pool queue size. Size for the thread pool queue. See documentation for exact details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#thread_pool_analyze_queue_size ManagedDatabaseOpensearch#thread_pool_analyze_queue_size}

---

##### `ThreadPoolAnalyzeSize`<sup>Optional</sup> <a name="ThreadPoolAnalyzeSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolAnalyzeSize"></a>

```go
ThreadPoolAnalyzeSize *f64
```

- *Type:* *f64

analyze thread pool size.

Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#thread_pool_analyze_size ManagedDatabaseOpensearch#thread_pool_analyze_size}

---

##### `ThreadPoolForceMergeSize`<sup>Optional</sup> <a name="ThreadPoolForceMergeSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolForceMergeSize"></a>

```go
ThreadPoolForceMergeSize *f64
```

- *Type:* *f64

force_merge thread pool size.

Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#thread_pool_force_merge_size ManagedDatabaseOpensearch#thread_pool_force_merge_size}

---

##### `ThreadPoolGetQueueSize`<sup>Optional</sup> <a name="ThreadPoolGetQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolGetQueueSize"></a>

```go
ThreadPoolGetQueueSize *f64
```

- *Type:* *f64

get thread pool queue size. Size for the thread pool queue. See documentation for exact details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#thread_pool_get_queue_size ManagedDatabaseOpensearch#thread_pool_get_queue_size}

---

##### `ThreadPoolGetSize`<sup>Optional</sup> <a name="ThreadPoolGetSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolGetSize"></a>

```go
ThreadPoolGetSize *f64
```

- *Type:* *f64

get thread pool size.

Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#thread_pool_get_size ManagedDatabaseOpensearch#thread_pool_get_size}

---

##### `ThreadPoolSearchQueueSize`<sup>Optional</sup> <a name="ThreadPoolSearchQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolSearchQueueSize"></a>

```go
ThreadPoolSearchQueueSize *f64
```

- *Type:* *f64

search thread pool queue size. Size for the thread pool queue. See documentation for exact details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#thread_pool_search_queue_size ManagedDatabaseOpensearch#thread_pool_search_queue_size}

---

##### `ThreadPoolSearchSize`<sup>Optional</sup> <a name="ThreadPoolSearchSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolSearchSize"></a>

```go
ThreadPoolSearchSize *f64
```

- *Type:* *f64

search thread pool size.

Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#thread_pool_search_size ManagedDatabaseOpensearch#thread_pool_search_size}

---

##### `ThreadPoolSearchThrottledQueueSize`<sup>Optional</sup> <a name="ThreadPoolSearchThrottledQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolSearchThrottledQueueSize"></a>

```go
ThreadPoolSearchThrottledQueueSize *f64
```

- *Type:* *f64

search_throttled thread pool queue size. Size for the thread pool queue. See documentation for exact details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#thread_pool_search_throttled_queue_size ManagedDatabaseOpensearch#thread_pool_search_throttled_queue_size}

---

##### `ThreadPoolSearchThrottledSize`<sup>Optional</sup> <a name="ThreadPoolSearchThrottledSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolSearchThrottledSize"></a>

```go
ThreadPoolSearchThrottledSize *f64
```

- *Type:* *f64

search_throttled thread pool size.

Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#thread_pool_search_throttled_size ManagedDatabaseOpensearch#thread_pool_search_throttled_size}

---

##### `ThreadPoolWriteQueueSize`<sup>Optional</sup> <a name="ThreadPoolWriteQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolWriteQueueSize"></a>

```go
ThreadPoolWriteQueueSize *f64
```

- *Type:* *f64

write thread pool queue size. Size for the thread pool queue. See documentation for exact details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#thread_pool_write_queue_size ManagedDatabaseOpensearch#thread_pool_write_queue_size}

---

##### `ThreadPoolWriteSize`<sup>Optional</sup> <a name="ThreadPoolWriteSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.threadPoolWriteSize"></a>

```go
ThreadPoolWriteSize *f64
```

- *Type:* *f64

write thread pool size.

Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#thread_pool_write_size ManagedDatabaseOpensearch#thread_pool_write_size}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties.property.version"></a>

```go
Version *string
```

- *Type:* *string

OpenSearch major version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#version ManagedDatabaseOpensearch#version}

---

### ManagedDatabaseOpensearchPropertiesAuthFailureListeners <a name="ManagedDatabaseOpensearchPropertiesAuthFailureListeners" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

&manageddatabaseopensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners {
	InternalAuthenticationBackendLimiting: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting,
	IpRateLimiting: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners.property.internalAuthenticationBackendLimiting">InternalAuthenticationBackendLimiting</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting</a></code> | internal_authentication_backend_limiting block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners.property.ipRateLimiting">IpRateLimiting</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting</a></code> | ip_rate_limiting block. |

---

##### `InternalAuthenticationBackendLimiting`<sup>Optional</sup> <a name="InternalAuthenticationBackendLimiting" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners.property.internalAuthenticationBackendLimiting"></a>

```go
InternalAuthenticationBackendLimiting ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting</a>

internal_authentication_backend_limiting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#internal_authentication_backend_limiting ManagedDatabaseOpensearch#internal_authentication_backend_limiting}

---

##### `IpRateLimiting`<sup>Optional</sup> <a name="IpRateLimiting" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners.property.ipRateLimiting"></a>

```go
IpRateLimiting ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting</a>

ip_rate_limiting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#ip_rate_limiting ManagedDatabaseOpensearch#ip_rate_limiting}

---

### ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting <a name="ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

&manageddatabaseopensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting {
	AllowedTries: *f64,
	AuthenticationBackend: *string,
	BlockExpirySeconds: *f64,
	MaxBlockedClients: *f64,
	MaxTrackedClients: *f64,
	TimeWindowSeconds: *f64,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.allowedTries">AllowedTries</a></code> | <code>*f64</code> | The number of login attempts allowed before login is blocked. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.authenticationBackend">AuthenticationBackend</a></code> | <code>*string</code> | The internal backend. Enter `internal`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.blockExpirySeconds">BlockExpirySeconds</a></code> | <code>*f64</code> | The duration of time that login remains blocked after a failed login. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.maxBlockedClients">MaxBlockedClients</a></code> | <code>*f64</code> | The maximum number of blocked IP addresses. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.maxTrackedClients">MaxTrackedClients</a></code> | <code>*f64</code> | The maximum number of tracked IP addresses that have failed login. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.timeWindowSeconds">TimeWindowSeconds</a></code> | <code>*f64</code> | The window of time in which the value for `allowed_tries` is enforced. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.type">Type</a></code> | <code>*string</code> | The type of rate limiting. |

---

##### `AllowedTries`<sup>Optional</sup> <a name="AllowedTries" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.allowedTries"></a>

```go
AllowedTries *f64
```

- *Type:* *f64

The number of login attempts allowed before login is blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#allowed_tries ManagedDatabaseOpensearch#allowed_tries}

---

##### `AuthenticationBackend`<sup>Optional</sup> <a name="AuthenticationBackend" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.authenticationBackend"></a>

```go
AuthenticationBackend *string
```

- *Type:* *string

The internal backend. Enter `internal`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#authentication_backend ManagedDatabaseOpensearch#authentication_backend}

---

##### `BlockExpirySeconds`<sup>Optional</sup> <a name="BlockExpirySeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.blockExpirySeconds"></a>

```go
BlockExpirySeconds *f64
```

- *Type:* *f64

The duration of time that login remains blocked after a failed login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#block_expiry_seconds ManagedDatabaseOpensearch#block_expiry_seconds}

---

##### `MaxBlockedClients`<sup>Optional</sup> <a name="MaxBlockedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.maxBlockedClients"></a>

```go
MaxBlockedClients *f64
```

- *Type:* *f64

The maximum number of blocked IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#max_blocked_clients ManagedDatabaseOpensearch#max_blocked_clients}

---

##### `MaxTrackedClients`<sup>Optional</sup> <a name="MaxTrackedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.maxTrackedClients"></a>

```go
MaxTrackedClients *f64
```

- *Type:* *f64

The maximum number of tracked IP addresses that have failed login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#max_tracked_clients ManagedDatabaseOpensearch#max_tracked_clients}

---

##### `TimeWindowSeconds`<sup>Optional</sup> <a name="TimeWindowSeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.timeWindowSeconds"></a>

```go
TimeWindowSeconds *f64
```

- *Type:* *f64

The window of time in which the value for `allowed_tries` is enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#time_window_seconds ManagedDatabaseOpensearch#time_window_seconds}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of rate limiting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#type ManagedDatabaseOpensearch#type}

---

### ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting <a name="ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

&manageddatabaseopensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting {
	AllowedTries: *f64,
	BlockExpirySeconds: *f64,
	MaxBlockedClients: *f64,
	MaxTrackedClients: *f64,
	TimeWindowSeconds: *f64,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.allowedTries">AllowedTries</a></code> | <code>*f64</code> | The number of login attempts allowed before login is blocked. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.blockExpirySeconds">BlockExpirySeconds</a></code> | <code>*f64</code> | The duration of time that login remains blocked after a failed login. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.maxBlockedClients">MaxBlockedClients</a></code> | <code>*f64</code> | The maximum number of blocked IP addresses. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.maxTrackedClients">MaxTrackedClients</a></code> | <code>*f64</code> | The maximum number of tracked IP addresses that have failed login. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.timeWindowSeconds">TimeWindowSeconds</a></code> | <code>*f64</code> | The window of time in which the value for `allowed_tries` is enforced. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.type">Type</a></code> | <code>*string</code> | The type of rate limiting. |

---

##### `AllowedTries`<sup>Optional</sup> <a name="AllowedTries" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.allowedTries"></a>

```go
AllowedTries *f64
```

- *Type:* *f64

The number of login attempts allowed before login is blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#allowed_tries ManagedDatabaseOpensearch#allowed_tries}

---

##### `BlockExpirySeconds`<sup>Optional</sup> <a name="BlockExpirySeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.blockExpirySeconds"></a>

```go
BlockExpirySeconds *f64
```

- *Type:* *f64

The duration of time that login remains blocked after a failed login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#block_expiry_seconds ManagedDatabaseOpensearch#block_expiry_seconds}

---

##### `MaxBlockedClients`<sup>Optional</sup> <a name="MaxBlockedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.maxBlockedClients"></a>

```go
MaxBlockedClients *f64
```

- *Type:* *f64

The maximum number of blocked IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#max_blocked_clients ManagedDatabaseOpensearch#max_blocked_clients}

---

##### `MaxTrackedClients`<sup>Optional</sup> <a name="MaxTrackedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.maxTrackedClients"></a>

```go
MaxTrackedClients *f64
```

- *Type:* *f64

The maximum number of tracked IP addresses that have failed login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#max_tracked_clients ManagedDatabaseOpensearch#max_tracked_clients}

---

##### `TimeWindowSeconds`<sup>Optional</sup> <a name="TimeWindowSeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.timeWindowSeconds"></a>

```go
TimeWindowSeconds *f64
```

- *Type:* *f64

The window of time in which the value for `allowed_tries` is enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#time_window_seconds ManagedDatabaseOpensearch#time_window_seconds}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of rate limiting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#type ManagedDatabaseOpensearch#type}

---

### ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlog <a name="ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlog" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlog.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

&manageddatabaseopensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlog {
	Level: *string,
	Threshold: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlog.property.level">Level</a></code> | <code>*string</code> | Log level. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlog.property.threshold">Threshold</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold">ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold</a></code> | threshold block. |

---

##### `Level`<sup>Optional</sup> <a name="Level" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlog.property.level"></a>

```go
Level *string
```

- *Type:* *string

Log level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#level ManagedDatabaseOpensearch#level}

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlog.property.threshold"></a>

```go
Threshold ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold">ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold</a>

threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#threshold ManagedDatabaseOpensearch#threshold}

---

### ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold <a name="ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

&manageddatabaseopensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold {
	Debug: *string,
	Info: *string,
	Trace: *string,
	Warn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold.property.debug">Debug</a></code> | <code>*string</code> | Debug threshold for total request took time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold.property.info">Info</a></code> | <code>*string</code> | Info threshold for total request took time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold.property.trace">Trace</a></code> | <code>*string</code> | Trace threshold for total request took time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold.property.warn">Warn</a></code> | <code>*string</code> | Warning threshold for total request took time. |

---

##### `Debug`<sup>Optional</sup> <a name="Debug" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold.property.debug"></a>

```go
Debug *string
```

- *Type:* *string

Debug threshold for total request took time.

The value should be in the form count and unit, where unit one of (s,m,h,d,nanos,ms,micros) or -1. Default is -1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#debug ManagedDatabaseOpensearch#debug}

---

##### `Info`<sup>Optional</sup> <a name="Info" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold.property.info"></a>

```go
Info *string
```

- *Type:* *string

Info threshold for total request took time.

The value should be in the form count and unit, where unit one of (s,m,h,d,nanos,ms,micros) or -1. Default is -1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#info ManagedDatabaseOpensearch#info}

---

##### `Trace`<sup>Optional</sup> <a name="Trace" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold.property.trace"></a>

```go
Trace *string
```

- *Type:* *string

Trace threshold for total request took time.

The value should be in the form count and unit, where unit one of (s,m,h,d,nanos,ms,micros) or -1. Default is -1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#trace ManagedDatabaseOpensearch#trace}

---

##### `Warn`<sup>Optional</sup> <a name="Warn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold.property.warn"></a>

```go
Warn *string
```

- *Type:* *string

Warning threshold for total request took time.

The value should be in the form count and unit, where unit one of (s,m,h,d,nanos,ms,micros) or -1. Default is -1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#warn ManagedDatabaseOpensearch#warn}

---

### ManagedDatabaseOpensearchPropertiesIndexRollup <a name="ManagedDatabaseOpensearchPropertiesIndexRollup" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

&manageddatabaseopensearch.ManagedDatabaseOpensearchPropertiesIndexRollup {
	RollupDashboardsEnabled: interface{},
	RollupEnabled: interface{},
	RollupSearchBackoffCount: *f64,
	RollupSearchBackoffMillis: *f64,
	RollupSearchSearchAllJobs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup.property.rollupDashboardsEnabled">RollupDashboardsEnabled</a></code> | <code>interface{}</code> | plugins.rollup.dashboards.enabled. Whether rollups are enabled in OpenSearch Dashboards. Defaults to true. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup.property.rollupEnabled">RollupEnabled</a></code> | <code>interface{}</code> | plugins.rollup.enabled. Whether the rollup plugin is enabled. Defaults to true. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup.property.rollupSearchBackoffCount">RollupSearchBackoffCount</a></code> | <code>*f64</code> | plugins.rollup.search.backoff_count. How many retries the plugin should attempt for failed rollup jobs. Defaults to 5. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup.property.rollupSearchBackoffMillis">RollupSearchBackoffMillis</a></code> | <code>*f64</code> | plugins.rollup.search.backoff_millis. The backoff time between retries for failed rollup jobs. Defaults to 1000ms. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup.property.rollupSearchSearchAllJobs">RollupSearchSearchAllJobs</a></code> | <code>interface{}</code> | plugins.rollup.search.all_jobs. Whether OpenSearch should return all jobs that match all specified search terms. If disabled, OpenSearch returns just one, as opposed to all, of the jobs that matches the search terms. Defaults to false. |

---

##### `RollupDashboardsEnabled`<sup>Optional</sup> <a name="RollupDashboardsEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup.property.rollupDashboardsEnabled"></a>

```go
RollupDashboardsEnabled interface{}
```

- *Type:* interface{}

plugins.rollup.dashboards.enabled. Whether rollups are enabled in OpenSearch Dashboards. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#rollup_dashboards_enabled ManagedDatabaseOpensearch#rollup_dashboards_enabled}

---

##### `RollupEnabled`<sup>Optional</sup> <a name="RollupEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup.property.rollupEnabled"></a>

```go
RollupEnabled interface{}
```

- *Type:* interface{}

plugins.rollup.enabled. Whether the rollup plugin is enabled. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#rollup_enabled ManagedDatabaseOpensearch#rollup_enabled}

---

##### `RollupSearchBackoffCount`<sup>Optional</sup> <a name="RollupSearchBackoffCount" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup.property.rollupSearchBackoffCount"></a>

```go
RollupSearchBackoffCount *f64
```

- *Type:* *f64

plugins.rollup.search.backoff_count. How many retries the plugin should attempt for failed rollup jobs. Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#rollup_search_backoff_count ManagedDatabaseOpensearch#rollup_search_backoff_count}

---

##### `RollupSearchBackoffMillis`<sup>Optional</sup> <a name="RollupSearchBackoffMillis" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup.property.rollupSearchBackoffMillis"></a>

```go
RollupSearchBackoffMillis *f64
```

- *Type:* *f64

plugins.rollup.search.backoff_millis. The backoff time between retries for failed rollup jobs. Defaults to 1000ms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#rollup_search_backoff_millis ManagedDatabaseOpensearch#rollup_search_backoff_millis}

---

##### `RollupSearchSearchAllJobs`<sup>Optional</sup> <a name="RollupSearchSearchAllJobs" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup.property.rollupSearchSearchAllJobs"></a>

```go
RollupSearchSearchAllJobs interface{}
```

- *Type:* interface{}

plugins.rollup.search.all_jobs. Whether OpenSearch should return all jobs that match all specified search terms. If disabled, OpenSearch returns just one, as opposed to all, of the jobs that matches the search terms. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#rollup_search_search_all_jobs ManagedDatabaseOpensearch#rollup_search_search_all_jobs}

---

### ManagedDatabaseOpensearchPropertiesIndexTemplate <a name="ManagedDatabaseOpensearchPropertiesIndexTemplate" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

&manageddatabaseopensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate {
	MappingNestedObjectsLimit: *f64,
	NumberOfReplicas: *f64,
	NumberOfShards: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate.property.mappingNestedObjectsLimit">MappingNestedObjectsLimit</a></code> | <code>*f64</code> | index.mapping.nested_objects.limit. The maximum number of nested JSON objects that a single document can contain across all nested types. This limit helps to prevent out of memory errors when a document contains too many nested objects. Default is 10000. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate.property.numberOfReplicas">NumberOfReplicas</a></code> | <code>*f64</code> | The number of replicas each primary shard has. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate.property.numberOfShards">NumberOfShards</a></code> | <code>*f64</code> | The number of primary shards that an index should have. |

---

##### `MappingNestedObjectsLimit`<sup>Optional</sup> <a name="MappingNestedObjectsLimit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate.property.mappingNestedObjectsLimit"></a>

```go
MappingNestedObjectsLimit *f64
```

- *Type:* *f64

index.mapping.nested_objects.limit. The maximum number of nested JSON objects that a single document can contain across all nested types. This limit helps to prevent out of memory errors when a document contains too many nested objects. Default is 10000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#mapping_nested_objects_limit ManagedDatabaseOpensearch#mapping_nested_objects_limit}

---

##### `NumberOfReplicas`<sup>Optional</sup> <a name="NumberOfReplicas" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate.property.numberOfReplicas"></a>

```go
NumberOfReplicas *f64
```

- *Type:* *f64

The number of replicas each primary shard has.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#number_of_replicas ManagedDatabaseOpensearch#number_of_replicas}

---

##### `NumberOfShards`<sup>Optional</sup> <a name="NumberOfShards" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate.property.numberOfShards"></a>

```go
NumberOfShards *f64
```

- *Type:* *f64

The number of primary shards that an index should have.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#number_of_shards ManagedDatabaseOpensearch#number_of_shards}

---

### ManagedDatabaseOpensearchPropertiesOpenid <a name="ManagedDatabaseOpensearchPropertiesOpenid" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

&manageddatabaseopensearch.ManagedDatabaseOpensearchPropertiesOpenid {
	ClientId: *string,
	ClientSecret: *string,
	ConnectUrl: *string,
	Enabled: interface{},
	Header: *string,
	JwtHeader: *string,
	JwtUrlParameter: *string,
	RefreshRateLimitCount: *f64,
	RefreshRateLimitTimeWindowMs: *f64,
	RolesKey: *string,
	Scope: *string,
	SubjectKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.clientId">ClientId</a></code> | <code>*string</code> | The ID of the OpenID Connect client. The ID of the OpenID Connect client configured in your IdP. Required. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | The client secret of the OpenID Connect. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.connectUrl">ConnectUrl</a></code> | <code>*string</code> | OpenID Connect metadata/configuration URL. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.enabled">Enabled</a></code> | <code>interface{}</code> | Enable or disable OpenSearch OpenID Connect authentication. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.header">Header</a></code> | <code>*string</code> | HTTP header name of the JWT token. HTTP header name of the JWT token. Optional. Default is Authorization. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.jwtHeader">JwtHeader</a></code> | <code>*string</code> | The HTTP header that stores the token. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.jwtUrlParameter">JwtUrlParameter</a></code> | <code>*string</code> | URL JWT token. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.refreshRateLimitCount">RefreshRateLimitCount</a></code> | <code>*f64</code> | The maximum number of unknown key IDs in the time frame. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.refreshRateLimitTimeWindowMs">RefreshRateLimitTimeWindowMs</a></code> | <code>*f64</code> | The time frame to use when checking the maximum number of unknown key IDs, in milliseconds. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.rolesKey">RolesKey</a></code> | <code>*string</code> | The key in the JSON payload that stores the user’s roles. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.scope">Scope</a></code> | <code>*string</code> | The scope of the identity token issued by the IdP. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.subjectKey">SubjectKey</a></code> | <code>*string</code> | The key in the JSON payload that stores the user’s name. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The ID of the OpenID Connect client. The ID of the OpenID Connect client configured in your IdP. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#client_id ManagedDatabaseOpensearch#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

The client secret of the OpenID Connect.

The client secret of the OpenID Connect client configured in your IdP. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#client_secret ManagedDatabaseOpensearch#client_secret}

---

##### `ConnectUrl`<sup>Optional</sup> <a name="ConnectUrl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.connectUrl"></a>

```go
ConnectUrl *string
```

- *Type:* *string

OpenID Connect metadata/configuration URL.

The URL of your IdP where the Security plugin can find the OpenID Connect metadata/configuration settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#connect_url ManagedDatabaseOpensearch#connect_url}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Enable or disable OpenSearch OpenID Connect authentication.

Enables or disables OpenID Connect authentication for OpenSearch. When enabled, users can authenticate using OpenID Connect with an Identity Provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#enabled ManagedDatabaseOpensearch#enabled}

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.header"></a>

```go
Header *string
```

- *Type:* *string

HTTP header name of the JWT token. HTTP header name of the JWT token. Optional. Default is Authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#header ManagedDatabaseOpensearch#header}

---

##### `JwtHeader`<sup>Optional</sup> <a name="JwtHeader" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.jwtHeader"></a>

```go
JwtHeader *string
```

- *Type:* *string

The HTTP header that stores the token.

The HTTP header that stores the token. Typically the Authorization header with the Bearer schema: Authorization: Bearer <token>. Optional. Default is Authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#jwt_header ManagedDatabaseOpensearch#jwt_header}

---

##### `JwtUrlParameter`<sup>Optional</sup> <a name="JwtUrlParameter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.jwtUrlParameter"></a>

```go
JwtUrlParameter *string
```

- *Type:* *string

URL JWT token.

If the token is not transmitted in the HTTP header, but as an URL parameter, define the name of the parameter here. Optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#jwt_url_parameter ManagedDatabaseOpensearch#jwt_url_parameter}

---

##### `RefreshRateLimitCount`<sup>Optional</sup> <a name="RefreshRateLimitCount" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.refreshRateLimitCount"></a>

```go
RefreshRateLimitCount *f64
```

- *Type:* *f64

The maximum number of unknown key IDs in the time frame.

The maximum number of unknown key IDs in the time frame. Default is 10. Optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#refresh_rate_limit_count ManagedDatabaseOpensearch#refresh_rate_limit_count}

---

##### `RefreshRateLimitTimeWindowMs`<sup>Optional</sup> <a name="RefreshRateLimitTimeWindowMs" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.refreshRateLimitTimeWindowMs"></a>

```go
RefreshRateLimitTimeWindowMs *f64
```

- *Type:* *f64

The time frame to use when checking the maximum number of unknown key IDs, in milliseconds.

The time frame to use when checking the maximum number of unknown key IDs, in milliseconds. Optional.Default is 10000 (10 seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#refresh_rate_limit_time_window_ms ManagedDatabaseOpensearch#refresh_rate_limit_time_window_ms}

---

##### `RolesKey`<sup>Optional</sup> <a name="RolesKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.rolesKey"></a>

```go
RolesKey *string
```

- *Type:* *string

The key in the JSON payload that stores the user’s roles.

The key in the JSON payload that stores the user’s roles. The value of this key must be a comma-separated list of roles. Required only if you want to use roles in the JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#roles_key ManagedDatabaseOpensearch#roles_key}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

The scope of the identity token issued by the IdP.

The scope of the identity token issued by the IdP. Optional. Default is openid profile email address phone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#scope ManagedDatabaseOpensearch#scope}

---

##### `SubjectKey`<sup>Optional</sup> <a name="SubjectKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid.property.subjectKey"></a>

```go
SubjectKey *string
```

- *Type:* *string

The key in the JSON payload that stores the user’s name.

The key in the JSON payload that stores the user’s name. If not defined, the subject registered claim is used. Most IdP providers use the preferred_username claim. Optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#subject_key ManagedDatabaseOpensearch#subject_key}

---

### ManagedDatabaseOpensearchPropertiesOpensearchDashboards <a name="ManagedDatabaseOpensearchPropertiesOpensearchDashboards" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

&manageddatabaseopensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards {
	Enabled: interface{},
	MaxOldSpaceSize: *f64,
	MultipleDataSourceEnabled: interface{},
	OpensearchRequestTimeout: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards.property.enabled">Enabled</a></code> | <code>interface{}</code> | Enable or disable OpenSearch Dashboards. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards.property.maxOldSpaceSize">MaxOldSpaceSize</a></code> | <code>*f64</code> | Limits the maximum amount of memory (in MiB) the OpenSearch Dashboards process can use. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards.property.multipleDataSourceEnabled">MultipleDataSourceEnabled</a></code> | <code>interface{}</code> | Enable or disable multiple data sources in OpenSearch Dashboards. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards.property.opensearchRequestTimeout">OpensearchRequestTimeout</a></code> | <code>*f64</code> | Timeout in milliseconds for requests made by OpenSearch Dashboards towards OpenSearch. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Enable or disable OpenSearch Dashboards.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#enabled ManagedDatabaseOpensearch#enabled}

---

##### `MaxOldSpaceSize`<sup>Optional</sup> <a name="MaxOldSpaceSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards.property.maxOldSpaceSize"></a>

```go
MaxOldSpaceSize *f64
```

- *Type:* *f64

Limits the maximum amount of memory (in MiB) the OpenSearch Dashboards process can use.

This sets the max_old_space_size option of the nodejs running the OpenSearch Dashboards. Note: the memory reserved by OpenSearch Dashboards is not available for OpenSearch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#max_old_space_size ManagedDatabaseOpensearch#max_old_space_size}

---

##### `MultipleDataSourceEnabled`<sup>Optional</sup> <a name="MultipleDataSourceEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards.property.multipleDataSourceEnabled"></a>

```go
MultipleDataSourceEnabled interface{}
```

- *Type:* interface{}

Enable or disable multiple data sources in OpenSearch Dashboards.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#multiple_data_source_enabled ManagedDatabaseOpensearch#multiple_data_source_enabled}

---

##### `OpensearchRequestTimeout`<sup>Optional</sup> <a name="OpensearchRequestTimeout" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards.property.opensearchRequestTimeout"></a>

```go
OpensearchRequestTimeout *f64
```

- *Type:* *f64

Timeout in milliseconds for requests made by OpenSearch Dashboards towards OpenSearch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#opensearch_request_timeout ManagedDatabaseOpensearch#opensearch_request_timeout}

---

### ManagedDatabaseOpensearchPropertiesSaml <a name="ManagedDatabaseOpensearchPropertiesSaml" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

&manageddatabaseopensearch.ManagedDatabaseOpensearchPropertiesSaml {
	Enabled: interface{},
	IdpEntityId: *string,
	IdpMetadataUrl: *string,
	IdpPemtrustedcasContent: *string,
	RolesKey: *string,
	SpEntityId: *string,
	SubjectKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.enabled">Enabled</a></code> | <code>interface{}</code> | Enable or disable OpenSearch SAML authentication. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.idpEntityId">IdpEntityId</a></code> | <code>*string</code> | Identity Provider Entity ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.idpMetadataUrl">IdpMetadataUrl</a></code> | <code>*string</code> | Identity Provider (IdP) SAML metadata URL. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.idpPemtrustedcasContent">IdpPemtrustedcasContent</a></code> | <code>*string</code> | PEM-encoded root CA Content for SAML IdP server verification. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.rolesKey">RolesKey</a></code> | <code>*string</code> | SAML response role attribute. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.spEntityId">SpEntityId</a></code> | <code>*string</code> | Service Provider Entity ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.subjectKey">SubjectKey</a></code> | <code>*string</code> | SAML response subject attribute. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Enable or disable OpenSearch SAML authentication.

Enables or disables SAML-based authentication for OpenSearch. When enabled, users can authenticate using SAML with an Identity Provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#enabled ManagedDatabaseOpensearch#enabled}

---

##### `IdpEntityId`<sup>Optional</sup> <a name="IdpEntityId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.idpEntityId"></a>

```go
IdpEntityId *string
```

- *Type:* *string

Identity Provider Entity ID.

The unique identifier for the Identity Provider (IdP) entity that is used for SAML authentication. This value is typically provided by the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#idp_entity_id ManagedDatabaseOpensearch#idp_entity_id}

---

##### `IdpMetadataUrl`<sup>Optional</sup> <a name="IdpMetadataUrl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.idpMetadataUrl"></a>

```go
IdpMetadataUrl *string
```

- *Type:* *string

Identity Provider (IdP) SAML metadata URL.

The URL of the SAML metadata for the Identity Provider (IdP). This is used to configure SAML-based authentication with the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#idp_metadata_url ManagedDatabaseOpensearch#idp_metadata_url}

---

##### `IdpPemtrustedcasContent`<sup>Optional</sup> <a name="IdpPemtrustedcasContent" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.idpPemtrustedcasContent"></a>

```go
IdpPemtrustedcasContent *string
```

- *Type:* *string

PEM-encoded root CA Content for SAML IdP server verification.

This parameter specifies the PEM-encoded root certificate authority (CA) content for the SAML identity provider (IdP) server verification. The root CA content is used to verify the SSL/TLS certificate presented by the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#idp_pemtrustedcas_content ManagedDatabaseOpensearch#idp_pemtrustedcas_content}

---

##### `RolesKey`<sup>Optional</sup> <a name="RolesKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.rolesKey"></a>

```go
RolesKey *string
```

- *Type:* *string

SAML response role attribute.

Optional. Specifies the attribute in the SAML response where role information is stored, if available. Role attributes are not required for SAML authentication, but can be included in SAML assertions by most Identity Providers (IdPs) to determine user access levels or permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#roles_key ManagedDatabaseOpensearch#roles_key}

---

##### `SpEntityId`<sup>Optional</sup> <a name="SpEntityId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.spEntityId"></a>

```go
SpEntityId *string
```

- *Type:* *string

Service Provider Entity ID.

The unique identifier for the Service Provider (SP) entity that is used for SAML authentication. This value is typically provided by the SP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#sp_entity_id ManagedDatabaseOpensearch#sp_entity_id}

---

##### `SubjectKey`<sup>Optional</sup> <a name="SubjectKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml.property.subjectKey"></a>

```go
SubjectKey *string
```

- *Type:* *string

SAML response subject attribute.

Optional. Specifies the attribute in the SAML response where the subject identifier is stored. If not configured, the NameID attribute is used by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#subject_key ManagedDatabaseOpensearch#subject_key}

---

### ManagedDatabaseOpensearchPropertiesSearchBackpressure <a name="ManagedDatabaseOpensearchPropertiesSearchBackpressure" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressure.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

&manageddatabaseopensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressure {
	Mode: *string,
	NodeDuress: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress,
	SearchShardTask: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask,
	SearchTask: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressure.property.mode">Mode</a></code> | <code>*string</code> | The search backpressure mode. The search backpressure mode. Valid values are monitor_only, enforced, or disabled. Default is monitor_only. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressure.property.nodeDuress">NodeDuress</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress">ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress</a></code> | node_duress block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressure.property.searchShardTask">SearchShardTask</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask">ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask</a></code> | search_shard_task block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressure.property.searchTask">SearchTask</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask">ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask</a></code> | search_task block. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressure.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

The search backpressure mode. The search backpressure mode. Valid values are monitor_only, enforced, or disabled. Default is monitor_only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#mode ManagedDatabaseOpensearch#mode}

---

##### `NodeDuress`<sup>Optional</sup> <a name="NodeDuress" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressure.property.nodeDuress"></a>

```go
NodeDuress ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress">ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress</a>

node_duress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#node_duress ManagedDatabaseOpensearch#node_duress}

---

##### `SearchShardTask`<sup>Optional</sup> <a name="SearchShardTask" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressure.property.searchShardTask"></a>

```go
SearchShardTask ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask">ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask</a>

search_shard_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#search_shard_task ManagedDatabaseOpensearch#search_shard_task}

---

##### `SearchTask`<sup>Optional</sup> <a name="SearchTask" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressure.property.searchTask"></a>

```go
SearchTask ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask">ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask</a>

search_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#search_task ManagedDatabaseOpensearch#search_task}

---

### ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress <a name="ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

&manageddatabaseopensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress {
	CpuThreshold: *f64,
	HeapThreshold: *f64,
	NumSuccessiveBreaches: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress.property.cpuThreshold">CpuThreshold</a></code> | <code>*f64</code> | The CPU usage threshold (as a percentage) required for a node to be considered to be under duress. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress.property.heapThreshold">HeapThreshold</a></code> | <code>*f64</code> | The heap usage threshold (as a percentage) required for a node to be considered to be under duress. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress.property.numSuccessiveBreaches">NumSuccessiveBreaches</a></code> | <code>*f64</code> | The number of successive limit breaches after which the node is considered to be under duress. |

---

##### `CpuThreshold`<sup>Optional</sup> <a name="CpuThreshold" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress.property.cpuThreshold"></a>

```go
CpuThreshold *f64
```

- *Type:* *f64

The CPU usage threshold (as a percentage) required for a node to be considered to be under duress.

The CPU usage threshold (as a percentage) required for a node to be considered to be under duress. Default is 0.9.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#cpu_threshold ManagedDatabaseOpensearch#cpu_threshold}

---

##### `HeapThreshold`<sup>Optional</sup> <a name="HeapThreshold" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress.property.heapThreshold"></a>

```go
HeapThreshold *f64
```

- *Type:* *f64

The heap usage threshold (as a percentage) required for a node to be considered to be under duress.

The heap usage threshold (as a percentage) required for a node to be considered to be under duress. Default is 0.7.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#heap_threshold ManagedDatabaseOpensearch#heap_threshold}

---

##### `NumSuccessiveBreaches`<sup>Optional</sup> <a name="NumSuccessiveBreaches" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress.property.numSuccessiveBreaches"></a>

```go
NumSuccessiveBreaches *f64
```

- *Type:* *f64

The number of successive limit breaches after which the node is considered to be under duress.

The number of successive limit breaches after which the node is considered to be under duress. Default is 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#num_successive_breaches ManagedDatabaseOpensearch#num_successive_breaches}

---

### ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask <a name="ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

&manageddatabaseopensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask {
	CancellationBurst: *f64,
	CancellationRate: *f64,
	CancellationRatio: *f64,
	CpuTimeMillisThreshold: *f64,
	ElapsedTimeMillisThreshold: *f64,
	HeapMovingAverageWindowSize: *f64,
	HeapPercentThreshold: *f64,
	HeapVariance: *f64,
	TotalHeapPercentThreshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask.property.cancellationBurst">CancellationBurst</a></code> | <code>*f64</code> | The maximum number of search tasks to cancel in a single iteration of the observer thread. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask.property.cancellationRate">CancellationRate</a></code> | <code>*f64</code> | The maximum number of tasks to cancel per millisecond of elapsed time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask.property.cancellationRatio">CancellationRatio</a></code> | <code>*f64</code> | The maximum number of tasks to cancel. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask.property.cpuTimeMillisThreshold">CpuTimeMillisThreshold</a></code> | <code>*f64</code> | The CPU usage threshold (in milliseconds) required for a single search shard task before it is considered for cancellation. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask.property.elapsedTimeMillisThreshold">ElapsedTimeMillisThreshold</a></code> | <code>*f64</code> | The elapsed time threshold (in milliseconds) required for a single search shard task before it is considered for cancellation. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask.property.heapMovingAverageWindowSize">HeapMovingAverageWindowSize</a></code> | <code>*f64</code> | The number of previously completed search shard tasks to consider when calculating the rolling average of heap usage. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask.property.heapPercentThreshold">HeapPercentThreshold</a></code> | <code>*f64</code> | The heap usage threshold (as a percentage) required for a single search shard task before it is considered for cancellation. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask.property.heapVariance">HeapVariance</a></code> | <code>*f64</code> | The minimum variance required for a single search shard task’s heap usage compared to the rolling average of previously completed tasks before it is considered for cancellation. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask.property.totalHeapPercentThreshold">TotalHeapPercentThreshold</a></code> | <code>*f64</code> | The heap usage threshold (as a percentage) required for the sum of heap usages of all search shard tasks before cancellation is applied. |

---

##### `CancellationBurst`<sup>Optional</sup> <a name="CancellationBurst" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask.property.cancellationBurst"></a>

```go
CancellationBurst *f64
```

- *Type:* *f64

The maximum number of search tasks to cancel in a single iteration of the observer thread.

The maximum number of search tasks to cancel in a single iteration of the observer thread. Default is 10.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#cancellation_burst ManagedDatabaseOpensearch#cancellation_burst}

---

##### `CancellationRate`<sup>Optional</sup> <a name="CancellationRate" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask.property.cancellationRate"></a>

```go
CancellationRate *f64
```

- *Type:* *f64

The maximum number of tasks to cancel per millisecond of elapsed time.

The maximum number of tasks to cancel per millisecond of elapsed time. Default is 0.003.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#cancellation_rate ManagedDatabaseOpensearch#cancellation_rate}

---

##### `CancellationRatio`<sup>Optional</sup> <a name="CancellationRatio" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask.property.cancellationRatio"></a>

```go
CancellationRatio *f64
```

- *Type:* *f64

The maximum number of tasks to cancel.

The maximum number of tasks to cancel, as a percentage of successful task completions. Default is 0.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#cancellation_ratio ManagedDatabaseOpensearch#cancellation_ratio}

---

##### `CpuTimeMillisThreshold`<sup>Optional</sup> <a name="CpuTimeMillisThreshold" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask.property.cpuTimeMillisThreshold"></a>

```go
CpuTimeMillisThreshold *f64
```

- *Type:* *f64

The CPU usage threshold (in milliseconds) required for a single search shard task before it is considered for cancellation.

The CPU usage threshold (in milliseconds) required for a single search shard task before it is considered for cancellation. Default is 15000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#cpu_time_millis_threshold ManagedDatabaseOpensearch#cpu_time_millis_threshold}

---

##### `ElapsedTimeMillisThreshold`<sup>Optional</sup> <a name="ElapsedTimeMillisThreshold" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask.property.elapsedTimeMillisThreshold"></a>

```go
ElapsedTimeMillisThreshold *f64
```

- *Type:* *f64

The elapsed time threshold (in milliseconds) required for a single search shard task before it is considered for cancellation.

The elapsed time threshold (in milliseconds) required for a single search shard task before it is considered for cancellation. Default is 30000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#elapsed_time_millis_threshold ManagedDatabaseOpensearch#elapsed_time_millis_threshold}

---

##### `HeapMovingAverageWindowSize`<sup>Optional</sup> <a name="HeapMovingAverageWindowSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask.property.heapMovingAverageWindowSize"></a>

```go
HeapMovingAverageWindowSize *f64
```

- *Type:* *f64

The number of previously completed search shard tasks to consider when calculating the rolling average of heap usage.

The number of previously completed search shard tasks to consider when calculating the rolling average of heap usage. Default is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#heap_moving_average_window_size ManagedDatabaseOpensearch#heap_moving_average_window_size}

---

##### `HeapPercentThreshold`<sup>Optional</sup> <a name="HeapPercentThreshold" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask.property.heapPercentThreshold"></a>

```go
HeapPercentThreshold *f64
```

- *Type:* *f64

The heap usage threshold (as a percentage) required for a single search shard task before it is considered for cancellation.

The heap usage threshold (as a percentage) required for a single search shard task before it is considered for cancellation. Default is 0.5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#heap_percent_threshold ManagedDatabaseOpensearch#heap_percent_threshold}

---

##### `HeapVariance`<sup>Optional</sup> <a name="HeapVariance" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask.property.heapVariance"></a>

```go
HeapVariance *f64
```

- *Type:* *f64

The minimum variance required for a single search shard task’s heap usage compared to the rolling average of previously completed tasks before it is considered for cancellation.

The minimum variance required for a single search shard task’s heap usage compared to the rolling average of previously completed tasks before it is considered for cancellation. Default is 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#heap_variance ManagedDatabaseOpensearch#heap_variance}

---

##### `TotalHeapPercentThreshold`<sup>Optional</sup> <a name="TotalHeapPercentThreshold" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask.property.totalHeapPercentThreshold"></a>

```go
TotalHeapPercentThreshold *f64
```

- *Type:* *f64

The heap usage threshold (as a percentage) required for the sum of heap usages of all search shard tasks before cancellation is applied.

The heap usage threshold (as a percentage) required for the sum of heap usages of all search shard tasks before cancellation is applied. Default is 0.5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#total_heap_percent_threshold ManagedDatabaseOpensearch#total_heap_percent_threshold}

---

### ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask <a name="ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

&manageddatabaseopensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask {
	CancellationBurst: *f64,
	CancellationRate: *f64,
	CancellationRatio: *f64,
	CpuTimeMillisThreshold: *f64,
	ElapsedTimeMillisThreshold: *f64,
	HeapMovingAverageWindowSize: *f64,
	HeapPercentThreshold: *f64,
	HeapVariance: *f64,
	TotalHeapPercentThreshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask.property.cancellationBurst">CancellationBurst</a></code> | <code>*f64</code> | The maximum number of search tasks to cancel in a single iteration of the observer thread. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask.property.cancellationRate">CancellationRate</a></code> | <code>*f64</code> | The maximum number of search tasks to cancel per millisecond of elapsed time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask.property.cancellationRatio">CancellationRatio</a></code> | <code>*f64</code> | The maximum number of search tasks to cancel, as a percentage of successful search task completions. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask.property.cpuTimeMillisThreshold">CpuTimeMillisThreshold</a></code> | <code>*f64</code> | The CPU usage threshold (in milliseconds) required for an individual parent task before it is considered for cancellation. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask.property.elapsedTimeMillisThreshold">ElapsedTimeMillisThreshold</a></code> | <code>*f64</code> | The elapsed time threshold (in milliseconds) required for an individual parent task before it is considered for cancellation. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask.property.heapMovingAverageWindowSize">HeapMovingAverageWindowSize</a></code> | <code>*f64</code> | The window size used to calculate the rolling average of the heap usage for the completed parent tasks. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask.property.heapPercentThreshold">HeapPercentThreshold</a></code> | <code>*f64</code> | The heap usage threshold (as a percentage) required for an individual parent task before it is considered for cancellation. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask.property.heapVariance">HeapVariance</a></code> | <code>*f64</code> | The heap usage variance required for an individual parent task before it is considered for cancellation. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask.property.totalHeapPercentThreshold">TotalHeapPercentThreshold</a></code> | <code>*f64</code> | The heap usage threshold (as a percentage) required for the sum of heap usages of all search tasks before cancellation is applied. |

---

##### `CancellationBurst`<sup>Optional</sup> <a name="CancellationBurst" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask.property.cancellationBurst"></a>

```go
CancellationBurst *f64
```

- *Type:* *f64

The maximum number of search tasks to cancel in a single iteration of the observer thread.

The maximum number of search tasks to cancel in a single iteration of the observer thread. Default is 5.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#cancellation_burst ManagedDatabaseOpensearch#cancellation_burst}

---

##### `CancellationRate`<sup>Optional</sup> <a name="CancellationRate" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask.property.cancellationRate"></a>

```go
CancellationRate *f64
```

- *Type:* *f64

The maximum number of search tasks to cancel per millisecond of elapsed time.

The maximum number of search tasks to cancel per millisecond of elapsed time. Default is 0.003.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#cancellation_rate ManagedDatabaseOpensearch#cancellation_rate}

---

##### `CancellationRatio`<sup>Optional</sup> <a name="CancellationRatio" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask.property.cancellationRatio"></a>

```go
CancellationRatio *f64
```

- *Type:* *f64

The maximum number of search tasks to cancel, as a percentage of successful search task completions.

The maximum number of search tasks to cancel, as a percentage of successful search task completions. Default is 0.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#cancellation_ratio ManagedDatabaseOpensearch#cancellation_ratio}

---

##### `CpuTimeMillisThreshold`<sup>Optional</sup> <a name="CpuTimeMillisThreshold" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask.property.cpuTimeMillisThreshold"></a>

```go
CpuTimeMillisThreshold *f64
```

- *Type:* *f64

The CPU usage threshold (in milliseconds) required for an individual parent task before it is considered for cancellation.

The CPU usage threshold (in milliseconds) required for an individual parent task before it is considered for cancellation. Default is 30000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#cpu_time_millis_threshold ManagedDatabaseOpensearch#cpu_time_millis_threshold}

---

##### `ElapsedTimeMillisThreshold`<sup>Optional</sup> <a name="ElapsedTimeMillisThreshold" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask.property.elapsedTimeMillisThreshold"></a>

```go
ElapsedTimeMillisThreshold *f64
```

- *Type:* *f64

The elapsed time threshold (in milliseconds) required for an individual parent task before it is considered for cancellation.

The elapsed time threshold (in milliseconds) required for an individual parent task before it is considered for cancellation. Default is 45000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#elapsed_time_millis_threshold ManagedDatabaseOpensearch#elapsed_time_millis_threshold}

---

##### `HeapMovingAverageWindowSize`<sup>Optional</sup> <a name="HeapMovingAverageWindowSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask.property.heapMovingAverageWindowSize"></a>

```go
HeapMovingAverageWindowSize *f64
```

- *Type:* *f64

The window size used to calculate the rolling average of the heap usage for the completed parent tasks.

The window size used to calculate the rolling average of the heap usage for the completed parent tasks. Default is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#heap_moving_average_window_size ManagedDatabaseOpensearch#heap_moving_average_window_size}

---

##### `HeapPercentThreshold`<sup>Optional</sup> <a name="HeapPercentThreshold" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask.property.heapPercentThreshold"></a>

```go
HeapPercentThreshold *f64
```

- *Type:* *f64

The heap usage threshold (as a percentage) required for an individual parent task before it is considered for cancellation.

The heap usage threshold (as a percentage) required for an individual parent task before it is considered for cancellation. Default is 0.2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#heap_percent_threshold ManagedDatabaseOpensearch#heap_percent_threshold}

---

##### `HeapVariance`<sup>Optional</sup> <a name="HeapVariance" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask.property.heapVariance"></a>

```go
HeapVariance *f64
```

- *Type:* *f64

The heap usage variance required for an individual parent task before it is considered for cancellation.

The heap usage variance required for an individual parent task before it is considered for cancellation. A task is considered for cancellation when taskHeapUsage is greater than or equal to heapUsageMovingAverage * variance. Default is 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#heap_variance ManagedDatabaseOpensearch#heap_variance}

---

##### `TotalHeapPercentThreshold`<sup>Optional</sup> <a name="TotalHeapPercentThreshold" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask.property.totalHeapPercentThreshold"></a>

```go
TotalHeapPercentThreshold *f64
```

- *Type:* *f64

The heap usage threshold (as a percentage) required for the sum of heap usages of all search tasks before cancellation is applied.

The heap usage threshold (as a percentage) required for the sum of heap usages of all search tasks before cancellation is applied. Default is 0.5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#total_heap_percent_threshold ManagedDatabaseOpensearch#total_heap_percent_threshold}

---

### ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries <a name="ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

&manageddatabaseopensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries {
	Cpu: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu,
	Latency: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency,
	Memory: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries.property.cpu">Cpu</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu</a></code> | cpu block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries.property.latency">Latency</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency</a></code> | latency block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries.property.memory">Memory</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory</a></code> | memory block. |

---

##### `Cpu`<sup>Optional</sup> <a name="Cpu" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries.property.cpu"></a>

```go
Cpu ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu</a>

cpu block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#cpu ManagedDatabaseOpensearch#cpu}

---

##### `Latency`<sup>Optional</sup> <a name="Latency" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries.property.latency"></a>

```go
Latency ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency</a>

latency block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#latency ManagedDatabaseOpensearch#latency}

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries.property.memory"></a>

```go
Memory ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory</a>

memory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#memory ManagedDatabaseOpensearch#memory}

---

### ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu <a name="ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

&manageddatabaseopensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu {
	Enabled: interface{},
	TopNSize: *f64,
	WindowSize: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu.property.enabled">Enabled</a></code> | <code>interface{}</code> | Enable or disable top N query monitoring by the metric. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu.property.topNSize">TopNSize</a></code> | <code>*f64</code> | Specify the value of N for the top N queries by the metric. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu.property.windowSize">WindowSize</a></code> | <code>*string</code> | The window size of the top N queries by the metric. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Enable or disable top N query monitoring by the metric.

Enable or disable top N query monitoring by the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#enabled ManagedDatabaseOpensearch#enabled}

---

##### `TopNSize`<sup>Optional</sup> <a name="TopNSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu.property.topNSize"></a>

```go
TopNSize *f64
```

- *Type:* *f64

Specify the value of N for the top N queries by the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#top_n_size ManagedDatabaseOpensearch#top_n_size}

---

##### `WindowSize`<sup>Optional</sup> <a name="WindowSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu.property.windowSize"></a>

```go
WindowSize *string
```

- *Type:* *string

The window size of the top N queries by the metric.

Configure the window size of the top N queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#window_size ManagedDatabaseOpensearch#window_size}

---

### ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency <a name="ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

&manageddatabaseopensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency {
	Enabled: interface{},
	TopNSize: *f64,
	WindowSize: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency.property.enabled">Enabled</a></code> | <code>interface{}</code> | Enable or disable top N query monitoring by the metric. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency.property.topNSize">TopNSize</a></code> | <code>*f64</code> | Specify the value of N for the top N queries by the metric. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency.property.windowSize">WindowSize</a></code> | <code>*string</code> | The window size of the top N queries by the metric. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Enable or disable top N query monitoring by the metric.

Enable or disable top N query monitoring by the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#enabled ManagedDatabaseOpensearch#enabled}

---

##### `TopNSize`<sup>Optional</sup> <a name="TopNSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency.property.topNSize"></a>

```go
TopNSize *f64
```

- *Type:* *f64

Specify the value of N for the top N queries by the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#top_n_size ManagedDatabaseOpensearch#top_n_size}

---

##### `WindowSize`<sup>Optional</sup> <a name="WindowSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency.property.windowSize"></a>

```go
WindowSize *string
```

- *Type:* *string

The window size of the top N queries by the metric.

Configure the window size of the top N queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#window_size ManagedDatabaseOpensearch#window_size}

---

### ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory <a name="ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

&manageddatabaseopensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory {
	Enabled: interface{},
	TopNSize: *f64,
	WindowSize: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory.property.enabled">Enabled</a></code> | <code>interface{}</code> | Enable or disable top N query monitoring by the metric. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory.property.topNSize">TopNSize</a></code> | <code>*f64</code> | Specify the value of N for the top N queries by the metric. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory.property.windowSize">WindowSize</a></code> | <code>*string</code> | The window size of the top N queries by the metric. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Enable or disable top N query monitoring by the metric.

Enable or disable top N query monitoring by the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#enabled ManagedDatabaseOpensearch#enabled}

---

##### `TopNSize`<sup>Optional</sup> <a name="TopNSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory.property.topNSize"></a>

```go
TopNSize *f64
```

- *Type:* *f64

Specify the value of N for the top N queries by the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#top_n_size ManagedDatabaseOpensearch#top_n_size}

---

##### `WindowSize`<sup>Optional</sup> <a name="WindowSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory.property.windowSize"></a>

```go
WindowSize *string
```

- *Type:* *string

The window size of the top N queries by the metric.

Configure the window size of the top N queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#window_size ManagedDatabaseOpensearch#window_size}

---

### ManagedDatabaseOpensearchPropertiesSegrep <a name="ManagedDatabaseOpensearchPropertiesSegrep" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrep.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

&manageddatabaseopensearch.ManagedDatabaseOpensearchPropertiesSegrep {
	PressureCheckpointLimit: *f64,
	PressureEnabled: interface{},
	PressureReplicaStaleLimit: *f64,
	PressureTimeLimit: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrep.property.pressureCheckpointLimit">PressureCheckpointLimit</a></code> | <code>*f64</code> | The maximum number of indexing checkpoints that a replica shard can fall behind when copying from primary. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrep.property.pressureEnabled">PressureEnabled</a></code> | <code>interface{}</code> | Enables the segment replication backpressure mechanism. Default is false. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrep.property.pressureReplicaStaleLimit">PressureReplicaStaleLimit</a></code> | <code>*f64</code> | The maximum number of stale replica shards that can exist in a replication group. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrep.property.pressureTimeLimit">PressureTimeLimit</a></code> | <code>*string</code> | The maximum amount of time that a replica shard can take to copy from the primary shard. |

---

##### `PressureCheckpointLimit`<sup>Optional</sup> <a name="PressureCheckpointLimit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrep.property.pressureCheckpointLimit"></a>

```go
PressureCheckpointLimit *f64
```

- *Type:* *f64

The maximum number of indexing checkpoints that a replica shard can fall behind when copying from primary.

Once `segrep.pressure.checkpoint.limit` is breached along with `segrep.pressure.time.limit`, the segment replication backpressure mechanism is initiated. Default is 4 checkpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#pressure_checkpoint_limit ManagedDatabaseOpensearch#pressure_checkpoint_limit}

---

##### `PressureEnabled`<sup>Optional</sup> <a name="PressureEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrep.property.pressureEnabled"></a>

```go
PressureEnabled interface{}
```

- *Type:* interface{}

Enables the segment replication backpressure mechanism. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#pressure_enabled ManagedDatabaseOpensearch#pressure_enabled}

---

##### `PressureReplicaStaleLimit`<sup>Optional</sup> <a name="PressureReplicaStaleLimit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrep.property.pressureReplicaStaleLimit"></a>

```go
PressureReplicaStaleLimit *f64
```

- *Type:* *f64

The maximum number of stale replica shards that can exist in a replication group.

Once `segrep.pressure.replica.stale.limit` is breached, the segment replication backpressure mechanism is initiated. Default is .5, which is 50% of a replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#pressure_replica_stale_limit ManagedDatabaseOpensearch#pressure_replica_stale_limit}

---

##### `PressureTimeLimit`<sup>Optional</sup> <a name="PressureTimeLimit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrep.property.pressureTimeLimit"></a>

```go
PressureTimeLimit *string
```

- *Type:* *string

The maximum amount of time that a replica shard can take to copy from the primary shard.

Once segrep.pressure.time.limit is breached along with segrep.pressure.checkpoint.limit, the segment replication backpressure mechanism is initiated. Default is 5 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#pressure_time_limit ManagedDatabaseOpensearch#pressure_time_limit}

---

### ManagedDatabaseOpensearchPropertiesShardIndexingPressure <a name="ManagedDatabaseOpensearchPropertiesShardIndexingPressure" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressure.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

&manageddatabaseopensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressure {
	Enabled: interface{},
	Enforced: interface{},
	OperatingFactor: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor,
	PrimaryParameter: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameter,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressure.property.enabled">Enabled</a></code> | <code>interface{}</code> | Enable or disable shard indexing backpressure. Enable or disable shard indexing backpressure. Default is false. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressure.property.enforced">Enforced</a></code> | <code>interface{}</code> | Run shard indexing backpressure in shadow mode or enforced mode. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressure.property.operatingFactor">OperatingFactor</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor">ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor</a></code> | operating_factor block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressure.property.primaryParameter">PrimaryParameter</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameter">ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameter</a></code> | primary_parameter block. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressure.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Enable or disable shard indexing backpressure. Enable or disable shard indexing backpressure. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#enabled ManagedDatabaseOpensearch#enabled}

---

##### `Enforced`<sup>Optional</sup> <a name="Enforced" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressure.property.enforced"></a>

```go
Enforced interface{}
```

- *Type:* interface{}

Run shard indexing backpressure in shadow mode or enforced mode.

Run shard indexing backpressure in shadow mode or enforced mode.
In shadow mode (value set as false), shard indexing backpressure tracks all granular-level metrics,
but it doesn’t actually reject any indexing requests.
In enforced mode (value set as true),
shard indexing backpressure rejects any requests to the cluster that might cause a dip in its performance.
Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#enforced ManagedDatabaseOpensearch#enforced}

---

##### `OperatingFactor`<sup>Optional</sup> <a name="OperatingFactor" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressure.property.operatingFactor"></a>

```go
OperatingFactor ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor">ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor</a>

operating_factor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#operating_factor ManagedDatabaseOpensearch#operating_factor}

---

##### `PrimaryParameter`<sup>Optional</sup> <a name="PrimaryParameter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressure.property.primaryParameter"></a>

```go
PrimaryParameter ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameter
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameter">ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameter</a>

primary_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#primary_parameter ManagedDatabaseOpensearch#primary_parameter}

---

### ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor <a name="ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

&manageddatabaseopensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor {
	Lower: *f64,
	Optimal: *f64,
	Upper: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor.property.lower">Lower</a></code> | <code>*f64</code> | Lower occupancy limit of the allocated quota of memory for the shard. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor.property.optimal">Optimal</a></code> | <code>*f64</code> | Optimal occupancy of the allocated quota of memory for the shard. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor.property.upper">Upper</a></code> | <code>*f64</code> | Upper occupancy limit of the allocated quota of memory for the shard. |

---

##### `Lower`<sup>Optional</sup> <a name="Lower" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor.property.lower"></a>

```go
Lower *f64
```

- *Type:* *f64

Lower occupancy limit of the allocated quota of memory for the shard.

Specify the lower occupancy limit of the allocated quota of memory for the shard.
If the total memory usage of a shard is below this limit,
shard indexing backpressure decreases the current allocated memory for that shard.
Default is 0.75.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#lower ManagedDatabaseOpensearch#lower}

---

##### `Optimal`<sup>Optional</sup> <a name="Optimal" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor.property.optimal"></a>

```go
Optimal *f64
```

- *Type:* *f64

Optimal occupancy of the allocated quota of memory for the shard.

Specify the optimal occupancy of the allocated quota of memory for the shard.
If the total memory usage of a shard is at this level,
shard indexing backpressure doesn’t change the current allocated memory for that shard.
Default is 0.85.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#optimal ManagedDatabaseOpensearch#optimal}

---

##### `Upper`<sup>Optional</sup> <a name="Upper" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor.property.upper"></a>

```go
Upper *f64
```

- *Type:* *f64

Upper occupancy limit of the allocated quota of memory for the shard.

Specify the upper occupancy limit of the allocated quota of memory for the shard.
If the total memory usage of a shard is above this limit,
shard indexing backpressure increases the current allocated memory for that shard.
Default is 0.95.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#upper ManagedDatabaseOpensearch#upper}

---

### ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameter <a name="ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

&manageddatabaseopensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameter {
	NodeAttribute: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNode,
	Shard: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShard,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameter.property.nodeAttribute">NodeAttribute</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNode">ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNode</a></code> | node block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameter.property.shard">Shard</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShard">ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShard</a></code> | shard block. |

---

##### `NodeAttribute`<sup>Optional</sup> <a name="NodeAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameter.property.nodeAttribute"></a>

```go
NodeAttribute ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNode
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNode">ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNode</a>

node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#node ManagedDatabaseOpensearch#node}

---

##### `Shard`<sup>Optional</sup> <a name="Shard" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameter.property.shard"></a>

```go
Shard ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShard
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShard">ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShard</a>

shard block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#shard ManagedDatabaseOpensearch#shard}

---

### ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNode <a name="ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNode" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNode.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

&manageddatabaseopensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNode {
	SoftLimit: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNode.property.softLimit">SoftLimit</a></code> | <code>*f64</code> | Node soft limit. |

---

##### `SoftLimit`<sup>Optional</sup> <a name="SoftLimit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNode.property.softLimit"></a>

```go
SoftLimit *f64
```

- *Type:* *f64

Node soft limit.

Define the percentage of the node-level memory
threshold that acts as a soft indicator for strain on a node.
Default is 0.7.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#soft_limit ManagedDatabaseOpensearch#soft_limit}

---

### ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShard <a name="ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShard" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShard"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShard.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

&manageddatabaseopensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShard {
	MinLimit: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShard.property.minLimit">MinLimit</a></code> | <code>*f64</code> | Shard min limit. |

---

##### `MinLimit`<sup>Optional</sup> <a name="MinLimit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShard.property.minLimit"></a>

```go
MinLimit *f64
```

- *Type:* *f64

Shard min limit.

Specify the minimum assigned quota for a new shard in any role (coordinator, primary, or replica).
Shard indexing backpressure increases or decreases this allocated quota based on the inflow of traffic for the shard.
Default is 0.001.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.19.0/docs/resources/managed_database_opensearch#min_limit ManagedDatabaseOpensearch#min_limit}

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedDatabaseOpensearchComponentsList <a name="ManagedDatabaseOpensearchComponentsList" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.NewManagedDatabaseOpensearchComponentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ManagedDatabaseOpensearchComponentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.get"></a>

```go
func Get(index *f64) ManagedDatabaseOpensearchComponentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ManagedDatabaseOpensearchComponentsOutputReference <a name="ManagedDatabaseOpensearchComponentsOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.NewManagedDatabaseOpensearchComponentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ManagedDatabaseOpensearchComponentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.component">Component</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.route">Route</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.usage">Usage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponents">ManagedDatabaseOpensearchComponents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Component`<sup>Required</sup> <a name="Component" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.component"></a>

```go
func Component() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Route`<sup>Required</sup> <a name="Route" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.route"></a>

```go
func Route() *string
```

- *Type:* *string

---

##### `Usage`<sup>Required</sup> <a name="Usage" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.usage"></a>

```go
func Usage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponentsOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabaseOpensearchComponents
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchComponents">ManagedDatabaseOpensearchComponents</a>

---


### ManagedDatabaseOpensearchNetworkList <a name="ManagedDatabaseOpensearchNetworkList" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.NewManagedDatabaseOpensearchNetworkList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ManagedDatabaseOpensearchNetworkList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.get"></a>

```go
func Get(index *f64) ManagedDatabaseOpensearchNetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ManagedDatabaseOpensearchNetworkOutputReference <a name="ManagedDatabaseOpensearchNetworkOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.NewManagedDatabaseOpensearchNetworkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ManagedDatabaseOpensearchNetworkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.familyInput">FamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.uuidInput">UuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.family">Family</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FamilyInput`<sup>Optional</sup> <a name="FamilyInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.familyInput"></a>

```go
func FamilyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UuidInput`<sup>Optional</sup> <a name="UuidInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.uuidInput"></a>

```go
func UuidInput() *string
```

- *Type:* *string

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.family"></a>

```go
func Family() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNetworkOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ManagedDatabaseOpensearchNodeStatesList <a name="ManagedDatabaseOpensearchNodeStatesList" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.NewManagedDatabaseOpensearchNodeStatesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ManagedDatabaseOpensearchNodeStatesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.get"></a>

```go
func Get(index *f64) ManagedDatabaseOpensearchNodeStatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ManagedDatabaseOpensearchNodeStatesOutputReference <a name="ManagedDatabaseOpensearchNodeStatesOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.NewManagedDatabaseOpensearchNodeStatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ManagedDatabaseOpensearchNodeStatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStates">ManagedDatabaseOpensearchNodeStates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStatesOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabaseOpensearchNodeStates
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchNodeStates">ManagedDatabaseOpensearchNodeStates</a>

---


### ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference <a name="ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.NewManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetAllowedTries">ResetAllowedTries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetAuthenticationBackend">ResetAuthenticationBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetBlockExpirySeconds">ResetBlockExpirySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetMaxBlockedClients">ResetMaxBlockedClients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetMaxTrackedClients">ResetMaxTrackedClients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetTimeWindowSeconds">ResetTimeWindowSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedTries` <a name="ResetAllowedTries" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetAllowedTries"></a>

```go
func ResetAllowedTries()
```

##### `ResetAuthenticationBackend` <a name="ResetAuthenticationBackend" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetAuthenticationBackend"></a>

```go
func ResetAuthenticationBackend()
```

##### `ResetBlockExpirySeconds` <a name="ResetBlockExpirySeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetBlockExpirySeconds"></a>

```go
func ResetBlockExpirySeconds()
```

##### `ResetMaxBlockedClients` <a name="ResetMaxBlockedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetMaxBlockedClients"></a>

```go
func ResetMaxBlockedClients()
```

##### `ResetMaxTrackedClients` <a name="ResetMaxTrackedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetMaxTrackedClients"></a>

```go
func ResetMaxTrackedClients()
```

##### `ResetTimeWindowSeconds` <a name="ResetTimeWindowSeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetTimeWindowSeconds"></a>

```go
func ResetTimeWindowSeconds()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.allowedTriesInput">AllowedTriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.authenticationBackendInput">AuthenticationBackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.blockExpirySecondsInput">BlockExpirySecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.maxBlockedClientsInput">MaxBlockedClientsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.maxTrackedClientsInput">MaxTrackedClientsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.timeWindowSecondsInput">TimeWindowSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.allowedTries">AllowedTries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.authenticationBackend">AuthenticationBackend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.blockExpirySeconds">BlockExpirySeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.maxBlockedClients">MaxBlockedClients</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.maxTrackedClients">MaxTrackedClients</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.timeWindowSeconds">TimeWindowSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedTriesInput`<sup>Optional</sup> <a name="AllowedTriesInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.allowedTriesInput"></a>

```go
func AllowedTriesInput() *f64
```

- *Type:* *f64

---

##### `AuthenticationBackendInput`<sup>Optional</sup> <a name="AuthenticationBackendInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.authenticationBackendInput"></a>

```go
func AuthenticationBackendInput() *string
```

- *Type:* *string

---

##### `BlockExpirySecondsInput`<sup>Optional</sup> <a name="BlockExpirySecondsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.blockExpirySecondsInput"></a>

```go
func BlockExpirySecondsInput() *f64
```

- *Type:* *f64

---

##### `MaxBlockedClientsInput`<sup>Optional</sup> <a name="MaxBlockedClientsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.maxBlockedClientsInput"></a>

```go
func MaxBlockedClientsInput() *f64
```

- *Type:* *f64

---

##### `MaxTrackedClientsInput`<sup>Optional</sup> <a name="MaxTrackedClientsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.maxTrackedClientsInput"></a>

```go
func MaxTrackedClientsInput() *f64
```

- *Type:* *f64

---

##### `TimeWindowSecondsInput`<sup>Optional</sup> <a name="TimeWindowSecondsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.timeWindowSecondsInput"></a>

```go
func TimeWindowSecondsInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AllowedTries`<sup>Required</sup> <a name="AllowedTries" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.allowedTries"></a>

```go
func AllowedTries() *f64
```

- *Type:* *f64

---

##### `AuthenticationBackend`<sup>Required</sup> <a name="AuthenticationBackend" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.authenticationBackend"></a>

```go
func AuthenticationBackend() *string
```

- *Type:* *string

---

##### `BlockExpirySeconds`<sup>Required</sup> <a name="BlockExpirySeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.blockExpirySeconds"></a>

```go
func BlockExpirySeconds() *f64
```

- *Type:* *f64

---

##### `MaxBlockedClients`<sup>Required</sup> <a name="MaxBlockedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.maxBlockedClients"></a>

```go
func MaxBlockedClients() *f64
```

- *Type:* *f64

---

##### `MaxTrackedClients`<sup>Required</sup> <a name="MaxTrackedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.maxTrackedClients"></a>

```go
func MaxTrackedClients() *f64
```

- *Type:* *f64

---

##### `TimeWindowSeconds`<sup>Required</sup> <a name="TimeWindowSeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.timeWindowSeconds"></a>

```go
func TimeWindowSeconds() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting</a>

---


### ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference <a name="ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.NewManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetAllowedTries">ResetAllowedTries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetBlockExpirySeconds">ResetBlockExpirySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetMaxBlockedClients">ResetMaxBlockedClients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetMaxTrackedClients">ResetMaxTrackedClients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetTimeWindowSeconds">ResetTimeWindowSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedTries` <a name="ResetAllowedTries" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetAllowedTries"></a>

```go
func ResetAllowedTries()
```

##### `ResetBlockExpirySeconds` <a name="ResetBlockExpirySeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetBlockExpirySeconds"></a>

```go
func ResetBlockExpirySeconds()
```

##### `ResetMaxBlockedClients` <a name="ResetMaxBlockedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetMaxBlockedClients"></a>

```go
func ResetMaxBlockedClients()
```

##### `ResetMaxTrackedClients` <a name="ResetMaxTrackedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetMaxTrackedClients"></a>

```go
func ResetMaxTrackedClients()
```

##### `ResetTimeWindowSeconds` <a name="ResetTimeWindowSeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetTimeWindowSeconds"></a>

```go
func ResetTimeWindowSeconds()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.allowedTriesInput">AllowedTriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.blockExpirySecondsInput">BlockExpirySecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.maxBlockedClientsInput">MaxBlockedClientsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.maxTrackedClientsInput">MaxTrackedClientsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.timeWindowSecondsInput">TimeWindowSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.allowedTries">AllowedTries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.blockExpirySeconds">BlockExpirySeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.maxBlockedClients">MaxBlockedClients</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.maxTrackedClients">MaxTrackedClients</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.timeWindowSeconds">TimeWindowSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedTriesInput`<sup>Optional</sup> <a name="AllowedTriesInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.allowedTriesInput"></a>

```go
func AllowedTriesInput() *f64
```

- *Type:* *f64

---

##### `BlockExpirySecondsInput`<sup>Optional</sup> <a name="BlockExpirySecondsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.blockExpirySecondsInput"></a>

```go
func BlockExpirySecondsInput() *f64
```

- *Type:* *f64

---

##### `MaxBlockedClientsInput`<sup>Optional</sup> <a name="MaxBlockedClientsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.maxBlockedClientsInput"></a>

```go
func MaxBlockedClientsInput() *f64
```

- *Type:* *f64

---

##### `MaxTrackedClientsInput`<sup>Optional</sup> <a name="MaxTrackedClientsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.maxTrackedClientsInput"></a>

```go
func MaxTrackedClientsInput() *f64
```

- *Type:* *f64

---

##### `TimeWindowSecondsInput`<sup>Optional</sup> <a name="TimeWindowSecondsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.timeWindowSecondsInput"></a>

```go
func TimeWindowSecondsInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AllowedTries`<sup>Required</sup> <a name="AllowedTries" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.allowedTries"></a>

```go
func AllowedTries() *f64
```

- *Type:* *f64

---

##### `BlockExpirySeconds`<sup>Required</sup> <a name="BlockExpirySeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.blockExpirySeconds"></a>

```go
func BlockExpirySeconds() *f64
```

- *Type:* *f64

---

##### `MaxBlockedClients`<sup>Required</sup> <a name="MaxBlockedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.maxBlockedClients"></a>

```go
func MaxBlockedClients() *f64
```

- *Type:* *f64

---

##### `MaxTrackedClients`<sup>Required</sup> <a name="MaxTrackedClients" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.maxTrackedClients"></a>

```go
func MaxTrackedClients() *f64
```

- *Type:* *f64

---

##### `TimeWindowSeconds`<sup>Required</sup> <a name="TimeWindowSeconds" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.timeWindowSeconds"></a>

```go
func TimeWindowSeconds() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting</a>

---


### ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference <a name="ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.NewManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.putInternalAuthenticationBackendLimiting">PutInternalAuthenticationBackendLimiting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.putIpRateLimiting">PutIpRateLimiting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.resetInternalAuthenticationBackendLimiting">ResetInternalAuthenticationBackendLimiting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.resetIpRateLimiting">ResetIpRateLimiting</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInternalAuthenticationBackendLimiting` <a name="PutInternalAuthenticationBackendLimiting" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.putInternalAuthenticationBackendLimiting"></a>

```go
func PutInternalAuthenticationBackendLimiting(value ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.putInternalAuthenticationBackendLimiting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting</a>

---

##### `PutIpRateLimiting` <a name="PutIpRateLimiting" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.putIpRateLimiting"></a>

```go
func PutIpRateLimiting(value ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.putIpRateLimiting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting</a>

---

##### `ResetInternalAuthenticationBackendLimiting` <a name="ResetInternalAuthenticationBackendLimiting" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.resetInternalAuthenticationBackendLimiting"></a>

```go
func ResetInternalAuthenticationBackendLimiting()
```

##### `ResetIpRateLimiting` <a name="ResetIpRateLimiting" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.resetIpRateLimiting"></a>

```go
func ResetIpRateLimiting()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.internalAuthenticationBackendLimiting">InternalAuthenticationBackendLimiting</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference">ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.ipRateLimiting">IpRateLimiting</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference">ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.internalAuthenticationBackendLimitingInput">InternalAuthenticationBackendLimitingInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.ipRateLimitingInput">IpRateLimitingInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners">ManagedDatabaseOpensearchPropertiesAuthFailureListeners</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalAuthenticationBackendLimiting`<sup>Required</sup> <a name="InternalAuthenticationBackendLimiting" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.internalAuthenticationBackendLimiting"></a>

```go
func InternalAuthenticationBackendLimiting() ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference">ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference</a>

---

##### `IpRateLimiting`<sup>Required</sup> <a name="IpRateLimiting" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.ipRateLimiting"></a>

```go
func IpRateLimiting() ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference">ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimitingOutputReference</a>

---

##### `InternalAuthenticationBackendLimitingInput`<sup>Optional</sup> <a name="InternalAuthenticationBackendLimitingInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.internalAuthenticationBackendLimitingInput"></a>

```go
func InternalAuthenticationBackendLimitingInput() ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersInternalAuthenticationBackendLimiting</a>

---

##### `IpRateLimitingInput`<sup>Optional</sup> <a name="IpRateLimitingInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.ipRateLimitingInput"></a>

```go
func IpRateLimitingInput() ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting">ManagedDatabaseOpensearchPropertiesAuthFailureListenersIpRateLimiting</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabaseOpensearchPropertiesAuthFailureListeners
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners">ManagedDatabaseOpensearchPropertiesAuthFailureListeners</a>

---


### ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference <a name="ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.NewManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.putThreshold">PutThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.resetLevel">ResetLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutThreshold` <a name="PutThreshold" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.putThreshold"></a>

```go
func PutThreshold(value ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.putThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold">ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold</a>

---

##### `ResetLevel` <a name="ResetLevel" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.resetLevel"></a>

```go
func ResetLevel()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.resetThreshold"></a>

```go
func ResetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.property.threshold">Threshold</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference">ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.property.levelInput">LevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold">ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlog">ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.property.threshold"></a>

```go
func Threshold() ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference">ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference</a>

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.property.levelInput"></a>

```go
func LevelInput() *string
```

- *Type:* *string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold">ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold</a>

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlog
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlog">ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlog</a>

---


### ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference <a name="ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.NewManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.resetDebug">ResetDebug</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.resetInfo">ResetInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.resetTrace">ResetTrace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.resetWarn">ResetWarn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDebug` <a name="ResetDebug" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.resetDebug"></a>

```go
func ResetDebug()
```

##### `ResetInfo` <a name="ResetInfo" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.resetInfo"></a>

```go
func ResetInfo()
```

##### `ResetTrace` <a name="ResetTrace" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.resetTrace"></a>

```go
func ResetTrace()
```

##### `ResetWarn` <a name="ResetWarn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.resetWarn"></a>

```go
func ResetWarn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.property.debugInput">DebugInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.property.infoInput">InfoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.property.traceInput">TraceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.property.warnInput">WarnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.property.debug">Debug</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.property.info">Info</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.property.trace">Trace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.property.warn">Warn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold">ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DebugInput`<sup>Optional</sup> <a name="DebugInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.property.debugInput"></a>

```go
func DebugInput() *string
```

- *Type:* *string

---

##### `InfoInput`<sup>Optional</sup> <a name="InfoInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.property.infoInput"></a>

```go
func InfoInput() *string
```

- *Type:* *string

---

##### `TraceInput`<sup>Optional</sup> <a name="TraceInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.property.traceInput"></a>

```go
func TraceInput() *string
```

- *Type:* *string

---

##### `WarnInput`<sup>Optional</sup> <a name="WarnInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.property.warnInput"></a>

```go
func WarnInput() *string
```

- *Type:* *string

---

##### `Debug`<sup>Required</sup> <a name="Debug" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.property.debug"></a>

```go
func Debug() *string
```

- *Type:* *string

---

##### `Info`<sup>Required</sup> <a name="Info" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.property.info"></a>

```go
func Info() *string
```

- *Type:* *string

---

##### `Trace`<sup>Required</sup> <a name="Trace" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.property.trace"></a>

```go
func Trace() *string
```

- *Type:* *string

---

##### `Warn`<sup>Required</sup> <a name="Warn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.property.warn"></a>

```go
func Warn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold">ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogThreshold</a>

---


### ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference <a name="ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.NewManagedDatabaseOpensearchPropertiesIndexRollupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resetRollupDashboardsEnabled">ResetRollupDashboardsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resetRollupEnabled">ResetRollupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resetRollupSearchBackoffCount">ResetRollupSearchBackoffCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resetRollupSearchBackoffMillis">ResetRollupSearchBackoffMillis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resetRollupSearchSearchAllJobs">ResetRollupSearchSearchAllJobs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRollupDashboardsEnabled` <a name="ResetRollupDashboardsEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resetRollupDashboardsEnabled"></a>

```go
func ResetRollupDashboardsEnabled()
```

##### `ResetRollupEnabled` <a name="ResetRollupEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resetRollupEnabled"></a>

```go
func ResetRollupEnabled()
```

##### `ResetRollupSearchBackoffCount` <a name="ResetRollupSearchBackoffCount" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resetRollupSearchBackoffCount"></a>

```go
func ResetRollupSearchBackoffCount()
```

##### `ResetRollupSearchBackoffMillis` <a name="ResetRollupSearchBackoffMillis" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resetRollupSearchBackoffMillis"></a>

```go
func ResetRollupSearchBackoffMillis()
```

##### `ResetRollupSearchSearchAllJobs` <a name="ResetRollupSearchSearchAllJobs" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.resetRollupSearchSearchAllJobs"></a>

```go
func ResetRollupSearchSearchAllJobs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupDashboardsEnabledInput">RollupDashboardsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupEnabledInput">RollupEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchBackoffCountInput">RollupSearchBackoffCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchBackoffMillisInput">RollupSearchBackoffMillisInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchSearchAllJobsInput">RollupSearchSearchAllJobsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupDashboardsEnabled">RollupDashboardsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupEnabled">RollupEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchBackoffCount">RollupSearchBackoffCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchBackoffMillis">RollupSearchBackoffMillis</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchSearchAllJobs">RollupSearchSearchAllJobs</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup">ManagedDatabaseOpensearchPropertiesIndexRollup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RollupDashboardsEnabledInput`<sup>Optional</sup> <a name="RollupDashboardsEnabledInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupDashboardsEnabledInput"></a>

```go
func RollupDashboardsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RollupEnabledInput`<sup>Optional</sup> <a name="RollupEnabledInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupEnabledInput"></a>

```go
func RollupEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RollupSearchBackoffCountInput`<sup>Optional</sup> <a name="RollupSearchBackoffCountInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchBackoffCountInput"></a>

```go
func RollupSearchBackoffCountInput() *f64
```

- *Type:* *f64

---

##### `RollupSearchBackoffMillisInput`<sup>Optional</sup> <a name="RollupSearchBackoffMillisInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchBackoffMillisInput"></a>

```go
func RollupSearchBackoffMillisInput() *f64
```

- *Type:* *f64

---

##### `RollupSearchSearchAllJobsInput`<sup>Optional</sup> <a name="RollupSearchSearchAllJobsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchSearchAllJobsInput"></a>

```go
func RollupSearchSearchAllJobsInput() interface{}
```

- *Type:* interface{}

---

##### `RollupDashboardsEnabled`<sup>Required</sup> <a name="RollupDashboardsEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupDashboardsEnabled"></a>

```go
func RollupDashboardsEnabled() interface{}
```

- *Type:* interface{}

---

##### `RollupEnabled`<sup>Required</sup> <a name="RollupEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupEnabled"></a>

```go
func RollupEnabled() interface{}
```

- *Type:* interface{}

---

##### `RollupSearchBackoffCount`<sup>Required</sup> <a name="RollupSearchBackoffCount" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchBackoffCount"></a>

```go
func RollupSearchBackoffCount() *f64
```

- *Type:* *f64

---

##### `RollupSearchBackoffMillis`<sup>Required</sup> <a name="RollupSearchBackoffMillis" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchBackoffMillis"></a>

```go
func RollupSearchBackoffMillis() *f64
```

- *Type:* *f64

---

##### `RollupSearchSearchAllJobs`<sup>Required</sup> <a name="RollupSearchSearchAllJobs" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.rollupSearchSearchAllJobs"></a>

```go
func RollupSearchSearchAllJobs() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabaseOpensearchPropertiesIndexRollup
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup">ManagedDatabaseOpensearchPropertiesIndexRollup</a>

---


### ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference <a name="ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.NewManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.resetMappingNestedObjectsLimit">ResetMappingNestedObjectsLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.resetNumberOfReplicas">ResetNumberOfReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.resetNumberOfShards">ResetNumberOfShards</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMappingNestedObjectsLimit` <a name="ResetMappingNestedObjectsLimit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.resetMappingNestedObjectsLimit"></a>

```go
func ResetMappingNestedObjectsLimit()
```

##### `ResetNumberOfReplicas` <a name="ResetNumberOfReplicas" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.resetNumberOfReplicas"></a>

```go
func ResetNumberOfReplicas()
```

##### `ResetNumberOfShards` <a name="ResetNumberOfShards" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.resetNumberOfShards"></a>

```go
func ResetNumberOfShards()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.mappingNestedObjectsLimitInput">MappingNestedObjectsLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.numberOfReplicasInput">NumberOfReplicasInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.numberOfShardsInput">NumberOfShardsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.mappingNestedObjectsLimit">MappingNestedObjectsLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.numberOfReplicas">NumberOfReplicas</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.numberOfShards">NumberOfShards</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate">ManagedDatabaseOpensearchPropertiesIndexTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MappingNestedObjectsLimitInput`<sup>Optional</sup> <a name="MappingNestedObjectsLimitInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.mappingNestedObjectsLimitInput"></a>

```go
func MappingNestedObjectsLimitInput() *f64
```

- *Type:* *f64

---

##### `NumberOfReplicasInput`<sup>Optional</sup> <a name="NumberOfReplicasInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.numberOfReplicasInput"></a>

```go
func NumberOfReplicasInput() *f64
```

- *Type:* *f64

---

##### `NumberOfShardsInput`<sup>Optional</sup> <a name="NumberOfShardsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.numberOfShardsInput"></a>

```go
func NumberOfShardsInput() *f64
```

- *Type:* *f64

---

##### `MappingNestedObjectsLimit`<sup>Required</sup> <a name="MappingNestedObjectsLimit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.mappingNestedObjectsLimit"></a>

```go
func MappingNestedObjectsLimit() *f64
```

- *Type:* *f64

---

##### `NumberOfReplicas`<sup>Required</sup> <a name="NumberOfReplicas" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.numberOfReplicas"></a>

```go
func NumberOfReplicas() *f64
```

- *Type:* *f64

---

##### `NumberOfShards`<sup>Required</sup> <a name="NumberOfShards" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.numberOfShards"></a>

```go
func NumberOfShards() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabaseOpensearchPropertiesIndexTemplate
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate">ManagedDatabaseOpensearchPropertiesIndexTemplate</a>

---


### ManagedDatabaseOpensearchPropertiesOpenidOutputReference <a name="ManagedDatabaseOpensearchPropertiesOpenidOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.NewManagedDatabaseOpensearchPropertiesOpenidOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDatabaseOpensearchPropertiesOpenidOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetConnectUrl">ResetConnectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetJwtHeader">ResetJwtHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetJwtUrlParameter">ResetJwtUrlParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetRefreshRateLimitCount">ResetRefreshRateLimitCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetRefreshRateLimitTimeWindowMs">ResetRefreshRateLimitTimeWindowMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetRolesKey">ResetRolesKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetSubjectKey">ResetSubjectKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetConnectUrl` <a name="ResetConnectUrl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetConnectUrl"></a>

```go
func ResetConnectUrl()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetHeader"></a>

```go
func ResetHeader()
```

##### `ResetJwtHeader` <a name="ResetJwtHeader" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetJwtHeader"></a>

```go
func ResetJwtHeader()
```

##### `ResetJwtUrlParameter` <a name="ResetJwtUrlParameter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetJwtUrlParameter"></a>

```go
func ResetJwtUrlParameter()
```

##### `ResetRefreshRateLimitCount` <a name="ResetRefreshRateLimitCount" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetRefreshRateLimitCount"></a>

```go
func ResetRefreshRateLimitCount()
```

##### `ResetRefreshRateLimitTimeWindowMs` <a name="ResetRefreshRateLimitTimeWindowMs" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetRefreshRateLimitTimeWindowMs"></a>

```go
func ResetRefreshRateLimitTimeWindowMs()
```

##### `ResetRolesKey` <a name="ResetRolesKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetRolesKey"></a>

```go
func ResetRolesKey()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetScope"></a>

```go
func ResetScope()
```

##### `ResetSubjectKey` <a name="ResetSubjectKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.resetSubjectKey"></a>

```go
func ResetSubjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.connectUrlInput">ConnectUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.headerInput">HeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.jwtHeaderInput">JwtHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.jwtUrlParameterInput">JwtUrlParameterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.refreshRateLimitCountInput">RefreshRateLimitCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.refreshRateLimitTimeWindowMsInput">RefreshRateLimitTimeWindowMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.rolesKeyInput">RolesKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.subjectKeyInput">SubjectKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.connectUrl">ConnectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.header">Header</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.jwtHeader">JwtHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.jwtUrlParameter">JwtUrlParameter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.refreshRateLimitCount">RefreshRateLimitCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.refreshRateLimitTimeWindowMs">RefreshRateLimitTimeWindowMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.rolesKey">RolesKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.subjectKey">SubjectKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid">ManagedDatabaseOpensearchPropertiesOpenid</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `ConnectUrlInput`<sup>Optional</sup> <a name="ConnectUrlInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.connectUrlInput"></a>

```go
func ConnectUrlInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.headerInput"></a>

```go
func HeaderInput() *string
```

- *Type:* *string

---

##### `JwtHeaderInput`<sup>Optional</sup> <a name="JwtHeaderInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.jwtHeaderInput"></a>

```go
func JwtHeaderInput() *string
```

- *Type:* *string

---

##### `JwtUrlParameterInput`<sup>Optional</sup> <a name="JwtUrlParameterInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.jwtUrlParameterInput"></a>

```go
func JwtUrlParameterInput() *string
```

- *Type:* *string

---

##### `RefreshRateLimitCountInput`<sup>Optional</sup> <a name="RefreshRateLimitCountInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.refreshRateLimitCountInput"></a>

```go
func RefreshRateLimitCountInput() *f64
```

- *Type:* *f64

---

##### `RefreshRateLimitTimeWindowMsInput`<sup>Optional</sup> <a name="RefreshRateLimitTimeWindowMsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.refreshRateLimitTimeWindowMsInput"></a>

```go
func RefreshRateLimitTimeWindowMsInput() *f64
```

- *Type:* *f64

---

##### `RolesKeyInput`<sup>Optional</sup> <a name="RolesKeyInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.rolesKeyInput"></a>

```go
func RolesKeyInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `SubjectKeyInput`<sup>Optional</sup> <a name="SubjectKeyInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.subjectKeyInput"></a>

```go
func SubjectKeyInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `ConnectUrl`<sup>Required</sup> <a name="ConnectUrl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.connectUrl"></a>

```go
func ConnectUrl() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.header"></a>

```go
func Header() *string
```

- *Type:* *string

---

##### `JwtHeader`<sup>Required</sup> <a name="JwtHeader" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.jwtHeader"></a>

```go
func JwtHeader() *string
```

- *Type:* *string

---

##### `JwtUrlParameter`<sup>Required</sup> <a name="JwtUrlParameter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.jwtUrlParameter"></a>

```go
func JwtUrlParameter() *string
```

- *Type:* *string

---

##### `RefreshRateLimitCount`<sup>Required</sup> <a name="RefreshRateLimitCount" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.refreshRateLimitCount"></a>

```go
func RefreshRateLimitCount() *f64
```

- *Type:* *f64

---

##### `RefreshRateLimitTimeWindowMs`<sup>Required</sup> <a name="RefreshRateLimitTimeWindowMs" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.refreshRateLimitTimeWindowMs"></a>

```go
func RefreshRateLimitTimeWindowMs() *f64
```

- *Type:* *f64

---

##### `RolesKey`<sup>Required</sup> <a name="RolesKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.rolesKey"></a>

```go
func RolesKey() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `SubjectKey`<sup>Required</sup> <a name="SubjectKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.subjectKey"></a>

```go
func SubjectKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabaseOpensearchPropertiesOpenid
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid">ManagedDatabaseOpensearchPropertiesOpenid</a>

---


### ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference <a name="ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.NewManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.resetMaxOldSpaceSize">ResetMaxOldSpaceSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.resetMultipleDataSourceEnabled">ResetMultipleDataSourceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.resetOpensearchRequestTimeout">ResetOpensearchRequestTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetMaxOldSpaceSize` <a name="ResetMaxOldSpaceSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.resetMaxOldSpaceSize"></a>

```go
func ResetMaxOldSpaceSize()
```

##### `ResetMultipleDataSourceEnabled` <a name="ResetMultipleDataSourceEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.resetMultipleDataSourceEnabled"></a>

```go
func ResetMultipleDataSourceEnabled()
```

##### `ResetOpensearchRequestTimeout` <a name="ResetOpensearchRequestTimeout" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.resetOpensearchRequestTimeout"></a>

```go
func ResetOpensearchRequestTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.maxOldSpaceSizeInput">MaxOldSpaceSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.multipleDataSourceEnabledInput">MultipleDataSourceEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.opensearchRequestTimeoutInput">OpensearchRequestTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.maxOldSpaceSize">MaxOldSpaceSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.multipleDataSourceEnabled">MultipleDataSourceEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.opensearchRequestTimeout">OpensearchRequestTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards">ManagedDatabaseOpensearchPropertiesOpensearchDashboards</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MaxOldSpaceSizeInput`<sup>Optional</sup> <a name="MaxOldSpaceSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.maxOldSpaceSizeInput"></a>

```go
func MaxOldSpaceSizeInput() *f64
```

- *Type:* *f64

---

##### `MultipleDataSourceEnabledInput`<sup>Optional</sup> <a name="MultipleDataSourceEnabledInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.multipleDataSourceEnabledInput"></a>

```go
func MultipleDataSourceEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `OpensearchRequestTimeoutInput`<sup>Optional</sup> <a name="OpensearchRequestTimeoutInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.opensearchRequestTimeoutInput"></a>

```go
func OpensearchRequestTimeoutInput() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `MaxOldSpaceSize`<sup>Required</sup> <a name="MaxOldSpaceSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.maxOldSpaceSize"></a>

```go
func MaxOldSpaceSize() *f64
```

- *Type:* *f64

---

##### `MultipleDataSourceEnabled`<sup>Required</sup> <a name="MultipleDataSourceEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.multipleDataSourceEnabled"></a>

```go
func MultipleDataSourceEnabled() interface{}
```

- *Type:* interface{}

---

##### `OpensearchRequestTimeout`<sup>Required</sup> <a name="OpensearchRequestTimeout" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.opensearchRequestTimeout"></a>

```go
func OpensearchRequestTimeout() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabaseOpensearchPropertiesOpensearchDashboards
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards">ManagedDatabaseOpensearchPropertiesOpensearchDashboards</a>

---


### ManagedDatabaseOpensearchPropertiesOutputReference <a name="ManagedDatabaseOpensearchPropertiesOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.NewManagedDatabaseOpensearchPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDatabaseOpensearchPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putAuthFailureListeners">PutAuthFailureListeners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putClusterSearchRequestSlowlog">PutClusterSearchRequestSlowlog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putIndexRollup">PutIndexRollup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putIndexTemplate">PutIndexTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putOpenid">PutOpenid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putOpensearchDashboards">PutOpensearchDashboards</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putSaml">PutSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putSearchBackpressure">PutSearchBackpressure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putSearchInsightsTopQueries">PutSearchInsightsTopQueries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putSegrep">PutSegrep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putShardIndexingPressure">PutShardIndexingPressure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetActionAutoCreateIndexEnabled">ResetActionAutoCreateIndexEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetActionDestructiveRequiresName">ResetActionDestructiveRequiresName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetAuthFailureListeners">ResetAuthFailureListeners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter">ResetAutomaticUtilityNetworkIpFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetClusterMaxShardsPerNode">ResetClusterMaxShardsPerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetClusterRoutingAllocationBalancePreferPrimary">ResetClusterRoutingAllocationBalancePreferPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetClusterRoutingAllocationNodeConcurrentRecoveries">ResetClusterRoutingAllocationNodeConcurrentRecoveries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetClusterSearchRequestSlowlog">ResetClusterSearchRequestSlowlog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetCustomDomain">ResetCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetElasticsearchVersion">ResetElasticsearchVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetEmailSenderName">ResetEmailSenderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetEmailSenderPassword">ResetEmailSenderPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetEmailSenderUsername">ResetEmailSenderUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetEnableRemoteBackedStorage">ResetEnableRemoteBackedStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetEnableSecurityAudit">ResetEnableSecurityAudit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetHttpMaxContentLength">ResetHttpMaxContentLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetHttpMaxHeaderSize">ResetHttpMaxHeaderSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetHttpMaxInitialLineLength">ResetHttpMaxInitialLineLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndexPatterns">ResetIndexPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndexRollup">ResetIndexRollup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndexTemplate">ResetIndexTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesFielddataCacheSize">ResetIndicesFielddataCacheSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesMemoryIndexBufferSize">ResetIndicesMemoryIndexBufferSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesMemoryMaxIndexBufferSize">ResetIndicesMemoryMaxIndexBufferSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesMemoryMinIndexBufferSize">ResetIndicesMemoryMinIndexBufferSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesQueriesCacheSize">ResetIndicesQueriesCacheSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesQueryBoolMaxClauseCount">ResetIndicesQueryBoolMaxClauseCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesRecoveryMaxBytesPerSec">ResetIndicesRecoveryMaxBytesPerSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesRecoveryMaxConcurrentFileChunks">ResetIndicesRecoveryMaxConcurrentFileChunks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIpFilter">ResetIpFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmEnabled">ResetIsmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmHistoryEnabled">ResetIsmHistoryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmHistoryMaxAge">ResetIsmHistoryMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmHistoryMaxDocs">ResetIsmHistoryMaxDocs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmHistoryRolloverCheckPeriod">ResetIsmHistoryRolloverCheckPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmHistoryRolloverRetentionPeriod">ResetIsmHistoryRolloverRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetKeepIndexRefreshInterval">ResetKeepIndexRefreshInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetKnnMemoryCircuitBreakerEnabled">ResetKnnMemoryCircuitBreakerEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetKnnMemoryCircuitBreakerLimit">ResetKnnMemoryCircuitBreakerLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetOpenid">ResetOpenid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetOpensearchDashboards">ResetOpensearchDashboards</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetOverrideMainResponseVersion">ResetOverrideMainResponseVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetPluginsAlertingFilterByBackendRoles">ResetPluginsAlertingFilterByBackendRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetPublicAccess">ResetPublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetReindexRemoteWhitelist">ResetReindexRemoteWhitelist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetSaml">ResetSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetScriptMaxCompilationsRate">ResetScriptMaxCompilationsRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetSearchBackpressure">ResetSearchBackpressure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetSearchInsightsTopQueries">ResetSearchInsightsTopQueries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetSearchMaxBuckets">ResetSearchMaxBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetSegrep">ResetSegrep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetServiceLog">ResetServiceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetShardIndexingPressure">ResetShardIndexingPressure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolAnalyzeQueueSize">ResetThreadPoolAnalyzeQueueSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolAnalyzeSize">ResetThreadPoolAnalyzeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolForceMergeSize">ResetThreadPoolForceMergeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolGetQueueSize">ResetThreadPoolGetQueueSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolGetSize">ResetThreadPoolGetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolSearchQueueSize">ResetThreadPoolSearchQueueSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolSearchSize">ResetThreadPoolSearchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolSearchThrottledQueueSize">ResetThreadPoolSearchThrottledQueueSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolSearchThrottledSize">ResetThreadPoolSearchThrottledSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolWriteQueueSize">ResetThreadPoolWriteQueueSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolWriteSize">ResetThreadPoolWriteSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthFailureListeners` <a name="PutAuthFailureListeners" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putAuthFailureListeners"></a>

```go
func PutAuthFailureListeners(value ManagedDatabaseOpensearchPropertiesAuthFailureListeners)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putAuthFailureListeners.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners">ManagedDatabaseOpensearchPropertiesAuthFailureListeners</a>

---

##### `PutClusterSearchRequestSlowlog` <a name="PutClusterSearchRequestSlowlog" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putClusterSearchRequestSlowlog"></a>

```go
func PutClusterSearchRequestSlowlog(value ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlog)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putClusterSearchRequestSlowlog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlog">ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlog</a>

---

##### `PutIndexRollup` <a name="PutIndexRollup" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putIndexRollup"></a>

```go
func PutIndexRollup(value ManagedDatabaseOpensearchPropertiesIndexRollup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putIndexRollup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup">ManagedDatabaseOpensearchPropertiesIndexRollup</a>

---

##### `PutIndexTemplate` <a name="PutIndexTemplate" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putIndexTemplate"></a>

```go
func PutIndexTemplate(value ManagedDatabaseOpensearchPropertiesIndexTemplate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putIndexTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate">ManagedDatabaseOpensearchPropertiesIndexTemplate</a>

---

##### `PutOpenid` <a name="PutOpenid" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putOpenid"></a>

```go
func PutOpenid(value ManagedDatabaseOpensearchPropertiesOpenid)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putOpenid.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid">ManagedDatabaseOpensearchPropertiesOpenid</a>

---

##### `PutOpensearchDashboards` <a name="PutOpensearchDashboards" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putOpensearchDashboards"></a>

```go
func PutOpensearchDashboards(value ManagedDatabaseOpensearchPropertiesOpensearchDashboards)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putOpensearchDashboards.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards">ManagedDatabaseOpensearchPropertiesOpensearchDashboards</a>

---

##### `PutSaml` <a name="PutSaml" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putSaml"></a>

```go
func PutSaml(value ManagedDatabaseOpensearchPropertiesSaml)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putSaml.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml">ManagedDatabaseOpensearchPropertiesSaml</a>

---

##### `PutSearchBackpressure` <a name="PutSearchBackpressure" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putSearchBackpressure"></a>

```go
func PutSearchBackpressure(value ManagedDatabaseOpensearchPropertiesSearchBackpressure)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putSearchBackpressure.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressure">ManagedDatabaseOpensearchPropertiesSearchBackpressure</a>

---

##### `PutSearchInsightsTopQueries` <a name="PutSearchInsightsTopQueries" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putSearchInsightsTopQueries"></a>

```go
func PutSearchInsightsTopQueries(value ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putSearchInsightsTopQueries.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries</a>

---

##### `PutSegrep` <a name="PutSegrep" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putSegrep"></a>

```go
func PutSegrep(value ManagedDatabaseOpensearchPropertiesSegrep)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putSegrep.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrep">ManagedDatabaseOpensearchPropertiesSegrep</a>

---

##### `PutShardIndexingPressure` <a name="PutShardIndexingPressure" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putShardIndexingPressure"></a>

```go
func PutShardIndexingPressure(value ManagedDatabaseOpensearchPropertiesShardIndexingPressure)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.putShardIndexingPressure.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressure">ManagedDatabaseOpensearchPropertiesShardIndexingPressure</a>

---

##### `ResetActionAutoCreateIndexEnabled` <a name="ResetActionAutoCreateIndexEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetActionAutoCreateIndexEnabled"></a>

```go
func ResetActionAutoCreateIndexEnabled()
```

##### `ResetActionDestructiveRequiresName` <a name="ResetActionDestructiveRequiresName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetActionDestructiveRequiresName"></a>

```go
func ResetActionDestructiveRequiresName()
```

##### `ResetAuthFailureListeners` <a name="ResetAuthFailureListeners" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetAuthFailureListeners"></a>

```go
func ResetAuthFailureListeners()
```

##### `ResetAutomaticUtilityNetworkIpFilter` <a name="ResetAutomaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter"></a>

```go
func ResetAutomaticUtilityNetworkIpFilter()
```

##### `ResetClusterMaxShardsPerNode` <a name="ResetClusterMaxShardsPerNode" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetClusterMaxShardsPerNode"></a>

```go
func ResetClusterMaxShardsPerNode()
```

##### `ResetClusterRoutingAllocationBalancePreferPrimary` <a name="ResetClusterRoutingAllocationBalancePreferPrimary" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetClusterRoutingAllocationBalancePreferPrimary"></a>

```go
func ResetClusterRoutingAllocationBalancePreferPrimary()
```

##### `ResetClusterRoutingAllocationNodeConcurrentRecoveries` <a name="ResetClusterRoutingAllocationNodeConcurrentRecoveries" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetClusterRoutingAllocationNodeConcurrentRecoveries"></a>

```go
func ResetClusterRoutingAllocationNodeConcurrentRecoveries()
```

##### `ResetClusterSearchRequestSlowlog` <a name="ResetClusterSearchRequestSlowlog" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetClusterSearchRequestSlowlog"></a>

```go
func ResetClusterSearchRequestSlowlog()
```

##### `ResetCustomDomain` <a name="ResetCustomDomain" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetCustomDomain"></a>

```go
func ResetCustomDomain()
```

##### `ResetElasticsearchVersion` <a name="ResetElasticsearchVersion" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetElasticsearchVersion"></a>

```go
func ResetElasticsearchVersion()
```

##### `ResetEmailSenderName` <a name="ResetEmailSenderName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetEmailSenderName"></a>

```go
func ResetEmailSenderName()
```

##### `ResetEmailSenderPassword` <a name="ResetEmailSenderPassword" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetEmailSenderPassword"></a>

```go
func ResetEmailSenderPassword()
```

##### `ResetEmailSenderUsername` <a name="ResetEmailSenderUsername" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetEmailSenderUsername"></a>

```go
func ResetEmailSenderUsername()
```

##### `ResetEnableRemoteBackedStorage` <a name="ResetEnableRemoteBackedStorage" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetEnableRemoteBackedStorage"></a>

```go
func ResetEnableRemoteBackedStorage()
```

##### `ResetEnableSecurityAudit` <a name="ResetEnableSecurityAudit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetEnableSecurityAudit"></a>

```go
func ResetEnableSecurityAudit()
```

##### `ResetHttpMaxContentLength` <a name="ResetHttpMaxContentLength" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetHttpMaxContentLength"></a>

```go
func ResetHttpMaxContentLength()
```

##### `ResetHttpMaxHeaderSize` <a name="ResetHttpMaxHeaderSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetHttpMaxHeaderSize"></a>

```go
func ResetHttpMaxHeaderSize()
```

##### `ResetHttpMaxInitialLineLength` <a name="ResetHttpMaxInitialLineLength" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetHttpMaxInitialLineLength"></a>

```go
func ResetHttpMaxInitialLineLength()
```

##### `ResetIndexPatterns` <a name="ResetIndexPatterns" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndexPatterns"></a>

```go
func ResetIndexPatterns()
```

##### `ResetIndexRollup` <a name="ResetIndexRollup" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndexRollup"></a>

```go
func ResetIndexRollup()
```

##### `ResetIndexTemplate` <a name="ResetIndexTemplate" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndexTemplate"></a>

```go
func ResetIndexTemplate()
```

##### `ResetIndicesFielddataCacheSize` <a name="ResetIndicesFielddataCacheSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesFielddataCacheSize"></a>

```go
func ResetIndicesFielddataCacheSize()
```

##### `ResetIndicesMemoryIndexBufferSize` <a name="ResetIndicesMemoryIndexBufferSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesMemoryIndexBufferSize"></a>

```go
func ResetIndicesMemoryIndexBufferSize()
```

##### `ResetIndicesMemoryMaxIndexBufferSize` <a name="ResetIndicesMemoryMaxIndexBufferSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesMemoryMaxIndexBufferSize"></a>

```go
func ResetIndicesMemoryMaxIndexBufferSize()
```

##### `ResetIndicesMemoryMinIndexBufferSize` <a name="ResetIndicesMemoryMinIndexBufferSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesMemoryMinIndexBufferSize"></a>

```go
func ResetIndicesMemoryMinIndexBufferSize()
```

##### `ResetIndicesQueriesCacheSize` <a name="ResetIndicesQueriesCacheSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesQueriesCacheSize"></a>

```go
func ResetIndicesQueriesCacheSize()
```

##### `ResetIndicesQueryBoolMaxClauseCount` <a name="ResetIndicesQueryBoolMaxClauseCount" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesQueryBoolMaxClauseCount"></a>

```go
func ResetIndicesQueryBoolMaxClauseCount()
```

##### `ResetIndicesRecoveryMaxBytesPerSec` <a name="ResetIndicesRecoveryMaxBytesPerSec" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesRecoveryMaxBytesPerSec"></a>

```go
func ResetIndicesRecoveryMaxBytesPerSec()
```

##### `ResetIndicesRecoveryMaxConcurrentFileChunks` <a name="ResetIndicesRecoveryMaxConcurrentFileChunks" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIndicesRecoveryMaxConcurrentFileChunks"></a>

```go
func ResetIndicesRecoveryMaxConcurrentFileChunks()
```

##### `ResetIpFilter` <a name="ResetIpFilter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIpFilter"></a>

```go
func ResetIpFilter()
```

##### `ResetIsmEnabled` <a name="ResetIsmEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmEnabled"></a>

```go
func ResetIsmEnabled()
```

##### `ResetIsmHistoryEnabled` <a name="ResetIsmHistoryEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmHistoryEnabled"></a>

```go
func ResetIsmHistoryEnabled()
```

##### `ResetIsmHistoryMaxAge` <a name="ResetIsmHistoryMaxAge" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmHistoryMaxAge"></a>

```go
func ResetIsmHistoryMaxAge()
```

##### `ResetIsmHistoryMaxDocs` <a name="ResetIsmHistoryMaxDocs" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmHistoryMaxDocs"></a>

```go
func ResetIsmHistoryMaxDocs()
```

##### `ResetIsmHistoryRolloverCheckPeriod` <a name="ResetIsmHistoryRolloverCheckPeriod" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmHistoryRolloverCheckPeriod"></a>

```go
func ResetIsmHistoryRolloverCheckPeriod()
```

##### `ResetIsmHistoryRolloverRetentionPeriod` <a name="ResetIsmHistoryRolloverRetentionPeriod" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetIsmHistoryRolloverRetentionPeriod"></a>

```go
func ResetIsmHistoryRolloverRetentionPeriod()
```

##### `ResetKeepIndexRefreshInterval` <a name="ResetKeepIndexRefreshInterval" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetKeepIndexRefreshInterval"></a>

```go
func ResetKeepIndexRefreshInterval()
```

##### `ResetKnnMemoryCircuitBreakerEnabled` <a name="ResetKnnMemoryCircuitBreakerEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetKnnMemoryCircuitBreakerEnabled"></a>

```go
func ResetKnnMemoryCircuitBreakerEnabled()
```

##### `ResetKnnMemoryCircuitBreakerLimit` <a name="ResetKnnMemoryCircuitBreakerLimit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetKnnMemoryCircuitBreakerLimit"></a>

```go
func ResetKnnMemoryCircuitBreakerLimit()
```

##### `ResetOpenid` <a name="ResetOpenid" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetOpenid"></a>

```go
func ResetOpenid()
```

##### `ResetOpensearchDashboards` <a name="ResetOpensearchDashboards" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetOpensearchDashboards"></a>

```go
func ResetOpensearchDashboards()
```

##### `ResetOverrideMainResponseVersion` <a name="ResetOverrideMainResponseVersion" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetOverrideMainResponseVersion"></a>

```go
func ResetOverrideMainResponseVersion()
```

##### `ResetPluginsAlertingFilterByBackendRoles` <a name="ResetPluginsAlertingFilterByBackendRoles" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetPluginsAlertingFilterByBackendRoles"></a>

```go
func ResetPluginsAlertingFilterByBackendRoles()
```

##### `ResetPublicAccess` <a name="ResetPublicAccess" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetPublicAccess"></a>

```go
func ResetPublicAccess()
```

##### `ResetReindexRemoteWhitelist` <a name="ResetReindexRemoteWhitelist" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetReindexRemoteWhitelist"></a>

```go
func ResetReindexRemoteWhitelist()
```

##### `ResetSaml` <a name="ResetSaml" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetSaml"></a>

```go
func ResetSaml()
```

##### `ResetScriptMaxCompilationsRate` <a name="ResetScriptMaxCompilationsRate" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetScriptMaxCompilationsRate"></a>

```go
func ResetScriptMaxCompilationsRate()
```

##### `ResetSearchBackpressure` <a name="ResetSearchBackpressure" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetSearchBackpressure"></a>

```go
func ResetSearchBackpressure()
```

##### `ResetSearchInsightsTopQueries` <a name="ResetSearchInsightsTopQueries" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetSearchInsightsTopQueries"></a>

```go
func ResetSearchInsightsTopQueries()
```

##### `ResetSearchMaxBuckets` <a name="ResetSearchMaxBuckets" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetSearchMaxBuckets"></a>

```go
func ResetSearchMaxBuckets()
```

##### `ResetSegrep` <a name="ResetSegrep" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetSegrep"></a>

```go
func ResetSegrep()
```

##### `ResetServiceLog` <a name="ResetServiceLog" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetServiceLog"></a>

```go
func ResetServiceLog()
```

##### `ResetShardIndexingPressure` <a name="ResetShardIndexingPressure" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetShardIndexingPressure"></a>

```go
func ResetShardIndexingPressure()
```

##### `ResetThreadPoolAnalyzeQueueSize` <a name="ResetThreadPoolAnalyzeQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolAnalyzeQueueSize"></a>

```go
func ResetThreadPoolAnalyzeQueueSize()
```

##### `ResetThreadPoolAnalyzeSize` <a name="ResetThreadPoolAnalyzeSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolAnalyzeSize"></a>

```go
func ResetThreadPoolAnalyzeSize()
```

##### `ResetThreadPoolForceMergeSize` <a name="ResetThreadPoolForceMergeSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolForceMergeSize"></a>

```go
func ResetThreadPoolForceMergeSize()
```

##### `ResetThreadPoolGetQueueSize` <a name="ResetThreadPoolGetQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolGetQueueSize"></a>

```go
func ResetThreadPoolGetQueueSize()
```

##### `ResetThreadPoolGetSize` <a name="ResetThreadPoolGetSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolGetSize"></a>

```go
func ResetThreadPoolGetSize()
```

##### `ResetThreadPoolSearchQueueSize` <a name="ResetThreadPoolSearchQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolSearchQueueSize"></a>

```go
func ResetThreadPoolSearchQueueSize()
```

##### `ResetThreadPoolSearchSize` <a name="ResetThreadPoolSearchSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolSearchSize"></a>

```go
func ResetThreadPoolSearchSize()
```

##### `ResetThreadPoolSearchThrottledQueueSize` <a name="ResetThreadPoolSearchThrottledQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolSearchThrottledQueueSize"></a>

```go
func ResetThreadPoolSearchThrottledQueueSize()
```

##### `ResetThreadPoolSearchThrottledSize` <a name="ResetThreadPoolSearchThrottledSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolSearchThrottledSize"></a>

```go
func ResetThreadPoolSearchThrottledSize()
```

##### `ResetThreadPoolWriteQueueSize` <a name="ResetThreadPoolWriteQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolWriteQueueSize"></a>

```go
func ResetThreadPoolWriteQueueSize()
```

##### `ResetThreadPoolWriteSize` <a name="ResetThreadPoolWriteSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetThreadPoolWriteSize"></a>

```go
func ResetThreadPoolWriteSize()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.authFailureListeners">AuthFailureListeners</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference">ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.clusterSearchRequestSlowlog">ClusterSearchRequestSlowlog</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference">ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexRollup">IndexRollup</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference">ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexTemplate">IndexTemplate</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference">ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.openid">Openid</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference">ManagedDatabaseOpensearchPropertiesOpenidOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.opensearchDashboards">OpensearchDashboards</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference">ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.saml">Saml</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference">ManagedDatabaseOpensearchPropertiesSamlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.searchBackpressure">SearchBackpressure</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference">ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.searchInsightsTopQueries">SearchInsightsTopQueries</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.segrep">Segrep</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference">ManagedDatabaseOpensearchPropertiesSegrepOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.shardIndexingPressure">ShardIndexingPressure</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference">ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.actionAutoCreateIndexEnabledInput">ActionAutoCreateIndexEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.actionDestructiveRequiresNameInput">ActionDestructiveRequiresNameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.authFailureListenersInput">AuthFailureListenersInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners">ManagedDatabaseOpensearchPropertiesAuthFailureListeners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput">AutomaticUtilityNetworkIpFilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.clusterMaxShardsPerNodeInput">ClusterMaxShardsPerNodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.clusterRoutingAllocationBalancePreferPrimaryInput">ClusterRoutingAllocationBalancePreferPrimaryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.clusterRoutingAllocationNodeConcurrentRecoveriesInput">ClusterRoutingAllocationNodeConcurrentRecoveriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.clusterSearchRequestSlowlogInput">ClusterSearchRequestSlowlogInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlog">ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.customDomainInput">CustomDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.elasticsearchVersionInput">ElasticsearchVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderNameInput">EmailSenderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderPasswordInput">EmailSenderPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderUsernameInput">EmailSenderUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.enableRemoteBackedStorageInput">EnableRemoteBackedStorageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.enableSecurityAuditInput">EnableSecurityAuditInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxContentLengthInput">HttpMaxContentLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxHeaderSizeInput">HttpMaxHeaderSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxInitialLineLengthInput">HttpMaxInitialLineLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexPatternsInput">IndexPatternsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexRollupInput">IndexRollupInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup">ManagedDatabaseOpensearchPropertiesIndexRollup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexTemplateInput">IndexTemplateInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate">ManagedDatabaseOpensearchPropertiesIndexTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesFielddataCacheSizeInput">IndicesFielddataCacheSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryIndexBufferSizeInput">IndicesMemoryIndexBufferSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryMaxIndexBufferSizeInput">IndicesMemoryMaxIndexBufferSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryMinIndexBufferSizeInput">IndicesMemoryMinIndexBufferSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesQueriesCacheSizeInput">IndicesQueriesCacheSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesQueryBoolMaxClauseCountInput">IndicesQueryBoolMaxClauseCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesRecoveryMaxBytesPerSecInput">IndicesRecoveryMaxBytesPerSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesRecoveryMaxConcurrentFileChunksInput">IndicesRecoveryMaxConcurrentFileChunksInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ipFilterInput">IpFilterInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismEnabledInput">IsmEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryEnabledInput">IsmHistoryEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryMaxAgeInput">IsmHistoryMaxAgeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryMaxDocsInput">IsmHistoryMaxDocsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryRolloverCheckPeriodInput">IsmHistoryRolloverCheckPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryRolloverRetentionPeriodInput">IsmHistoryRolloverRetentionPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.keepIndexRefreshIntervalInput">KeepIndexRefreshIntervalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.knnMemoryCircuitBreakerEnabledInput">KnnMemoryCircuitBreakerEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.knnMemoryCircuitBreakerLimitInput">KnnMemoryCircuitBreakerLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.openidInput">OpenidInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid">ManagedDatabaseOpensearchPropertiesOpenid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.opensearchDashboardsInput">OpensearchDashboardsInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards">ManagedDatabaseOpensearchPropertiesOpensearchDashboards</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.overrideMainResponseVersionInput">OverrideMainResponseVersionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.pluginsAlertingFilterByBackendRolesInput">PluginsAlertingFilterByBackendRolesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.publicAccessInput">PublicAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.reindexRemoteWhitelistInput">ReindexRemoteWhitelistInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.samlInput">SamlInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml">ManagedDatabaseOpensearchPropertiesSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.scriptMaxCompilationsRateInput">ScriptMaxCompilationsRateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.searchBackpressureInput">SearchBackpressureInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressure">ManagedDatabaseOpensearchPropertiesSearchBackpressure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.searchInsightsTopQueriesInput">SearchInsightsTopQueriesInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.searchMaxBucketsInput">SearchMaxBucketsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.segrepInput">SegrepInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrep">ManagedDatabaseOpensearchPropertiesSegrep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.serviceLogInput">ServiceLogInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.shardIndexingPressureInput">ShardIndexingPressureInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressure">ManagedDatabaseOpensearchPropertiesShardIndexingPressure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolAnalyzeQueueSizeInput">ThreadPoolAnalyzeQueueSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolAnalyzeSizeInput">ThreadPoolAnalyzeSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolForceMergeSizeInput">ThreadPoolForceMergeSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolGetQueueSizeInput">ThreadPoolGetQueueSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolGetSizeInput">ThreadPoolGetSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchQueueSizeInput">ThreadPoolSearchQueueSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchSizeInput">ThreadPoolSearchSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchThrottledQueueSizeInput">ThreadPoolSearchThrottledQueueSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchThrottledSizeInput">ThreadPoolSearchThrottledSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolWriteQueueSizeInput">ThreadPoolWriteQueueSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolWriteSizeInput">ThreadPoolWriteSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.actionAutoCreateIndexEnabled">ActionAutoCreateIndexEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.actionDestructiveRequiresName">ActionDestructiveRequiresName</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.automaticUtilityNetworkIpFilter">AutomaticUtilityNetworkIpFilter</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.clusterMaxShardsPerNode">ClusterMaxShardsPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.clusterRoutingAllocationBalancePreferPrimary">ClusterRoutingAllocationBalancePreferPrimary</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.clusterRoutingAllocationNodeConcurrentRecoveries">ClusterRoutingAllocationNodeConcurrentRecoveries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.customDomain">CustomDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.elasticsearchVersion">ElasticsearchVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderName">EmailSenderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderPassword">EmailSenderPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderUsername">EmailSenderUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.enableRemoteBackedStorage">EnableRemoteBackedStorage</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.enableSecurityAudit">EnableSecurityAudit</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxContentLength">HttpMaxContentLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxHeaderSize">HttpMaxHeaderSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxInitialLineLength">HttpMaxInitialLineLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexPatterns">IndexPatterns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesFielddataCacheSize">IndicesFielddataCacheSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryIndexBufferSize">IndicesMemoryIndexBufferSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryMaxIndexBufferSize">IndicesMemoryMaxIndexBufferSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryMinIndexBufferSize">IndicesMemoryMinIndexBufferSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesQueriesCacheSize">IndicesQueriesCacheSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesQueryBoolMaxClauseCount">IndicesQueryBoolMaxClauseCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesRecoveryMaxBytesPerSec">IndicesRecoveryMaxBytesPerSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesRecoveryMaxConcurrentFileChunks">IndicesRecoveryMaxConcurrentFileChunks</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ipFilter">IpFilter</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismEnabled">IsmEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryEnabled">IsmHistoryEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryMaxAge">IsmHistoryMaxAge</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryMaxDocs">IsmHistoryMaxDocs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryRolloverCheckPeriod">IsmHistoryRolloverCheckPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryRolloverRetentionPeriod">IsmHistoryRolloverRetentionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.keepIndexRefreshInterval">KeepIndexRefreshInterval</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.knnMemoryCircuitBreakerEnabled">KnnMemoryCircuitBreakerEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.knnMemoryCircuitBreakerLimit">KnnMemoryCircuitBreakerLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.overrideMainResponseVersion">OverrideMainResponseVersion</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.pluginsAlertingFilterByBackendRoles">PluginsAlertingFilterByBackendRoles</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.publicAccess">PublicAccess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.reindexRemoteWhitelist">ReindexRemoteWhitelist</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.scriptMaxCompilationsRate">ScriptMaxCompilationsRate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.searchMaxBuckets">SearchMaxBuckets</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.serviceLog">ServiceLog</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolAnalyzeQueueSize">ThreadPoolAnalyzeQueueSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolAnalyzeSize">ThreadPoolAnalyzeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolForceMergeSize">ThreadPoolForceMergeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolGetQueueSize">ThreadPoolGetQueueSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolGetSize">ThreadPoolGetSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchQueueSize">ThreadPoolSearchQueueSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchSize">ThreadPoolSearchSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchThrottledQueueSize">ThreadPoolSearchThrottledQueueSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchThrottledSize">ThreadPoolSearchThrottledSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolWriteQueueSize">ThreadPoolWriteQueueSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolWriteSize">ThreadPoolWriteSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties">ManagedDatabaseOpensearchProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthFailureListeners`<sup>Required</sup> <a name="AuthFailureListeners" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.authFailureListeners"></a>

```go
func AuthFailureListeners() ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference">ManagedDatabaseOpensearchPropertiesAuthFailureListenersOutputReference</a>

---

##### `ClusterSearchRequestSlowlog`<sup>Required</sup> <a name="ClusterSearchRequestSlowlog" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.clusterSearchRequestSlowlog"></a>

```go
func ClusterSearchRequestSlowlog() ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference">ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlogOutputReference</a>

---

##### `IndexRollup`<sup>Required</sup> <a name="IndexRollup" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexRollup"></a>

```go
func IndexRollup() ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference">ManagedDatabaseOpensearchPropertiesIndexRollupOutputReference</a>

---

##### `IndexTemplate`<sup>Required</sup> <a name="IndexTemplate" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexTemplate"></a>

```go
func IndexTemplate() ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference">ManagedDatabaseOpensearchPropertiesIndexTemplateOutputReference</a>

---

##### `Openid`<sup>Required</sup> <a name="Openid" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.openid"></a>

```go
func Openid() ManagedDatabaseOpensearchPropertiesOpenidOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenidOutputReference">ManagedDatabaseOpensearchPropertiesOpenidOutputReference</a>

---

##### `OpensearchDashboards`<sup>Required</sup> <a name="OpensearchDashboards" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.opensearchDashboards"></a>

```go
func OpensearchDashboards() ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference">ManagedDatabaseOpensearchPropertiesOpensearchDashboardsOutputReference</a>

---

##### `Saml`<sup>Required</sup> <a name="Saml" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.saml"></a>

```go
func Saml() ManagedDatabaseOpensearchPropertiesSamlOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference">ManagedDatabaseOpensearchPropertiesSamlOutputReference</a>

---

##### `SearchBackpressure`<sup>Required</sup> <a name="SearchBackpressure" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.searchBackpressure"></a>

```go
func SearchBackpressure() ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference">ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference</a>

---

##### `SearchInsightsTopQueries`<sup>Required</sup> <a name="SearchInsightsTopQueries" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.searchInsightsTopQueries"></a>

```go
func SearchInsightsTopQueries() ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference</a>

---

##### `Segrep`<sup>Required</sup> <a name="Segrep" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.segrep"></a>

```go
func Segrep() ManagedDatabaseOpensearchPropertiesSegrepOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference">ManagedDatabaseOpensearchPropertiesSegrepOutputReference</a>

---

##### `ShardIndexingPressure`<sup>Required</sup> <a name="ShardIndexingPressure" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.shardIndexingPressure"></a>

```go
func ShardIndexingPressure() ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference">ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference</a>

---

##### `ActionAutoCreateIndexEnabledInput`<sup>Optional</sup> <a name="ActionAutoCreateIndexEnabledInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.actionAutoCreateIndexEnabledInput"></a>

```go
func ActionAutoCreateIndexEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ActionDestructiveRequiresNameInput`<sup>Optional</sup> <a name="ActionDestructiveRequiresNameInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.actionDestructiveRequiresNameInput"></a>

```go
func ActionDestructiveRequiresNameInput() interface{}
```

- *Type:* interface{}

---

##### `AuthFailureListenersInput`<sup>Optional</sup> <a name="AuthFailureListenersInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.authFailureListenersInput"></a>

```go
func AuthFailureListenersInput() ManagedDatabaseOpensearchPropertiesAuthFailureListeners
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesAuthFailureListeners">ManagedDatabaseOpensearchPropertiesAuthFailureListeners</a>

---

##### `AutomaticUtilityNetworkIpFilterInput`<sup>Optional</sup> <a name="AutomaticUtilityNetworkIpFilterInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput"></a>

```go
func AutomaticUtilityNetworkIpFilterInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterMaxShardsPerNodeInput`<sup>Optional</sup> <a name="ClusterMaxShardsPerNodeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.clusterMaxShardsPerNodeInput"></a>

```go
func ClusterMaxShardsPerNodeInput() *f64
```

- *Type:* *f64

---

##### `ClusterRoutingAllocationBalancePreferPrimaryInput`<sup>Optional</sup> <a name="ClusterRoutingAllocationBalancePreferPrimaryInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.clusterRoutingAllocationBalancePreferPrimaryInput"></a>

```go
func ClusterRoutingAllocationBalancePreferPrimaryInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterRoutingAllocationNodeConcurrentRecoveriesInput`<sup>Optional</sup> <a name="ClusterRoutingAllocationNodeConcurrentRecoveriesInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.clusterRoutingAllocationNodeConcurrentRecoveriesInput"></a>

```go
func ClusterRoutingAllocationNodeConcurrentRecoveriesInput() *f64
```

- *Type:* *f64

---

##### `ClusterSearchRequestSlowlogInput`<sup>Optional</sup> <a name="ClusterSearchRequestSlowlogInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.clusterSearchRequestSlowlogInput"></a>

```go
func ClusterSearchRequestSlowlogInput() ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlog
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlog">ManagedDatabaseOpensearchPropertiesClusterSearchRequestSlowlog</a>

---

##### `CustomDomainInput`<sup>Optional</sup> <a name="CustomDomainInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.customDomainInput"></a>

```go
func CustomDomainInput() *string
```

- *Type:* *string

---

##### `ElasticsearchVersionInput`<sup>Optional</sup> <a name="ElasticsearchVersionInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.elasticsearchVersionInput"></a>

```go
func ElasticsearchVersionInput() *string
```

- *Type:* *string

---

##### `EmailSenderNameInput`<sup>Optional</sup> <a name="EmailSenderNameInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderNameInput"></a>

```go
func EmailSenderNameInput() *string
```

- *Type:* *string

---

##### `EmailSenderPasswordInput`<sup>Optional</sup> <a name="EmailSenderPasswordInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderPasswordInput"></a>

```go
func EmailSenderPasswordInput() *string
```

- *Type:* *string

---

##### `EmailSenderUsernameInput`<sup>Optional</sup> <a name="EmailSenderUsernameInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderUsernameInput"></a>

```go
func EmailSenderUsernameInput() *string
```

- *Type:* *string

---

##### `EnableRemoteBackedStorageInput`<sup>Optional</sup> <a name="EnableRemoteBackedStorageInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.enableRemoteBackedStorageInput"></a>

```go
func EnableRemoteBackedStorageInput() interface{}
```

- *Type:* interface{}

---

##### `EnableSecurityAuditInput`<sup>Optional</sup> <a name="EnableSecurityAuditInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.enableSecurityAuditInput"></a>

```go
func EnableSecurityAuditInput() interface{}
```

- *Type:* interface{}

---

##### `HttpMaxContentLengthInput`<sup>Optional</sup> <a name="HttpMaxContentLengthInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxContentLengthInput"></a>

```go
func HttpMaxContentLengthInput() *f64
```

- *Type:* *f64

---

##### `HttpMaxHeaderSizeInput`<sup>Optional</sup> <a name="HttpMaxHeaderSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxHeaderSizeInput"></a>

```go
func HttpMaxHeaderSizeInput() *f64
```

- *Type:* *f64

---

##### `HttpMaxInitialLineLengthInput`<sup>Optional</sup> <a name="HttpMaxInitialLineLengthInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxInitialLineLengthInput"></a>

```go
func HttpMaxInitialLineLengthInput() *f64
```

- *Type:* *f64

---

##### `IndexPatternsInput`<sup>Optional</sup> <a name="IndexPatternsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexPatternsInput"></a>

```go
func IndexPatternsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IndexRollupInput`<sup>Optional</sup> <a name="IndexRollupInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexRollupInput"></a>

```go
func IndexRollupInput() ManagedDatabaseOpensearchPropertiesIndexRollup
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexRollup">ManagedDatabaseOpensearchPropertiesIndexRollup</a>

---

##### `IndexTemplateInput`<sup>Optional</sup> <a name="IndexTemplateInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexTemplateInput"></a>

```go
func IndexTemplateInput() ManagedDatabaseOpensearchPropertiesIndexTemplate
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesIndexTemplate">ManagedDatabaseOpensearchPropertiesIndexTemplate</a>

---

##### `IndicesFielddataCacheSizeInput`<sup>Optional</sup> <a name="IndicesFielddataCacheSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesFielddataCacheSizeInput"></a>

```go
func IndicesFielddataCacheSizeInput() *f64
```

- *Type:* *f64

---

##### `IndicesMemoryIndexBufferSizeInput`<sup>Optional</sup> <a name="IndicesMemoryIndexBufferSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryIndexBufferSizeInput"></a>

```go
func IndicesMemoryIndexBufferSizeInput() *f64
```

- *Type:* *f64

---

##### `IndicesMemoryMaxIndexBufferSizeInput`<sup>Optional</sup> <a name="IndicesMemoryMaxIndexBufferSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryMaxIndexBufferSizeInput"></a>

```go
func IndicesMemoryMaxIndexBufferSizeInput() *f64
```

- *Type:* *f64

---

##### `IndicesMemoryMinIndexBufferSizeInput`<sup>Optional</sup> <a name="IndicesMemoryMinIndexBufferSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryMinIndexBufferSizeInput"></a>

```go
func IndicesMemoryMinIndexBufferSizeInput() *f64
```

- *Type:* *f64

---

##### `IndicesQueriesCacheSizeInput`<sup>Optional</sup> <a name="IndicesQueriesCacheSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesQueriesCacheSizeInput"></a>

```go
func IndicesQueriesCacheSizeInput() *f64
```

- *Type:* *f64

---

##### `IndicesQueryBoolMaxClauseCountInput`<sup>Optional</sup> <a name="IndicesQueryBoolMaxClauseCountInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesQueryBoolMaxClauseCountInput"></a>

```go
func IndicesQueryBoolMaxClauseCountInput() *f64
```

- *Type:* *f64

---

##### `IndicesRecoveryMaxBytesPerSecInput`<sup>Optional</sup> <a name="IndicesRecoveryMaxBytesPerSecInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesRecoveryMaxBytesPerSecInput"></a>

```go
func IndicesRecoveryMaxBytesPerSecInput() *f64
```

- *Type:* *f64

---

##### `IndicesRecoveryMaxConcurrentFileChunksInput`<sup>Optional</sup> <a name="IndicesRecoveryMaxConcurrentFileChunksInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesRecoveryMaxConcurrentFileChunksInput"></a>

```go
func IndicesRecoveryMaxConcurrentFileChunksInput() *f64
```

- *Type:* *f64

---

##### `IpFilterInput`<sup>Optional</sup> <a name="IpFilterInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ipFilterInput"></a>

```go
func IpFilterInput() *[]*string
```

- *Type:* *[]*string

---

##### `IsmEnabledInput`<sup>Optional</sup> <a name="IsmEnabledInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismEnabledInput"></a>

```go
func IsmEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsmHistoryEnabledInput`<sup>Optional</sup> <a name="IsmHistoryEnabledInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryEnabledInput"></a>

```go
func IsmHistoryEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsmHistoryMaxAgeInput`<sup>Optional</sup> <a name="IsmHistoryMaxAgeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryMaxAgeInput"></a>

```go
func IsmHistoryMaxAgeInput() *f64
```

- *Type:* *f64

---

##### `IsmHistoryMaxDocsInput`<sup>Optional</sup> <a name="IsmHistoryMaxDocsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryMaxDocsInput"></a>

```go
func IsmHistoryMaxDocsInput() *f64
```

- *Type:* *f64

---

##### `IsmHistoryRolloverCheckPeriodInput`<sup>Optional</sup> <a name="IsmHistoryRolloverCheckPeriodInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryRolloverCheckPeriodInput"></a>

```go
func IsmHistoryRolloverCheckPeriodInput() *f64
```

- *Type:* *f64

---

##### `IsmHistoryRolloverRetentionPeriodInput`<sup>Optional</sup> <a name="IsmHistoryRolloverRetentionPeriodInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryRolloverRetentionPeriodInput"></a>

```go
func IsmHistoryRolloverRetentionPeriodInput() *f64
```

- *Type:* *f64

---

##### `KeepIndexRefreshIntervalInput`<sup>Optional</sup> <a name="KeepIndexRefreshIntervalInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.keepIndexRefreshIntervalInput"></a>

```go
func KeepIndexRefreshIntervalInput() interface{}
```

- *Type:* interface{}

---

##### `KnnMemoryCircuitBreakerEnabledInput`<sup>Optional</sup> <a name="KnnMemoryCircuitBreakerEnabledInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.knnMemoryCircuitBreakerEnabledInput"></a>

```go
func KnnMemoryCircuitBreakerEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `KnnMemoryCircuitBreakerLimitInput`<sup>Optional</sup> <a name="KnnMemoryCircuitBreakerLimitInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.knnMemoryCircuitBreakerLimitInput"></a>

```go
func KnnMemoryCircuitBreakerLimitInput() *f64
```

- *Type:* *f64

---

##### `OpenidInput`<sup>Optional</sup> <a name="OpenidInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.openidInput"></a>

```go
func OpenidInput() ManagedDatabaseOpensearchPropertiesOpenid
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpenid">ManagedDatabaseOpensearchPropertiesOpenid</a>

---

##### `OpensearchDashboardsInput`<sup>Optional</sup> <a name="OpensearchDashboardsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.opensearchDashboardsInput"></a>

```go
func OpensearchDashboardsInput() ManagedDatabaseOpensearchPropertiesOpensearchDashboards
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOpensearchDashboards">ManagedDatabaseOpensearchPropertiesOpensearchDashboards</a>

---

##### `OverrideMainResponseVersionInput`<sup>Optional</sup> <a name="OverrideMainResponseVersionInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.overrideMainResponseVersionInput"></a>

```go
func OverrideMainResponseVersionInput() interface{}
```

- *Type:* interface{}

---

##### `PluginsAlertingFilterByBackendRolesInput`<sup>Optional</sup> <a name="PluginsAlertingFilterByBackendRolesInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.pluginsAlertingFilterByBackendRolesInput"></a>

```go
func PluginsAlertingFilterByBackendRolesInput() interface{}
```

- *Type:* interface{}

---

##### `PublicAccessInput`<sup>Optional</sup> <a name="PublicAccessInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.publicAccessInput"></a>

```go
func PublicAccessInput() interface{}
```

- *Type:* interface{}

---

##### `ReindexRemoteWhitelistInput`<sup>Optional</sup> <a name="ReindexRemoteWhitelistInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.reindexRemoteWhitelistInput"></a>

```go
func ReindexRemoteWhitelistInput() *[]*string
```

- *Type:* *[]*string

---

##### `SamlInput`<sup>Optional</sup> <a name="SamlInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.samlInput"></a>

```go
func SamlInput() ManagedDatabaseOpensearchPropertiesSaml
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml">ManagedDatabaseOpensearchPropertiesSaml</a>

---

##### `ScriptMaxCompilationsRateInput`<sup>Optional</sup> <a name="ScriptMaxCompilationsRateInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.scriptMaxCompilationsRateInput"></a>

```go
func ScriptMaxCompilationsRateInput() *string
```

- *Type:* *string

---

##### `SearchBackpressureInput`<sup>Optional</sup> <a name="SearchBackpressureInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.searchBackpressureInput"></a>

```go
func SearchBackpressureInput() ManagedDatabaseOpensearchPropertiesSearchBackpressure
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressure">ManagedDatabaseOpensearchPropertiesSearchBackpressure</a>

---

##### `SearchInsightsTopQueriesInput`<sup>Optional</sup> <a name="SearchInsightsTopQueriesInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.searchInsightsTopQueriesInput"></a>

```go
func SearchInsightsTopQueriesInput() ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries</a>

---

##### `SearchMaxBucketsInput`<sup>Optional</sup> <a name="SearchMaxBucketsInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.searchMaxBucketsInput"></a>

```go
func SearchMaxBucketsInput() *f64
```

- *Type:* *f64

---

##### `SegrepInput`<sup>Optional</sup> <a name="SegrepInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.segrepInput"></a>

```go
func SegrepInput() ManagedDatabaseOpensearchPropertiesSegrep
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrep">ManagedDatabaseOpensearchPropertiesSegrep</a>

---

##### `ServiceLogInput`<sup>Optional</sup> <a name="ServiceLogInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.serviceLogInput"></a>

```go
func ServiceLogInput() interface{}
```

- *Type:* interface{}

---

##### `ShardIndexingPressureInput`<sup>Optional</sup> <a name="ShardIndexingPressureInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.shardIndexingPressureInput"></a>

```go
func ShardIndexingPressureInput() ManagedDatabaseOpensearchPropertiesShardIndexingPressure
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressure">ManagedDatabaseOpensearchPropertiesShardIndexingPressure</a>

---

##### `ThreadPoolAnalyzeQueueSizeInput`<sup>Optional</sup> <a name="ThreadPoolAnalyzeQueueSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolAnalyzeQueueSizeInput"></a>

```go
func ThreadPoolAnalyzeQueueSizeInput() *f64
```

- *Type:* *f64

---

##### `ThreadPoolAnalyzeSizeInput`<sup>Optional</sup> <a name="ThreadPoolAnalyzeSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolAnalyzeSizeInput"></a>

```go
func ThreadPoolAnalyzeSizeInput() *f64
```

- *Type:* *f64

---

##### `ThreadPoolForceMergeSizeInput`<sup>Optional</sup> <a name="ThreadPoolForceMergeSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolForceMergeSizeInput"></a>

```go
func ThreadPoolForceMergeSizeInput() *f64
```

- *Type:* *f64

---

##### `ThreadPoolGetQueueSizeInput`<sup>Optional</sup> <a name="ThreadPoolGetQueueSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolGetQueueSizeInput"></a>

```go
func ThreadPoolGetQueueSizeInput() *f64
```

- *Type:* *f64

---

##### `ThreadPoolGetSizeInput`<sup>Optional</sup> <a name="ThreadPoolGetSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolGetSizeInput"></a>

```go
func ThreadPoolGetSizeInput() *f64
```

- *Type:* *f64

---

##### `ThreadPoolSearchQueueSizeInput`<sup>Optional</sup> <a name="ThreadPoolSearchQueueSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchQueueSizeInput"></a>

```go
func ThreadPoolSearchQueueSizeInput() *f64
```

- *Type:* *f64

---

##### `ThreadPoolSearchSizeInput`<sup>Optional</sup> <a name="ThreadPoolSearchSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchSizeInput"></a>

```go
func ThreadPoolSearchSizeInput() *f64
```

- *Type:* *f64

---

##### `ThreadPoolSearchThrottledQueueSizeInput`<sup>Optional</sup> <a name="ThreadPoolSearchThrottledQueueSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchThrottledQueueSizeInput"></a>

```go
func ThreadPoolSearchThrottledQueueSizeInput() *f64
```

- *Type:* *f64

---

##### `ThreadPoolSearchThrottledSizeInput`<sup>Optional</sup> <a name="ThreadPoolSearchThrottledSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchThrottledSizeInput"></a>

```go
func ThreadPoolSearchThrottledSizeInput() *f64
```

- *Type:* *f64

---

##### `ThreadPoolWriteQueueSizeInput`<sup>Optional</sup> <a name="ThreadPoolWriteQueueSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolWriteQueueSizeInput"></a>

```go
func ThreadPoolWriteQueueSizeInput() *f64
```

- *Type:* *f64

---

##### `ThreadPoolWriteSizeInput`<sup>Optional</sup> <a name="ThreadPoolWriteSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolWriteSizeInput"></a>

```go
func ThreadPoolWriteSizeInput() *f64
```

- *Type:* *f64

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `ActionAutoCreateIndexEnabled`<sup>Required</sup> <a name="ActionAutoCreateIndexEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.actionAutoCreateIndexEnabled"></a>

```go
func ActionAutoCreateIndexEnabled() interface{}
```

- *Type:* interface{}

---

##### `ActionDestructiveRequiresName`<sup>Required</sup> <a name="ActionDestructiveRequiresName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.actionDestructiveRequiresName"></a>

```go
func ActionDestructiveRequiresName() interface{}
```

- *Type:* interface{}

---

##### `AutomaticUtilityNetworkIpFilter`<sup>Required</sup> <a name="AutomaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.automaticUtilityNetworkIpFilter"></a>

```go
func AutomaticUtilityNetworkIpFilter() interface{}
```

- *Type:* interface{}

---

##### `ClusterMaxShardsPerNode`<sup>Required</sup> <a name="ClusterMaxShardsPerNode" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.clusterMaxShardsPerNode"></a>

```go
func ClusterMaxShardsPerNode() *f64
```

- *Type:* *f64

---

##### `ClusterRoutingAllocationBalancePreferPrimary`<sup>Required</sup> <a name="ClusterRoutingAllocationBalancePreferPrimary" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.clusterRoutingAllocationBalancePreferPrimary"></a>

```go
func ClusterRoutingAllocationBalancePreferPrimary() interface{}
```

- *Type:* interface{}

---

##### `ClusterRoutingAllocationNodeConcurrentRecoveries`<sup>Required</sup> <a name="ClusterRoutingAllocationNodeConcurrentRecoveries" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.clusterRoutingAllocationNodeConcurrentRecoveries"></a>

```go
func ClusterRoutingAllocationNodeConcurrentRecoveries() *f64
```

- *Type:* *f64

---

##### `CustomDomain`<sup>Required</sup> <a name="CustomDomain" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.customDomain"></a>

```go
func CustomDomain() *string
```

- *Type:* *string

---

##### `ElasticsearchVersion`<sup>Required</sup> <a name="ElasticsearchVersion" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.elasticsearchVersion"></a>

```go
func ElasticsearchVersion() *string
```

- *Type:* *string

---

##### `EmailSenderName`<sup>Required</sup> <a name="EmailSenderName" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderName"></a>

```go
func EmailSenderName() *string
```

- *Type:* *string

---

##### `EmailSenderPassword`<sup>Required</sup> <a name="EmailSenderPassword" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderPassword"></a>

```go
func EmailSenderPassword() *string
```

- *Type:* *string

---

##### `EmailSenderUsername`<sup>Required</sup> <a name="EmailSenderUsername" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.emailSenderUsername"></a>

```go
func EmailSenderUsername() *string
```

- *Type:* *string

---

##### `EnableRemoteBackedStorage`<sup>Required</sup> <a name="EnableRemoteBackedStorage" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.enableRemoteBackedStorage"></a>

```go
func EnableRemoteBackedStorage() interface{}
```

- *Type:* interface{}

---

##### `EnableSecurityAudit`<sup>Required</sup> <a name="EnableSecurityAudit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.enableSecurityAudit"></a>

```go
func EnableSecurityAudit() interface{}
```

- *Type:* interface{}

---

##### `HttpMaxContentLength`<sup>Required</sup> <a name="HttpMaxContentLength" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxContentLength"></a>

```go
func HttpMaxContentLength() *f64
```

- *Type:* *f64

---

##### `HttpMaxHeaderSize`<sup>Required</sup> <a name="HttpMaxHeaderSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxHeaderSize"></a>

```go
func HttpMaxHeaderSize() *f64
```

- *Type:* *f64

---

##### `HttpMaxInitialLineLength`<sup>Required</sup> <a name="HttpMaxInitialLineLength" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.httpMaxInitialLineLength"></a>

```go
func HttpMaxInitialLineLength() *f64
```

- *Type:* *f64

---

##### `IndexPatterns`<sup>Required</sup> <a name="IndexPatterns" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indexPatterns"></a>

```go
func IndexPatterns() *[]*string
```

- *Type:* *[]*string

---

##### `IndicesFielddataCacheSize`<sup>Required</sup> <a name="IndicesFielddataCacheSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesFielddataCacheSize"></a>

```go
func IndicesFielddataCacheSize() *f64
```

- *Type:* *f64

---

##### `IndicesMemoryIndexBufferSize`<sup>Required</sup> <a name="IndicesMemoryIndexBufferSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryIndexBufferSize"></a>

```go
func IndicesMemoryIndexBufferSize() *f64
```

- *Type:* *f64

---

##### `IndicesMemoryMaxIndexBufferSize`<sup>Required</sup> <a name="IndicesMemoryMaxIndexBufferSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryMaxIndexBufferSize"></a>

```go
func IndicesMemoryMaxIndexBufferSize() *f64
```

- *Type:* *f64

---

##### `IndicesMemoryMinIndexBufferSize`<sup>Required</sup> <a name="IndicesMemoryMinIndexBufferSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesMemoryMinIndexBufferSize"></a>

```go
func IndicesMemoryMinIndexBufferSize() *f64
```

- *Type:* *f64

---

##### `IndicesQueriesCacheSize`<sup>Required</sup> <a name="IndicesQueriesCacheSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesQueriesCacheSize"></a>

```go
func IndicesQueriesCacheSize() *f64
```

- *Type:* *f64

---

##### `IndicesQueryBoolMaxClauseCount`<sup>Required</sup> <a name="IndicesQueryBoolMaxClauseCount" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesQueryBoolMaxClauseCount"></a>

```go
func IndicesQueryBoolMaxClauseCount() *f64
```

- *Type:* *f64

---

##### `IndicesRecoveryMaxBytesPerSec`<sup>Required</sup> <a name="IndicesRecoveryMaxBytesPerSec" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesRecoveryMaxBytesPerSec"></a>

```go
func IndicesRecoveryMaxBytesPerSec() *f64
```

- *Type:* *f64

---

##### `IndicesRecoveryMaxConcurrentFileChunks`<sup>Required</sup> <a name="IndicesRecoveryMaxConcurrentFileChunks" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.indicesRecoveryMaxConcurrentFileChunks"></a>

```go
func IndicesRecoveryMaxConcurrentFileChunks() *f64
```

- *Type:* *f64

---

##### `IpFilter`<sup>Required</sup> <a name="IpFilter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ipFilter"></a>

```go
func IpFilter() *[]*string
```

- *Type:* *[]*string

---

##### `IsmEnabled`<sup>Required</sup> <a name="IsmEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismEnabled"></a>

```go
func IsmEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsmHistoryEnabled`<sup>Required</sup> <a name="IsmHistoryEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryEnabled"></a>

```go
func IsmHistoryEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsmHistoryMaxAge`<sup>Required</sup> <a name="IsmHistoryMaxAge" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryMaxAge"></a>

```go
func IsmHistoryMaxAge() *f64
```

- *Type:* *f64

---

##### `IsmHistoryMaxDocs`<sup>Required</sup> <a name="IsmHistoryMaxDocs" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryMaxDocs"></a>

```go
func IsmHistoryMaxDocs() *f64
```

- *Type:* *f64

---

##### `IsmHistoryRolloverCheckPeriod`<sup>Required</sup> <a name="IsmHistoryRolloverCheckPeriod" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryRolloverCheckPeriod"></a>

```go
func IsmHistoryRolloverCheckPeriod() *f64
```

- *Type:* *f64

---

##### `IsmHistoryRolloverRetentionPeriod`<sup>Required</sup> <a name="IsmHistoryRolloverRetentionPeriod" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.ismHistoryRolloverRetentionPeriod"></a>

```go
func IsmHistoryRolloverRetentionPeriod() *f64
```

- *Type:* *f64

---

##### `KeepIndexRefreshInterval`<sup>Required</sup> <a name="KeepIndexRefreshInterval" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.keepIndexRefreshInterval"></a>

```go
func KeepIndexRefreshInterval() interface{}
```

- *Type:* interface{}

---

##### `KnnMemoryCircuitBreakerEnabled`<sup>Required</sup> <a name="KnnMemoryCircuitBreakerEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.knnMemoryCircuitBreakerEnabled"></a>

```go
func KnnMemoryCircuitBreakerEnabled() interface{}
```

- *Type:* interface{}

---

##### `KnnMemoryCircuitBreakerLimit`<sup>Required</sup> <a name="KnnMemoryCircuitBreakerLimit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.knnMemoryCircuitBreakerLimit"></a>

```go
func KnnMemoryCircuitBreakerLimit() *f64
```

- *Type:* *f64

---

##### `OverrideMainResponseVersion`<sup>Required</sup> <a name="OverrideMainResponseVersion" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.overrideMainResponseVersion"></a>

```go
func OverrideMainResponseVersion() interface{}
```

- *Type:* interface{}

---

##### `PluginsAlertingFilterByBackendRoles`<sup>Required</sup> <a name="PluginsAlertingFilterByBackendRoles" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.pluginsAlertingFilterByBackendRoles"></a>

```go
func PluginsAlertingFilterByBackendRoles() interface{}
```

- *Type:* interface{}

---

##### `PublicAccess`<sup>Required</sup> <a name="PublicAccess" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.publicAccess"></a>

```go
func PublicAccess() interface{}
```

- *Type:* interface{}

---

##### `ReindexRemoteWhitelist`<sup>Required</sup> <a name="ReindexRemoteWhitelist" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.reindexRemoteWhitelist"></a>

```go
func ReindexRemoteWhitelist() *[]*string
```

- *Type:* *[]*string

---

##### `ScriptMaxCompilationsRate`<sup>Required</sup> <a name="ScriptMaxCompilationsRate" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.scriptMaxCompilationsRate"></a>

```go
func ScriptMaxCompilationsRate() *string
```

- *Type:* *string

---

##### `SearchMaxBuckets`<sup>Required</sup> <a name="SearchMaxBuckets" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.searchMaxBuckets"></a>

```go
func SearchMaxBuckets() *f64
```

- *Type:* *f64

---

##### `ServiceLog`<sup>Required</sup> <a name="ServiceLog" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.serviceLog"></a>

```go
func ServiceLog() interface{}
```

- *Type:* interface{}

---

##### `ThreadPoolAnalyzeQueueSize`<sup>Required</sup> <a name="ThreadPoolAnalyzeQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolAnalyzeQueueSize"></a>

```go
func ThreadPoolAnalyzeQueueSize() *f64
```

- *Type:* *f64

---

##### `ThreadPoolAnalyzeSize`<sup>Required</sup> <a name="ThreadPoolAnalyzeSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolAnalyzeSize"></a>

```go
func ThreadPoolAnalyzeSize() *f64
```

- *Type:* *f64

---

##### `ThreadPoolForceMergeSize`<sup>Required</sup> <a name="ThreadPoolForceMergeSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolForceMergeSize"></a>

```go
func ThreadPoolForceMergeSize() *f64
```

- *Type:* *f64

---

##### `ThreadPoolGetQueueSize`<sup>Required</sup> <a name="ThreadPoolGetQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolGetQueueSize"></a>

```go
func ThreadPoolGetQueueSize() *f64
```

- *Type:* *f64

---

##### `ThreadPoolGetSize`<sup>Required</sup> <a name="ThreadPoolGetSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolGetSize"></a>

```go
func ThreadPoolGetSize() *f64
```

- *Type:* *f64

---

##### `ThreadPoolSearchQueueSize`<sup>Required</sup> <a name="ThreadPoolSearchQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchQueueSize"></a>

```go
func ThreadPoolSearchQueueSize() *f64
```

- *Type:* *f64

---

##### `ThreadPoolSearchSize`<sup>Required</sup> <a name="ThreadPoolSearchSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchSize"></a>

```go
func ThreadPoolSearchSize() *f64
```

- *Type:* *f64

---

##### `ThreadPoolSearchThrottledQueueSize`<sup>Required</sup> <a name="ThreadPoolSearchThrottledQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchThrottledQueueSize"></a>

```go
func ThreadPoolSearchThrottledQueueSize() *f64
```

- *Type:* *f64

---

##### `ThreadPoolSearchThrottledSize`<sup>Required</sup> <a name="ThreadPoolSearchThrottledSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolSearchThrottledSize"></a>

```go
func ThreadPoolSearchThrottledSize() *f64
```

- *Type:* *f64

---

##### `ThreadPoolWriteQueueSize`<sup>Required</sup> <a name="ThreadPoolWriteQueueSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolWriteQueueSize"></a>

```go
func ThreadPoolWriteQueueSize() *f64
```

- *Type:* *f64

---

##### `ThreadPoolWriteSize`<sup>Required</sup> <a name="ThreadPoolWriteSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.threadPoolWriteSize"></a>

```go
func ThreadPoolWriteSize() *f64
```

- *Type:* *f64

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabaseOpensearchProperties
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchProperties">ManagedDatabaseOpensearchProperties</a>

---


### ManagedDatabaseOpensearchPropertiesSamlOutputReference <a name="ManagedDatabaseOpensearchPropertiesSamlOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.NewManagedDatabaseOpensearchPropertiesSamlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDatabaseOpensearchPropertiesSamlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetIdpEntityId">ResetIdpEntityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetIdpMetadataUrl">ResetIdpMetadataUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetIdpPemtrustedcasContent">ResetIdpPemtrustedcasContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetRolesKey">ResetRolesKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetSpEntityId">ResetSpEntityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetSubjectKey">ResetSubjectKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetIdpEntityId` <a name="ResetIdpEntityId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetIdpEntityId"></a>

```go
func ResetIdpEntityId()
```

##### `ResetIdpMetadataUrl` <a name="ResetIdpMetadataUrl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetIdpMetadataUrl"></a>

```go
func ResetIdpMetadataUrl()
```

##### `ResetIdpPemtrustedcasContent` <a name="ResetIdpPemtrustedcasContent" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetIdpPemtrustedcasContent"></a>

```go
func ResetIdpPemtrustedcasContent()
```

##### `ResetRolesKey` <a name="ResetRolesKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetRolesKey"></a>

```go
func ResetRolesKey()
```

##### `ResetSpEntityId` <a name="ResetSpEntityId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetSpEntityId"></a>

```go
func ResetSpEntityId()
```

##### `ResetSubjectKey` <a name="ResetSubjectKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.resetSubjectKey"></a>

```go
func ResetSubjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpEntityIdInput">IdpEntityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpMetadataUrlInput">IdpMetadataUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpPemtrustedcasContentInput">IdpPemtrustedcasContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.rolesKeyInput">RolesKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.spEntityIdInput">SpEntityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.subjectKeyInput">SubjectKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpEntityId">IdpEntityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpMetadataUrl">IdpMetadataUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpPemtrustedcasContent">IdpPemtrustedcasContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.rolesKey">RolesKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.spEntityId">SpEntityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.subjectKey">SubjectKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml">ManagedDatabaseOpensearchPropertiesSaml</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdpEntityIdInput`<sup>Optional</sup> <a name="IdpEntityIdInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpEntityIdInput"></a>

```go
func IdpEntityIdInput() *string
```

- *Type:* *string

---

##### `IdpMetadataUrlInput`<sup>Optional</sup> <a name="IdpMetadataUrlInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpMetadataUrlInput"></a>

```go
func IdpMetadataUrlInput() *string
```

- *Type:* *string

---

##### `IdpPemtrustedcasContentInput`<sup>Optional</sup> <a name="IdpPemtrustedcasContentInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpPemtrustedcasContentInput"></a>

```go
func IdpPemtrustedcasContentInput() *string
```

- *Type:* *string

---

##### `RolesKeyInput`<sup>Optional</sup> <a name="RolesKeyInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.rolesKeyInput"></a>

```go
func RolesKeyInput() *string
```

- *Type:* *string

---

##### `SpEntityIdInput`<sup>Optional</sup> <a name="SpEntityIdInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.spEntityIdInput"></a>

```go
func SpEntityIdInput() *string
```

- *Type:* *string

---

##### `SubjectKeyInput`<sup>Optional</sup> <a name="SubjectKeyInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.subjectKeyInput"></a>

```go
func SubjectKeyInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `IdpEntityId`<sup>Required</sup> <a name="IdpEntityId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpEntityId"></a>

```go
func IdpEntityId() *string
```

- *Type:* *string

---

##### `IdpMetadataUrl`<sup>Required</sup> <a name="IdpMetadataUrl" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpMetadataUrl"></a>

```go
func IdpMetadataUrl() *string
```

- *Type:* *string

---

##### `IdpPemtrustedcasContent`<sup>Required</sup> <a name="IdpPemtrustedcasContent" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.idpPemtrustedcasContent"></a>

```go
func IdpPemtrustedcasContent() *string
```

- *Type:* *string

---

##### `RolesKey`<sup>Required</sup> <a name="RolesKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.rolesKey"></a>

```go
func RolesKey() *string
```

- *Type:* *string

---

##### `SpEntityId`<sup>Required</sup> <a name="SpEntityId" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.spEntityId"></a>

```go
func SpEntityId() *string
```

- *Type:* *string

---

##### `SubjectKey`<sup>Required</sup> <a name="SubjectKey" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.subjectKey"></a>

```go
func SubjectKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSamlOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabaseOpensearchPropertiesSaml
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSaml">ManagedDatabaseOpensearchPropertiesSaml</a>

---


### ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference <a name="ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.NewManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.resetCpuThreshold">ResetCpuThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.resetHeapThreshold">ResetHeapThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.resetNumSuccessiveBreaches">ResetNumSuccessiveBreaches</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuThreshold` <a name="ResetCpuThreshold" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.resetCpuThreshold"></a>

```go
func ResetCpuThreshold()
```

##### `ResetHeapThreshold` <a name="ResetHeapThreshold" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.resetHeapThreshold"></a>

```go
func ResetHeapThreshold()
```

##### `ResetNumSuccessiveBreaches` <a name="ResetNumSuccessiveBreaches" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.resetNumSuccessiveBreaches"></a>

```go
func ResetNumSuccessiveBreaches()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.property.cpuThresholdInput">CpuThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.property.heapThresholdInput">HeapThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.property.numSuccessiveBreachesInput">NumSuccessiveBreachesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.property.cpuThreshold">CpuThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.property.heapThreshold">HeapThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.property.numSuccessiveBreaches">NumSuccessiveBreaches</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress">ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuThresholdInput`<sup>Optional</sup> <a name="CpuThresholdInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.property.cpuThresholdInput"></a>

```go
func CpuThresholdInput() *f64
```

- *Type:* *f64

---

##### `HeapThresholdInput`<sup>Optional</sup> <a name="HeapThresholdInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.property.heapThresholdInput"></a>

```go
func HeapThresholdInput() *f64
```

- *Type:* *f64

---

##### `NumSuccessiveBreachesInput`<sup>Optional</sup> <a name="NumSuccessiveBreachesInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.property.numSuccessiveBreachesInput"></a>

```go
func NumSuccessiveBreachesInput() *f64
```

- *Type:* *f64

---

##### `CpuThreshold`<sup>Required</sup> <a name="CpuThreshold" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.property.cpuThreshold"></a>

```go
func CpuThreshold() *f64
```

- *Type:* *f64

---

##### `HeapThreshold`<sup>Required</sup> <a name="HeapThreshold" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.property.heapThreshold"></a>

```go
func HeapThreshold() *f64
```

- *Type:* *f64

---

##### `NumSuccessiveBreaches`<sup>Required</sup> <a name="NumSuccessiveBreaches" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.property.numSuccessiveBreaches"></a>

```go
func NumSuccessiveBreaches() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress">ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress</a>

---


### ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference <a name="ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.NewManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.putNodeDuress">PutNodeDuress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.putSearchShardTask">PutSearchShardTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.putSearchTask">PutSearchTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.resetNodeDuress">ResetNodeDuress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.resetSearchShardTask">ResetSearchShardTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.resetSearchTask">ResetSearchTask</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNodeDuress` <a name="PutNodeDuress" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.putNodeDuress"></a>

```go
func PutNodeDuress(value ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.putNodeDuress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress">ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress</a>

---

##### `PutSearchShardTask` <a name="PutSearchShardTask" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.putSearchShardTask"></a>

```go
func PutSearchShardTask(value ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.putSearchShardTask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask">ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask</a>

---

##### `PutSearchTask` <a name="PutSearchTask" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.putSearchTask"></a>

```go
func PutSearchTask(value ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.putSearchTask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask">ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask</a>

---

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetNodeDuress` <a name="ResetNodeDuress" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.resetNodeDuress"></a>

```go
func ResetNodeDuress()
```

##### `ResetSearchShardTask` <a name="ResetSearchShardTask" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.resetSearchShardTask"></a>

```go
func ResetSearchShardTask()
```

##### `ResetSearchTask` <a name="ResetSearchTask" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.resetSearchTask"></a>

```go
func ResetSearchTask()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.property.nodeDuress">NodeDuress</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference">ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.property.searchShardTask">SearchShardTask</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference">ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.property.searchTask">SearchTask</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference">ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.property.nodeDuressInput">NodeDuressInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress">ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.property.searchShardTaskInput">SearchShardTaskInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask">ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.property.searchTaskInput">SearchTaskInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask">ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressure">ManagedDatabaseOpensearchPropertiesSearchBackpressure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NodeDuress`<sup>Required</sup> <a name="NodeDuress" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.property.nodeDuress"></a>

```go
func NodeDuress() ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference">ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuressOutputReference</a>

---

##### `SearchShardTask`<sup>Required</sup> <a name="SearchShardTask" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.property.searchShardTask"></a>

```go
func SearchShardTask() ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference">ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference</a>

---

##### `SearchTask`<sup>Required</sup> <a name="SearchTask" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.property.searchTask"></a>

```go
func SearchTask() ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference">ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference</a>

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `NodeDuressInput`<sup>Optional</sup> <a name="NodeDuressInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.property.nodeDuressInput"></a>

```go
func NodeDuressInput() ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress">ManagedDatabaseOpensearchPropertiesSearchBackpressureNodeDuress</a>

---

##### `SearchShardTaskInput`<sup>Optional</sup> <a name="SearchShardTaskInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.property.searchShardTaskInput"></a>

```go
func SearchShardTaskInput() ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask">ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask</a>

---

##### `SearchTaskInput`<sup>Optional</sup> <a name="SearchTaskInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.property.searchTaskInput"></a>

```go
func SearchTaskInput() ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask">ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask</a>

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabaseOpensearchPropertiesSearchBackpressure
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressure">ManagedDatabaseOpensearchPropertiesSearchBackpressure</a>

---


### ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference <a name="ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.NewManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.resetCancellationBurst">ResetCancellationBurst</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.resetCancellationRate">ResetCancellationRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.resetCancellationRatio">ResetCancellationRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.resetCpuTimeMillisThreshold">ResetCpuTimeMillisThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.resetElapsedTimeMillisThreshold">ResetElapsedTimeMillisThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.resetHeapMovingAverageWindowSize">ResetHeapMovingAverageWindowSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.resetHeapPercentThreshold">ResetHeapPercentThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.resetHeapVariance">ResetHeapVariance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.resetTotalHeapPercentThreshold">ResetTotalHeapPercentThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCancellationBurst` <a name="ResetCancellationBurst" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.resetCancellationBurst"></a>

```go
func ResetCancellationBurst()
```

##### `ResetCancellationRate` <a name="ResetCancellationRate" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.resetCancellationRate"></a>

```go
func ResetCancellationRate()
```

##### `ResetCancellationRatio` <a name="ResetCancellationRatio" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.resetCancellationRatio"></a>

```go
func ResetCancellationRatio()
```

##### `ResetCpuTimeMillisThreshold` <a name="ResetCpuTimeMillisThreshold" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.resetCpuTimeMillisThreshold"></a>

```go
func ResetCpuTimeMillisThreshold()
```

##### `ResetElapsedTimeMillisThreshold` <a name="ResetElapsedTimeMillisThreshold" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.resetElapsedTimeMillisThreshold"></a>

```go
func ResetElapsedTimeMillisThreshold()
```

##### `ResetHeapMovingAverageWindowSize` <a name="ResetHeapMovingAverageWindowSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.resetHeapMovingAverageWindowSize"></a>

```go
func ResetHeapMovingAverageWindowSize()
```

##### `ResetHeapPercentThreshold` <a name="ResetHeapPercentThreshold" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.resetHeapPercentThreshold"></a>

```go
func ResetHeapPercentThreshold()
```

##### `ResetHeapVariance` <a name="ResetHeapVariance" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.resetHeapVariance"></a>

```go
func ResetHeapVariance()
```

##### `ResetTotalHeapPercentThreshold` <a name="ResetTotalHeapPercentThreshold" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.resetTotalHeapPercentThreshold"></a>

```go
func ResetTotalHeapPercentThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.cancellationBurstInput">CancellationBurstInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.cancellationRateInput">CancellationRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.cancellationRatioInput">CancellationRatioInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.cpuTimeMillisThresholdInput">CpuTimeMillisThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.elapsedTimeMillisThresholdInput">ElapsedTimeMillisThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.heapMovingAverageWindowSizeInput">HeapMovingAverageWindowSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.heapPercentThresholdInput">HeapPercentThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.heapVarianceInput">HeapVarianceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.totalHeapPercentThresholdInput">TotalHeapPercentThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.cancellationBurst">CancellationBurst</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.cancellationRate">CancellationRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.cancellationRatio">CancellationRatio</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.cpuTimeMillisThreshold">CpuTimeMillisThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.elapsedTimeMillisThreshold">ElapsedTimeMillisThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.heapMovingAverageWindowSize">HeapMovingAverageWindowSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.heapPercentThreshold">HeapPercentThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.heapVariance">HeapVariance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.totalHeapPercentThreshold">TotalHeapPercentThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask">ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CancellationBurstInput`<sup>Optional</sup> <a name="CancellationBurstInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.cancellationBurstInput"></a>

```go
func CancellationBurstInput() *f64
```

- *Type:* *f64

---

##### `CancellationRateInput`<sup>Optional</sup> <a name="CancellationRateInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.cancellationRateInput"></a>

```go
func CancellationRateInput() *f64
```

- *Type:* *f64

---

##### `CancellationRatioInput`<sup>Optional</sup> <a name="CancellationRatioInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.cancellationRatioInput"></a>

```go
func CancellationRatioInput() *f64
```

- *Type:* *f64

---

##### `CpuTimeMillisThresholdInput`<sup>Optional</sup> <a name="CpuTimeMillisThresholdInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.cpuTimeMillisThresholdInput"></a>

```go
func CpuTimeMillisThresholdInput() *f64
```

- *Type:* *f64

---

##### `ElapsedTimeMillisThresholdInput`<sup>Optional</sup> <a name="ElapsedTimeMillisThresholdInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.elapsedTimeMillisThresholdInput"></a>

```go
func ElapsedTimeMillisThresholdInput() *f64
```

- *Type:* *f64

---

##### `HeapMovingAverageWindowSizeInput`<sup>Optional</sup> <a name="HeapMovingAverageWindowSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.heapMovingAverageWindowSizeInput"></a>

```go
func HeapMovingAverageWindowSizeInput() *f64
```

- *Type:* *f64

---

##### `HeapPercentThresholdInput`<sup>Optional</sup> <a name="HeapPercentThresholdInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.heapPercentThresholdInput"></a>

```go
func HeapPercentThresholdInput() *f64
```

- *Type:* *f64

---

##### `HeapVarianceInput`<sup>Optional</sup> <a name="HeapVarianceInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.heapVarianceInput"></a>

```go
func HeapVarianceInput() *f64
```

- *Type:* *f64

---

##### `TotalHeapPercentThresholdInput`<sup>Optional</sup> <a name="TotalHeapPercentThresholdInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.totalHeapPercentThresholdInput"></a>

```go
func TotalHeapPercentThresholdInput() *f64
```

- *Type:* *f64

---

##### `CancellationBurst`<sup>Required</sup> <a name="CancellationBurst" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.cancellationBurst"></a>

```go
func CancellationBurst() *f64
```

- *Type:* *f64

---

##### `CancellationRate`<sup>Required</sup> <a name="CancellationRate" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.cancellationRate"></a>

```go
func CancellationRate() *f64
```

- *Type:* *f64

---

##### `CancellationRatio`<sup>Required</sup> <a name="CancellationRatio" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.cancellationRatio"></a>

```go
func CancellationRatio() *f64
```

- *Type:* *f64

---

##### `CpuTimeMillisThreshold`<sup>Required</sup> <a name="CpuTimeMillisThreshold" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.cpuTimeMillisThreshold"></a>

```go
func CpuTimeMillisThreshold() *f64
```

- *Type:* *f64

---

##### `ElapsedTimeMillisThreshold`<sup>Required</sup> <a name="ElapsedTimeMillisThreshold" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.elapsedTimeMillisThreshold"></a>

```go
func ElapsedTimeMillisThreshold() *f64
```

- *Type:* *f64

---

##### `HeapMovingAverageWindowSize`<sup>Required</sup> <a name="HeapMovingAverageWindowSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.heapMovingAverageWindowSize"></a>

```go
func HeapMovingAverageWindowSize() *f64
```

- *Type:* *f64

---

##### `HeapPercentThreshold`<sup>Required</sup> <a name="HeapPercentThreshold" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.heapPercentThreshold"></a>

```go
func HeapPercentThreshold() *f64
```

- *Type:* *f64

---

##### `HeapVariance`<sup>Required</sup> <a name="HeapVariance" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.heapVariance"></a>

```go
func HeapVariance() *f64
```

- *Type:* *f64

---

##### `TotalHeapPercentThreshold`<sup>Required</sup> <a name="TotalHeapPercentThreshold" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.totalHeapPercentThreshold"></a>

```go
func TotalHeapPercentThreshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTaskOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask">ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchShardTask</a>

---


### ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference <a name="ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.NewManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.resetCancellationBurst">ResetCancellationBurst</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.resetCancellationRate">ResetCancellationRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.resetCancellationRatio">ResetCancellationRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.resetCpuTimeMillisThreshold">ResetCpuTimeMillisThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.resetElapsedTimeMillisThreshold">ResetElapsedTimeMillisThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.resetHeapMovingAverageWindowSize">ResetHeapMovingAverageWindowSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.resetHeapPercentThreshold">ResetHeapPercentThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.resetHeapVariance">ResetHeapVariance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.resetTotalHeapPercentThreshold">ResetTotalHeapPercentThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCancellationBurst` <a name="ResetCancellationBurst" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.resetCancellationBurst"></a>

```go
func ResetCancellationBurst()
```

##### `ResetCancellationRate` <a name="ResetCancellationRate" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.resetCancellationRate"></a>

```go
func ResetCancellationRate()
```

##### `ResetCancellationRatio` <a name="ResetCancellationRatio" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.resetCancellationRatio"></a>

```go
func ResetCancellationRatio()
```

##### `ResetCpuTimeMillisThreshold` <a name="ResetCpuTimeMillisThreshold" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.resetCpuTimeMillisThreshold"></a>

```go
func ResetCpuTimeMillisThreshold()
```

##### `ResetElapsedTimeMillisThreshold` <a name="ResetElapsedTimeMillisThreshold" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.resetElapsedTimeMillisThreshold"></a>

```go
func ResetElapsedTimeMillisThreshold()
```

##### `ResetHeapMovingAverageWindowSize` <a name="ResetHeapMovingAverageWindowSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.resetHeapMovingAverageWindowSize"></a>

```go
func ResetHeapMovingAverageWindowSize()
```

##### `ResetHeapPercentThreshold` <a name="ResetHeapPercentThreshold" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.resetHeapPercentThreshold"></a>

```go
func ResetHeapPercentThreshold()
```

##### `ResetHeapVariance` <a name="ResetHeapVariance" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.resetHeapVariance"></a>

```go
func ResetHeapVariance()
```

##### `ResetTotalHeapPercentThreshold` <a name="ResetTotalHeapPercentThreshold" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.resetTotalHeapPercentThreshold"></a>

```go
func ResetTotalHeapPercentThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.cancellationBurstInput">CancellationBurstInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.cancellationRateInput">CancellationRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.cancellationRatioInput">CancellationRatioInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.cpuTimeMillisThresholdInput">CpuTimeMillisThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.elapsedTimeMillisThresholdInput">ElapsedTimeMillisThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.heapMovingAverageWindowSizeInput">HeapMovingAverageWindowSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.heapPercentThresholdInput">HeapPercentThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.heapVarianceInput">HeapVarianceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.totalHeapPercentThresholdInput">TotalHeapPercentThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.cancellationBurst">CancellationBurst</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.cancellationRate">CancellationRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.cancellationRatio">CancellationRatio</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.cpuTimeMillisThreshold">CpuTimeMillisThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.elapsedTimeMillisThreshold">ElapsedTimeMillisThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.heapMovingAverageWindowSize">HeapMovingAverageWindowSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.heapPercentThreshold">HeapPercentThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.heapVariance">HeapVariance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.totalHeapPercentThreshold">TotalHeapPercentThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask">ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CancellationBurstInput`<sup>Optional</sup> <a name="CancellationBurstInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.cancellationBurstInput"></a>

```go
func CancellationBurstInput() *f64
```

- *Type:* *f64

---

##### `CancellationRateInput`<sup>Optional</sup> <a name="CancellationRateInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.cancellationRateInput"></a>

```go
func CancellationRateInput() *f64
```

- *Type:* *f64

---

##### `CancellationRatioInput`<sup>Optional</sup> <a name="CancellationRatioInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.cancellationRatioInput"></a>

```go
func CancellationRatioInput() *f64
```

- *Type:* *f64

---

##### `CpuTimeMillisThresholdInput`<sup>Optional</sup> <a name="CpuTimeMillisThresholdInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.cpuTimeMillisThresholdInput"></a>

```go
func CpuTimeMillisThresholdInput() *f64
```

- *Type:* *f64

---

##### `ElapsedTimeMillisThresholdInput`<sup>Optional</sup> <a name="ElapsedTimeMillisThresholdInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.elapsedTimeMillisThresholdInput"></a>

```go
func ElapsedTimeMillisThresholdInput() *f64
```

- *Type:* *f64

---

##### `HeapMovingAverageWindowSizeInput`<sup>Optional</sup> <a name="HeapMovingAverageWindowSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.heapMovingAverageWindowSizeInput"></a>

```go
func HeapMovingAverageWindowSizeInput() *f64
```

- *Type:* *f64

---

##### `HeapPercentThresholdInput`<sup>Optional</sup> <a name="HeapPercentThresholdInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.heapPercentThresholdInput"></a>

```go
func HeapPercentThresholdInput() *f64
```

- *Type:* *f64

---

##### `HeapVarianceInput`<sup>Optional</sup> <a name="HeapVarianceInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.heapVarianceInput"></a>

```go
func HeapVarianceInput() *f64
```

- *Type:* *f64

---

##### `TotalHeapPercentThresholdInput`<sup>Optional</sup> <a name="TotalHeapPercentThresholdInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.totalHeapPercentThresholdInput"></a>

```go
func TotalHeapPercentThresholdInput() *f64
```

- *Type:* *f64

---

##### `CancellationBurst`<sup>Required</sup> <a name="CancellationBurst" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.cancellationBurst"></a>

```go
func CancellationBurst() *f64
```

- *Type:* *f64

---

##### `CancellationRate`<sup>Required</sup> <a name="CancellationRate" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.cancellationRate"></a>

```go
func CancellationRate() *f64
```

- *Type:* *f64

---

##### `CancellationRatio`<sup>Required</sup> <a name="CancellationRatio" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.cancellationRatio"></a>

```go
func CancellationRatio() *f64
```

- *Type:* *f64

---

##### `CpuTimeMillisThreshold`<sup>Required</sup> <a name="CpuTimeMillisThreshold" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.cpuTimeMillisThreshold"></a>

```go
func CpuTimeMillisThreshold() *f64
```

- *Type:* *f64

---

##### `ElapsedTimeMillisThreshold`<sup>Required</sup> <a name="ElapsedTimeMillisThreshold" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.elapsedTimeMillisThreshold"></a>

```go
func ElapsedTimeMillisThreshold() *f64
```

- *Type:* *f64

---

##### `HeapMovingAverageWindowSize`<sup>Required</sup> <a name="HeapMovingAverageWindowSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.heapMovingAverageWindowSize"></a>

```go
func HeapMovingAverageWindowSize() *f64
```

- *Type:* *f64

---

##### `HeapPercentThreshold`<sup>Required</sup> <a name="HeapPercentThreshold" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.heapPercentThreshold"></a>

```go
func HeapPercentThreshold() *f64
```

- *Type:* *f64

---

##### `HeapVariance`<sup>Required</sup> <a name="HeapVariance" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.heapVariance"></a>

```go
func HeapVariance() *f64
```

- *Type:* *f64

---

##### `TotalHeapPercentThreshold`<sup>Required</sup> <a name="TotalHeapPercentThreshold" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.totalHeapPercentThreshold"></a>

```go
func TotalHeapPercentThreshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTaskOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask">ManagedDatabaseOpensearchPropertiesSearchBackpressureSearchTask</a>

---


### ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference <a name="ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.NewManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.resetTopNSize">ResetTopNSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.resetWindowSize">ResetWindowSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetTopNSize` <a name="ResetTopNSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.resetTopNSize"></a>

```go
func ResetTopNSize()
```

##### `ResetWindowSize` <a name="ResetWindowSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.resetWindowSize"></a>

```go
func ResetWindowSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.property.topNSizeInput">TopNSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.property.windowSizeInput">WindowSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.property.topNSize">TopNSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.property.windowSize">WindowSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TopNSizeInput`<sup>Optional</sup> <a name="TopNSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.property.topNSizeInput"></a>

```go
func TopNSizeInput() *f64
```

- *Type:* *f64

---

##### `WindowSizeInput`<sup>Optional</sup> <a name="WindowSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.property.windowSizeInput"></a>

```go
func WindowSizeInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `TopNSize`<sup>Required</sup> <a name="TopNSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.property.topNSize"></a>

```go
func TopNSize() *f64
```

- *Type:* *f64

---

##### `WindowSize`<sup>Required</sup> <a name="WindowSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.property.windowSize"></a>

```go
func WindowSize() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu</a>

---


### ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference <a name="ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.NewManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.resetTopNSize">ResetTopNSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.resetWindowSize">ResetWindowSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetTopNSize` <a name="ResetTopNSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.resetTopNSize"></a>

```go
func ResetTopNSize()
```

##### `ResetWindowSize` <a name="ResetWindowSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.resetWindowSize"></a>

```go
func ResetWindowSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.property.topNSizeInput">TopNSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.property.windowSizeInput">WindowSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.property.topNSize">TopNSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.property.windowSize">WindowSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TopNSizeInput`<sup>Optional</sup> <a name="TopNSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.property.topNSizeInput"></a>

```go
func TopNSizeInput() *f64
```

- *Type:* *f64

---

##### `WindowSizeInput`<sup>Optional</sup> <a name="WindowSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.property.windowSizeInput"></a>

```go
func WindowSizeInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `TopNSize`<sup>Required</sup> <a name="TopNSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.property.topNSize"></a>

```go
func TopNSize() *f64
```

- *Type:* *f64

---

##### `WindowSize`<sup>Required</sup> <a name="WindowSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.property.windowSize"></a>

```go
func WindowSize() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency</a>

---


### ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference <a name="ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.NewManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.resetTopNSize">ResetTopNSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.resetWindowSize">ResetWindowSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetTopNSize` <a name="ResetTopNSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.resetTopNSize"></a>

```go
func ResetTopNSize()
```

##### `ResetWindowSize` <a name="ResetWindowSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.resetWindowSize"></a>

```go
func ResetWindowSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.property.topNSizeInput">TopNSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.property.windowSizeInput">WindowSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.property.topNSize">TopNSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.property.windowSize">WindowSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TopNSizeInput`<sup>Optional</sup> <a name="TopNSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.property.topNSizeInput"></a>

```go
func TopNSizeInput() *f64
```

- *Type:* *f64

---

##### `WindowSizeInput`<sup>Optional</sup> <a name="WindowSizeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.property.windowSizeInput"></a>

```go
func WindowSizeInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `TopNSize`<sup>Required</sup> <a name="TopNSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.property.topNSize"></a>

```go
func TopNSize() *f64
```

- *Type:* *f64

---

##### `WindowSize`<sup>Required</sup> <a name="WindowSize" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.property.windowSize"></a>

```go
func WindowSize() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory</a>

---


### ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference <a name="ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.NewManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.putCpu">PutCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.putLatency">PutLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.putMemory">PutMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.resetCpu">ResetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.resetLatency">ResetLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.resetMemory">ResetMemory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCpu` <a name="PutCpu" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.putCpu"></a>

```go
func PutCpu(value ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.putCpu.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu</a>

---

##### `PutLatency` <a name="PutLatency" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.putLatency"></a>

```go
func PutLatency(value ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.putLatency.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency</a>

---

##### `PutMemory` <a name="PutMemory" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.putMemory"></a>

```go
func PutMemory(value ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.putMemory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory</a>

---

##### `ResetCpu` <a name="ResetCpu" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.resetCpu"></a>

```go
func ResetCpu()
```

##### `ResetLatency` <a name="ResetLatency" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.resetLatency"></a>

```go
func ResetLatency()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.resetMemory"></a>

```go
func ResetMemory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.property.cpu">Cpu</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.property.latency">Latency</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.property.memory">Memory</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.property.cpuInput">CpuInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.property.latencyInput">LatencyInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.property.memoryInput">MemoryInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.property.cpu"></a>

```go
func Cpu() ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpuOutputReference</a>

---

##### `Latency`<sup>Required</sup> <a name="Latency" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.property.latency"></a>

```go
func Latency() ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatencyOutputReference</a>

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.property.memory"></a>

```go
func Memory() ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemoryOutputReference</a>

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.property.cpuInput"></a>

```go
func CpuInput() ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesCpu</a>

---

##### `LatencyInput`<sup>Optional</sup> <a name="LatencyInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.property.latencyInput"></a>

```go
func LatencyInput() ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesLatency</a>

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.property.memoryInput"></a>

```go
func MemoryInput() ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesMemory</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueriesOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries">ManagedDatabaseOpensearchPropertiesSearchInsightsTopQueries</a>

---


### ManagedDatabaseOpensearchPropertiesSegrepOutputReference <a name="ManagedDatabaseOpensearchPropertiesSegrepOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.NewManagedDatabaseOpensearchPropertiesSegrepOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDatabaseOpensearchPropertiesSegrepOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.resetPressureCheckpointLimit">ResetPressureCheckpointLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.resetPressureEnabled">ResetPressureEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.resetPressureReplicaStaleLimit">ResetPressureReplicaStaleLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.resetPressureTimeLimit">ResetPressureTimeLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPressureCheckpointLimit` <a name="ResetPressureCheckpointLimit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.resetPressureCheckpointLimit"></a>

```go
func ResetPressureCheckpointLimit()
```

##### `ResetPressureEnabled` <a name="ResetPressureEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.resetPressureEnabled"></a>

```go
func ResetPressureEnabled()
```

##### `ResetPressureReplicaStaleLimit` <a name="ResetPressureReplicaStaleLimit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.resetPressureReplicaStaleLimit"></a>

```go
func ResetPressureReplicaStaleLimit()
```

##### `ResetPressureTimeLimit` <a name="ResetPressureTimeLimit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.resetPressureTimeLimit"></a>

```go
func ResetPressureTimeLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.property.pressureCheckpointLimitInput">PressureCheckpointLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.property.pressureEnabledInput">PressureEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.property.pressureReplicaStaleLimitInput">PressureReplicaStaleLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.property.pressureTimeLimitInput">PressureTimeLimitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.property.pressureCheckpointLimit">PressureCheckpointLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.property.pressureEnabled">PressureEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.property.pressureReplicaStaleLimit">PressureReplicaStaleLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.property.pressureTimeLimit">PressureTimeLimit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrep">ManagedDatabaseOpensearchPropertiesSegrep</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PressureCheckpointLimitInput`<sup>Optional</sup> <a name="PressureCheckpointLimitInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.property.pressureCheckpointLimitInput"></a>

```go
func PressureCheckpointLimitInput() *f64
```

- *Type:* *f64

---

##### `PressureEnabledInput`<sup>Optional</sup> <a name="PressureEnabledInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.property.pressureEnabledInput"></a>

```go
func PressureEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PressureReplicaStaleLimitInput`<sup>Optional</sup> <a name="PressureReplicaStaleLimitInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.property.pressureReplicaStaleLimitInput"></a>

```go
func PressureReplicaStaleLimitInput() *f64
```

- *Type:* *f64

---

##### `PressureTimeLimitInput`<sup>Optional</sup> <a name="PressureTimeLimitInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.property.pressureTimeLimitInput"></a>

```go
func PressureTimeLimitInput() *string
```

- *Type:* *string

---

##### `PressureCheckpointLimit`<sup>Required</sup> <a name="PressureCheckpointLimit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.property.pressureCheckpointLimit"></a>

```go
func PressureCheckpointLimit() *f64
```

- *Type:* *f64

---

##### `PressureEnabled`<sup>Required</sup> <a name="PressureEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.property.pressureEnabled"></a>

```go
func PressureEnabled() interface{}
```

- *Type:* interface{}

---

##### `PressureReplicaStaleLimit`<sup>Required</sup> <a name="PressureReplicaStaleLimit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.property.pressureReplicaStaleLimit"></a>

```go
func PressureReplicaStaleLimit() *f64
```

- *Type:* *f64

---

##### `PressureTimeLimit`<sup>Required</sup> <a name="PressureTimeLimit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.property.pressureTimeLimit"></a>

```go
func PressureTimeLimit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrepOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabaseOpensearchPropertiesSegrep
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesSegrep">ManagedDatabaseOpensearchPropertiesSegrep</a>

---


### ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference <a name="ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.NewManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.resetLower">ResetLower</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.resetOptimal">ResetOptimal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.resetUpper">ResetUpper</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLower` <a name="ResetLower" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.resetLower"></a>

```go
func ResetLower()
```

##### `ResetOptimal` <a name="ResetOptimal" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.resetOptimal"></a>

```go
func ResetOptimal()
```

##### `ResetUpper` <a name="ResetUpper" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.resetUpper"></a>

```go
func ResetUpper()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.property.lowerInput">LowerInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.property.optimalInput">OptimalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.property.upperInput">UpperInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.property.lower">Lower</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.property.optimal">Optimal</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.property.upper">Upper</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor">ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LowerInput`<sup>Optional</sup> <a name="LowerInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.property.lowerInput"></a>

```go
func LowerInput() *f64
```

- *Type:* *f64

---

##### `OptimalInput`<sup>Optional</sup> <a name="OptimalInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.property.optimalInput"></a>

```go
func OptimalInput() *f64
```

- *Type:* *f64

---

##### `UpperInput`<sup>Optional</sup> <a name="UpperInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.property.upperInput"></a>

```go
func UpperInput() *f64
```

- *Type:* *f64

---

##### `Lower`<sup>Required</sup> <a name="Lower" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.property.lower"></a>

```go
func Lower() *f64
```

- *Type:* *f64

---

##### `Optimal`<sup>Required</sup> <a name="Optimal" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.property.optimal"></a>

```go
func Optimal() *f64
```

- *Type:* *f64

---

##### `Upper`<sup>Required</sup> <a name="Upper" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.property.upper"></a>

```go
func Upper() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor">ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor</a>

---


### ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference <a name="ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.NewManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.putOperatingFactor">PutOperatingFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.putPrimaryParameter">PutPrimaryParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.resetEnforced">ResetEnforced</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.resetOperatingFactor">ResetOperatingFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.resetPrimaryParameter">ResetPrimaryParameter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOperatingFactor` <a name="PutOperatingFactor" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.putOperatingFactor"></a>

```go
func PutOperatingFactor(value ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.putOperatingFactor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor">ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor</a>

---

##### `PutPrimaryParameter` <a name="PutPrimaryParameter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.putPrimaryParameter"></a>

```go
func PutPrimaryParameter(value ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.putPrimaryParameter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameter">ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameter</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEnforced` <a name="ResetEnforced" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.resetEnforced"></a>

```go
func ResetEnforced()
```

##### `ResetOperatingFactor` <a name="ResetOperatingFactor" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.resetOperatingFactor"></a>

```go
func ResetOperatingFactor()
```

##### `ResetPrimaryParameter` <a name="ResetPrimaryParameter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.resetPrimaryParameter"></a>

```go
func ResetPrimaryParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.property.operatingFactor">OperatingFactor</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference">ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.property.primaryParameter">PrimaryParameter</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference">ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.property.enforcedInput">EnforcedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.property.operatingFactorInput">OperatingFactorInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor">ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.property.primaryParameterInput">PrimaryParameterInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameter">ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.property.enforced">Enforced</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressure">ManagedDatabaseOpensearchPropertiesShardIndexingPressure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatingFactor`<sup>Required</sup> <a name="OperatingFactor" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.property.operatingFactor"></a>

```go
func OperatingFactor() ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference">ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactorOutputReference</a>

---

##### `PrimaryParameter`<sup>Required</sup> <a name="PrimaryParameter" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.property.primaryParameter"></a>

```go
func PrimaryParameter() ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference">ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EnforcedInput`<sup>Optional</sup> <a name="EnforcedInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.property.enforcedInput"></a>

```go
func EnforcedInput() interface{}
```

- *Type:* interface{}

---

##### `OperatingFactorInput`<sup>Optional</sup> <a name="OperatingFactorInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.property.operatingFactorInput"></a>

```go
func OperatingFactorInput() ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor">ManagedDatabaseOpensearchPropertiesShardIndexingPressureOperatingFactor</a>

---

##### `PrimaryParameterInput`<sup>Optional</sup> <a name="PrimaryParameterInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.property.primaryParameterInput"></a>

```go
func PrimaryParameterInput() ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameter
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameter">ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameter</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Enforced`<sup>Required</sup> <a name="Enforced" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.property.enforced"></a>

```go
func Enforced() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressureOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabaseOpensearchPropertiesShardIndexingPressure
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressure">ManagedDatabaseOpensearchPropertiesShardIndexingPressure</a>

---


### ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference <a name="ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.NewManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.resetSoftLimit">ResetSoftLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSoftLimit` <a name="ResetSoftLimit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.resetSoftLimit"></a>

```go
func ResetSoftLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.property.softLimitInput">SoftLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.property.softLimit">SoftLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNode">ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SoftLimitInput`<sup>Optional</sup> <a name="SoftLimitInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.property.softLimitInput"></a>

```go
func SoftLimitInput() *f64
```

- *Type:* *f64

---

##### `SoftLimit`<sup>Required</sup> <a name="SoftLimit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.property.softLimit"></a>

```go
func SoftLimit() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNode
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNode">ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNode</a>

---


### ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference <a name="ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.NewManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.putNodeAttribute">PutNodeAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.putShard">PutShard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.resetNodeAttribute">ResetNodeAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.resetShard">ResetShard</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNodeAttribute` <a name="PutNodeAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.putNodeAttribute"></a>

```go
func PutNodeAttribute(value ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNode)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.putNodeAttribute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNode">ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNode</a>

---

##### `PutShard` <a name="PutShard" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.putShard"></a>

```go
func PutShard(value ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShard)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.putShard.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShard">ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShard</a>

---

##### `ResetNodeAttribute` <a name="ResetNodeAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.resetNodeAttribute"></a>

```go
func ResetNodeAttribute()
```

##### `ResetShard` <a name="ResetShard" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.resetShard"></a>

```go
func ResetShard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.property.nodeAttribute">NodeAttribute</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference">ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.property.shard">Shard</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference">ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.property.nodeAttributeInput">NodeAttributeInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNode">ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.property.shardInput">ShardInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShard">ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameter">ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NodeAttribute`<sup>Required</sup> <a name="NodeAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.property.nodeAttribute"></a>

```go
func NodeAttribute() ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference">ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNodeOutputReference</a>

---

##### `Shard`<sup>Required</sup> <a name="Shard" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.property.shard"></a>

```go
func Shard() ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference">ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference</a>

---

##### `NodeAttributeInput`<sup>Optional</sup> <a name="NodeAttributeInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.property.nodeAttributeInput"></a>

```go
func NodeAttributeInput() ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNode
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNode">ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterNode</a>

---

##### `ShardInput`<sup>Optional</sup> <a name="ShardInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.property.shardInput"></a>

```go
func ShardInput() ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShard
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShard">ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShard</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameter
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameter">ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameter</a>

---


### ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference <a name="ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/manageddatabaseopensearch"

manageddatabaseopensearch.NewManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.resetMinLimit">ResetMinLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMinLimit` <a name="ResetMinLimit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.resetMinLimit"></a>

```go
func ResetMinLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.property.minLimitInput">MinLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.property.minLimit">MinLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShard">ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShard</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MinLimitInput`<sup>Optional</sup> <a name="MinLimitInput" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.property.minLimitInput"></a>

```go
func MinLimitInput() *f64
```

- *Type:* *f64

---

##### `MinLimit`<sup>Required</sup> <a name="MinLimit" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.property.minLimit"></a>

```go
func MinLimit() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShardOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShard
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseOpensearch.ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShard">ManagedDatabaseOpensearchPropertiesShardIndexingPressurePrimaryParameterShard</a>

---



