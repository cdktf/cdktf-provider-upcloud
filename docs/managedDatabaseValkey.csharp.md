# `managedDatabaseValkey` Submodule <a name="`managedDatabaseValkey` Submodule" id="@cdktf/provider-upcloud.managedDatabaseValkey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedDatabaseValkey <a name="ManagedDatabaseValkey" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey upcloud_managed_database_valkey}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseValkey(Construct Scope, string Id, ManagedDatabaseValkeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig">ManagedDatabaseValkeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.Initializer.parameter.config"></a>

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

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNetwork` <a name="PutNetwork" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putNetwork"></a>

```csharp
private void PutNetwork(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putNetwork.parameter.value"></a>

- *Type:* object

---

##### `PutProperties` <a name="PutProperties" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putProperties"></a>

```csharp
private void PutProperties(ManagedDatabaseValkeyProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties">ManagedDatabaseValkeyProperties</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMaintenanceWindowDow` <a name="ResetMaintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetMaintenanceWindowDow"></a>

```csharp
private void ResetMaintenanceWindowDow()
```

##### `ResetMaintenanceWindowTime` <a name="ResetMaintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetMaintenanceWindowTime"></a>

```csharp
private void ResetMaintenanceWindowTime()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetPowered` <a name="ResetPowered" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetPowered"></a>

```csharp
private void ResetPowered()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.resetProperties"></a>

```csharp
private void ResetProperties()
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

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

ManagedDatabaseValkey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

ManagedDatabaseValkey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

ManagedDatabaseValkey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

ManagedDatabaseValkey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ManagedDatabaseValkey resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagedDatabaseValkey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagedDatabaseValkey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ManagedDatabaseValkey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.components">Components</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList">ManagedDatabaseValkeyComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.network">Network</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList">ManagedDatabaseValkeyNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.nodeStates">NodeStates</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList">ManagedDatabaseValkeyNodeStatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.primaryDatabase">PrimaryDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference">ManagedDatabaseValkeyPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.serviceHost">ServiceHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.servicePassword">ServicePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.servicePort">ServicePort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.serviceUri">ServiceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.serviceUsername">ServiceUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.maintenanceWindowDowInput">MaintenanceWindowDowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.maintenanceWindowTimeInput">MaintenanceWindowTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.networkInput">NetworkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.planInput">PlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.poweredInput">PoweredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties">ManagedDatabaseValkeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.maintenanceWindowDow">MaintenanceWindowDow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.maintenanceWindowTime">MaintenanceWindowTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.plan">Plan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.powered">Powered</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Components`<sup>Required</sup> <a name="Components" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.components"></a>

```csharp
public ManagedDatabaseValkeyComponentsList Components { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList">ManagedDatabaseValkeyComponentsList</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.network"></a>

```csharp
public ManagedDatabaseValkeyNetworkList Network { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList">ManagedDatabaseValkeyNetworkList</a>

---

##### `NodeStates`<sup>Required</sup> <a name="NodeStates" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.nodeStates"></a>

```csharp
public ManagedDatabaseValkeyNodeStatesList NodeStates { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList">ManagedDatabaseValkeyNodeStatesList</a>

---

##### `PrimaryDatabase`<sup>Required</sup> <a name="PrimaryDatabase" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.primaryDatabase"></a>

```csharp
public string PrimaryDatabase { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.properties"></a>

```csharp
public ManagedDatabaseValkeyPropertiesOutputReference Properties { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference">ManagedDatabaseValkeyPropertiesOutputReference</a>

---

##### `ServiceHost`<sup>Required</sup> <a name="ServiceHost" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.serviceHost"></a>

```csharp
public string ServiceHost { get; }
```

- *Type:* string

---

##### `ServicePassword`<sup>Required</sup> <a name="ServicePassword" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.servicePassword"></a>

```csharp
public string ServicePassword { get; }
```

- *Type:* string

---

##### `ServicePort`<sup>Required</sup> <a name="ServicePort" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.servicePort"></a>

```csharp
public string ServicePort { get; }
```

- *Type:* string

---

##### `ServiceUri`<sup>Required</sup> <a name="ServiceUri" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.serviceUri"></a>

```csharp
public string ServiceUri { get; }
```

- *Type:* string

---

##### `ServiceUsername`<sup>Required</sup> <a name="ServiceUsername" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.serviceUsername"></a>

```csharp
public string ServiceUsername { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaintenanceWindowDowInput`<sup>Optional</sup> <a name="MaintenanceWindowDowInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.maintenanceWindowDowInput"></a>

```csharp
public string MaintenanceWindowDowInput { get; }
```

- *Type:* string

---

##### `MaintenanceWindowTimeInput`<sup>Optional</sup> <a name="MaintenanceWindowTimeInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.maintenanceWindowTimeInput"></a>

```csharp
public string MaintenanceWindowTimeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.networkInput"></a>

```csharp
public object NetworkInput { get; }
```

- *Type:* object

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.planInput"></a>

```csharp
public string PlanInput { get; }
```

- *Type:* string

---

##### `PoweredInput`<sup>Optional</sup> <a name="PoweredInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.poweredInput"></a>

```csharp
public object PoweredInput { get; }
```

- *Type:* object

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.propertiesInput"></a>

```csharp
public ManagedDatabaseValkeyProperties PropertiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties">ManagedDatabaseValkeyProperties</a>

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaintenanceWindowDow`<sup>Required</sup> <a name="MaintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.maintenanceWindowDow"></a>

```csharp
public string MaintenanceWindowDow { get; }
```

- *Type:* string

---

##### `MaintenanceWindowTime`<sup>Required</sup> <a name="MaintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.maintenanceWindowTime"></a>

```csharp
public string MaintenanceWindowTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.plan"></a>

```csharp
public string Plan { get; }
```

- *Type:* string

---

##### `Powered`<sup>Required</sup> <a name="Powered" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.powered"></a>

```csharp
public object Powered { get; }
```

- *Type:* object

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedDatabaseValkeyComponents <a name="ManagedDatabaseValkeyComponents" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponents.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseValkeyComponents {

};
```


### ManagedDatabaseValkeyConfig <a name="ManagedDatabaseValkeyConfig" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseValkeyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Plan,
    string Title,
    string Zone,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string MaintenanceWindowDow = null,
    string MaintenanceWindowTime = null,
    object Network = null,
    object Powered = null,
    ManagedDatabaseValkeyProperties Properties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.name">Name</a></code> | <code>string</code> | Name of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.plan">Plan</a></code> | <code>string</code> | Service plan to use. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.title">Title</a></code> | <code>string</code> | Title of a managed database instance. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.zone">Zone</a></code> | <code>string</code> | Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#id ManagedDatabaseValkey#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User defined key-value pairs to classify the managed database. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.maintenanceWindowDow">MaintenanceWindowDow</a></code> | <code>string</code> | Maintenance window day of week. Lower case weekday name (monday, tuesday, ...). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.maintenanceWindowTime">MaintenanceWindowTime</a></code> | <code>string</code> | Maintenance window UTC time in hh:mm:ss format. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.network">Network</a></code> | <code>object</code> | network block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.powered">Powered</a></code> | <code>object</code> | The administrative power state of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties">ManagedDatabaseValkeyProperties</a></code> | properties block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the service.

The name is used as a prefix for the logical hostname. Must be unique within an account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#name ManagedDatabaseValkey#name}

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.plan"></a>

```csharp
public string Plan { get; set; }
```

- *Type:* string

Service plan to use.

This determines how much resources the instance will have. You can list available plans with `upctl database plans <type>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#plan ManagedDatabaseValkey#plan}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Title of a managed database instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#title ManagedDatabaseValkey#title}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#zone ManagedDatabaseValkey#zone}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#id ManagedDatabaseValkey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User defined key-value pairs to classify the managed database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#labels ManagedDatabaseValkey#labels}

---

##### `MaintenanceWindowDow`<sup>Optional</sup> <a name="MaintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.maintenanceWindowDow"></a>

```csharp
public string MaintenanceWindowDow { get; set; }
```

- *Type:* string

Maintenance window day of week. Lower case weekday name (monday, tuesday, ...).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#maintenance_window_dow ManagedDatabaseValkey#maintenance_window_dow}

---

##### `MaintenanceWindowTime`<sup>Optional</sup> <a name="MaintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.maintenanceWindowTime"></a>

```csharp
public string MaintenanceWindowTime { get; set; }
```

- *Type:* string

Maintenance window UTC time in hh:mm:ss format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#maintenance_window_time ManagedDatabaseValkey#maintenance_window_time}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.network"></a>

```csharp
public object Network { get; set; }
```

- *Type:* object

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#network ManagedDatabaseValkey#network}

---

##### `Powered`<sup>Optional</sup> <a name="Powered" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.powered"></a>

```csharp
public object Powered { get; set; }
```

- *Type:* object

The administrative power state of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#powered ManagedDatabaseValkey#powered}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyConfig.property.properties"></a>

```csharp
public ManagedDatabaseValkeyProperties Properties { get; set; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties">ManagedDatabaseValkeyProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#properties ManagedDatabaseValkey#properties}

---

### ManagedDatabaseValkeyNetwork <a name="ManagedDatabaseValkeyNetwork" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseValkeyNetwork {
    string Family,
    string Name,
    string Type,
    string Uuid
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.property.family">Family</a></code> | <code>string</code> | Network family. Currently only `IPv4` is supported. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.property.name">Name</a></code> | <code>string</code> | The name of the network. Must be unique within the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.property.type">Type</a></code> | <code>string</code> | The type of the network. Must be private. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.property.uuid">Uuid</a></code> | <code>string</code> | Private network UUID. Must reside in the same zone as the database. |

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.property.family"></a>

```csharp
public string Family { get; set; }
```

- *Type:* string

Network family. Currently only `IPv4` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#family ManagedDatabaseValkey#family}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the network. Must be unique within the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#name ManagedDatabaseValkey#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the network. Must be private.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#type ManagedDatabaseValkey#type}

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetwork.property.uuid"></a>

```csharp
public string Uuid { get; set; }
```

- *Type:* string

Private network UUID. Must reside in the same zone as the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#uuid ManagedDatabaseValkey#uuid}

---

### ManagedDatabaseValkeyNodeStates <a name="ManagedDatabaseValkeyNodeStates" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStates.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseValkeyNodeStates {

};
```


### ManagedDatabaseValkeyProperties <a name="ManagedDatabaseValkeyProperties" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseValkeyProperties {
    object AutomaticUtilityNetworkIpFilter = null,
    double BackupHour = null,
    double BackupMinute = null,
    string[] IpFilter = null,
    ManagedDatabaseValkeyPropertiesMigration Migration = null,
    object PublicAccess = null,
    object ServiceLog = null,
    string ValkeyAclChannelsDefault = null,
    double ValkeyIoThreads = null,
    double ValkeyLfuDecayTime = null,
    double ValkeyLfuLogFactor = null,
    string ValkeyMaxmemoryPolicy = null,
    string ValkeyNotifyKeyspaceEvents = null,
    double ValkeyNumberOfDatabases = null,
    string ValkeyPersistence = null,
    double ValkeyPubsubClientOutputBufferLimit = null,
    object ValkeySsl = null,
    double ValkeyTimeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.automaticUtilityNetworkIpFilter">AutomaticUtilityNetworkIpFilter</a></code> | <code>object</code> | Automatic utility network IP Filter. Automatically allow connections from servers in the utility network within the same zone. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.backupHour">BackupHour</a></code> | <code>double</code> | The hour of day (in UTC) when backup for the service is started. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.backupMinute">BackupMinute</a></code> | <code>double</code> | The minute of an hour when backup for the service is started. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.ipFilter">IpFilter</a></code> | <code>string[]</code> | IP filter. Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.migration">Migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration">ManagedDatabaseValkeyPropertiesMigration</a></code> | migration block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.publicAccess">PublicAccess</a></code> | <code>object</code> | Public Access. Allow access to the service from the public Internet. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.serviceLog">ServiceLog</a></code> | <code>object</code> | Service logging. Store logs for the service so that they are available in the HTTP API and console. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyAclChannelsDefault">ValkeyAclChannelsDefault</a></code> | <code>string</code> | Default ACL for pub/sub channels used when a Valkey user is created. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyIoThreads">ValkeyIoThreads</a></code> | <code>double</code> | Valkey IO thread count. Set Valkey IO thread count. Changing this will cause a restart of the Valkey service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyLfuDecayTime">ValkeyLfuDecayTime</a></code> | <code>double</code> | LFU maxmemory-policy counter decay time in minutes. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyLfuLogFactor">ValkeyLfuLogFactor</a></code> | <code>double</code> | Counter logarithm factor for volatile-lfu and allkeys-lfu maxmemory-policies. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyMaxmemoryPolicy">ValkeyMaxmemoryPolicy</a></code> | <code>string</code> | Valkey maxmemory-policy. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyNotifyKeyspaceEvents">ValkeyNotifyKeyspaceEvents</a></code> | <code>string</code> | Set notify-keyspace-events option. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyNumberOfDatabases">ValkeyNumberOfDatabases</a></code> | <code>double</code> | Number of Valkey databases. Set number of Valkey databases. Changing this will cause a restart of the Valkey service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyPersistence">ValkeyPersistence</a></code> | <code>string</code> | Valkey persistence. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyPubsubClientOutputBufferLimit">ValkeyPubsubClientOutputBufferLimit</a></code> | <code>double</code> | Pub/sub client output buffer hard limit in MB. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeySsl">ValkeySsl</a></code> | <code>object</code> | Require SSL to access Valkey. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyTimeout">ValkeyTimeout</a></code> | <code>double</code> | Valkey idle connection timeout in seconds. |

---

##### `AutomaticUtilityNetworkIpFilter`<sup>Optional</sup> <a name="AutomaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.automaticUtilityNetworkIpFilter"></a>

```csharp
public object AutomaticUtilityNetworkIpFilter { get; set; }
```

- *Type:* object

Automatic utility network IP Filter. Automatically allow connections from servers in the utility network within the same zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#automatic_utility_network_ip_filter ManagedDatabaseValkey#automatic_utility_network_ip_filter}

---

##### `BackupHour`<sup>Optional</sup> <a name="BackupHour" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.backupHour"></a>

```csharp
public double BackupHour { get; set; }
```

- *Type:* double

The hour of day (in UTC) when backup for the service is started.

New backup is only started if previous backup has already completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#backup_hour ManagedDatabaseValkey#backup_hour}

---

##### `BackupMinute`<sup>Optional</sup> <a name="BackupMinute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.backupMinute"></a>

```csharp
public double BackupMinute { get; set; }
```

- *Type:* double

The minute of an hour when backup for the service is started.

New backup is only started if previous backup has already completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#backup_minute ManagedDatabaseValkey#backup_minute}

---

##### `IpFilter`<sup>Optional</sup> <a name="IpFilter" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.ipFilter"></a>

```csharp
public string[] IpFilter { get; set; }
```

- *Type:* string[]

IP filter. Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#ip_filter ManagedDatabaseValkey#ip_filter}

---

##### `Migration`<sup>Optional</sup> <a name="Migration" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.migration"></a>

```csharp
public ManagedDatabaseValkeyPropertiesMigration Migration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration">ManagedDatabaseValkeyPropertiesMigration</a>

migration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#migration ManagedDatabaseValkey#migration}

---

##### `PublicAccess`<sup>Optional</sup> <a name="PublicAccess" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.publicAccess"></a>

```csharp
public object PublicAccess { get; set; }
```

- *Type:* object

Public Access. Allow access to the service from the public Internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#public_access ManagedDatabaseValkey#public_access}

---

##### `ServiceLog`<sup>Optional</sup> <a name="ServiceLog" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.serviceLog"></a>

```csharp
public object ServiceLog { get; set; }
```

- *Type:* object

Service logging. Store logs for the service so that they are available in the HTTP API and console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#service_log ManagedDatabaseValkey#service_log}

---

##### `ValkeyAclChannelsDefault`<sup>Optional</sup> <a name="ValkeyAclChannelsDefault" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyAclChannelsDefault"></a>

```csharp
public string ValkeyAclChannelsDefault { get; set; }
```

- *Type:* string

Default ACL for pub/sub channels used when a Valkey user is created.

Determines default pub/sub channels' ACL for new users if ACL is not supplied. When this option is not defined, all_channels is assumed to keep backward compatibility. This option doesn't affect Valkey configuration acl-pubsub-default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#valkey_acl_channels_default ManagedDatabaseValkey#valkey_acl_channels_default}

---

##### `ValkeyIoThreads`<sup>Optional</sup> <a name="ValkeyIoThreads" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyIoThreads"></a>

```csharp
public double ValkeyIoThreads { get; set; }
```

- *Type:* double

Valkey IO thread count. Set Valkey IO thread count. Changing this will cause a restart of the Valkey service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#valkey_io_threads ManagedDatabaseValkey#valkey_io_threads}

---

##### `ValkeyLfuDecayTime`<sup>Optional</sup> <a name="ValkeyLfuDecayTime" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyLfuDecayTime"></a>

```csharp
public double ValkeyLfuDecayTime { get; set; }
```

- *Type:* double

LFU maxmemory-policy counter decay time in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#valkey_lfu_decay_time ManagedDatabaseValkey#valkey_lfu_decay_time}

---

##### `ValkeyLfuLogFactor`<sup>Optional</sup> <a name="ValkeyLfuLogFactor" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyLfuLogFactor"></a>

```csharp
public double ValkeyLfuLogFactor { get; set; }
```

- *Type:* double

Counter logarithm factor for volatile-lfu and allkeys-lfu maxmemory-policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#valkey_lfu_log_factor ManagedDatabaseValkey#valkey_lfu_log_factor}

---

##### `ValkeyMaxmemoryPolicy`<sup>Optional</sup> <a name="ValkeyMaxmemoryPolicy" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyMaxmemoryPolicy"></a>

```csharp
public string ValkeyMaxmemoryPolicy { get; set; }
```

- *Type:* string

Valkey maxmemory-policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#valkey_maxmemory_policy ManagedDatabaseValkey#valkey_maxmemory_policy}

---

##### `ValkeyNotifyKeyspaceEvents`<sup>Optional</sup> <a name="ValkeyNotifyKeyspaceEvents" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyNotifyKeyspaceEvents"></a>

```csharp
public string ValkeyNotifyKeyspaceEvents { get; set; }
```

- *Type:* string

Set notify-keyspace-events option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#valkey_notify_keyspace_events ManagedDatabaseValkey#valkey_notify_keyspace_events}

---

##### `ValkeyNumberOfDatabases`<sup>Optional</sup> <a name="ValkeyNumberOfDatabases" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyNumberOfDatabases"></a>

```csharp
public double ValkeyNumberOfDatabases { get; set; }
```

- *Type:* double

Number of Valkey databases. Set number of Valkey databases. Changing this will cause a restart of the Valkey service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#valkey_number_of_databases ManagedDatabaseValkey#valkey_number_of_databases}

---

##### `ValkeyPersistence`<sup>Optional</sup> <a name="ValkeyPersistence" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyPersistence"></a>

```csharp
public string ValkeyPersistence { get; set; }
```

- *Type:* string

Valkey persistence.

When persistence is 'rdb', Valkey does RDB dumps each 10 minutes if any key is changed. Also RDB dumps are done according to backup schedule for backup purposes. When persistence is 'off', no RDB dumps and backups are done, so data can be lost at any moment if service is restarted for any reason, or if service is powered off. Also service can't be forked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#valkey_persistence ManagedDatabaseValkey#valkey_persistence}

---

##### `ValkeyPubsubClientOutputBufferLimit`<sup>Optional</sup> <a name="ValkeyPubsubClientOutputBufferLimit" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyPubsubClientOutputBufferLimit"></a>

```csharp
public double ValkeyPubsubClientOutputBufferLimit { get; set; }
```

- *Type:* double

Pub/sub client output buffer hard limit in MB.

Set output buffer limit for pub / sub clients in MB. The value is the hard limit, the soft limit is 1/4 of the hard limit. When setting the limit, be mindful of the available memory in the selected service plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#valkey_pubsub_client_output_buffer_limit ManagedDatabaseValkey#valkey_pubsub_client_output_buffer_limit}

---

##### `ValkeySsl`<sup>Optional</sup> <a name="ValkeySsl" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeySsl"></a>

```csharp
public object ValkeySsl { get; set; }
```

- *Type:* object

Require SSL to access Valkey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#valkey_ssl ManagedDatabaseValkey#valkey_ssl}

---

##### `ValkeyTimeout`<sup>Optional</sup> <a name="ValkeyTimeout" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties.property.valkeyTimeout"></a>

```csharp
public double ValkeyTimeout { get; set; }
```

- *Type:* double

Valkey idle connection timeout in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#valkey_timeout ManagedDatabaseValkey#valkey_timeout}

---

### ManagedDatabaseValkeyPropertiesMigration <a name="ManagedDatabaseValkeyPropertiesMigration" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseValkeyPropertiesMigration {
    string Dbname = null,
    string Host = null,
    string IgnoreDbs = null,
    string IgnoreRoles = null,
    string Method = null,
    string Password = null,
    double Port = null,
    object Ssl = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.dbname">Dbname</a></code> | <code>string</code> | Database name for bootstrapping the initial connection. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.host">Host</a></code> | <code>string</code> | Hostname or IP address of the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.ignoreDbs">IgnoreDbs</a></code> | <code>string</code> | Comma-separated list of databases, which should be ignored during migration (supported by MySQL and PostgreSQL only at the moment). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.ignoreRoles">IgnoreRoles</a></code> | <code>string</code> | Comma-separated list of database roles, which should be ignored during migration (supported by PostgreSQL only at the moment). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.method">Method</a></code> | <code>string</code> | The migration method to be used (currently supported only by Redis, Dragonfly, MySQL and PostgreSQL service types). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.password">Password</a></code> | <code>string</code> | Password for authentication with the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.port">Port</a></code> | <code>double</code> | Port number of the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.ssl">Ssl</a></code> | <code>object</code> | The server where to migrate data from is secured with SSL. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.username">Username</a></code> | <code>string</code> | User name for authentication with the server where to migrate data from. |

---

##### `Dbname`<sup>Optional</sup> <a name="Dbname" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.dbname"></a>

```csharp
public string Dbname { get; set; }
```

- *Type:* string

Database name for bootstrapping the initial connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#dbname ManagedDatabaseValkey#dbname}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Hostname or IP address of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#host ManagedDatabaseValkey#host}

---

##### `IgnoreDbs`<sup>Optional</sup> <a name="IgnoreDbs" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.ignoreDbs"></a>

```csharp
public string IgnoreDbs { get; set; }
```

- *Type:* string

Comma-separated list of databases, which should be ignored during migration (supported by MySQL and PostgreSQL only at the moment).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#ignore_dbs ManagedDatabaseValkey#ignore_dbs}

---

##### `IgnoreRoles`<sup>Optional</sup> <a name="IgnoreRoles" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.ignoreRoles"></a>

```csharp
public string IgnoreRoles { get; set; }
```

- *Type:* string

Comma-separated list of database roles, which should be ignored during migration (supported by PostgreSQL only at the moment).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#ignore_roles ManagedDatabaseValkey#ignore_roles}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

The migration method to be used (currently supported only by Redis, Dragonfly, MySQL and PostgreSQL service types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#method ManagedDatabaseValkey#method}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#password ManagedDatabaseValkey#password}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Port number of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#port ManagedDatabaseValkey#port}

---

##### `Ssl`<sup>Optional</sup> <a name="Ssl" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.ssl"></a>

```csharp
public object Ssl { get; set; }
```

- *Type:* object

The server where to migrate data from is secured with SSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#ssl ManagedDatabaseValkey#ssl}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

User name for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.15.0/docs/resources/managed_database_valkey#username ManagedDatabaseValkey#username}

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedDatabaseValkeyComponentsList <a name="ManagedDatabaseValkeyComponentsList" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseValkeyComponentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.get"></a>

```csharp
private ManagedDatabaseValkeyComponentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ManagedDatabaseValkeyComponentsOutputReference <a name="ManagedDatabaseValkeyComponentsOutputReference" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseValkeyComponentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.component">Component</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.route">Route</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.usage">Usage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponents">ManagedDatabaseValkeyComponents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Component`<sup>Required</sup> <a name="Component" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.component"></a>

```csharp
public string Component { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Route`<sup>Required</sup> <a name="Route" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.route"></a>

```csharp
public string Route { get; }
```

- *Type:* string

---

##### `Usage`<sup>Required</sup> <a name="Usage" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.usage"></a>

```csharp
public string Usage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponentsOutputReference.property.internalValue"></a>

```csharp
public ManagedDatabaseValkeyComponents InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyComponents">ManagedDatabaseValkeyComponents</a>

---


### ManagedDatabaseValkeyNetworkList <a name="ManagedDatabaseValkeyNetworkList" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseValkeyNetworkList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.get"></a>

```csharp
private ManagedDatabaseValkeyNetworkOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagedDatabaseValkeyNetworkOutputReference <a name="ManagedDatabaseValkeyNetworkOutputReference" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseValkeyNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.familyInput">FamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.uuidInput">UuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.family">Family</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FamilyInput`<sup>Optional</sup> <a name="FamilyInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.familyInput"></a>

```csharp
public string FamilyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UuidInput`<sup>Optional</sup> <a name="UuidInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.uuidInput"></a>

```csharp
public string UuidInput { get; }
```

- *Type:* string

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.family"></a>

```csharp
public string Family { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNetworkOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagedDatabaseValkeyNodeStatesList <a name="ManagedDatabaseValkeyNodeStatesList" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseValkeyNodeStatesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.get"></a>

```csharp
private ManagedDatabaseValkeyNodeStatesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ManagedDatabaseValkeyNodeStatesOutputReference <a name="ManagedDatabaseValkeyNodeStatesOutputReference" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseValkeyNodeStatesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStates">ManagedDatabaseValkeyNodeStates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStatesOutputReference.property.internalValue"></a>

```csharp
public ManagedDatabaseValkeyNodeStates InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyNodeStates">ManagedDatabaseValkeyNodeStates</a>

---


### ManagedDatabaseValkeyPropertiesMigrationOutputReference <a name="ManagedDatabaseValkeyPropertiesMigrationOutputReference" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseValkeyPropertiesMigrationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDbname` <a name="ResetDbname" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetDbname"></a>

```csharp
private void ResetDbname()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetIgnoreDbs` <a name="ResetIgnoreDbs" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetIgnoreDbs"></a>

```csharp
private void ResetIgnoreDbs()
```

##### `ResetIgnoreRoles` <a name="ResetIgnoreRoles" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetIgnoreRoles"></a>

```csharp
private void ResetIgnoreRoles()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetMethod"></a>

```csharp
private void ResetMethod()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetSsl` <a name="ResetSsl" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetSsl"></a>

```csharp
private void ResetSsl()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.dbnameInput">DbnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ignoreDbsInput">IgnoreDbsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ignoreRolesInput">IgnoreRolesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.sslInput">SslInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.dbname">Dbname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ignoreDbs">IgnoreDbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ignoreRoles">IgnoreRoles</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ssl">Ssl</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration">ManagedDatabaseValkeyPropertiesMigration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DbnameInput`<sup>Optional</sup> <a name="DbnameInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.dbnameInput"></a>

```csharp
public string DbnameInput { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `IgnoreDbsInput`<sup>Optional</sup> <a name="IgnoreDbsInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ignoreDbsInput"></a>

```csharp
public string IgnoreDbsInput { get; }
```

- *Type:* string

---

##### `IgnoreRolesInput`<sup>Optional</sup> <a name="IgnoreRolesInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ignoreRolesInput"></a>

```csharp
public string IgnoreRolesInput { get; }
```

- *Type:* string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `SslInput`<sup>Optional</sup> <a name="SslInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.sslInput"></a>

```csharp
public object SslInput { get; }
```

- *Type:* object

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Dbname`<sup>Required</sup> <a name="Dbname" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.dbname"></a>

```csharp
public string Dbname { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `IgnoreDbs`<sup>Required</sup> <a name="IgnoreDbs" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ignoreDbs"></a>

```csharp
public string IgnoreDbs { get; }
```

- *Type:* string

---

##### `IgnoreRoles`<sup>Required</sup> <a name="IgnoreRoles" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ignoreRoles"></a>

```csharp
public string IgnoreRoles { get; }
```

- *Type:* string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Ssl`<sup>Required</sup> <a name="Ssl" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.ssl"></a>

```csharp
public object Ssl { get; }
```

- *Type:* object

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference.property.internalValue"></a>

```csharp
public ManagedDatabaseValkeyPropertiesMigration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration">ManagedDatabaseValkeyPropertiesMigration</a>

---


### ManagedDatabaseValkeyPropertiesOutputReference <a name="ManagedDatabaseValkeyPropertiesOutputReference" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseValkeyPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetIpFilter">ResetIpFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetMigration">ResetMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetPublicAccess">ResetPublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetServiceLog">ResetServiceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyAclChannelsDefault">ResetValkeyAclChannelsDefault</a></code> | *No description.* |
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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMigration` <a name="PutMigration" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.putMigration"></a>

```csharp
private void PutMigration(ManagedDatabaseValkeyPropertiesMigration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.putMigration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration">ManagedDatabaseValkeyPropertiesMigration</a>

---

##### `ResetAutomaticUtilityNetworkIpFilter` <a name="ResetAutomaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter"></a>

```csharp
private void ResetAutomaticUtilityNetworkIpFilter()
```

##### `ResetBackupHour` <a name="ResetBackupHour" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetBackupHour"></a>

```csharp
private void ResetBackupHour()
```

##### `ResetBackupMinute` <a name="ResetBackupMinute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetBackupMinute"></a>

```csharp
private void ResetBackupMinute()
```

##### `ResetIpFilter` <a name="ResetIpFilter" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetIpFilter"></a>

```csharp
private void ResetIpFilter()
```

##### `ResetMigration` <a name="ResetMigration" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetMigration"></a>

```csharp
private void ResetMigration()
```

##### `ResetPublicAccess` <a name="ResetPublicAccess" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetPublicAccess"></a>

```csharp
private void ResetPublicAccess()
```

##### `ResetServiceLog` <a name="ResetServiceLog" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetServiceLog"></a>

```csharp
private void ResetServiceLog()
```

##### `ResetValkeyAclChannelsDefault` <a name="ResetValkeyAclChannelsDefault" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyAclChannelsDefault"></a>

```csharp
private void ResetValkeyAclChannelsDefault()
```

##### `ResetValkeyIoThreads` <a name="ResetValkeyIoThreads" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyIoThreads"></a>

```csharp
private void ResetValkeyIoThreads()
```

##### `ResetValkeyLfuDecayTime` <a name="ResetValkeyLfuDecayTime" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyLfuDecayTime"></a>

```csharp
private void ResetValkeyLfuDecayTime()
```

##### `ResetValkeyLfuLogFactor` <a name="ResetValkeyLfuLogFactor" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyLfuLogFactor"></a>

```csharp
private void ResetValkeyLfuLogFactor()
```

##### `ResetValkeyMaxmemoryPolicy` <a name="ResetValkeyMaxmemoryPolicy" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyMaxmemoryPolicy"></a>

```csharp
private void ResetValkeyMaxmemoryPolicy()
```

##### `ResetValkeyNotifyKeyspaceEvents` <a name="ResetValkeyNotifyKeyspaceEvents" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyNotifyKeyspaceEvents"></a>

```csharp
private void ResetValkeyNotifyKeyspaceEvents()
```

##### `ResetValkeyNumberOfDatabases` <a name="ResetValkeyNumberOfDatabases" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyNumberOfDatabases"></a>

```csharp
private void ResetValkeyNumberOfDatabases()
```

##### `ResetValkeyPersistence` <a name="ResetValkeyPersistence" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyPersistence"></a>

```csharp
private void ResetValkeyPersistence()
```

##### `ResetValkeyPubsubClientOutputBufferLimit` <a name="ResetValkeyPubsubClientOutputBufferLimit" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyPubsubClientOutputBufferLimit"></a>

```csharp
private void ResetValkeyPubsubClientOutputBufferLimit()
```

##### `ResetValkeySsl` <a name="ResetValkeySsl" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeySsl"></a>

```csharp
private void ResetValkeySsl()
```

##### `ResetValkeyTimeout` <a name="ResetValkeyTimeout" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.resetValkeyTimeout"></a>

```csharp
private void ResetValkeyTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.migration">Migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference">ManagedDatabaseValkeyPropertiesMigrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput">AutomaticUtilityNetworkIpFilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.backupHourInput">BackupHourInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.backupMinuteInput">BackupMinuteInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.ipFilterInput">IpFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.migrationInput">MigrationInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration">ManagedDatabaseValkeyPropertiesMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.publicAccessInput">PublicAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.serviceLogInput">ServiceLogInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyAclChannelsDefaultInput">ValkeyAclChannelsDefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyIoThreadsInput">ValkeyIoThreadsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyLfuDecayTimeInput">ValkeyLfuDecayTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyLfuLogFactorInput">ValkeyLfuLogFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyMaxmemoryPolicyInput">ValkeyMaxmemoryPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyNotifyKeyspaceEventsInput">ValkeyNotifyKeyspaceEventsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyNumberOfDatabasesInput">ValkeyNumberOfDatabasesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyPersistenceInput">ValkeyPersistenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyPubsubClientOutputBufferLimitInput">ValkeyPubsubClientOutputBufferLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeySslInput">ValkeySslInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyTimeoutInput">ValkeyTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.automaticUtilityNetworkIpFilter">AutomaticUtilityNetworkIpFilter</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.backupHour">BackupHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.backupMinute">BackupMinute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.ipFilter">IpFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.publicAccess">PublicAccess</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.serviceLog">ServiceLog</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyAclChannelsDefault">ValkeyAclChannelsDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyIoThreads">ValkeyIoThreads</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyLfuDecayTime">ValkeyLfuDecayTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyLfuLogFactor">ValkeyLfuLogFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyMaxmemoryPolicy">ValkeyMaxmemoryPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyNotifyKeyspaceEvents">ValkeyNotifyKeyspaceEvents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyNumberOfDatabases">ValkeyNumberOfDatabases</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyPersistence">ValkeyPersistence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyPubsubClientOutputBufferLimit">ValkeyPubsubClientOutputBufferLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeySsl">ValkeySsl</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyTimeout">ValkeyTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties">ManagedDatabaseValkeyProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Migration`<sup>Required</sup> <a name="Migration" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.migration"></a>

```csharp
public ManagedDatabaseValkeyPropertiesMigrationOutputReference Migration { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigrationOutputReference">ManagedDatabaseValkeyPropertiesMigrationOutputReference</a>

---

##### `AutomaticUtilityNetworkIpFilterInput`<sup>Optional</sup> <a name="AutomaticUtilityNetworkIpFilterInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput"></a>

```csharp
public object AutomaticUtilityNetworkIpFilterInput { get; }
```

- *Type:* object

---

##### `BackupHourInput`<sup>Optional</sup> <a name="BackupHourInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.backupHourInput"></a>

```csharp
public double BackupHourInput { get; }
```

- *Type:* double

---

##### `BackupMinuteInput`<sup>Optional</sup> <a name="BackupMinuteInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.backupMinuteInput"></a>

```csharp
public double BackupMinuteInput { get; }
```

- *Type:* double

---

##### `IpFilterInput`<sup>Optional</sup> <a name="IpFilterInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.ipFilterInput"></a>

```csharp
public string[] IpFilterInput { get; }
```

- *Type:* string[]

---

##### `MigrationInput`<sup>Optional</sup> <a name="MigrationInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.migrationInput"></a>

```csharp
public ManagedDatabaseValkeyPropertiesMigration MigrationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesMigration">ManagedDatabaseValkeyPropertiesMigration</a>

---

##### `PublicAccessInput`<sup>Optional</sup> <a name="PublicAccessInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.publicAccessInput"></a>

```csharp
public object PublicAccessInput { get; }
```

- *Type:* object

---

##### `ServiceLogInput`<sup>Optional</sup> <a name="ServiceLogInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.serviceLogInput"></a>

```csharp
public object ServiceLogInput { get; }
```

- *Type:* object

---

##### `ValkeyAclChannelsDefaultInput`<sup>Optional</sup> <a name="ValkeyAclChannelsDefaultInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyAclChannelsDefaultInput"></a>

```csharp
public string ValkeyAclChannelsDefaultInput { get; }
```

- *Type:* string

---

##### `ValkeyIoThreadsInput`<sup>Optional</sup> <a name="ValkeyIoThreadsInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyIoThreadsInput"></a>

```csharp
public double ValkeyIoThreadsInput { get; }
```

- *Type:* double

---

##### `ValkeyLfuDecayTimeInput`<sup>Optional</sup> <a name="ValkeyLfuDecayTimeInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyLfuDecayTimeInput"></a>

```csharp
public double ValkeyLfuDecayTimeInput { get; }
```

- *Type:* double

---

##### `ValkeyLfuLogFactorInput`<sup>Optional</sup> <a name="ValkeyLfuLogFactorInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyLfuLogFactorInput"></a>

```csharp
public double ValkeyLfuLogFactorInput { get; }
```

- *Type:* double

---

##### `ValkeyMaxmemoryPolicyInput`<sup>Optional</sup> <a name="ValkeyMaxmemoryPolicyInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyMaxmemoryPolicyInput"></a>

```csharp
public string ValkeyMaxmemoryPolicyInput { get; }
```

- *Type:* string

---

##### `ValkeyNotifyKeyspaceEventsInput`<sup>Optional</sup> <a name="ValkeyNotifyKeyspaceEventsInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyNotifyKeyspaceEventsInput"></a>

```csharp
public string ValkeyNotifyKeyspaceEventsInput { get; }
```

- *Type:* string

---

##### `ValkeyNumberOfDatabasesInput`<sup>Optional</sup> <a name="ValkeyNumberOfDatabasesInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyNumberOfDatabasesInput"></a>

```csharp
public double ValkeyNumberOfDatabasesInput { get; }
```

- *Type:* double

---

##### `ValkeyPersistenceInput`<sup>Optional</sup> <a name="ValkeyPersistenceInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyPersistenceInput"></a>

```csharp
public string ValkeyPersistenceInput { get; }
```

- *Type:* string

---

##### `ValkeyPubsubClientOutputBufferLimitInput`<sup>Optional</sup> <a name="ValkeyPubsubClientOutputBufferLimitInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyPubsubClientOutputBufferLimitInput"></a>

```csharp
public double ValkeyPubsubClientOutputBufferLimitInput { get; }
```

- *Type:* double

---

##### `ValkeySslInput`<sup>Optional</sup> <a name="ValkeySslInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeySslInput"></a>

```csharp
public object ValkeySslInput { get; }
```

- *Type:* object

---

##### `ValkeyTimeoutInput`<sup>Optional</sup> <a name="ValkeyTimeoutInput" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyTimeoutInput"></a>

```csharp
public double ValkeyTimeoutInput { get; }
```

- *Type:* double

---

##### `AutomaticUtilityNetworkIpFilter`<sup>Required</sup> <a name="AutomaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.automaticUtilityNetworkIpFilter"></a>

```csharp
public object AutomaticUtilityNetworkIpFilter { get; }
```

- *Type:* object

---

##### `BackupHour`<sup>Required</sup> <a name="BackupHour" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.backupHour"></a>

```csharp
public double BackupHour { get; }
```

- *Type:* double

---

##### `BackupMinute`<sup>Required</sup> <a name="BackupMinute" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.backupMinute"></a>

```csharp
public double BackupMinute { get; }
```

- *Type:* double

---

##### `IpFilter`<sup>Required</sup> <a name="IpFilter" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.ipFilter"></a>

```csharp
public string[] IpFilter { get; }
```

- *Type:* string[]

---

##### `PublicAccess`<sup>Required</sup> <a name="PublicAccess" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.publicAccess"></a>

```csharp
public object PublicAccess { get; }
```

- *Type:* object

---

##### `ServiceLog`<sup>Required</sup> <a name="ServiceLog" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.serviceLog"></a>

```csharp
public object ServiceLog { get; }
```

- *Type:* object

---

##### `ValkeyAclChannelsDefault`<sup>Required</sup> <a name="ValkeyAclChannelsDefault" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyAclChannelsDefault"></a>

```csharp
public string ValkeyAclChannelsDefault { get; }
```

- *Type:* string

---

##### `ValkeyIoThreads`<sup>Required</sup> <a name="ValkeyIoThreads" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyIoThreads"></a>

```csharp
public double ValkeyIoThreads { get; }
```

- *Type:* double

---

##### `ValkeyLfuDecayTime`<sup>Required</sup> <a name="ValkeyLfuDecayTime" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyLfuDecayTime"></a>

```csharp
public double ValkeyLfuDecayTime { get; }
```

- *Type:* double

---

##### `ValkeyLfuLogFactor`<sup>Required</sup> <a name="ValkeyLfuLogFactor" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyLfuLogFactor"></a>

```csharp
public double ValkeyLfuLogFactor { get; }
```

- *Type:* double

---

##### `ValkeyMaxmemoryPolicy`<sup>Required</sup> <a name="ValkeyMaxmemoryPolicy" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyMaxmemoryPolicy"></a>

```csharp
public string ValkeyMaxmemoryPolicy { get; }
```

- *Type:* string

---

##### `ValkeyNotifyKeyspaceEvents`<sup>Required</sup> <a name="ValkeyNotifyKeyspaceEvents" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyNotifyKeyspaceEvents"></a>

```csharp
public string ValkeyNotifyKeyspaceEvents { get; }
```

- *Type:* string

---

##### `ValkeyNumberOfDatabases`<sup>Required</sup> <a name="ValkeyNumberOfDatabases" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyNumberOfDatabases"></a>

```csharp
public double ValkeyNumberOfDatabases { get; }
```

- *Type:* double

---

##### `ValkeyPersistence`<sup>Required</sup> <a name="ValkeyPersistence" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyPersistence"></a>

```csharp
public string ValkeyPersistence { get; }
```

- *Type:* string

---

##### `ValkeyPubsubClientOutputBufferLimit`<sup>Required</sup> <a name="ValkeyPubsubClientOutputBufferLimit" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyPubsubClientOutputBufferLimit"></a>

```csharp
public double ValkeyPubsubClientOutputBufferLimit { get; }
```

- *Type:* double

---

##### `ValkeySsl`<sup>Required</sup> <a name="ValkeySsl" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeySsl"></a>

```csharp
public object ValkeySsl { get; }
```

- *Type:* object

---

##### `ValkeyTimeout`<sup>Required</sup> <a name="ValkeyTimeout" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.valkeyTimeout"></a>

```csharp
public double ValkeyTimeout { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyPropertiesOutputReference.property.internalValue"></a>

```csharp
public ManagedDatabaseValkeyProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseValkey.ManagedDatabaseValkeyProperties">ManagedDatabaseValkeyProperties</a>

---



