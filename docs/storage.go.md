# `storage` Submodule <a name="`storage` Submodule" id="@cdktf/provider-upcloud.storage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Storage <a name="Storage" id="@cdktf/provider-upcloud.storage.Storage"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.1/docs/resources/storage upcloud_storage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.storage.Storage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/storage"

storage.NewStorage(scope Construct, id *string, config StorageConfig) Storage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig">StorageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageConfig">StorageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.putBackupRule">PutBackupRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.putClone">PutClone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.putImport">PutImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.resetBackupRule">ResetBackupRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.resetClone">ResetClone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.resetDeleteAutoresizeBackup">ResetDeleteAutoresizeBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.resetEncrypt">ResetEncrypt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.resetFilesystemAutoresize">ResetFilesystemAutoresize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.resetImport">ResetImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.resetTier">ResetTier</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.storage.Storage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.storage.Storage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.storage.Storage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.storage.Storage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.storage.Storage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.storage.Storage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.storage.Storage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.storage.Storage.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.storage.Storage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.storage.Storage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-upcloud.storage.Storage.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.storage.Storage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.storage.Storage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.Storage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.storage.Storage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.Storage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.storage.Storage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.Storage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.storage.Storage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.Storage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.storage.Storage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.Storage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.storage.Storage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.Storage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.storage.Storage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.Storage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.storage.Storage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.Storage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.storage.Storage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.Storage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-upcloud.storage.Storage.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-upcloud.storage.Storage.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.storage.Storage.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.storage.Storage.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.storage.Storage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.Storage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-upcloud.storage.Storage.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.storage.Storage.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-upcloud.storage.Storage.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.storage.Storage.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.storage.Storage.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-upcloud.storage.Storage.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.storage.Storage.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackupRule` <a name="PutBackupRule" id="@cdktf/provider-upcloud.storage.Storage.putBackupRule"></a>

```go
func PutBackupRule(value StorageBackupRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.storage.Storage.putBackupRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageBackupRule">StorageBackupRule</a>

---

##### `PutClone` <a name="PutClone" id="@cdktf/provider-upcloud.storage.Storage.putClone"></a>

```go
func PutClone(value StorageClone)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.storage.Storage.putClone.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageClone">StorageClone</a>

---

##### `PutImport` <a name="PutImport" id="@cdktf/provider-upcloud.storage.Storage.putImport"></a>

```go
func PutImport(value StorageImport)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.storage.Storage.putImport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageImport">StorageImport</a>

---

##### `ResetBackupRule` <a name="ResetBackupRule" id="@cdktf/provider-upcloud.storage.Storage.resetBackupRule"></a>

```go
func ResetBackupRule()
```

##### `ResetClone` <a name="ResetClone" id="@cdktf/provider-upcloud.storage.Storage.resetClone"></a>

```go
func ResetClone()
```

##### `ResetDeleteAutoresizeBackup` <a name="ResetDeleteAutoresizeBackup" id="@cdktf/provider-upcloud.storage.Storage.resetDeleteAutoresizeBackup"></a>

```go
func ResetDeleteAutoresizeBackup()
```

##### `ResetEncrypt` <a name="ResetEncrypt" id="@cdktf/provider-upcloud.storage.Storage.resetEncrypt"></a>

```go
func ResetEncrypt()
```

##### `ResetFilesystemAutoresize` <a name="ResetFilesystemAutoresize" id="@cdktf/provider-upcloud.storage.Storage.resetFilesystemAutoresize"></a>

```go
func ResetFilesystemAutoresize()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.storage.Storage.resetId"></a>

```go
func ResetId()
```

##### `ResetImport` <a name="ResetImport" id="@cdktf/provider-upcloud.storage.Storage.resetImport"></a>

```go
func ResetImport()
```

##### `ResetTier` <a name="ResetTier" id="@cdktf/provider-upcloud.storage.Storage.resetTier"></a>

```go
func ResetTier()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Storage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.storage.Storage.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/storage"

storage.Storage_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.storage.Storage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.storage.Storage.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/storage"

storage.Storage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.storage.Storage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.storage.Storage.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/storage"

storage.Storage_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.storage.Storage.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.storage.Storage.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/storage"

storage.Storage_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Storage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.storage.Storage.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.storage.Storage.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Storage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.storage.Storage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Storage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.1/docs/resources/storage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.storage.Storage.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Storage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.backupRule">BackupRule</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference">StorageBackupRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.clone">Clone</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference">StorageCloneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.import">Import</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference">StorageImportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.backupRuleInput">BackupRuleInput</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRule">StorageBackupRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.cloneInput">CloneInput</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageClone">StorageClone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.deleteAutoresizeBackupInput">DeleteAutoresizeBackupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.encryptInput">EncryptInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.filesystemAutoresizeInput">FilesystemAutoresizeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.importInput">ImportInput</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageImport">StorageImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.tierInput">TierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.deleteAutoresizeBackup">DeleteAutoresizeBackup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.encrypt">Encrypt</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.filesystemAutoresize">FilesystemAutoresize</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.storage.Storage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.storage.Storage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.storage.Storage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.storage.Storage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.storage.Storage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.storage.Storage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.storage.Storage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.storage.Storage.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.storage.Storage.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.storage.Storage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.storage.Storage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.storage.Storage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.storage.Storage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.storage.Storage.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupRule`<sup>Required</sup> <a name="BackupRule" id="@cdktf/provider-upcloud.storage.Storage.property.backupRule"></a>

```go
func BackupRule() StorageBackupRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference">StorageBackupRuleOutputReference</a>

---

##### `Clone`<sup>Required</sup> <a name="Clone" id="@cdktf/provider-upcloud.storage.Storage.property.clone"></a>

```go
func Clone() StorageCloneOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference">StorageCloneOutputReference</a>

---

##### `Import`<sup>Required</sup> <a name="Import" id="@cdktf/provider-upcloud.storage.Storage.property.import"></a>

```go
func Import() StorageImportOutputReference
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference">StorageImportOutputReference</a>

---

##### `BackupRuleInput`<sup>Optional</sup> <a name="BackupRuleInput" id="@cdktf/provider-upcloud.storage.Storage.property.backupRuleInput"></a>

```go
func BackupRuleInput() StorageBackupRule
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageBackupRule">StorageBackupRule</a>

---

##### `CloneInput`<sup>Optional</sup> <a name="CloneInput" id="@cdktf/provider-upcloud.storage.Storage.property.cloneInput"></a>

```go
func CloneInput() StorageClone
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageClone">StorageClone</a>

---

##### `DeleteAutoresizeBackupInput`<sup>Optional</sup> <a name="DeleteAutoresizeBackupInput" id="@cdktf/provider-upcloud.storage.Storage.property.deleteAutoresizeBackupInput"></a>

```go
func DeleteAutoresizeBackupInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptInput`<sup>Optional</sup> <a name="EncryptInput" id="@cdktf/provider-upcloud.storage.Storage.property.encryptInput"></a>

```go
func EncryptInput() interface{}
```

- *Type:* interface{}

---

##### `FilesystemAutoresizeInput`<sup>Optional</sup> <a name="FilesystemAutoresizeInput" id="@cdktf/provider-upcloud.storage.Storage.property.filesystemAutoresizeInput"></a>

```go
func FilesystemAutoresizeInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.storage.Storage.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImportInput`<sup>Optional</sup> <a name="ImportInput" id="@cdktf/provider-upcloud.storage.Storage.property.importInput"></a>

```go
func ImportInput() StorageImport
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageImport">StorageImport</a>

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-upcloud.storage.Storage.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-upcloud.storage.Storage.property.tierInput"></a>

```go
func TierInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-upcloud.storage.Storage.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-upcloud.storage.Storage.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `DeleteAutoresizeBackup`<sup>Required</sup> <a name="DeleteAutoresizeBackup" id="@cdktf/provider-upcloud.storage.Storage.property.deleteAutoresizeBackup"></a>

```go
func DeleteAutoresizeBackup() interface{}
```

- *Type:* interface{}

---

##### `Encrypt`<sup>Required</sup> <a name="Encrypt" id="@cdktf/provider-upcloud.storage.Storage.property.encrypt"></a>

```go
func Encrypt() interface{}
```

- *Type:* interface{}

---

##### `FilesystemAutoresize`<sup>Required</sup> <a name="FilesystemAutoresize" id="@cdktf/provider-upcloud.storage.Storage.property.filesystemAutoresize"></a>

```go
func FilesystemAutoresize() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.storage.Storage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-upcloud.storage.Storage.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-upcloud.storage.Storage.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-upcloud.storage.Storage.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-upcloud.storage.Storage.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.storage.Storage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageBackupRule <a name="StorageBackupRule" id="@cdktf/provider-upcloud.storage.StorageBackupRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.storage.StorageBackupRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/storage"

&storage.StorageBackupRule {
	Interval: *string,
	Retention: *f64,
	Time: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRule.property.interval">Interval</a></code> | <code>*string</code> | The weekday when the backup is created. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRule.property.retention">Retention</a></code> | <code>*f64</code> | The number of days before a backup is automatically deleted. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRule.property.time">Time</a></code> | <code>*string</code> | The time of day when the backup is created. |

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-upcloud.storage.StorageBackupRule.property.interval"></a>

```go
Interval *string
```

- *Type:* *string

The weekday when the backup is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.1/docs/resources/storage#interval Storage#interval}

---

##### `Retention`<sup>Required</sup> <a name="Retention" id="@cdktf/provider-upcloud.storage.StorageBackupRule.property.retention"></a>

```go
Retention *f64
```

- *Type:* *f64

The number of days before a backup is automatically deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.1/docs/resources/storage#retention Storage#retention}

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-upcloud.storage.StorageBackupRule.property.time"></a>

```go
Time *string
```

- *Type:* *string

The time of day when the backup is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.1/docs/resources/storage#time Storage#time}

---

### StorageClone <a name="StorageClone" id="@cdktf/provider-upcloud.storage.StorageClone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.storage.StorageClone.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/storage"

&storage.StorageClone {
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageClone.property.id">Id</a></code> | <code>*string</code> | The unique identifier of the storage/template to clone. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.storage.StorageClone.property.id"></a>

```go
Id *string
```

- *Type:* *string

The unique identifier of the storage/template to clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.1/docs/resources/storage#id Storage#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### StorageConfig <a name="StorageConfig" id="@cdktf/provider-upcloud.storage.StorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.storage.StorageConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/storage"

&storage.StorageConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Size: *f64,
	Title: *string,
	Zone: *string,
	BackupRule: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.storage.StorageBackupRule,
	Clone: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.storage.StorageClone,
	DeleteAutoresizeBackup: interface{},
	Encrypt: interface{},
	FilesystemAutoresize: interface{},
	Id: *string,
	Import: github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14.storage.StorageImport,
	Tier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.size">Size</a></code> | <code>*f64</code> | The size of the storage in gigabytes. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.title">Title</a></code> | <code>*string</code> | A short, informative description. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.zone">Zone</a></code> | <code>*string</code> | The zone in which the storage will be created, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.backupRule">BackupRule</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRule">StorageBackupRule</a></code> | backup_rule block. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.clone">Clone</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageClone">StorageClone</a></code> | clone block. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.deleteAutoresizeBackup">DeleteAutoresizeBackup</a></code> | <code>interface{}</code> | If set to true, the backup taken before the partition and filesystem resize attempt will be deleted immediately after success. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.encrypt">Encrypt</a></code> | <code>interface{}</code> | Sets if the storage is encrypted at rest. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.filesystemAutoresize">FilesystemAutoresize</a></code> | <code>interface{}</code> | If set to true, provider will attempt to resize partition and filesystem when the size of the storage changes. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.1/docs/resources/storage#id Storage#id}. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.import">Import</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageImport">StorageImport</a></code> | import block. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.tier">Tier</a></code> | <code>*string</code> | The storage tier to use. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.storage.StorageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.storage.StorageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.storage.StorageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.storage.StorageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.storage.StorageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.storage.StorageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.storage.StorageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-upcloud.storage.StorageConfig.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

The size of the storage in gigabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.1/docs/resources/storage#size Storage#size}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-upcloud.storage.StorageConfig.property.title"></a>

```go
Title *string
```

- *Type:* *string

A short, informative description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.1/docs/resources/storage#title Storage#title}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-upcloud.storage.StorageConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

The zone in which the storage will be created, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.1/docs/resources/storage#zone Storage#zone}

---

##### `BackupRule`<sup>Optional</sup> <a name="BackupRule" id="@cdktf/provider-upcloud.storage.StorageConfig.property.backupRule"></a>

```go
BackupRule StorageBackupRule
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageBackupRule">StorageBackupRule</a>

backup_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.1/docs/resources/storage#backup_rule Storage#backup_rule}

---

##### `Clone`<sup>Optional</sup> <a name="Clone" id="@cdktf/provider-upcloud.storage.StorageConfig.property.clone"></a>

```go
Clone StorageClone
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageClone">StorageClone</a>

clone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.1/docs/resources/storage#clone Storage#clone}

---

##### `DeleteAutoresizeBackup`<sup>Optional</sup> <a name="DeleteAutoresizeBackup" id="@cdktf/provider-upcloud.storage.StorageConfig.property.deleteAutoresizeBackup"></a>

```go
DeleteAutoresizeBackup interface{}
```

- *Type:* interface{}

If set to true, the backup taken before the partition and filesystem resize attempt will be deleted immediately after success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.1/docs/resources/storage#delete_autoresize_backup Storage#delete_autoresize_backup}

---

##### `Encrypt`<sup>Optional</sup> <a name="Encrypt" id="@cdktf/provider-upcloud.storage.StorageConfig.property.encrypt"></a>

```go
Encrypt interface{}
```

- *Type:* interface{}

Sets if the storage is encrypted at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.1/docs/resources/storage#encrypt Storage#encrypt}

---

##### `FilesystemAutoresize`<sup>Optional</sup> <a name="FilesystemAutoresize" id="@cdktf/provider-upcloud.storage.StorageConfig.property.filesystemAutoresize"></a>

```go
FilesystemAutoresize interface{}
```

- *Type:* interface{}

If set to true, provider will attempt to resize partition and filesystem when the size of the storage changes.

Please note that before the resize attempt is made, backup of the storage will be taken. If the resize attempt fails, the backup will be used
to restore the storage and then deleted. If the resize attempt succeeds, backup will be kept (unless delete_autoresize_backup option is set to true).
Taking and keeping backups incure costs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.1/docs/resources/storage#filesystem_autoresize Storage#filesystem_autoresize}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.storage.StorageConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.1/docs/resources/storage#id Storage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Import`<sup>Optional</sup> <a name="Import" id="@cdktf/provider-upcloud.storage.StorageConfig.property.import"></a>

```go
Import StorageImport
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageImport">StorageImport</a>

import block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.1/docs/resources/storage#import Storage#import}

---

##### `Tier`<sup>Optional</sup> <a name="Tier" id="@cdktf/provider-upcloud.storage.StorageConfig.property.tier"></a>

```go
Tier *string
```

- *Type:* *string

The storage tier to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.1/docs/resources/storage#tier Storage#tier}

---

### StorageImport <a name="StorageImport" id="@cdktf/provider-upcloud.storage.StorageImport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.storage.StorageImport.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/storage"

&storage.StorageImport {
	Source: *string,
	SourceLocation: *string,
	SourceHash: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImport.property.source">Source</a></code> | <code>*string</code> | The mode of the import task. One of `http_import` or `direct_upload`. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImport.property.sourceLocation">SourceLocation</a></code> | <code>*string</code> | The location of the file to import. For `http_import` an accessible URL for `direct_upload` a local file. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImport.property.sourceHash">SourceHash</a></code> | <code>*string</code> | For `direct_upload`; an optional hash of the file to upload. |

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-upcloud.storage.StorageImport.property.source"></a>

```go
Source *string
```

- *Type:* *string

The mode of the import task. One of `http_import` or `direct_upload`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.1/docs/resources/storage#source Storage#source}

---

##### `SourceLocation`<sup>Required</sup> <a name="SourceLocation" id="@cdktf/provider-upcloud.storage.StorageImport.property.sourceLocation"></a>

```go
SourceLocation *string
```

- *Type:* *string

The location of the file to import. For `http_import` an accessible URL for `direct_upload` a local file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.1/docs/resources/storage#source_location Storage#source_location}

---

##### `SourceHash`<sup>Optional</sup> <a name="SourceHash" id="@cdktf/provider-upcloud.storage.StorageImport.property.sourceHash"></a>

```go
SourceHash *string
```

- *Type:* *string

For `direct_upload`; an optional hash of the file to upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.1.1/docs/resources/storage#source_hash Storage#source_hash}

---

## Classes <a name="Classes" id="Classes"></a>

### StorageBackupRuleOutputReference <a name="StorageBackupRuleOutputReference" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/storage"

storage.NewStorageBackupRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageBackupRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.intervalInput">IntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.retentionInput">RetentionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.timeInput">TimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.interval">Interval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.retention">Retention</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.time">Time</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRule">StorageBackupRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.intervalInput"></a>

```go
func IntervalInput() *string
```

- *Type:* *string

---

##### `RetentionInput`<sup>Optional</sup> <a name="RetentionInput" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.retentionInput"></a>

```go
func RetentionInput() *f64
```

- *Type:* *f64

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.timeInput"></a>

```go
func TimeInput() *string
```

- *Type:* *string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.interval"></a>

```go
func Interval() *string
```

- *Type:* *string

---

##### `Retention`<sup>Required</sup> <a name="Retention" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.retention"></a>

```go
func Retention() *f64
```

- *Type:* *f64

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.time"></a>

```go
func Time() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageBackupRule
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageBackupRule">StorageBackupRule</a>

---


### StorageCloneOutputReference <a name="StorageCloneOutputReference" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/storage"

storage.NewStorageCloneOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageCloneOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageClone">StorageClone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageClone
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageClone">StorageClone</a>

---


### StorageImportOutputReference <a name="StorageImportOutputReference" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/storage"

storage.NewStorageImportOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageImportOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.resetSourceHash">ResetSourceHash</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceHash` <a name="ResetSourceHash" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.resetSourceHash"></a>

```go
func ResetSourceHash()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sha256Sum">Sha256Sum</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.writtenBytes">WrittenBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sourceHashInput">SourceHashInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sourceLocationInput">SourceLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sourceHash">SourceHash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sourceLocation">SourceLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageImport">StorageImport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Sha256Sum`<sup>Required</sup> <a name="Sha256Sum" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sha256Sum"></a>

```go
func Sha256Sum() *string
```

- *Type:* *string

---

##### `WrittenBytes`<sup>Required</sup> <a name="WrittenBytes" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.writtenBytes"></a>

```go
func WrittenBytes() *f64
```

- *Type:* *f64

---

##### `SourceHashInput`<sup>Optional</sup> <a name="SourceHashInput" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sourceHashInput"></a>

```go
func SourceHashInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `SourceLocationInput`<sup>Optional</sup> <a name="SourceLocationInput" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sourceLocationInput"></a>

```go
func SourceLocationInput() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `SourceHash`<sup>Required</sup> <a name="SourceHash" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sourceHash"></a>

```go
func SourceHash() *string
```

- *Type:* *string

---

##### `SourceLocation`<sup>Required</sup> <a name="SourceLocation" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sourceLocation"></a>

```go
func SourceLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageImport
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageImport">StorageImport</a>

---



