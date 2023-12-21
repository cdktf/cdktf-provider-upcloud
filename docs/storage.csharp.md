# `storage` Submodule <a name="`storage` Submodule" id="@cdktf/provider-upcloud.storage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Storage <a name="Storage" id="@cdktf/provider-upcloud.storage.Storage"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage upcloud_storage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.storage.Storage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new Storage(Construct Scope, string Id, StorageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig">StorageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-upcloud.storage.Storage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageConfig">StorageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
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
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.resetFilesystemAutoresize">ResetFilesystemAutoresize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.resetImport">ResetImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.resetTier">ResetTier</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.storage.Storage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.storage.Storage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-upcloud.storage.Storage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.storage.Storage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.storage.Storage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-upcloud.storage.Storage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.storage.Storage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.storage.Storage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.storage.Storage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-upcloud.storage.Storage.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-upcloud.storage.Storage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.storage.Storage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.Storage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.storage.Storage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.Storage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.storage.Storage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.Storage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.storage.Storage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.Storage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.storage.Storage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.Storage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.storage.Storage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.Storage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.storage.Storage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.Storage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.storage.Storage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.Storage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.storage.Storage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.Storage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-upcloud.storage.Storage.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-upcloud.storage.Storage.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.storage.Storage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.storage.Storage.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.storage.Storage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.Storage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-upcloud.storage.Storage.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.storage.Storage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-upcloud.storage.Storage.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-upcloud.storage.Storage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-upcloud.storage.Storage.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-upcloud.storage.Storage.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.storage.Storage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackupRule` <a name="PutBackupRule" id="@cdktf/provider-upcloud.storage.Storage.putBackupRule"></a>

```csharp
private void PutBackupRule(StorageBackupRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.storage.Storage.putBackupRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageBackupRule">StorageBackupRule</a>

---

##### `PutClone` <a name="PutClone" id="@cdktf/provider-upcloud.storage.Storage.putClone"></a>

```csharp
private void PutClone(StorageClone Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.storage.Storage.putClone.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageClone">StorageClone</a>

---

##### `PutImport` <a name="PutImport" id="@cdktf/provider-upcloud.storage.Storage.putImport"></a>

```csharp
private void PutImport(StorageImport Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.storage.Storage.putImport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageImport">StorageImport</a>

---

##### `ResetBackupRule` <a name="ResetBackupRule" id="@cdktf/provider-upcloud.storage.Storage.resetBackupRule"></a>

```csharp
private void ResetBackupRule()
```

##### `ResetClone` <a name="ResetClone" id="@cdktf/provider-upcloud.storage.Storage.resetClone"></a>

```csharp
private void ResetClone()
```

##### `ResetDeleteAutoresizeBackup` <a name="ResetDeleteAutoresizeBackup" id="@cdktf/provider-upcloud.storage.Storage.resetDeleteAutoresizeBackup"></a>

```csharp
private void ResetDeleteAutoresizeBackup()
```

##### `ResetFilesystemAutoresize` <a name="ResetFilesystemAutoresize" id="@cdktf/provider-upcloud.storage.Storage.resetFilesystemAutoresize"></a>

```csharp
private void ResetFilesystemAutoresize()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.storage.Storage.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImport` <a name="ResetImport" id="@cdktf/provider-upcloud.storage.Storage.resetImport"></a>

```csharp
private void ResetImport()
```

##### `ResetTier` <a name="ResetTier" id="@cdktf/provider-upcloud.storage.Storage.resetTier"></a>

```csharp
private void ResetTier()
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

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

Storage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.storage.Storage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.storage.Storage.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

Storage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.storage.Storage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.storage.Storage.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

Storage.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.storage.Storage.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.storage.Storage.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

Storage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Storage resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.storage.Storage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-upcloud.storage.Storage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Storage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-upcloud.storage.Storage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Storage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.storage.Storage.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Storage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.backupRule">BackupRule</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference">StorageBackupRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.clone">Clone</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference">StorageCloneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.import">Import</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference">StorageImportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.backupRuleInput">BackupRuleInput</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRule">StorageBackupRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.cloneInput">CloneInput</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageClone">StorageClone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.deleteAutoresizeBackupInput">DeleteAutoresizeBackupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.filesystemAutoresizeInput">FilesystemAutoresizeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.importInput">ImportInput</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageImport">StorageImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.tierInput">TierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.deleteAutoresizeBackup">DeleteAutoresizeBackup</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.filesystemAutoresize">FilesystemAutoresize</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.tier">Tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.storage.Storage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.storage.Storage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.storage.Storage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.storage.Storage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.storage.Storage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.storage.Storage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.storage.Storage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.storage.Storage.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.storage.Storage.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.storage.Storage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.storage.Storage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.storage.Storage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.storage.Storage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.storage.Storage.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BackupRule`<sup>Required</sup> <a name="BackupRule" id="@cdktf/provider-upcloud.storage.Storage.property.backupRule"></a>

```csharp
public StorageBackupRuleOutputReference BackupRule { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference">StorageBackupRuleOutputReference</a>

---

##### `Clone`<sup>Required</sup> <a name="Clone" id="@cdktf/provider-upcloud.storage.Storage.property.clone"></a>

```csharp
public StorageCloneOutputReference Clone { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference">StorageCloneOutputReference</a>

---

##### `Import`<sup>Required</sup> <a name="Import" id="@cdktf/provider-upcloud.storage.Storage.property.import"></a>

```csharp
public StorageImportOutputReference Import { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference">StorageImportOutputReference</a>

---

##### `BackupRuleInput`<sup>Optional</sup> <a name="BackupRuleInput" id="@cdktf/provider-upcloud.storage.Storage.property.backupRuleInput"></a>

```csharp
public StorageBackupRule BackupRuleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageBackupRule">StorageBackupRule</a>

---

##### `CloneInput`<sup>Optional</sup> <a name="CloneInput" id="@cdktf/provider-upcloud.storage.Storage.property.cloneInput"></a>

```csharp
public StorageClone CloneInput { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageClone">StorageClone</a>

---

##### `DeleteAutoresizeBackupInput`<sup>Optional</sup> <a name="DeleteAutoresizeBackupInput" id="@cdktf/provider-upcloud.storage.Storage.property.deleteAutoresizeBackupInput"></a>

```csharp
public object DeleteAutoresizeBackupInput { get; }
```

- *Type:* object

---

##### `FilesystemAutoresizeInput`<sup>Optional</sup> <a name="FilesystemAutoresizeInput" id="@cdktf/provider-upcloud.storage.Storage.property.filesystemAutoresizeInput"></a>

```csharp
public object FilesystemAutoresizeInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.storage.Storage.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImportInput`<sup>Optional</sup> <a name="ImportInput" id="@cdktf/provider-upcloud.storage.Storage.property.importInput"></a>

```csharp
public StorageImport ImportInput { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageImport">StorageImport</a>

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-upcloud.storage.Storage.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-upcloud.storage.Storage.property.tierInput"></a>

```csharp
public string TierInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-upcloud.storage.Storage.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-upcloud.storage.Storage.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `DeleteAutoresizeBackup`<sup>Required</sup> <a name="DeleteAutoresizeBackup" id="@cdktf/provider-upcloud.storage.Storage.property.deleteAutoresizeBackup"></a>

```csharp
public object DeleteAutoresizeBackup { get; }
```

- *Type:* object

---

##### `FilesystemAutoresize`<sup>Required</sup> <a name="FilesystemAutoresize" id="@cdktf/provider-upcloud.storage.Storage.property.filesystemAutoresize"></a>

```csharp
public object FilesystemAutoresize { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.storage.Storage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-upcloud.storage.Storage.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-upcloud.storage.Storage.property.tier"></a>

```csharp
public string Tier { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-upcloud.storage.Storage.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-upcloud.storage.Storage.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.Storage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.storage.Storage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageBackupRule <a name="StorageBackupRule" id="@cdktf/provider-upcloud.storage.StorageBackupRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.storage.StorageBackupRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new StorageBackupRule {
    string Interval,
    double Retention,
    string Time
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRule.property.interval">Interval</a></code> | <code>string</code> | The weekday when the backup is created. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRule.property.retention">Retention</a></code> | <code>double</code> | The number of days before a backup is automatically deleted. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRule.property.time">Time</a></code> | <code>string</code> | The time of day when the backup is created. |

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-upcloud.storage.StorageBackupRule.property.interval"></a>

```csharp
public string Interval { get; set; }
```

- *Type:* string

The weekday when the backup is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#interval Storage#interval}

---

##### `Retention`<sup>Required</sup> <a name="Retention" id="@cdktf/provider-upcloud.storage.StorageBackupRule.property.retention"></a>

```csharp
public double Retention { get; set; }
```

- *Type:* double

The number of days before a backup is automatically deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#retention Storage#retention}

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-upcloud.storage.StorageBackupRule.property.time"></a>

```csharp
public string Time { get; set; }
```

- *Type:* string

The time of day when the backup is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#time Storage#time}

---

### StorageClone <a name="StorageClone" id="@cdktf/provider-upcloud.storage.StorageClone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.storage.StorageClone.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new StorageClone {
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageClone.property.id">Id</a></code> | <code>string</code> | The unique identifier of the storage/template to clone. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.storage.StorageClone.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The unique identifier of the storage/template to clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#id Storage#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### StorageConfig <a name="StorageConfig" id="@cdktf/provider-upcloud.storage.StorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.storage.StorageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new StorageConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double Size,
    string Title,
    string Zone,
    StorageBackupRule BackupRule = null,
    StorageClone Clone = null,
    object DeleteAutoresizeBackup = null,
    object FilesystemAutoresize = null,
    string Id = null,
    StorageImport Import = null,
    string Tier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.size">Size</a></code> | <code>double</code> | The size of the storage in gigabytes. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.title">Title</a></code> | <code>string</code> | A short, informative description. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.zone">Zone</a></code> | <code>string</code> | The zone in which the storage will be created, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.backupRule">BackupRule</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRule">StorageBackupRule</a></code> | backup_rule block. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.clone">Clone</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageClone">StorageClone</a></code> | clone block. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.deleteAutoresizeBackup">DeleteAutoresizeBackup</a></code> | <code>object</code> | If set to true, the backup taken before the partition and filesystem resize attempt will be deleted immediately after success. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.filesystemAutoresize">FilesystemAutoresize</a></code> | <code>object</code> | If set to true, provider will attempt to resize partition and filesystem when the size of the storage changes. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#id Storage#id}. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.import">Import</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageImport">StorageImport</a></code> | import block. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageConfig.property.tier">Tier</a></code> | <code>string</code> | The storage tier to use. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.storage.StorageConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.storage.StorageConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.storage.StorageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.storage.StorageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.storage.StorageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.storage.StorageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.storage.StorageConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-upcloud.storage.StorageConfig.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

The size of the storage in gigabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#size Storage#size}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-upcloud.storage.StorageConfig.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

A short, informative description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#title Storage#title}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-upcloud.storage.StorageConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

The zone in which the storage will be created, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#zone Storage#zone}

---

##### `BackupRule`<sup>Optional</sup> <a name="BackupRule" id="@cdktf/provider-upcloud.storage.StorageConfig.property.backupRule"></a>

```csharp
public StorageBackupRule BackupRule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageBackupRule">StorageBackupRule</a>

backup_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#backup_rule Storage#backup_rule}

---

##### `Clone`<sup>Optional</sup> <a name="Clone" id="@cdktf/provider-upcloud.storage.StorageConfig.property.clone"></a>

```csharp
public StorageClone Clone { get; set; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageClone">StorageClone</a>

clone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#clone Storage#clone}

---

##### `DeleteAutoresizeBackup`<sup>Optional</sup> <a name="DeleteAutoresizeBackup" id="@cdktf/provider-upcloud.storage.StorageConfig.property.deleteAutoresizeBackup"></a>

```csharp
public object DeleteAutoresizeBackup { get; set; }
```

- *Type:* object

If set to true, the backup taken before the partition and filesystem resize attempt will be deleted immediately after success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#delete_autoresize_backup Storage#delete_autoresize_backup}

---

##### `FilesystemAutoresize`<sup>Optional</sup> <a name="FilesystemAutoresize" id="@cdktf/provider-upcloud.storage.StorageConfig.property.filesystemAutoresize"></a>

```csharp
public object FilesystemAutoresize { get; set; }
```

- *Type:* object

If set to true, provider will attempt to resize partition and filesystem when the size of the storage changes.

Please note that before the resize attempt is made, backup of the storage will be taken. If the resize attempt fails, the backup will be used
to restore the storage and then deleted. If the resize attempt succeeds, backup will be kept (unless delete_autoresize_backup option is set to true).
Taking and keeping backups incure costs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#filesystem_autoresize Storage#filesystem_autoresize}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.storage.StorageConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#id Storage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Import`<sup>Optional</sup> <a name="Import" id="@cdktf/provider-upcloud.storage.StorageConfig.property.import"></a>

```csharp
public StorageImport Import { get; set; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageImport">StorageImport</a>

import block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#import Storage#import}

---

##### `Tier`<sup>Optional</sup> <a name="Tier" id="@cdktf/provider-upcloud.storage.StorageConfig.property.tier"></a>

```csharp
public string Tier { get; set; }
```

- *Type:* string

The storage tier to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#tier Storage#tier}

---

### StorageImport <a name="StorageImport" id="@cdktf/provider-upcloud.storage.StorageImport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.storage.StorageImport.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new StorageImport {
    string Source,
    string SourceLocation,
    string SourceHash = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImport.property.source">Source</a></code> | <code>string</code> | The mode of the import task. One of `http_import` or `direct_upload`. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImport.property.sourceLocation">SourceLocation</a></code> | <code>string</code> | The location of the file to import. For `http_import` an accessible URL for `direct_upload` a local file. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImport.property.sourceHash">SourceHash</a></code> | <code>string</code> | For `direct_upload`; an optional hash of the file to upload. |

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-upcloud.storage.StorageImport.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

The mode of the import task. One of `http_import` or `direct_upload`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#source Storage#source}

---

##### `SourceLocation`<sup>Required</sup> <a name="SourceLocation" id="@cdktf/provider-upcloud.storage.StorageImport.property.sourceLocation"></a>

```csharp
public string SourceLocation { get; set; }
```

- *Type:* string

The location of the file to import. For `http_import` an accessible URL for `direct_upload` a local file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#source_location Storage#source_location}

---

##### `SourceHash`<sup>Optional</sup> <a name="SourceHash" id="@cdktf/provider-upcloud.storage.StorageImport.property.sourceHash"></a>

```csharp
public string SourceHash { get; set; }
```

- *Type:* string

For `direct_upload`; an optional hash of the file to upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.0/docs/resources/storage#source_hash Storage#source_hash}

---

## Classes <a name="Classes" id="Classes"></a>

### StorageBackupRuleOutputReference <a name="StorageBackupRuleOutputReference" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new StorageBackupRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.intervalInput">IntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.retentionInput">RetentionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.timeInput">TimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.interval">Interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.retention">Retention</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageBackupRule">StorageBackupRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.intervalInput"></a>

```csharp
public string IntervalInput { get; }
```

- *Type:* string

---

##### `RetentionInput`<sup>Optional</sup> <a name="RetentionInput" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.retentionInput"></a>

```csharp
public double RetentionInput { get; }
```

- *Type:* double

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.timeInput"></a>

```csharp
public string TimeInput { get; }
```

- *Type:* string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.interval"></a>

```csharp
public string Interval { get; }
```

- *Type:* string

---

##### `Retention`<sup>Required</sup> <a name="Retention" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.retention"></a>

```csharp
public double Retention { get; }
```

- *Type:* double

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.storage.StorageBackupRuleOutputReference.property.internalValue"></a>

```csharp
public StorageBackupRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageBackupRule">StorageBackupRule</a>

---


### StorageCloneOutputReference <a name="StorageCloneOutputReference" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new StorageCloneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageCloneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageClone">StorageClone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.storage.StorageCloneOutputReference.property.internalValue"></a>

```csharp
public StorageClone InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageClone">StorageClone</a>

---


### StorageImportOutputReference <a name="StorageImportOutputReference" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new StorageImportOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceHash` <a name="ResetSourceHash" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.resetSourceHash"></a>

```csharp
private void ResetSourceHash()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sha256Sum">Sha256Sum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.writtenBytes">WrittenBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sourceHashInput">SourceHashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sourceLocationInput">SourceLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sourceHash">SourceHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sourceLocation">SourceLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.storage.StorageImport">StorageImport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Sha256Sum`<sup>Required</sup> <a name="Sha256Sum" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sha256Sum"></a>

```csharp
public string Sha256Sum { get; }
```

- *Type:* string

---

##### `WrittenBytes`<sup>Required</sup> <a name="WrittenBytes" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.writtenBytes"></a>

```csharp
public double WrittenBytes { get; }
```

- *Type:* double

---

##### `SourceHashInput`<sup>Optional</sup> <a name="SourceHashInput" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sourceHashInput"></a>

```csharp
public string SourceHashInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `SourceLocationInput`<sup>Optional</sup> <a name="SourceLocationInput" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sourceLocationInput"></a>

```csharp
public string SourceLocationInput { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `SourceHash`<sup>Required</sup> <a name="SourceHash" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sourceHash"></a>

```csharp
public string SourceHash { get; }
```

- *Type:* string

---

##### `SourceLocation`<sup>Required</sup> <a name="SourceLocation" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.sourceLocation"></a>

```csharp
public string SourceLocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.storage.StorageImportOutputReference.property.internalValue"></a>

```csharp
public StorageImport InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.storage.StorageImport">StorageImport</a>

---



