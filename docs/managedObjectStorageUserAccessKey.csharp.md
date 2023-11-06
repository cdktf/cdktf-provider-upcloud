# `upcloud_managed_object_storage_user_access_key`

Refer to the Terraform Registory for docs: [`upcloud_managed_object_storage_user_access_key`](https://registry.terraform.io/providers/upcloudltd/upcloud/3.0.3/docs/resources/managed_object_storage_user_access_key).

# `managedObjectStorageUserAccessKey` Submodule <a name="`managedObjectStorageUserAccessKey` Submodule" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedObjectStorageUserAccessKey <a name="ManagedObjectStorageUserAccessKey" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.0.3/docs/resources/managed_object_storage_user_access_key upcloud_managed_object_storage_user_access_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedObjectStorageUserAccessKey(Construct Scope, string Id, ManagedObjectStorageUserAccessKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig">ManagedObjectStorageUserAccessKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig">ManagedObjectStorageUserAccessKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedObjectStorageUserAccessKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

ManagedObjectStorageUserAccessKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

ManagedObjectStorageUserAccessKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

ManagedObjectStorageUserAccessKey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

ManagedObjectStorageUserAccessKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ManagedObjectStorageUserAccessKey resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagedObjectStorageUserAccessKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagedObjectStorageUserAccessKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.0.3/docs/resources/managed_object_storage_user_access_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ManagedObjectStorageUserAccessKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.lastUsedAt">LastUsedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.secretAccessKey">SecretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.serviceUuidInput">ServiceUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.serviceUuid">ServiceUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `LastUsedAt`<sup>Required</sup> <a name="LastUsedAt" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.lastUsedAt"></a>

```csharp
public string LastUsedAt { get; }
```

- *Type:* string

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.secretAccessKey"></a>

```csharp
public string SecretAccessKey { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ServiceUuidInput`<sup>Optional</sup> <a name="ServiceUuidInput" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.serviceUuidInput"></a>

```csharp
public string ServiceUuidInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServiceUuid`<sup>Required</sup> <a name="ServiceUuid" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.serviceUuid"></a>

```csharp
public string ServiceUuid { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedObjectStorageUserAccessKeyConfig <a name="ManagedObjectStorageUserAccessKeyConfig" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedObjectStorageUserAccessKeyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Enabled,
    string Name,
    string ServiceUuid,
    string Username,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.enabled">Enabled</a></code> | <code>object</code> | Enabled or not. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.name">Name</a></code> | <code>string</code> | Access key name. Must be unique within the user. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.serviceUuid">ServiceUuid</a></code> | <code>string</code> | Managed Object Storage service UUID. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.username">Username</a></code> | <code>string</code> | Username. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.0.3/docs/resources/managed_object_storage_user_access_key#id ManagedObjectStorageUserAccessKey#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.0.3/docs/resources/managed_object_storage_user_access_key#enabled ManagedObjectStorageUserAccessKey#enabled}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Access key name. Must be unique within the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.0.3/docs/resources/managed_object_storage_user_access_key#name ManagedObjectStorageUserAccessKey#name}

---

##### `ServiceUuid`<sup>Required</sup> <a name="ServiceUuid" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.serviceUuid"></a>

```csharp
public string ServiceUuid { get; set; }
```

- *Type:* string

Managed Object Storage service UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.0.3/docs/resources/managed_object_storage_user_access_key#service_uuid ManagedObjectStorageUserAccessKey#service_uuid}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.0.3/docs/resources/managed_object_storage_user_access_key#username ManagedObjectStorageUserAccessKey#username}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.managedObjectStorageUserAccessKey.ManagedObjectStorageUserAccessKeyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.0.3/docs/resources/managed_object_storage_user_access_key#id ManagedObjectStorageUserAccessKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



