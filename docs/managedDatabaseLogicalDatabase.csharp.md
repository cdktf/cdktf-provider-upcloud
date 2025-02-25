# `managedDatabaseLogicalDatabase` Submodule <a name="`managedDatabaseLogicalDatabase` Submodule" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedDatabaseLogicalDatabase <a name="ManagedDatabaseLogicalDatabase" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.0/docs/resources/managed_database_logical_database upcloud_managed_database_logical_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseLogicalDatabase(Construct Scope, string Id, ManagedDatabaseLogicalDatabaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig">ManagedDatabaseLogicalDatabaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig">ManagedDatabaseLogicalDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.resetCharacterSet">ResetCharacterSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.resetCollation">ResetCollation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCharacterSet` <a name="ResetCharacterSet" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.resetCharacterSet"></a>

```csharp
private void ResetCharacterSet()
```

##### `ResetCollation` <a name="ResetCollation" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.resetCollation"></a>

```csharp
private void ResetCollation()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedDatabaseLogicalDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

ManagedDatabaseLogicalDatabase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

ManagedDatabaseLogicalDatabase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

ManagedDatabaseLogicalDatabase.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

ManagedDatabaseLogicalDatabase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ManagedDatabaseLogicalDatabase resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagedDatabaseLogicalDatabase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagedDatabaseLogicalDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.0/docs/resources/managed_database_logical_database#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ManagedDatabaseLogicalDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.characterSetInput">CharacterSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.collationInput">CollationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.characterSet">CharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.collation">Collation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.service">Service</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CharacterSetInput`<sup>Optional</sup> <a name="CharacterSetInput" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.characterSetInput"></a>

```csharp
public string CharacterSetInput { get; }
```

- *Type:* string

---

##### `CollationInput`<sup>Optional</sup> <a name="CollationInput" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.collationInput"></a>

```csharp
public string CollationInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.characterSet"></a>

```csharp
public string CharacterSet { get; }
```

- *Type:* string

---

##### `Collation`<sup>Required</sup> <a name="Collation" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.collation"></a>

```csharp
public string Collation { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedDatabaseLogicalDatabaseConfig <a name="ManagedDatabaseLogicalDatabaseConfig" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseLogicalDatabaseConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Service,
    string CharacterSet = null,
    string Collation = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.name">Name</a></code> | <code>string</code> | Name of the logical database. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.service">Service</a></code> | <code>string</code> | Service's UUID for which this user belongs to. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.characterSet">CharacterSet</a></code> | <code>string</code> | Default character set for the database (LC_CTYPE). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.collation">Collation</a></code> | <code>string</code> | Default collation for the database (LC_COLLATE). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.0/docs/resources/managed_database_logical_database#id ManagedDatabaseLogicalDatabase#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the logical database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.0/docs/resources/managed_database_logical_database#name ManagedDatabaseLogicalDatabase#name}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Service's UUID for which this user belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.0/docs/resources/managed_database_logical_database#service ManagedDatabaseLogicalDatabase#service}

---

##### `CharacterSet`<sup>Optional</sup> <a name="CharacterSet" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.characterSet"></a>

```csharp
public string CharacterSet { get; set; }
```

- *Type:* string

Default character set for the database (LC_CTYPE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.0/docs/resources/managed_database_logical_database#character_set ManagedDatabaseLogicalDatabase#character_set}

---

##### `Collation`<sup>Optional</sup> <a name="Collation" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.collation"></a>

```csharp
public string Collation { get; set; }
```

- *Type:* string

Default collation for the database (LC_COLLATE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.0/docs/resources/managed_database_logical_database#collation ManagedDatabaseLogicalDatabase#collation}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabaseLogicalDatabase.ManagedDatabaseLogicalDatabaseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.0/docs/resources/managed_database_logical_database#id ManagedDatabaseLogicalDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



