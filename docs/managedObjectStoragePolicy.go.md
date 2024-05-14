# `managedObjectStoragePolicy` Submodule <a name="`managedObjectStoragePolicy` Submodule" id="@cdktf/provider-upcloud.managedObjectStoragePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedObjectStoragePolicy <a name="ManagedObjectStoragePolicy" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/managed_object_storage_policy upcloud_managed_object_storage_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/managedobjectstoragepolicy"

managedobjectstoragepolicy.NewManagedObjectStoragePolicy(scope Construct, id *string, config ManagedObjectStoragePolicyConfig) ManagedObjectStoragePolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicyConfig">ManagedObjectStoragePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicyConfig">ManagedObjectStoragePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedObjectStoragePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/managedobjectstoragepolicy"

managedobjectstoragepolicy.ManagedObjectStoragePolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/managedobjectstoragepolicy"

managedobjectstoragepolicy.ManagedObjectStoragePolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/managedobjectstoragepolicy"

managedobjectstoragepolicy.ManagedObjectStoragePolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/managedobjectstoragepolicy"

managedobjectstoragepolicy.ManagedObjectStoragePolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ManagedObjectStoragePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ManagedObjectStoragePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ManagedObjectStoragePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/managed_object_storage_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ManagedObjectStoragePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.attachmentCount">AttachmentCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.defaultVersionId">DefaultVersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.systemAttribute">SystemAttribute</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.documentInput">DocumentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.serviceUuidInput">ServiceUuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.document">Document</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.serviceUuid">ServiceUuid</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AttachmentCount`<sup>Required</sup> <a name="AttachmentCount" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.attachmentCount"></a>

```go
func AttachmentCount() *f64
```

- *Type:* *f64

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DefaultVersionId`<sup>Required</sup> <a name="DefaultVersionId" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.defaultVersionId"></a>

```go
func DefaultVersionId() *string
```

- *Type:* *string

---

##### `SystemAttribute`<sup>Required</sup> <a name="SystemAttribute" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.systemAttribute"></a>

```go
func SystemAttribute() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DocumentInput`<sup>Optional</sup> <a name="DocumentInput" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.documentInput"></a>

```go
func DocumentInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ServiceUuidInput`<sup>Optional</sup> <a name="ServiceUuidInput" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.serviceUuidInput"></a>

```go
func ServiceUuidInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Document`<sup>Required</sup> <a name="Document" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.document"></a>

```go
func Document() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ServiceUuid`<sup>Required</sup> <a name="ServiceUuid" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.serviceUuid"></a>

```go
func ServiceUuid() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedObjectStoragePolicyConfig <a name="ManagedObjectStoragePolicyConfig" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/managedobjectstoragepolicy"

&managedobjectstoragepolicy.ManagedObjectStoragePolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Document: *string,
	Name: *string,
	ServiceUuid: *string,
	Description: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicyConfig.property.document">Document</a></code> | <code>*string</code> | Policy document, URL-encoded compliant with RFC 3986. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicyConfig.property.name">Name</a></code> | <code>*string</code> | Policy name. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicyConfig.property.serviceUuid">ServiceUuid</a></code> | <code>*string</code> | Managed Object Storage service UUID. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicyConfig.property.description">Description</a></code> | <code>*string</code> | Description of the policy. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/managed_object_storage_policy#id ManagedObjectStoragePolicy#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Document`<sup>Required</sup> <a name="Document" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicyConfig.property.document"></a>

```go
Document *string
```

- *Type:* *string

Policy document, URL-encoded compliant with RFC 3986.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/managed_object_storage_policy#document ManagedObjectStoragePolicy#document}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Policy name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/managed_object_storage_policy#name ManagedObjectStoragePolicy#name}

---

##### `ServiceUuid`<sup>Required</sup> <a name="ServiceUuid" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicyConfig.property.serviceUuid"></a>

```go
ServiceUuid *string
```

- *Type:* *string

Managed Object Storage service UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/managed_object_storage_policy#service_uuid ManagedObjectStoragePolicy#service_uuid}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/managed_object_storage_policy#description ManagedObjectStoragePolicy#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.managedObjectStoragePolicy.ManagedObjectStoragePolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/managed_object_storage_policy#id ManagedObjectStoragePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



