# `managedDatabasePostgresql` Submodule <a name="`managedDatabasePostgresql` Submodule" id="@cdktf/provider-upcloud.managedDatabasePostgresql"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedDatabasePostgresql <a name="ManagedDatabasePostgresql" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql upcloud_managed_database_postgresql}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabasePostgresql(Construct Scope, string Id, ManagedDatabasePostgresqlConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig">ManagedDatabasePostgresqlConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNetwork` <a name="PutNetwork" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putNetwork"></a>

```csharp
private void PutNetwork(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putNetwork.parameter.value"></a>

- *Type:* object

---

##### `PutProperties` <a name="PutProperties" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties"></a>

```csharp
private void PutProperties(ManagedDatabasePostgresqlProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMaintenanceWindowDow` <a name="ResetMaintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetMaintenanceWindowDow"></a>

```csharp
private void ResetMaintenanceWindowDow()
```

##### `ResetMaintenanceWindowTime` <a name="ResetMaintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetMaintenanceWindowTime"></a>

```csharp
private void ResetMaintenanceWindowTime()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetPowered` <a name="ResetPowered" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetPowered"></a>

```csharp
private void ResetPowered()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetProperties"></a>

```csharp
private void ResetProperties()
```

##### `ResetTerminationProtection` <a name="ResetTerminationProtection" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.resetTerminationProtection"></a>

```csharp
private void ResetTerminationProtection()
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

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

ManagedDatabasePostgresql.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

ManagedDatabasePostgresql.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

ManagedDatabasePostgresql.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

ManagedDatabasePostgresql.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ManagedDatabasePostgresql resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagedDatabasePostgresql to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagedDatabasePostgresql that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ManagedDatabasePostgresql to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.components">Components</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList">ManagedDatabasePostgresqlComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.network">Network</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList">ManagedDatabasePostgresqlNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.nodeStates">NodeStates</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList">ManagedDatabasePostgresqlNodeStatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.primaryDatabase">PrimaryDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference">ManagedDatabasePostgresqlPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.serviceHost">ServiceHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.servicePassword">ServicePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.servicePort">ServicePort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.serviceUri">ServiceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.serviceUsername">ServiceUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.sslmode">Sslmode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowDowInput">MaintenanceWindowDowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowTimeInput">MaintenanceWindowTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.networkInput">NetworkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.planInput">PlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.poweredInput">PoweredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terminationProtectionInput">TerminationProtectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowDow">MaintenanceWindowDow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowTime">MaintenanceWindowTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.plan">Plan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.powered">Powered</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terminationProtection">TerminationProtection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Components`<sup>Required</sup> <a name="Components" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.components"></a>

```csharp
public ManagedDatabasePostgresqlComponentsList Components { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList">ManagedDatabasePostgresqlComponentsList</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.network"></a>

```csharp
public ManagedDatabasePostgresqlNetworkList Network { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList">ManagedDatabasePostgresqlNetworkList</a>

---

##### `NodeStates`<sup>Required</sup> <a name="NodeStates" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.nodeStates"></a>

```csharp
public ManagedDatabasePostgresqlNodeStatesList NodeStates { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList">ManagedDatabasePostgresqlNodeStatesList</a>

---

##### `PrimaryDatabase`<sup>Required</sup> <a name="PrimaryDatabase" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.primaryDatabase"></a>

```csharp
public string PrimaryDatabase { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.properties"></a>

```csharp
public ManagedDatabasePostgresqlPropertiesOutputReference Properties { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference">ManagedDatabasePostgresqlPropertiesOutputReference</a>

---

##### `ServiceHost`<sup>Required</sup> <a name="ServiceHost" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.serviceHost"></a>

```csharp
public string ServiceHost { get; }
```

- *Type:* string

---

##### `ServicePassword`<sup>Required</sup> <a name="ServicePassword" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.servicePassword"></a>

```csharp
public string ServicePassword { get; }
```

- *Type:* string

---

##### `ServicePort`<sup>Required</sup> <a name="ServicePort" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.servicePort"></a>

```csharp
public string ServicePort { get; }
```

- *Type:* string

---

##### `ServiceUri`<sup>Required</sup> <a name="ServiceUri" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.serviceUri"></a>

```csharp
public string ServiceUri { get; }
```

- *Type:* string

---

##### `ServiceUsername`<sup>Required</sup> <a name="ServiceUsername" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.serviceUsername"></a>

```csharp
public string ServiceUsername { get; }
```

- *Type:* string

---

##### `Sslmode`<sup>Required</sup> <a name="Sslmode" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.sslmode"></a>

```csharp
public string Sslmode { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaintenanceWindowDowInput`<sup>Optional</sup> <a name="MaintenanceWindowDowInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowDowInput"></a>

```csharp
public string MaintenanceWindowDowInput { get; }
```

- *Type:* string

---

##### `MaintenanceWindowTimeInput`<sup>Optional</sup> <a name="MaintenanceWindowTimeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowTimeInput"></a>

```csharp
public string MaintenanceWindowTimeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.networkInput"></a>

```csharp
public object NetworkInput { get; }
```

- *Type:* object

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.planInput"></a>

```csharp
public string PlanInput { get; }
```

- *Type:* string

---

##### `PoweredInput`<sup>Optional</sup> <a name="PoweredInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.poweredInput"></a>

```csharp
public object PoweredInput { get; }
```

- *Type:* object

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.propertiesInput"></a>

```csharp
public ManagedDatabasePostgresqlProperties PropertiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a>

---

##### `TerminationProtectionInput`<sup>Optional</sup> <a name="TerminationProtectionInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terminationProtectionInput"></a>

```csharp
public object TerminationProtectionInput { get; }
```

- *Type:* object

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaintenanceWindowDow`<sup>Required</sup> <a name="MaintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowDow"></a>

```csharp
public string MaintenanceWindowDow { get; }
```

- *Type:* string

---

##### `MaintenanceWindowTime`<sup>Required</sup> <a name="MaintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.maintenanceWindowTime"></a>

```csharp
public string MaintenanceWindowTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.plan"></a>

```csharp
public string Plan { get; }
```

- *Type:* string

---

##### `Powered`<sup>Required</sup> <a name="Powered" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.powered"></a>

```csharp
public object Powered { get; }
```

- *Type:* object

---

##### `TerminationProtection`<sup>Required</sup> <a name="TerminationProtection" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.terminationProtection"></a>

```csharp
public object TerminationProtection { get; }
```

- *Type:* object

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresql.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedDatabasePostgresqlComponents <a name="ManagedDatabasePostgresqlComponents" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponents.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabasePostgresqlComponents {

};
```


### ManagedDatabasePostgresqlConfig <a name="ManagedDatabasePostgresqlConfig" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabasePostgresqlConfig {
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
    ManagedDatabasePostgresqlProperties Properties = null,
    object TerminationProtection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.name">Name</a></code> | <code>string</code> | Name of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.plan">Plan</a></code> | <code>string</code> | Service plan to use. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.title">Title</a></code> | <code>string</code> | Title of a managed database instance. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.zone">Zone</a></code> | <code>string</code> | Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#id ManagedDatabasePostgresql#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User defined key-value pairs to classify the managed database. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.maintenanceWindowDow">MaintenanceWindowDow</a></code> | <code>string</code> | Maintenance window day of week. Lower case weekday name (monday, tuesday, ...). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.maintenanceWindowTime">MaintenanceWindowTime</a></code> | <code>string</code> | Maintenance window UTC time in hh:mm:ss format. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.network">Network</a></code> | <code>object</code> | network block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.powered">Powered</a></code> | <code>object</code> | The administrative power state of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.terminationProtection">TerminationProtection</a></code> | <code>object</code> | If set to true, prevents the managed service from being powered off, or deleted. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the service.

The name is used as a prefix for the logical hostname. Must be unique within an account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#name ManagedDatabasePostgresql#name}

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.plan"></a>

```csharp
public string Plan { get; set; }
```

- *Type:* string

Service plan to use.

This determines how much resources the instance will have. You can list available plans with `upctl database plans <type>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#plan ManagedDatabasePostgresql#plan}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Title of a managed database instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#title ManagedDatabasePostgresql#title}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#zone ManagedDatabasePostgresql#zone}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#id ManagedDatabasePostgresql#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User defined key-value pairs to classify the managed database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#labels ManagedDatabasePostgresql#labels}

---

##### `MaintenanceWindowDow`<sup>Optional</sup> <a name="MaintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.maintenanceWindowDow"></a>

```csharp
public string MaintenanceWindowDow { get; set; }
```

- *Type:* string

Maintenance window day of week. Lower case weekday name (monday, tuesday, ...).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#maintenance_window_dow ManagedDatabasePostgresql#maintenance_window_dow}

---

##### `MaintenanceWindowTime`<sup>Optional</sup> <a name="MaintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.maintenanceWindowTime"></a>

```csharp
public string MaintenanceWindowTime { get; set; }
```

- *Type:* string

Maintenance window UTC time in hh:mm:ss format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#maintenance_window_time ManagedDatabasePostgresql#maintenance_window_time}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.network"></a>

```csharp
public object Network { get; set; }
```

- *Type:* object

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#network ManagedDatabasePostgresql#network}

---

##### `Powered`<sup>Optional</sup> <a name="Powered" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.powered"></a>

```csharp
public object Powered { get; set; }
```

- *Type:* object

The administrative power state of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#powered ManagedDatabasePostgresql#powered}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.properties"></a>

```csharp
public ManagedDatabasePostgresqlProperties Properties { get; set; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#properties ManagedDatabasePostgresql#properties}

---

##### `TerminationProtection`<sup>Optional</sup> <a name="TerminationProtection" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlConfig.property.terminationProtection"></a>

```csharp
public object TerminationProtection { get; set; }
```

- *Type:* object

If set to true, prevents the managed service from being powered off, or deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#termination_protection ManagedDatabasePostgresql#termination_protection}

---

### ManagedDatabasePostgresqlNetwork <a name="ManagedDatabasePostgresqlNetwork" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabasePostgresqlNetwork {
    string Family,
    string Name,
    string Type,
    string Uuid
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork.property.family">Family</a></code> | <code>string</code> | Network family. Currently only `IPv4` is supported. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork.property.name">Name</a></code> | <code>string</code> | The name of the network. Must be unique within the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork.property.type">Type</a></code> | <code>string</code> | The type of the network. Must be private. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork.property.uuid">Uuid</a></code> | <code>string</code> | Private network UUID. Must reside in the same zone as the database. |

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork.property.family"></a>

```csharp
public string Family { get; set; }
```

- *Type:* string

Network family. Currently only `IPv4` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#family ManagedDatabasePostgresql#family}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the network. Must be unique within the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#name ManagedDatabasePostgresql#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the network. Must be private.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#type ManagedDatabasePostgresql#type}

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetwork.property.uuid"></a>

```csharp
public string Uuid { get; set; }
```

- *Type:* string

Private network UUID. Must reside in the same zone as the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#uuid ManagedDatabasePostgresql#uuid}

---

### ManagedDatabasePostgresqlNodeStates <a name="ManagedDatabasePostgresqlNodeStates" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStates.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabasePostgresqlNodeStates {

};
```


### ManagedDatabasePostgresqlProperties <a name="ManagedDatabasePostgresqlProperties" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabasePostgresqlProperties {
    string AdminPassword = null,
    string AdminUsername = null,
    object AutomaticUtilityNetworkIpFilter = null,
    double AutovacuumAnalyzeScaleFactor = null,
    double AutovacuumAnalyzeThreshold = null,
    double AutovacuumFreezeMaxAge = null,
    double AutovacuumMaxWorkers = null,
    double AutovacuumNaptime = null,
    double AutovacuumVacuumCostDelay = null,
    double AutovacuumVacuumCostLimit = null,
    double AutovacuumVacuumScaleFactor = null,
    double AutovacuumVacuumThreshold = null,
    double BackupHour = null,
    double BackupMinute = null,
    double BgwriterDelay = null,
    double BgwriterFlushAfter = null,
    double BgwriterLruMaxpages = null,
    double BgwriterLruMultiplier = null,
    double DeadlockTimeout = null,
    string DefaultToastCompression = null,
    double IdleInTransactionSessionTimeout = null,
    string[] IpFilter = null,
    object Jit = null,
    double LogAutovacuumMinDuration = null,
    string LogErrorVerbosity = null,
    string LogLinePrefix = null,
    double LogMinDurationStatement = null,
    double LogTempFiles = null,
    double MaxConnections = null,
    double MaxFilesPerProcess = null,
    double MaxLocksPerTransaction = null,
    double MaxLogicalReplicationWorkers = null,
    double MaxParallelWorkers = null,
    double MaxParallelWorkersPerGather = null,
    double MaxPredLocksPerTransaction = null,
    double MaxPreparedTransactions = null,
    double MaxReplicationSlots = null,
    double MaxSlotWalKeepSize = null,
    double MaxStackDepth = null,
    double MaxStandbyArchiveDelay = null,
    double MaxStandbyStreamingDelay = null,
    double MaxSyncWorkersPerSubscription = null,
    double MaxWalSenders = null,
    double MaxWorkerProcesses = null,
    ManagedDatabasePostgresqlPropertiesMigration Migration = null,
    string PasswordEncryption = null,
    ManagedDatabasePostgresqlPropertiesPgaudit Pgaudit = null,
    ManagedDatabasePostgresqlPropertiesPgbouncer Pgbouncer = null,
    ManagedDatabasePostgresqlPropertiesPglookout Pglookout = null,
    double PgPartmanBgwInterval = null,
    string PgPartmanBgwRole = null,
    object PgStatMonitorEnable = null,
    object PgStatMonitorPgsmEnableQueryPlan = null,
    double PgStatMonitorPgsmMaxBuckets = null,
    string PgStatStatementsTrack = null,
    object PublicAccess = null,
    object ServiceLog = null,
    double SharedBuffersPercentage = null,
    string SynchronousReplication = null,
    double TempFileLimit = null,
    ManagedDatabasePostgresqlPropertiesTimescaledb Timescaledb = null,
    string Timezone = null,
    double TrackActivityQuerySize = null,
    string TrackCommitTimestamp = null,
    string TrackFunctions = null,
    string TrackIoTiming = null,
    string Variant = null,
    string Version = null,
    double WalSenderTimeout = null,
    double WalWriterDelay = null,
    double WorkMem = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.adminPassword">AdminPassword</a></code> | <code>string</code> | Custom password for admin user. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.adminUsername">AdminUsername</a></code> | <code>string</code> | Custom username for admin user. This must be set only when a new service is being created. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.automaticUtilityNetworkIpFilter">AutomaticUtilityNetworkIpFilter</a></code> | <code>object</code> | Automatic utility network IP Filter. Automatically allow connections from servers in the utility network within the same zone. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumAnalyzeScaleFactor">AutovacuumAnalyzeScaleFactor</a></code> | <code>double</code> | Specifies a fraction of the table size to add to autovacuum_analyze_threshold when deciding whether to trigger an ANALYZE (e.g. `0.2` for 20% of the table size). The default is `0.2`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumAnalyzeThreshold">AutovacuumAnalyzeThreshold</a></code> | <code>double</code> | Specifies the minimum number of inserted, updated or deleted tuples needed to trigger an ANALYZE in any one table. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumFreezeMaxAge">AutovacuumFreezeMaxAge</a></code> | <code>double</code> | Specifies the maximum age (in transactions) that a table's pg_class.relfrozenxid field can attain before a VACUUM operation is forced to prevent transaction ID wraparound within the table. The system launches autovacuum processes to prevent wraparound even when autovacuum is otherwise disabled. Changing this parameter causes a service restart. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumMaxWorkers">AutovacuumMaxWorkers</a></code> | <code>double</code> | Specifies the maximum number of autovacuum processes (other than the autovacuum launcher) that may be running at any one time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumNaptime">AutovacuumNaptime</a></code> | <code>double</code> | Specifies the minimum delay between autovacuum runs on any given database. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumCostDelay">AutovacuumVacuumCostDelay</a></code> | <code>double</code> | Specifies the cost delay value that will be used in automatic VACUUM operations. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumCostLimit">AutovacuumVacuumCostLimit</a></code> | <code>double</code> | Specifies the cost limit value that will be used in automatic VACUUM operations. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumScaleFactor">AutovacuumVacuumScaleFactor</a></code> | <code>double</code> | Specifies a fraction of the table size to add to autovacuum_vacuum_threshold when deciding whether to trigger a VACUUM (e.g. `0.2` for 20% of the table size). The default is `0.2`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumThreshold">AutovacuumVacuumThreshold</a></code> | <code>double</code> | Specifies the minimum number of updated or deleted tuples needed to trigger a VACUUM in any one table. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.backupHour">BackupHour</a></code> | <code>double</code> | The hour of day (in UTC) when backup for the service is started. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.backupMinute">BackupMinute</a></code> | <code>double</code> | The minute of an hour when backup for the service is started. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterDelay">BgwriterDelay</a></code> | <code>double</code> | Specifies the delay between activity rounds for the background writer in milliseconds. The default is `200`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterFlushAfter">BgwriterFlushAfter</a></code> | <code>double</code> | Whenever more than bgwriter_flush_after bytes have been written by the background writer, attempt to force the OS to issue these writes to the underlying storage. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterLruMaxpages">BgwriterLruMaxpages</a></code> | <code>double</code> | In each round, no more than this many buffers will be written by the background writer. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterLruMultiplier">BgwriterLruMultiplier</a></code> | <code>double</code> | The average recent need for new buffers is multiplied by bgwriter_lru_multiplier to arrive at an estimate of the number that will be needed during the next round, (up to bgwriter_lru_maxpages). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.deadlockTimeout">DeadlockTimeout</a></code> | <code>double</code> | This is the amount of time, in milliseconds, to wait on a lock before checking to see if there is a deadlock condition. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.defaultToastCompression">DefaultToastCompression</a></code> | <code>string</code> | Specifies the default TOAST compression method for values of compressible columns. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.idleInTransactionSessionTimeout">IdleInTransactionSessionTimeout</a></code> | <code>double</code> | Time out sessions with open transactions after this number of milliseconds. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.ipFilter">IpFilter</a></code> | <code>string[]</code> | IP filter. Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.jit">Jit</a></code> | <code>object</code> | Controls system-wide use of Just-in-Time Compilation (JIT). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logAutovacuumMinDuration">LogAutovacuumMinDuration</a></code> | <code>double</code> | Causes each action executed by autovacuum to be logged if it ran for at least the specified number of milliseconds. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logErrorVerbosity">LogErrorVerbosity</a></code> | <code>string</code> | Controls the amount of detail written in the server log for each message that is logged. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logLinePrefix">LogLinePrefix</a></code> | <code>string</code> | Choose from one of the available log formats. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logMinDurationStatement">LogMinDurationStatement</a></code> | <code>double</code> | Log statements that take more than this number of milliseconds to run, -1 disables. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logTempFiles">LogTempFiles</a></code> | <code>double</code> | Log statements for each temporary file created larger than this number of kilobytes, -1 disables. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxConnections">MaxConnections</a></code> | <code>double</code> | Sets the PostgreSQL maximum number of concurrent connections to the database server. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxFilesPerProcess">MaxFilesPerProcess</a></code> | <code>double</code> | PostgreSQL maximum number of files that can be open per process. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxLocksPerTransaction">MaxLocksPerTransaction</a></code> | <code>double</code> | PostgreSQL maximum locks per transaction. Changing this parameter causes a service restart. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxLogicalReplicationWorkers">MaxLogicalReplicationWorkers</a></code> | <code>double</code> | PostgreSQL maximum logical replication workers (taken from the pool of max_parallel_workers). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxParallelWorkers">MaxParallelWorkers</a></code> | <code>double</code> | Sets the maximum number of workers that the system can support for parallel queries. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxParallelWorkersPerGather">MaxParallelWorkersPerGather</a></code> | <code>double</code> | Sets the maximum number of workers that can be started by a single Gather or Gather Merge node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxPredLocksPerTransaction">MaxPredLocksPerTransaction</a></code> | <code>double</code> | PostgreSQL maximum predicate locks per transaction. The default is `64` (upstream default). Changing this parameter causes a service restart. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxPreparedTransactions">MaxPreparedTransactions</a></code> | <code>double</code> | PostgreSQL maximum prepared transactions. The default is `0`. Changing this parameter causes a service restart. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxReplicationSlots">MaxReplicationSlots</a></code> | <code>double</code> | PostgreSQL maximum replication slots. The default is `20`. Changing this parameter causes a service restart. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxSlotWalKeepSize">MaxSlotWalKeepSize</a></code> | <code>double</code> | PostgreSQL maximum WAL size (MB) reserved for replication slots. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxStackDepth">MaxStackDepth</a></code> | <code>double</code> | Maximum depth of the stack in bytes. The default is `2097152` (upstream default). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxStandbyArchiveDelay">MaxStandbyArchiveDelay</a></code> | <code>double</code> | Max standby archive delay in milliseconds. The default is `30000` (upstream default). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxStandbyStreamingDelay">MaxStandbyStreamingDelay</a></code> | <code>double</code> | Max standby streaming delay in milliseconds. The default is `30000` (upstream default). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxSyncWorkersPerSubscription">MaxSyncWorkersPerSubscription</a></code> | <code>double</code> | Maximum number of synchronization workers per subscription. The default is `2`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxWalSenders">MaxWalSenders</a></code> | <code>double</code> | PostgreSQL maximum WAL senders. The default is `20`. Changing this parameter causes a service restart. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxWorkerProcesses">MaxWorkerProcesses</a></code> | <code>double</code> | Sets the maximum number of background processes that the system can support. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.migration">Migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration">ManagedDatabasePostgresqlPropertiesMigration</a></code> | migration block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.passwordEncryption">PasswordEncryption</a></code> | <code>string</code> | Chooses the algorithm for encrypting passwords. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgaudit">Pgaudit</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit">ManagedDatabasePostgresqlPropertiesPgaudit</a></code> | pgaudit block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgbouncer">Pgbouncer</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer">ManagedDatabasePostgresqlPropertiesPgbouncer</a></code> | pgbouncer block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pglookout">Pglookout</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout">ManagedDatabasePostgresqlPropertiesPglookout</a></code> | pglookout block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgPartmanBgwInterval">PgPartmanBgwInterval</a></code> | <code>double</code> | Sets the time interval in seconds to run pg_partman's scheduled tasks. The default is `3600`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgPartmanBgwRole">PgPartmanBgwRole</a></code> | <code>string</code> | Controls which role to use for pg_partman's scheduled background tasks. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatMonitorEnable">PgStatMonitorEnable</a></code> | <code>object</code> | Enable pg_stat_monitor extension if available for the current cluster. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatMonitorPgsmEnableQueryPlan">PgStatMonitorPgsmEnableQueryPlan</a></code> | <code>object</code> | Enables or disables query plan monitoring. Changing this parameter causes a service restart. Only available for PostgreSQL 13+. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatMonitorPgsmMaxBuckets">PgStatMonitorPgsmMaxBuckets</a></code> | <code>double</code> | Sets the maximum number of buckets. Changing this parameter causes a service restart. Only available for PostgreSQL 13+. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatStatementsTrack">PgStatStatementsTrack</a></code> | <code>string</code> | Controls which statements are counted. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.publicAccess">PublicAccess</a></code> | <code>object</code> | Public Access. Allow access to the service from the public Internet. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.serviceLog">ServiceLog</a></code> | <code>object</code> | Service logging. Store logs for the service so that they are available in the HTTP API and console. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.sharedBuffersPercentage">SharedBuffersPercentage</a></code> | <code>double</code> | Percentage of total RAM that the database server uses for shared memory buffers. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.synchronousReplication">SynchronousReplication</a></code> | <code>string</code> | Synchronous replication type. Note that the service plan also needs to support synchronous replication. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.tempFileLimit">TempFileLimit</a></code> | <code>double</code> | PostgreSQL temporary file limit in KiB, -1 for unlimited. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.timescaledb">Timescaledb</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb">ManagedDatabasePostgresqlPropertiesTimescaledb</a></code> | timescaledb block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.timezone">Timezone</a></code> | <code>string</code> | PostgreSQL service timezone. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackActivityQuerySize">TrackActivityQuerySize</a></code> | <code>double</code> | Specifies the number of bytes reserved to track the currently executing command for each active session. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackCommitTimestamp">TrackCommitTimestamp</a></code> | <code>string</code> | Record commit time of transactions. Changing this parameter causes a service restart. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackFunctions">TrackFunctions</a></code> | <code>string</code> | Enables tracking of function call counts and time used. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackIoTiming">TrackIoTiming</a></code> | <code>string</code> | Enables timing of database I/O calls. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.variant">Variant</a></code> | <code>string</code> | Variant of the PostgreSQL service, may affect the features that are exposed by default. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.version">Version</a></code> | <code>string</code> | PostgreSQL major version. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.walSenderTimeout">WalSenderTimeout</a></code> | <code>double</code> | Terminate replication connections that are inactive for longer than this amount of time, in milliseconds. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.walWriterDelay">WalWriterDelay</a></code> | <code>double</code> | WAL flush interval in milliseconds. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.workMem">WorkMem</a></code> | <code>double</code> | Sets the maximum amount of memory to be used by a query operation (such as a sort or hash table) before writing to temporary disk files, in MB. |

---

##### `AdminPassword`<sup>Optional</sup> <a name="AdminPassword" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.adminPassword"></a>

```csharp
public string AdminPassword { get; set; }
```

- *Type:* string

Custom password for admin user.

Defaults to random string. This must be set only when a new service is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#admin_password ManagedDatabasePostgresql#admin_password}

---

##### `AdminUsername`<sup>Optional</sup> <a name="AdminUsername" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.adminUsername"></a>

```csharp
public string AdminUsername { get; set; }
```

- *Type:* string

Custom username for admin user. This must be set only when a new service is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#admin_username ManagedDatabasePostgresql#admin_username}

---

##### `AutomaticUtilityNetworkIpFilter`<sup>Optional</sup> <a name="AutomaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.automaticUtilityNetworkIpFilter"></a>

```csharp
public object AutomaticUtilityNetworkIpFilter { get; set; }
```

- *Type:* object

Automatic utility network IP Filter. Automatically allow connections from servers in the utility network within the same zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#automatic_utility_network_ip_filter ManagedDatabasePostgresql#automatic_utility_network_ip_filter}

---

##### `AutovacuumAnalyzeScaleFactor`<sup>Optional</sup> <a name="AutovacuumAnalyzeScaleFactor" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumAnalyzeScaleFactor"></a>

```csharp
public double AutovacuumAnalyzeScaleFactor { get; set; }
```

- *Type:* double

Specifies a fraction of the table size to add to autovacuum_analyze_threshold when deciding whether to trigger an ANALYZE (e.g. `0.2` for 20% of the table size). The default is `0.2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#autovacuum_analyze_scale_factor ManagedDatabasePostgresql#autovacuum_analyze_scale_factor}

---

##### `AutovacuumAnalyzeThreshold`<sup>Optional</sup> <a name="AutovacuumAnalyzeThreshold" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumAnalyzeThreshold"></a>

```csharp
public double AutovacuumAnalyzeThreshold { get; set; }
```

- *Type:* double

Specifies the minimum number of inserted, updated or deleted tuples needed to trigger an ANALYZE in any one table.

The default is `50`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#autovacuum_analyze_threshold ManagedDatabasePostgresql#autovacuum_analyze_threshold}

---

##### `AutovacuumFreezeMaxAge`<sup>Optional</sup> <a name="AutovacuumFreezeMaxAge" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumFreezeMaxAge"></a>

```csharp
public double AutovacuumFreezeMaxAge { get; set; }
```

- *Type:* double

Specifies the maximum age (in transactions) that a table's pg_class.relfrozenxid field can attain before a VACUUM operation is forced to prevent transaction ID wraparound within the table. The system launches autovacuum processes to prevent wraparound even when autovacuum is otherwise disabled. Changing this parameter causes a service restart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#autovacuum_freeze_max_age ManagedDatabasePostgresql#autovacuum_freeze_max_age}

---

##### `AutovacuumMaxWorkers`<sup>Optional</sup> <a name="AutovacuumMaxWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumMaxWorkers"></a>

```csharp
public double AutovacuumMaxWorkers { get; set; }
```

- *Type:* double

Specifies the maximum number of autovacuum processes (other than the autovacuum launcher) that may be running at any one time.

The default is `3`. Changing this parameter causes a service restart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#autovacuum_max_workers ManagedDatabasePostgresql#autovacuum_max_workers}

---

##### `AutovacuumNaptime`<sup>Optional</sup> <a name="AutovacuumNaptime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumNaptime"></a>

```csharp
public double AutovacuumNaptime { get; set; }
```

- *Type:* double

Specifies the minimum delay between autovacuum runs on any given database.

The delay is measured in seconds. The default is `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#autovacuum_naptime ManagedDatabasePostgresql#autovacuum_naptime}

---

##### `AutovacuumVacuumCostDelay`<sup>Optional</sup> <a name="AutovacuumVacuumCostDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumCostDelay"></a>

```csharp
public double AutovacuumVacuumCostDelay { get; set; }
```

- *Type:* double

Specifies the cost delay value that will be used in automatic VACUUM operations.

If `-1` is specified, the regular vacuum_cost_delay value will be used. The default is `2` (upstream default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#autovacuum_vacuum_cost_delay ManagedDatabasePostgresql#autovacuum_vacuum_cost_delay}

---

##### `AutovacuumVacuumCostLimit`<sup>Optional</sup> <a name="AutovacuumVacuumCostLimit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumCostLimit"></a>

```csharp
public double AutovacuumVacuumCostLimit { get; set; }
```

- *Type:* double

Specifies the cost limit value that will be used in automatic VACUUM operations.

If `-1` is specified, the regular vacuum_cost_limit value will be used. The default is `-1` (upstream default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#autovacuum_vacuum_cost_limit ManagedDatabasePostgresql#autovacuum_vacuum_cost_limit}

---

##### `AutovacuumVacuumScaleFactor`<sup>Optional</sup> <a name="AutovacuumVacuumScaleFactor" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumScaleFactor"></a>

```csharp
public double AutovacuumVacuumScaleFactor { get; set; }
```

- *Type:* double

Specifies a fraction of the table size to add to autovacuum_vacuum_threshold when deciding whether to trigger a VACUUM (e.g. `0.2` for 20% of the table size). The default is `0.2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#autovacuum_vacuum_scale_factor ManagedDatabasePostgresql#autovacuum_vacuum_scale_factor}

---

##### `AutovacuumVacuumThreshold`<sup>Optional</sup> <a name="AutovacuumVacuumThreshold" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.autovacuumVacuumThreshold"></a>

```csharp
public double AutovacuumVacuumThreshold { get; set; }
```

- *Type:* double

Specifies the minimum number of updated or deleted tuples needed to trigger a VACUUM in any one table.

The default is `50`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#autovacuum_vacuum_threshold ManagedDatabasePostgresql#autovacuum_vacuum_threshold}

---

##### `BackupHour`<sup>Optional</sup> <a name="BackupHour" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.backupHour"></a>

```csharp
public double BackupHour { get; set; }
```

- *Type:* double

The hour of day (in UTC) when backup for the service is started.

New backup is only started if previous backup has already completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#backup_hour ManagedDatabasePostgresql#backup_hour}

---

##### `BackupMinute`<sup>Optional</sup> <a name="BackupMinute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.backupMinute"></a>

```csharp
public double BackupMinute { get; set; }
```

- *Type:* double

The minute of an hour when backup for the service is started.

New backup is only started if previous backup has already completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#backup_minute ManagedDatabasePostgresql#backup_minute}

---

##### `BgwriterDelay`<sup>Optional</sup> <a name="BgwriterDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterDelay"></a>

```csharp
public double BgwriterDelay { get; set; }
```

- *Type:* double

Specifies the delay between activity rounds for the background writer in milliseconds. The default is `200`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#bgwriter_delay ManagedDatabasePostgresql#bgwriter_delay}

---

##### `BgwriterFlushAfter`<sup>Optional</sup> <a name="BgwriterFlushAfter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterFlushAfter"></a>

```csharp
public double BgwriterFlushAfter { get; set; }
```

- *Type:* double

Whenever more than bgwriter_flush_after bytes have been written by the background writer, attempt to force the OS to issue these writes to the underlying storage.

Specified in kilobytes. Setting of 0 disables forced writeback. The default is `512`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#bgwriter_flush_after ManagedDatabasePostgresql#bgwriter_flush_after}

---

##### `BgwriterLruMaxpages`<sup>Optional</sup> <a name="BgwriterLruMaxpages" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterLruMaxpages"></a>

```csharp
public double BgwriterLruMaxpages { get; set; }
```

- *Type:* double

In each round, no more than this many buffers will be written by the background writer.

Setting this to zero disables background writing. The default is `100`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#bgwriter_lru_maxpages ManagedDatabasePostgresql#bgwriter_lru_maxpages}

---

##### `BgwriterLruMultiplier`<sup>Optional</sup> <a name="BgwriterLruMultiplier" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.bgwriterLruMultiplier"></a>

```csharp
public double BgwriterLruMultiplier { get; set; }
```

- *Type:* double

The average recent need for new buffers is multiplied by bgwriter_lru_multiplier to arrive at an estimate of the number that will be needed during the next round, (up to bgwriter_lru_maxpages).

1.0 represents a “just in time” policy of writing exactly the number of buffers predicted to be needed. Larger values provide some cushion against spikes in demand, while smaller values intentionally leave writes to be done by server processes. The default is `2.0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#bgwriter_lru_multiplier ManagedDatabasePostgresql#bgwriter_lru_multiplier}

---

##### `DeadlockTimeout`<sup>Optional</sup> <a name="DeadlockTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.deadlockTimeout"></a>

```csharp
public double DeadlockTimeout { get; set; }
```

- *Type:* double

This is the amount of time, in milliseconds, to wait on a lock before checking to see if there is a deadlock condition.

The default is `1000` (upstream default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#deadlock_timeout ManagedDatabasePostgresql#deadlock_timeout}

---

##### `DefaultToastCompression`<sup>Optional</sup> <a name="DefaultToastCompression" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.defaultToastCompression"></a>

```csharp
public string DefaultToastCompression { get; set; }
```

- *Type:* string

Specifies the default TOAST compression method for values of compressible columns.

The default is `lz4`. Only available for PostgreSQL 14+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#default_toast_compression ManagedDatabasePostgresql#default_toast_compression}

---

##### `IdleInTransactionSessionTimeout`<sup>Optional</sup> <a name="IdleInTransactionSessionTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.idleInTransactionSessionTimeout"></a>

```csharp
public double IdleInTransactionSessionTimeout { get; set; }
```

- *Type:* double

Time out sessions with open transactions after this number of milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#idle_in_transaction_session_timeout ManagedDatabasePostgresql#idle_in_transaction_session_timeout}

---

##### `IpFilter`<sup>Optional</sup> <a name="IpFilter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.ipFilter"></a>

```csharp
public string[] IpFilter { get; set; }
```

- *Type:* string[]

IP filter. Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#ip_filter ManagedDatabasePostgresql#ip_filter}

---

##### `Jit`<sup>Optional</sup> <a name="Jit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.jit"></a>

```csharp
public object Jit { get; set; }
```

- *Type:* object

Controls system-wide use of Just-in-Time Compilation (JIT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#jit ManagedDatabasePostgresql#jit}

---

##### `LogAutovacuumMinDuration`<sup>Optional</sup> <a name="LogAutovacuumMinDuration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logAutovacuumMinDuration"></a>

```csharp
public double LogAutovacuumMinDuration { get; set; }
```

- *Type:* double

Causes each action executed by autovacuum to be logged if it ran for at least the specified number of milliseconds.

Setting this to zero logs all autovacuum actions. Minus-one disables logging autovacuum actions. The default is `1000`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#log_autovacuum_min_duration ManagedDatabasePostgresql#log_autovacuum_min_duration}

---

##### `LogErrorVerbosity`<sup>Optional</sup> <a name="LogErrorVerbosity" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logErrorVerbosity"></a>

```csharp
public string LogErrorVerbosity { get; set; }
```

- *Type:* string

Controls the amount of detail written in the server log for each message that is logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#log_error_verbosity ManagedDatabasePostgresql#log_error_verbosity}

---

##### `LogLinePrefix`<sup>Optional</sup> <a name="LogLinePrefix" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logLinePrefix"></a>

```csharp
public string LogLinePrefix { get; set; }
```

- *Type:* string

Choose from one of the available log formats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#log_line_prefix ManagedDatabasePostgresql#log_line_prefix}

---

##### `LogMinDurationStatement`<sup>Optional</sup> <a name="LogMinDurationStatement" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logMinDurationStatement"></a>

```csharp
public double LogMinDurationStatement { get; set; }
```

- *Type:* double

Log statements that take more than this number of milliseconds to run, -1 disables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#log_min_duration_statement ManagedDatabasePostgresql#log_min_duration_statement}

---

##### `LogTempFiles`<sup>Optional</sup> <a name="LogTempFiles" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.logTempFiles"></a>

```csharp
public double LogTempFiles { get; set; }
```

- *Type:* double

Log statements for each temporary file created larger than this number of kilobytes, -1 disables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#log_temp_files ManagedDatabasePostgresql#log_temp_files}

---

##### `MaxConnections`<sup>Optional</sup> <a name="MaxConnections" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxConnections"></a>

```csharp
public double MaxConnections { get; set; }
```

- *Type:* double

Sets the PostgreSQL maximum number of concurrent connections to the database server.

This is a limited-release parameter. Contact your account team to confirm your eligibility. You cannot decrease this parameter value when set. For services with a read replica, first increase the read replica's value. After the change is applied to the replica, you can increase the primary service's value. Changing this parameter causes a service restart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#max_connections ManagedDatabasePostgresql#max_connections}

---

##### `MaxFilesPerProcess`<sup>Optional</sup> <a name="MaxFilesPerProcess" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxFilesPerProcess"></a>

```csharp
public double MaxFilesPerProcess { get; set; }
```

- *Type:* double

PostgreSQL maximum number of files that can be open per process.

The default is `1000` (upstream default). Changing this parameter causes a service restart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#max_files_per_process ManagedDatabasePostgresql#max_files_per_process}

---

##### `MaxLocksPerTransaction`<sup>Optional</sup> <a name="MaxLocksPerTransaction" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxLocksPerTransaction"></a>

```csharp
public double MaxLocksPerTransaction { get; set; }
```

- *Type:* double

PostgreSQL maximum locks per transaction. Changing this parameter causes a service restart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#max_locks_per_transaction ManagedDatabasePostgresql#max_locks_per_transaction}

---

##### `MaxLogicalReplicationWorkers`<sup>Optional</sup> <a name="MaxLogicalReplicationWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxLogicalReplicationWorkers"></a>

```csharp
public double MaxLogicalReplicationWorkers { get; set; }
```

- *Type:* double

PostgreSQL maximum logical replication workers (taken from the pool of max_parallel_workers).

The default is `4` (upstream default). Changing this parameter causes a service restart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#max_logical_replication_workers ManagedDatabasePostgresql#max_logical_replication_workers}

---

##### `MaxParallelWorkers`<sup>Optional</sup> <a name="MaxParallelWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxParallelWorkers"></a>

```csharp
public double MaxParallelWorkers { get; set; }
```

- *Type:* double

Sets the maximum number of workers that the system can support for parallel queries.

The default is `8` (upstream default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#max_parallel_workers ManagedDatabasePostgresql#max_parallel_workers}

---

##### `MaxParallelWorkersPerGather`<sup>Optional</sup> <a name="MaxParallelWorkersPerGather" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxParallelWorkersPerGather"></a>

```csharp
public double MaxParallelWorkersPerGather { get; set; }
```

- *Type:* double

Sets the maximum number of workers that can be started by a single Gather or Gather Merge node.

The default is `2` (upstream default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#max_parallel_workers_per_gather ManagedDatabasePostgresql#max_parallel_workers_per_gather}

---

##### `MaxPredLocksPerTransaction`<sup>Optional</sup> <a name="MaxPredLocksPerTransaction" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxPredLocksPerTransaction"></a>

```csharp
public double MaxPredLocksPerTransaction { get; set; }
```

- *Type:* double

PostgreSQL maximum predicate locks per transaction. The default is `64` (upstream default). Changing this parameter causes a service restart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#max_pred_locks_per_transaction ManagedDatabasePostgresql#max_pred_locks_per_transaction}

---

##### `MaxPreparedTransactions`<sup>Optional</sup> <a name="MaxPreparedTransactions" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxPreparedTransactions"></a>

```csharp
public double MaxPreparedTransactions { get; set; }
```

- *Type:* double

PostgreSQL maximum prepared transactions. The default is `0`. Changing this parameter causes a service restart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#max_prepared_transactions ManagedDatabasePostgresql#max_prepared_transactions}

---

##### `MaxReplicationSlots`<sup>Optional</sup> <a name="MaxReplicationSlots" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxReplicationSlots"></a>

```csharp
public double MaxReplicationSlots { get; set; }
```

- *Type:* double

PostgreSQL maximum replication slots. The default is `20`. Changing this parameter causes a service restart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#max_replication_slots ManagedDatabasePostgresql#max_replication_slots}

---

##### `MaxSlotWalKeepSize`<sup>Optional</sup> <a name="MaxSlotWalKeepSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxSlotWalKeepSize"></a>

```csharp
public double MaxSlotWalKeepSize { get; set; }
```

- *Type:* double

PostgreSQL maximum WAL size (MB) reserved for replication slots.

If `-1` is specified, replication slots may retain an unlimited amount of WAL files. The default is `-1` (upstream default). wal_keep_size minimum WAL size setting takes precedence over this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#max_slot_wal_keep_size ManagedDatabasePostgresql#max_slot_wal_keep_size}

---

##### `MaxStackDepth`<sup>Optional</sup> <a name="MaxStackDepth" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxStackDepth"></a>

```csharp
public double MaxStackDepth { get; set; }
```

- *Type:* double

Maximum depth of the stack in bytes. The default is `2097152` (upstream default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#max_stack_depth ManagedDatabasePostgresql#max_stack_depth}

---

##### `MaxStandbyArchiveDelay`<sup>Optional</sup> <a name="MaxStandbyArchiveDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxStandbyArchiveDelay"></a>

```csharp
public double MaxStandbyArchiveDelay { get; set; }
```

- *Type:* double

Max standby archive delay in milliseconds. The default is `30000` (upstream default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#max_standby_archive_delay ManagedDatabasePostgresql#max_standby_archive_delay}

---

##### `MaxStandbyStreamingDelay`<sup>Optional</sup> <a name="MaxStandbyStreamingDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxStandbyStreamingDelay"></a>

```csharp
public double MaxStandbyStreamingDelay { get; set; }
```

- *Type:* double

Max standby streaming delay in milliseconds. The default is `30000` (upstream default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#max_standby_streaming_delay ManagedDatabasePostgresql#max_standby_streaming_delay}

---

##### `MaxSyncWorkersPerSubscription`<sup>Optional</sup> <a name="MaxSyncWorkersPerSubscription" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxSyncWorkersPerSubscription"></a>

```csharp
public double MaxSyncWorkersPerSubscription { get; set; }
```

- *Type:* double

Maximum number of synchronization workers per subscription. The default is `2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#max_sync_workers_per_subscription ManagedDatabasePostgresql#max_sync_workers_per_subscription}

---

##### `MaxWalSenders`<sup>Optional</sup> <a name="MaxWalSenders" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxWalSenders"></a>

```csharp
public double MaxWalSenders { get; set; }
```

- *Type:* double

PostgreSQL maximum WAL senders. The default is `20`. Changing this parameter causes a service restart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#max_wal_senders ManagedDatabasePostgresql#max_wal_senders}

---

##### `MaxWorkerProcesses`<sup>Optional</sup> <a name="MaxWorkerProcesses" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.maxWorkerProcesses"></a>

```csharp
public double MaxWorkerProcesses { get; set; }
```

- *Type:* double

Sets the maximum number of background processes that the system can support.

The default is `8`. Changing this parameter causes a service restart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#max_worker_processes ManagedDatabasePostgresql#max_worker_processes}

---

##### `Migration`<sup>Optional</sup> <a name="Migration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.migration"></a>

```csharp
public ManagedDatabasePostgresqlPropertiesMigration Migration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration">ManagedDatabasePostgresqlPropertiesMigration</a>

migration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#migration ManagedDatabasePostgresql#migration}

---

##### `PasswordEncryption`<sup>Optional</sup> <a name="PasswordEncryption" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.passwordEncryption"></a>

```csharp
public string PasswordEncryption { get; set; }
```

- *Type:* string

Chooses the algorithm for encrypting passwords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#password_encryption ManagedDatabasePostgresql#password_encryption}

---

##### `Pgaudit`<sup>Optional</sup> <a name="Pgaudit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgaudit"></a>

```csharp
public ManagedDatabasePostgresqlPropertiesPgaudit Pgaudit { get; set; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit">ManagedDatabasePostgresqlPropertiesPgaudit</a>

pgaudit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#pgaudit ManagedDatabasePostgresql#pgaudit}

---

##### `Pgbouncer`<sup>Optional</sup> <a name="Pgbouncer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgbouncer"></a>

```csharp
public ManagedDatabasePostgresqlPropertiesPgbouncer Pgbouncer { get; set; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer">ManagedDatabasePostgresqlPropertiesPgbouncer</a>

pgbouncer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#pgbouncer ManagedDatabasePostgresql#pgbouncer}

---

##### `Pglookout`<sup>Optional</sup> <a name="Pglookout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pglookout"></a>

```csharp
public ManagedDatabasePostgresqlPropertiesPglookout Pglookout { get; set; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout">ManagedDatabasePostgresqlPropertiesPglookout</a>

pglookout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#pglookout ManagedDatabasePostgresql#pglookout}

---

##### `PgPartmanBgwInterval`<sup>Optional</sup> <a name="PgPartmanBgwInterval" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgPartmanBgwInterval"></a>

```csharp
public double PgPartmanBgwInterval { get; set; }
```

- *Type:* double

Sets the time interval in seconds to run pg_partman's scheduled tasks. The default is `3600`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#pg_partman_bgw_interval ManagedDatabasePostgresql#pg_partman_bgw_interval}

---

##### `PgPartmanBgwRole`<sup>Optional</sup> <a name="PgPartmanBgwRole" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgPartmanBgwRole"></a>

```csharp
public string PgPartmanBgwRole { get; set; }
```

- *Type:* string

Controls which role to use for pg_partman's scheduled background tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#pg_partman_bgw_role ManagedDatabasePostgresql#pg_partman_bgw_role}

---

##### `PgStatMonitorEnable`<sup>Optional</sup> <a name="PgStatMonitorEnable" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatMonitorEnable"></a>

```csharp
public object PgStatMonitorEnable { get; set; }
```

- *Type:* object

Enable pg_stat_monitor extension if available for the current cluster.

Enable the pg_stat_monitor extension. Changing this parameter causes a service restart. When this extension is enabled, pg_stat_statements results for utility commands are unreliable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#pg_stat_monitor_enable ManagedDatabasePostgresql#pg_stat_monitor_enable}

---

##### `PgStatMonitorPgsmEnableQueryPlan`<sup>Optional</sup> <a name="PgStatMonitorPgsmEnableQueryPlan" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatMonitorPgsmEnableQueryPlan"></a>

```csharp
public object PgStatMonitorPgsmEnableQueryPlan { get; set; }
```

- *Type:* object

Enables or disables query plan monitoring. Changing this parameter causes a service restart. Only available for PostgreSQL 13+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#pg_stat_monitor_pgsm_enable_query_plan ManagedDatabasePostgresql#pg_stat_monitor_pgsm_enable_query_plan}

---

##### `PgStatMonitorPgsmMaxBuckets`<sup>Optional</sup> <a name="PgStatMonitorPgsmMaxBuckets" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatMonitorPgsmMaxBuckets"></a>

```csharp
public double PgStatMonitorPgsmMaxBuckets { get; set; }
```

- *Type:* double

Sets the maximum number of buckets. Changing this parameter causes a service restart. Only available for PostgreSQL 13+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#pg_stat_monitor_pgsm_max_buckets ManagedDatabasePostgresql#pg_stat_monitor_pgsm_max_buckets}

---

##### `PgStatStatementsTrack`<sup>Optional</sup> <a name="PgStatStatementsTrack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.pgStatStatementsTrack"></a>

```csharp
public string PgStatStatementsTrack { get; set; }
```

- *Type:* string

Controls which statements are counted.

Specify top to track top-level statements (those issued directly by clients), all to also track nested statements (such as statements invoked within functions), or none to disable statement statistics collection. The default is `top`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#pg_stat_statements_track ManagedDatabasePostgresql#pg_stat_statements_track}

---

##### `PublicAccess`<sup>Optional</sup> <a name="PublicAccess" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.publicAccess"></a>

```csharp
public object PublicAccess { get; set; }
```

- *Type:* object

Public Access. Allow access to the service from the public Internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#public_access ManagedDatabasePostgresql#public_access}

---

##### `ServiceLog`<sup>Optional</sup> <a name="ServiceLog" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.serviceLog"></a>

```csharp
public object ServiceLog { get; set; }
```

- *Type:* object

Service logging. Store logs for the service so that they are available in the HTTP API and console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#service_log ManagedDatabasePostgresql#service_log}

---

##### `SharedBuffersPercentage`<sup>Optional</sup> <a name="SharedBuffersPercentage" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.sharedBuffersPercentage"></a>

```csharp
public double SharedBuffersPercentage { get; set; }
```

- *Type:* double

Percentage of total RAM that the database server uses for shared memory buffers.

Valid range is 20-60 (float), which corresponds to 20% - 60%. This setting adjusts the shared_buffers configuration value. Changing this parameter causes a service restart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#shared_buffers_percentage ManagedDatabasePostgresql#shared_buffers_percentage}

---

##### `SynchronousReplication`<sup>Optional</sup> <a name="SynchronousReplication" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.synchronousReplication"></a>

```csharp
public string SynchronousReplication { get; set; }
```

- *Type:* string

Synchronous replication type. Note that the service plan also needs to support synchronous replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#synchronous_replication ManagedDatabasePostgresql#synchronous_replication}

---

##### `TempFileLimit`<sup>Optional</sup> <a name="TempFileLimit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.tempFileLimit"></a>

```csharp
public double TempFileLimit { get; set; }
```

- *Type:* double

PostgreSQL temporary file limit in KiB, -1 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#temp_file_limit ManagedDatabasePostgresql#temp_file_limit}

---

##### `Timescaledb`<sup>Optional</sup> <a name="Timescaledb" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.timescaledb"></a>

```csharp
public ManagedDatabasePostgresqlPropertiesTimescaledb Timescaledb { get; set; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb">ManagedDatabasePostgresqlPropertiesTimescaledb</a>

timescaledb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#timescaledb ManagedDatabasePostgresql#timescaledb}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.timezone"></a>

```csharp
public string Timezone { get; set; }
```

- *Type:* string

PostgreSQL service timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#timezone ManagedDatabasePostgresql#timezone}

---

##### `TrackActivityQuerySize`<sup>Optional</sup> <a name="TrackActivityQuerySize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackActivityQuerySize"></a>

```csharp
public double TrackActivityQuerySize { get; set; }
```

- *Type:* double

Specifies the number of bytes reserved to track the currently executing command for each active session.

Changing this parameter causes a service restart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#track_activity_query_size ManagedDatabasePostgresql#track_activity_query_size}

---

##### `TrackCommitTimestamp`<sup>Optional</sup> <a name="TrackCommitTimestamp" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackCommitTimestamp"></a>

```csharp
public string TrackCommitTimestamp { get; set; }
```

- *Type:* string

Record commit time of transactions. Changing this parameter causes a service restart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#track_commit_timestamp ManagedDatabasePostgresql#track_commit_timestamp}

---

##### `TrackFunctions`<sup>Optional</sup> <a name="TrackFunctions" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackFunctions"></a>

```csharp
public string TrackFunctions { get; set; }
```

- *Type:* string

Enables tracking of function call counts and time used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#track_functions ManagedDatabasePostgresql#track_functions}

---

##### `TrackIoTiming`<sup>Optional</sup> <a name="TrackIoTiming" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.trackIoTiming"></a>

```csharp
public string TrackIoTiming { get; set; }
```

- *Type:* string

Enables timing of database I/O calls.

The default is `off`. When on, it will repeatedly query the operating system for the current time, which may cause significant overhead on some platforms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#track_io_timing ManagedDatabasePostgresql#track_io_timing}

---

##### `Variant`<sup>Optional</sup> <a name="Variant" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.variant"></a>

```csharp
public string Variant { get; set; }
```

- *Type:* string

Variant of the PostgreSQL service, may affect the features that are exposed by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#variant ManagedDatabasePostgresql#variant}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

PostgreSQL major version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#version ManagedDatabasePostgresql#version}

---

##### `WalSenderTimeout`<sup>Optional</sup> <a name="WalSenderTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.walSenderTimeout"></a>

```csharp
public double WalSenderTimeout { get; set; }
```

- *Type:* double

Terminate replication connections that are inactive for longer than this amount of time, in milliseconds.

Setting this value to zero disables the timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#wal_sender_timeout ManagedDatabasePostgresql#wal_sender_timeout}

---

##### `WalWriterDelay`<sup>Optional</sup> <a name="WalWriterDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.walWriterDelay"></a>

```csharp
public double WalWriterDelay { get; set; }
```

- *Type:* double

WAL flush interval in milliseconds.

The default is `200`. Setting this parameter to a lower value may negatively impact performance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#wal_writer_delay ManagedDatabasePostgresql#wal_writer_delay}

---

##### `WorkMem`<sup>Optional</sup> <a name="WorkMem" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties.property.workMem"></a>

```csharp
public double WorkMem { get; set; }
```

- *Type:* double

Sets the maximum amount of memory to be used by a query operation (such as a sort or hash table) before writing to temporary disk files, in MB.

The default is 1MB + 0.075% of total RAM (up to 32MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#work_mem ManagedDatabasePostgresql#work_mem}

---

### ManagedDatabasePostgresqlPropertiesMigration <a name="ManagedDatabasePostgresqlPropertiesMigration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabasePostgresqlPropertiesMigration {
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
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.dbname">Dbname</a></code> | <code>string</code> | Database name for bootstrapping the initial connection. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.host">Host</a></code> | <code>string</code> | Hostname or IP address of the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.ignoreDbs">IgnoreDbs</a></code> | <code>string</code> | Comma-separated list of databases, which should be ignored during migration (supported by MySQL and PostgreSQL only at the moment). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.ignoreRoles">IgnoreRoles</a></code> | <code>string</code> | Comma-separated list of database roles, which should be ignored during migration (supported by PostgreSQL only at the moment). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.method">Method</a></code> | <code>string</code> | The migration method to be used (currently supported only by Redis, Dragonfly, MySQL and PostgreSQL service types). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.password">Password</a></code> | <code>string</code> | Password for authentication with the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.port">Port</a></code> | <code>double</code> | Port number of the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.ssl">Ssl</a></code> | <code>object</code> | The server where to migrate data from is secured with SSL. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.username">Username</a></code> | <code>string</code> | User name for authentication with the server where to migrate data from. |

---

##### `Dbname`<sup>Optional</sup> <a name="Dbname" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.dbname"></a>

```csharp
public string Dbname { get; set; }
```

- *Type:* string

Database name for bootstrapping the initial connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#dbname ManagedDatabasePostgresql#dbname}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Hostname or IP address of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#host ManagedDatabasePostgresql#host}

---

##### `IgnoreDbs`<sup>Optional</sup> <a name="IgnoreDbs" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.ignoreDbs"></a>

```csharp
public string IgnoreDbs { get; set; }
```

- *Type:* string

Comma-separated list of databases, which should be ignored during migration (supported by MySQL and PostgreSQL only at the moment).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#ignore_dbs ManagedDatabasePostgresql#ignore_dbs}

---

##### `IgnoreRoles`<sup>Optional</sup> <a name="IgnoreRoles" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.ignoreRoles"></a>

```csharp
public string IgnoreRoles { get; set; }
```

- *Type:* string

Comma-separated list of database roles, which should be ignored during migration (supported by PostgreSQL only at the moment).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#ignore_roles ManagedDatabasePostgresql#ignore_roles}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

The migration method to be used (currently supported only by Redis, Dragonfly, MySQL and PostgreSQL service types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#method ManagedDatabasePostgresql#method}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#password ManagedDatabasePostgresql#password}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Port number of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#port ManagedDatabasePostgresql#port}

---

##### `Ssl`<sup>Optional</sup> <a name="Ssl" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.ssl"></a>

```csharp
public object Ssl { get; set; }
```

- *Type:* object

The server where to migrate data from is secured with SSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#ssl ManagedDatabasePostgresql#ssl}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

User name for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#username ManagedDatabasePostgresql#username}

---

### ManagedDatabasePostgresqlPropertiesPgaudit <a name="ManagedDatabasePostgresqlPropertiesPgaudit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabasePostgresqlPropertiesPgaudit {
    object FeatureEnabled = null,
    string[] Log = null,
    object LogCatalog = null,
    object LogClient = null,
    string LogLevel = null,
    double LogMaxStringLength = null,
    object LogNestedStatements = null,
    object LogParameter = null,
    double LogParameterMaxSize = null,
    object LogRelation = null,
    object LogRows = null,
    object LogStatement = null,
    object LogStatementOnce = null,
    string Role = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.featureEnabled">FeatureEnabled</a></code> | <code>object</code> | Enable pgaudit extension. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.log">Log</a></code> | <code>string[]</code> | Log. Specifies which classes of statements will be logged by session audit logging. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logCatalog">LogCatalog</a></code> | <code>object</code> | Log Catalog. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logClient">LogClient</a></code> | <code>object</code> | Log Client. Specifies whether log messages will be visible to a client process such as psql. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logLevel">LogLevel</a></code> | <code>string</code> | Log level. Specifies the log level that will be used for log entries. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logMaxStringLength">LogMaxStringLength</a></code> | <code>double</code> | Log Max String Length. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logNestedStatements">LogNestedStatements</a></code> | <code>object</code> | Log Nested Statements. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logParameter">LogParameter</a></code> | <code>object</code> | Log Parameter. Specifies that audit logging should include the parameters that were passed with the statement. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logParameterMaxSize">LogParameterMaxSize</a></code> | <code>double</code> | Log Parameter Max Size. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logRelation">LogRelation</a></code> | <code>object</code> | Log Relation. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logRows">LogRows</a></code> | <code>object</code> | Log Rows. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logStatement">LogStatement</a></code> | <code>object</code> | Log Statement. Specifies whether logging will include the statement text and parameters (if enabled). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logStatementOnce">LogStatementOnce</a></code> | <code>object</code> | Log Statement Once. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.role">Role</a></code> | <code>string</code> | Role. Specifies the master role to use for object audit logging. |

---

##### `FeatureEnabled`<sup>Optional</sup> <a name="FeatureEnabled" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.featureEnabled"></a>

```csharp
public object FeatureEnabled { get; set; }
```

- *Type:* object

Enable pgaudit extension.

Enable pgaudit extension. When enabled, pgaudit extension will be automatically installed.Otherwise, extension will be uninstalled but auditing configurations will be preserved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#feature_enabled ManagedDatabasePostgresql#feature_enabled}

---

##### `Log`<sup>Optional</sup> <a name="Log" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.log"></a>

```csharp
public string[] Log { get; set; }
```

- *Type:* string[]

Log. Specifies which classes of statements will be logged by session audit logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#log ManagedDatabasePostgresql#log}

---

##### `LogCatalog`<sup>Optional</sup> <a name="LogCatalog" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logCatalog"></a>

```csharp
public object LogCatalog { get; set; }
```

- *Type:* object

Log Catalog.

Specifies that session logging should be enabled in the case where all relations
in a statement are in pg_catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#log_catalog ManagedDatabasePostgresql#log_catalog}

---

##### `LogClient`<sup>Optional</sup> <a name="LogClient" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logClient"></a>

```csharp
public object LogClient { get; set; }
```

- *Type:* object

Log Client. Specifies whether log messages will be visible to a client process such as psql.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#log_client ManagedDatabasePostgresql#log_client}

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logLevel"></a>

```csharp
public string LogLevel { get; set; }
```

- *Type:* string

Log level. Specifies the log level that will be used for log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#log_level ManagedDatabasePostgresql#log_level}

---

##### `LogMaxStringLength`<sup>Optional</sup> <a name="LogMaxStringLength" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logMaxStringLength"></a>

```csharp
public double LogMaxStringLength { get; set; }
```

- *Type:* double

Log Max String Length.

Crop parameters representation and whole statements if they exceed this threshold.
A (default) value of -1 disable the truncation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#log_max_string_length ManagedDatabasePostgresql#log_max_string_length}

---

##### `LogNestedStatements`<sup>Optional</sup> <a name="LogNestedStatements" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logNestedStatements"></a>

```csharp
public object LogNestedStatements { get; set; }
```

- *Type:* object

Log Nested Statements.

This GUC allows to turn off logging nested statements, that is, statements that are
executed as part of another ExecutorRun.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#log_nested_statements ManagedDatabasePostgresql#log_nested_statements}

---

##### `LogParameter`<sup>Optional</sup> <a name="LogParameter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logParameter"></a>

```csharp
public object LogParameter { get; set; }
```

- *Type:* object

Log Parameter. Specifies that audit logging should include the parameters that were passed with the statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#log_parameter ManagedDatabasePostgresql#log_parameter}

---

##### `LogParameterMaxSize`<sup>Optional</sup> <a name="LogParameterMaxSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logParameterMaxSize"></a>

```csharp
public double LogParameterMaxSize { get; set; }
```

- *Type:* double

Log Parameter Max Size.

Specifies that parameter values longer than this setting (in bytes) should not be logged,
but replaced with <long param suppressed>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#log_parameter_max_size ManagedDatabasePostgresql#log_parameter_max_size}

---

##### `LogRelation`<sup>Optional</sup> <a name="LogRelation" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logRelation"></a>

```csharp
public object LogRelation { get; set; }
```

- *Type:* object

Log Relation.

Specifies whether session audit logging should create a separate log entry
for each relation (TABLE, VIEW, etc.) referenced in a SELECT or DML statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#log_relation ManagedDatabasePostgresql#log_relation}

---

##### `LogRows`<sup>Optional</sup> <a name="LogRows" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logRows"></a>

```csharp
public object LogRows { get; set; }
```

- *Type:* object

Log Rows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#log_rows ManagedDatabasePostgresql#log_rows}

---

##### `LogStatement`<sup>Optional</sup> <a name="LogStatement" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logStatement"></a>

```csharp
public object LogStatement { get; set; }
```

- *Type:* object

Log Statement. Specifies whether logging will include the statement text and parameters (if enabled).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#log_statement ManagedDatabasePostgresql#log_statement}

---

##### `LogStatementOnce`<sup>Optional</sup> <a name="LogStatementOnce" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.logStatementOnce"></a>

```csharp
public object LogStatementOnce { get; set; }
```

- *Type:* object

Log Statement Once.

Specifies whether logging will include the statement text and parameters with
the first log entry for a statement/substatement combination or with every entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#log_statement_once ManagedDatabasePostgresql#log_statement_once}

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Role. Specifies the master role to use for object audit logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#role ManagedDatabasePostgresql#role}

---

### ManagedDatabasePostgresqlPropertiesPgbouncer <a name="ManagedDatabasePostgresqlPropertiesPgbouncer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabasePostgresqlPropertiesPgbouncer {
    double AutodbIdleTimeout = null,
    double AutodbMaxDbConnections = null,
    string AutodbPoolMode = null,
    double AutodbPoolSize = null,
    string[] IgnoreStartupParameters = null,
    double MaxPreparedStatements = null,
    double MinPoolSize = null,
    double ServerIdleTimeout = null,
    double ServerLifetime = null,
    object ServerResetQueryAlways = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbIdleTimeout">AutodbIdleTimeout</a></code> | <code>double</code> | If the automatically created database pools have been unused this many seconds, they are freed. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbMaxDbConnections">AutodbMaxDbConnections</a></code> | <code>double</code> | Do not allow more than this many server connections per database (regardless of user). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbPoolMode">AutodbPoolMode</a></code> | <code>string</code> | PGBouncer pool mode. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbPoolSize">AutodbPoolSize</a></code> | <code>double</code> | If non-zero then create automatically a pool of that size per user when a pool doesn't exist. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.ignoreStartupParameters">IgnoreStartupParameters</a></code> | <code>string[]</code> | List of parameters to ignore when given in startup packet. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.maxPreparedStatements">MaxPreparedStatements</a></code> | <code>double</code> | PgBouncer tracks protocol-level named prepared statements related commands sent by the client in transaction and statement pooling modes when max_prepared_statements is set to a non-zero value. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.minPoolSize">MinPoolSize</a></code> | <code>double</code> | Add more server connections to pool if below this number. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.serverIdleTimeout">ServerIdleTimeout</a></code> | <code>double</code> | If a server connection has been idle more than this many seconds it will be dropped. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.serverLifetime">ServerLifetime</a></code> | <code>double</code> | The pooler will close an unused server connection that has been connected longer than this. [seconds]. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.serverResetQueryAlways">ServerResetQueryAlways</a></code> | <code>object</code> | Run server_reset_query (DISCARD ALL) in all pooling modes. |

---

##### `AutodbIdleTimeout`<sup>Optional</sup> <a name="AutodbIdleTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbIdleTimeout"></a>

```csharp
public double AutodbIdleTimeout { get; set; }
```

- *Type:* double

If the automatically created database pools have been unused this many seconds, they are freed.

If 0 then timeout is disabled. [seconds].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#autodb_idle_timeout ManagedDatabasePostgresql#autodb_idle_timeout}

---

##### `AutodbMaxDbConnections`<sup>Optional</sup> <a name="AutodbMaxDbConnections" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbMaxDbConnections"></a>

```csharp
public double AutodbMaxDbConnections { get; set; }
```

- *Type:* double

Do not allow more than this many server connections per database (regardless of user).

Setting it to 0 means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#autodb_max_db_connections ManagedDatabasePostgresql#autodb_max_db_connections}

---

##### `AutodbPoolMode`<sup>Optional</sup> <a name="AutodbPoolMode" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbPoolMode"></a>

```csharp
public string AutodbPoolMode { get; set; }
```

- *Type:* string

PGBouncer pool mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#autodb_pool_mode ManagedDatabasePostgresql#autodb_pool_mode}

---

##### `AutodbPoolSize`<sup>Optional</sup> <a name="AutodbPoolSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.autodbPoolSize"></a>

```csharp
public double AutodbPoolSize { get; set; }
```

- *Type:* double

If non-zero then create automatically a pool of that size per user when a pool doesn't exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#autodb_pool_size ManagedDatabasePostgresql#autodb_pool_size}

---

##### `IgnoreStartupParameters`<sup>Optional</sup> <a name="IgnoreStartupParameters" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.ignoreStartupParameters"></a>

```csharp
public string[] IgnoreStartupParameters { get; set; }
```

- *Type:* string[]

List of parameters to ignore when given in startup packet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#ignore_startup_parameters ManagedDatabasePostgresql#ignore_startup_parameters}

---

##### `MaxPreparedStatements`<sup>Optional</sup> <a name="MaxPreparedStatements" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.maxPreparedStatements"></a>

```csharp
public double MaxPreparedStatements { get; set; }
```

- *Type:* double

PgBouncer tracks protocol-level named prepared statements related commands sent by the client in transaction and statement pooling modes when max_prepared_statements is set to a non-zero value.

Setting it to 0 disables prepared statements. max_prepared_statements defaults to 100, and its maximum is 3000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#max_prepared_statements ManagedDatabasePostgresql#max_prepared_statements}

---

##### `MinPoolSize`<sup>Optional</sup> <a name="MinPoolSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.minPoolSize"></a>

```csharp
public double MinPoolSize { get; set; }
```

- *Type:* double

Add more server connections to pool if below this number.

Improves behavior when usual load comes suddenly back after period of total inactivity. The value is effectively capped at the pool size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#min_pool_size ManagedDatabasePostgresql#min_pool_size}

---

##### `ServerIdleTimeout`<sup>Optional</sup> <a name="ServerIdleTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.serverIdleTimeout"></a>

```csharp
public double ServerIdleTimeout { get; set; }
```

- *Type:* double

If a server connection has been idle more than this many seconds it will be dropped.

If 0 then timeout is disabled. [seconds].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#server_idle_timeout ManagedDatabasePostgresql#server_idle_timeout}

---

##### `ServerLifetime`<sup>Optional</sup> <a name="ServerLifetime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.serverLifetime"></a>

```csharp
public double ServerLifetime { get; set; }
```

- *Type:* double

The pooler will close an unused server connection that has been connected longer than this. [seconds].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#server_lifetime ManagedDatabasePostgresql#server_lifetime}

---

##### `ServerResetQueryAlways`<sup>Optional</sup> <a name="ServerResetQueryAlways" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer.property.serverResetQueryAlways"></a>

```csharp
public object ServerResetQueryAlways { get; set; }
```

- *Type:* object

Run server_reset_query (DISCARD ALL) in all pooling modes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#server_reset_query_always ManagedDatabasePostgresql#server_reset_query_always}

---

### ManagedDatabasePostgresqlPropertiesPglookout <a name="ManagedDatabasePostgresqlPropertiesPglookout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabasePostgresqlPropertiesPglookout {
    double MaxFailoverReplicationTimeLag = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout.property.maxFailoverReplicationTimeLag">MaxFailoverReplicationTimeLag</a></code> | <code>double</code> | Max Failover Replication Time Lag. Number of seconds of master unavailability before triggering database failover to standby. |

---

##### `MaxFailoverReplicationTimeLag`<sup>Optional</sup> <a name="MaxFailoverReplicationTimeLag" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout.property.maxFailoverReplicationTimeLag"></a>

```csharp
public double MaxFailoverReplicationTimeLag { get; set; }
```

- *Type:* double

Max Failover Replication Time Lag. Number of seconds of master unavailability before triggering database failover to standby.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#max_failover_replication_time_lag ManagedDatabasePostgresql#max_failover_replication_time_lag}

---

### ManagedDatabasePostgresqlPropertiesTimescaledb <a name="ManagedDatabasePostgresqlPropertiesTimescaledb" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabasePostgresqlPropertiesTimescaledb {
    double MaxBackgroundWorkers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb.property.maxBackgroundWorkers">MaxBackgroundWorkers</a></code> | <code>double</code> | The number of background workers for timescaledb operations. |

---

##### `MaxBackgroundWorkers`<sup>Optional</sup> <a name="MaxBackgroundWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb.property.maxBackgroundWorkers"></a>

```csharp
public double MaxBackgroundWorkers { get; set; }
```

- *Type:* double

The number of background workers for timescaledb operations.

You should configure this setting to the sum of your number of databases and the total number of concurrent background workers you want running at any given point in time. Changing this parameter causes a service restart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.27.0/docs/resources/managed_database_postgresql#max_background_workers ManagedDatabasePostgresql#max_background_workers}

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedDatabasePostgresqlComponentsList <a name="ManagedDatabasePostgresqlComponentsList" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabasePostgresqlComponentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.get"></a>

```csharp
private ManagedDatabasePostgresqlComponentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ManagedDatabasePostgresqlComponentsOutputReference <a name="ManagedDatabasePostgresqlComponentsOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabasePostgresqlComponentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.component">Component</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.route">Route</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.usage">Usage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponents">ManagedDatabasePostgresqlComponents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Component`<sup>Required</sup> <a name="Component" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.component"></a>

```csharp
public string Component { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Route`<sup>Required</sup> <a name="Route" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.route"></a>

```csharp
public string Route { get; }
```

- *Type:* string

---

##### `Usage`<sup>Required</sup> <a name="Usage" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.usage"></a>

```csharp
public string Usage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponentsOutputReference.property.internalValue"></a>

```csharp
public ManagedDatabasePostgresqlComponents InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlComponents">ManagedDatabasePostgresqlComponents</a>

---


### ManagedDatabasePostgresqlNetworkList <a name="ManagedDatabasePostgresqlNetworkList" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabasePostgresqlNetworkList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.get"></a>

```csharp
private ManagedDatabasePostgresqlNetworkOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagedDatabasePostgresqlNetworkOutputReference <a name="ManagedDatabasePostgresqlNetworkOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabasePostgresqlNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.familyInput">FamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.uuidInput">UuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.family">Family</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FamilyInput`<sup>Optional</sup> <a name="FamilyInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.familyInput"></a>

```csharp
public string FamilyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UuidInput`<sup>Optional</sup> <a name="UuidInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.uuidInput"></a>

```csharp
public string UuidInput { get; }
```

- *Type:* string

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.family"></a>

```csharp
public string Family { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNetworkOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagedDatabasePostgresqlNodeStatesList <a name="ManagedDatabasePostgresqlNodeStatesList" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabasePostgresqlNodeStatesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.get"></a>

```csharp
private ManagedDatabasePostgresqlNodeStatesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ManagedDatabasePostgresqlNodeStatesOutputReference <a name="ManagedDatabasePostgresqlNodeStatesOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabasePostgresqlNodeStatesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStates">ManagedDatabasePostgresqlNodeStates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStatesOutputReference.property.internalValue"></a>

```csharp
public ManagedDatabasePostgresqlNodeStates InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlNodeStates">ManagedDatabasePostgresqlNodeStates</a>

---


### ManagedDatabasePostgresqlPropertiesMigrationOutputReference <a name="ManagedDatabasePostgresqlPropertiesMigrationOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabasePostgresqlPropertiesMigrationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDbname` <a name="ResetDbname" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetDbname"></a>

```csharp
private void ResetDbname()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetIgnoreDbs` <a name="ResetIgnoreDbs" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetIgnoreDbs"></a>

```csharp
private void ResetIgnoreDbs()
```

##### `ResetIgnoreRoles` <a name="ResetIgnoreRoles" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetIgnoreRoles"></a>

```csharp
private void ResetIgnoreRoles()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetMethod"></a>

```csharp
private void ResetMethod()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetSsl` <a name="ResetSsl" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetSsl"></a>

```csharp
private void ResetSsl()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.dbnameInput">DbnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ignoreDbsInput">IgnoreDbsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ignoreRolesInput">IgnoreRolesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.sslInput">SslInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.dbname">Dbname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ignoreDbs">IgnoreDbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ignoreRoles">IgnoreRoles</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ssl">Ssl</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration">ManagedDatabasePostgresqlPropertiesMigration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DbnameInput`<sup>Optional</sup> <a name="DbnameInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.dbnameInput"></a>

```csharp
public string DbnameInput { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `IgnoreDbsInput`<sup>Optional</sup> <a name="IgnoreDbsInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ignoreDbsInput"></a>

```csharp
public string IgnoreDbsInput { get; }
```

- *Type:* string

---

##### `IgnoreRolesInput`<sup>Optional</sup> <a name="IgnoreRolesInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ignoreRolesInput"></a>

```csharp
public string IgnoreRolesInput { get; }
```

- *Type:* string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `SslInput`<sup>Optional</sup> <a name="SslInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.sslInput"></a>

```csharp
public object SslInput { get; }
```

- *Type:* object

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Dbname`<sup>Required</sup> <a name="Dbname" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.dbname"></a>

```csharp
public string Dbname { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `IgnoreDbs`<sup>Required</sup> <a name="IgnoreDbs" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ignoreDbs"></a>

```csharp
public string IgnoreDbs { get; }
```

- *Type:* string

---

##### `IgnoreRoles`<sup>Required</sup> <a name="IgnoreRoles" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ignoreRoles"></a>

```csharp
public string IgnoreRoles { get; }
```

- *Type:* string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Ssl`<sup>Required</sup> <a name="Ssl" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.ssl"></a>

```csharp
public object Ssl { get; }
```

- *Type:* object

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference.property.internalValue"></a>

```csharp
public ManagedDatabasePostgresqlPropertiesMigration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration">ManagedDatabasePostgresqlPropertiesMigration</a>

---


### ManagedDatabasePostgresqlPropertiesOutputReference <a name="ManagedDatabasePostgresqlPropertiesOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabasePostgresqlPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPgaudit">PutPgaudit</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxConnections">ResetMaxConnections</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxSyncWorkersPerSubscription">ResetMaxSyncWorkersPerSubscription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxWalSenders">ResetMaxWalSenders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxWorkerProcesses">ResetMaxWorkerProcesses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMigration">ResetMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPasswordEncryption">ResetPasswordEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgaudit">ResetPgaudit</a></code> | *No description.* |
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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMigration` <a name="PutMigration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putMigration"></a>

```csharp
private void PutMigration(ManagedDatabasePostgresqlPropertiesMigration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putMigration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration">ManagedDatabasePostgresqlPropertiesMigration</a>

---

##### `PutPgaudit` <a name="PutPgaudit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPgaudit"></a>

```csharp
private void PutPgaudit(ManagedDatabasePostgresqlPropertiesPgaudit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPgaudit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit">ManagedDatabasePostgresqlPropertiesPgaudit</a>

---

##### `PutPgbouncer` <a name="PutPgbouncer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPgbouncer"></a>

```csharp
private void PutPgbouncer(ManagedDatabasePostgresqlPropertiesPgbouncer Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPgbouncer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer">ManagedDatabasePostgresqlPropertiesPgbouncer</a>

---

##### `PutPglookout` <a name="PutPglookout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPglookout"></a>

```csharp
private void PutPglookout(ManagedDatabasePostgresqlPropertiesPglookout Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putPglookout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout">ManagedDatabasePostgresqlPropertiesPglookout</a>

---

##### `PutTimescaledb` <a name="PutTimescaledb" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putTimescaledb"></a>

```csharp
private void PutTimescaledb(ManagedDatabasePostgresqlPropertiesTimescaledb Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.putTimescaledb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb">ManagedDatabasePostgresqlPropertiesTimescaledb</a>

---

##### `ResetAdminPassword` <a name="ResetAdminPassword" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAdminPassword"></a>

```csharp
private void ResetAdminPassword()
```

##### `ResetAdminUsername` <a name="ResetAdminUsername" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAdminUsername"></a>

```csharp
private void ResetAdminUsername()
```

##### `ResetAutomaticUtilityNetworkIpFilter` <a name="ResetAutomaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter"></a>

```csharp
private void ResetAutomaticUtilityNetworkIpFilter()
```

##### `ResetAutovacuumAnalyzeScaleFactor` <a name="ResetAutovacuumAnalyzeScaleFactor" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumAnalyzeScaleFactor"></a>

```csharp
private void ResetAutovacuumAnalyzeScaleFactor()
```

##### `ResetAutovacuumAnalyzeThreshold` <a name="ResetAutovacuumAnalyzeThreshold" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumAnalyzeThreshold"></a>

```csharp
private void ResetAutovacuumAnalyzeThreshold()
```

##### `ResetAutovacuumFreezeMaxAge` <a name="ResetAutovacuumFreezeMaxAge" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumFreezeMaxAge"></a>

```csharp
private void ResetAutovacuumFreezeMaxAge()
```

##### `ResetAutovacuumMaxWorkers` <a name="ResetAutovacuumMaxWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumMaxWorkers"></a>

```csharp
private void ResetAutovacuumMaxWorkers()
```

##### `ResetAutovacuumNaptime` <a name="ResetAutovacuumNaptime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumNaptime"></a>

```csharp
private void ResetAutovacuumNaptime()
```

##### `ResetAutovacuumVacuumCostDelay` <a name="ResetAutovacuumVacuumCostDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumCostDelay"></a>

```csharp
private void ResetAutovacuumVacuumCostDelay()
```

##### `ResetAutovacuumVacuumCostLimit` <a name="ResetAutovacuumVacuumCostLimit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumCostLimit"></a>

```csharp
private void ResetAutovacuumVacuumCostLimit()
```

##### `ResetAutovacuumVacuumScaleFactor` <a name="ResetAutovacuumVacuumScaleFactor" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumScaleFactor"></a>

```csharp
private void ResetAutovacuumVacuumScaleFactor()
```

##### `ResetAutovacuumVacuumThreshold` <a name="ResetAutovacuumVacuumThreshold" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetAutovacuumVacuumThreshold"></a>

```csharp
private void ResetAutovacuumVacuumThreshold()
```

##### `ResetBackupHour` <a name="ResetBackupHour" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBackupHour"></a>

```csharp
private void ResetBackupHour()
```

##### `ResetBackupMinute` <a name="ResetBackupMinute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBackupMinute"></a>

```csharp
private void ResetBackupMinute()
```

##### `ResetBgwriterDelay` <a name="ResetBgwriterDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterDelay"></a>

```csharp
private void ResetBgwriterDelay()
```

##### `ResetBgwriterFlushAfter` <a name="ResetBgwriterFlushAfter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterFlushAfter"></a>

```csharp
private void ResetBgwriterFlushAfter()
```

##### `ResetBgwriterLruMaxpages` <a name="ResetBgwriterLruMaxpages" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterLruMaxpages"></a>

```csharp
private void ResetBgwriterLruMaxpages()
```

##### `ResetBgwriterLruMultiplier` <a name="ResetBgwriterLruMultiplier" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetBgwriterLruMultiplier"></a>

```csharp
private void ResetBgwriterLruMultiplier()
```

##### `ResetDeadlockTimeout` <a name="ResetDeadlockTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetDeadlockTimeout"></a>

```csharp
private void ResetDeadlockTimeout()
```

##### `ResetDefaultToastCompression` <a name="ResetDefaultToastCompression" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetDefaultToastCompression"></a>

```csharp
private void ResetDefaultToastCompression()
```

##### `ResetIdleInTransactionSessionTimeout` <a name="ResetIdleInTransactionSessionTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetIdleInTransactionSessionTimeout"></a>

```csharp
private void ResetIdleInTransactionSessionTimeout()
```

##### `ResetIpFilter` <a name="ResetIpFilter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetIpFilter"></a>

```csharp
private void ResetIpFilter()
```

##### `ResetJit` <a name="ResetJit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetJit"></a>

```csharp
private void ResetJit()
```

##### `ResetLogAutovacuumMinDuration` <a name="ResetLogAutovacuumMinDuration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogAutovacuumMinDuration"></a>

```csharp
private void ResetLogAutovacuumMinDuration()
```

##### `ResetLogErrorVerbosity` <a name="ResetLogErrorVerbosity" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogErrorVerbosity"></a>

```csharp
private void ResetLogErrorVerbosity()
```

##### `ResetLogLinePrefix` <a name="ResetLogLinePrefix" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogLinePrefix"></a>

```csharp
private void ResetLogLinePrefix()
```

##### `ResetLogMinDurationStatement` <a name="ResetLogMinDurationStatement" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogMinDurationStatement"></a>

```csharp
private void ResetLogMinDurationStatement()
```

##### `ResetLogTempFiles` <a name="ResetLogTempFiles" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetLogTempFiles"></a>

```csharp
private void ResetLogTempFiles()
```

##### `ResetMaxConnections` <a name="ResetMaxConnections" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxConnections"></a>

```csharp
private void ResetMaxConnections()
```

##### `ResetMaxFilesPerProcess` <a name="ResetMaxFilesPerProcess" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxFilesPerProcess"></a>

```csharp
private void ResetMaxFilesPerProcess()
```

##### `ResetMaxLocksPerTransaction` <a name="ResetMaxLocksPerTransaction" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxLocksPerTransaction"></a>

```csharp
private void ResetMaxLocksPerTransaction()
```

##### `ResetMaxLogicalReplicationWorkers` <a name="ResetMaxLogicalReplicationWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxLogicalReplicationWorkers"></a>

```csharp
private void ResetMaxLogicalReplicationWorkers()
```

##### `ResetMaxParallelWorkers` <a name="ResetMaxParallelWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxParallelWorkers"></a>

```csharp
private void ResetMaxParallelWorkers()
```

##### `ResetMaxParallelWorkersPerGather` <a name="ResetMaxParallelWorkersPerGather" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxParallelWorkersPerGather"></a>

```csharp
private void ResetMaxParallelWorkersPerGather()
```

##### `ResetMaxPredLocksPerTransaction` <a name="ResetMaxPredLocksPerTransaction" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxPredLocksPerTransaction"></a>

```csharp
private void ResetMaxPredLocksPerTransaction()
```

##### `ResetMaxPreparedTransactions` <a name="ResetMaxPreparedTransactions" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxPreparedTransactions"></a>

```csharp
private void ResetMaxPreparedTransactions()
```

##### `ResetMaxReplicationSlots` <a name="ResetMaxReplicationSlots" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxReplicationSlots"></a>

```csharp
private void ResetMaxReplicationSlots()
```

##### `ResetMaxSlotWalKeepSize` <a name="ResetMaxSlotWalKeepSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxSlotWalKeepSize"></a>

```csharp
private void ResetMaxSlotWalKeepSize()
```

##### `ResetMaxStackDepth` <a name="ResetMaxStackDepth" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxStackDepth"></a>

```csharp
private void ResetMaxStackDepth()
```

##### `ResetMaxStandbyArchiveDelay` <a name="ResetMaxStandbyArchiveDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxStandbyArchiveDelay"></a>

```csharp
private void ResetMaxStandbyArchiveDelay()
```

##### `ResetMaxStandbyStreamingDelay` <a name="ResetMaxStandbyStreamingDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxStandbyStreamingDelay"></a>

```csharp
private void ResetMaxStandbyStreamingDelay()
```

##### `ResetMaxSyncWorkersPerSubscription` <a name="ResetMaxSyncWorkersPerSubscription" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxSyncWorkersPerSubscription"></a>

```csharp
private void ResetMaxSyncWorkersPerSubscription()
```

##### `ResetMaxWalSenders` <a name="ResetMaxWalSenders" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxWalSenders"></a>

```csharp
private void ResetMaxWalSenders()
```

##### `ResetMaxWorkerProcesses` <a name="ResetMaxWorkerProcesses" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMaxWorkerProcesses"></a>

```csharp
private void ResetMaxWorkerProcesses()
```

##### `ResetMigration` <a name="ResetMigration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetMigration"></a>

```csharp
private void ResetMigration()
```

##### `ResetPasswordEncryption` <a name="ResetPasswordEncryption" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPasswordEncryption"></a>

```csharp
private void ResetPasswordEncryption()
```

##### `ResetPgaudit` <a name="ResetPgaudit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgaudit"></a>

```csharp
private void ResetPgaudit()
```

##### `ResetPgbouncer` <a name="ResetPgbouncer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgbouncer"></a>

```csharp
private void ResetPgbouncer()
```

##### `ResetPglookout` <a name="ResetPglookout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPglookout"></a>

```csharp
private void ResetPglookout()
```

##### `ResetPgPartmanBgwInterval` <a name="ResetPgPartmanBgwInterval" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgPartmanBgwInterval"></a>

```csharp
private void ResetPgPartmanBgwInterval()
```

##### `ResetPgPartmanBgwRole` <a name="ResetPgPartmanBgwRole" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgPartmanBgwRole"></a>

```csharp
private void ResetPgPartmanBgwRole()
```

##### `ResetPgStatMonitorEnable` <a name="ResetPgStatMonitorEnable" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatMonitorEnable"></a>

```csharp
private void ResetPgStatMonitorEnable()
```

##### `ResetPgStatMonitorPgsmEnableQueryPlan` <a name="ResetPgStatMonitorPgsmEnableQueryPlan" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatMonitorPgsmEnableQueryPlan"></a>

```csharp
private void ResetPgStatMonitorPgsmEnableQueryPlan()
```

##### `ResetPgStatMonitorPgsmMaxBuckets` <a name="ResetPgStatMonitorPgsmMaxBuckets" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatMonitorPgsmMaxBuckets"></a>

```csharp
private void ResetPgStatMonitorPgsmMaxBuckets()
```

##### `ResetPgStatStatementsTrack` <a name="ResetPgStatStatementsTrack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPgStatStatementsTrack"></a>

```csharp
private void ResetPgStatStatementsTrack()
```

##### `ResetPublicAccess` <a name="ResetPublicAccess" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetPublicAccess"></a>

```csharp
private void ResetPublicAccess()
```

##### `ResetServiceLog` <a name="ResetServiceLog" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetServiceLog"></a>

```csharp
private void ResetServiceLog()
```

##### `ResetSharedBuffersPercentage` <a name="ResetSharedBuffersPercentage" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetSharedBuffersPercentage"></a>

```csharp
private void ResetSharedBuffersPercentage()
```

##### `ResetSynchronousReplication` <a name="ResetSynchronousReplication" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetSynchronousReplication"></a>

```csharp
private void ResetSynchronousReplication()
```

##### `ResetTempFileLimit` <a name="ResetTempFileLimit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTempFileLimit"></a>

```csharp
private void ResetTempFileLimit()
```

##### `ResetTimescaledb` <a name="ResetTimescaledb" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTimescaledb"></a>

```csharp
private void ResetTimescaledb()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTimezone"></a>

```csharp
private void ResetTimezone()
```

##### `ResetTrackActivityQuerySize` <a name="ResetTrackActivityQuerySize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackActivityQuerySize"></a>

```csharp
private void ResetTrackActivityQuerySize()
```

##### `ResetTrackCommitTimestamp` <a name="ResetTrackCommitTimestamp" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackCommitTimestamp"></a>

```csharp
private void ResetTrackCommitTimestamp()
```

##### `ResetTrackFunctions` <a name="ResetTrackFunctions" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackFunctions"></a>

```csharp
private void ResetTrackFunctions()
```

##### `ResetTrackIoTiming` <a name="ResetTrackIoTiming" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetTrackIoTiming"></a>

```csharp
private void ResetTrackIoTiming()
```

##### `ResetVariant` <a name="ResetVariant" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetVariant"></a>

```csharp
private void ResetVariant()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```

##### `ResetWalSenderTimeout` <a name="ResetWalSenderTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetWalSenderTimeout"></a>

```csharp
private void ResetWalSenderTimeout()
```

##### `ResetWalWriterDelay` <a name="ResetWalWriterDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetWalWriterDelay"></a>

```csharp
private void ResetWalWriterDelay()
```

##### `ResetWorkMem` <a name="ResetWorkMem" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.resetWorkMem"></a>

```csharp
private void ResetWorkMem()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.migration">Migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference">ManagedDatabasePostgresqlPropertiesMigrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgaudit">Pgaudit</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference">ManagedDatabasePostgresqlPropertiesPgauditOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgbouncer">Pgbouncer</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference">ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pglookout">Pglookout</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference">ManagedDatabasePostgresqlPropertiesPglookoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timescaledb">Timescaledb</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference">ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminPasswordInput">AdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminUsernameInput">AdminUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput">AutomaticUtilityNetworkIpFilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeScaleFactorInput">AutovacuumAnalyzeScaleFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeThresholdInput">AutovacuumAnalyzeThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumFreezeMaxAgeInput">AutovacuumFreezeMaxAgeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumMaxWorkersInput">AutovacuumMaxWorkersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumNaptimeInput">AutovacuumNaptimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostDelayInput">AutovacuumVacuumCostDelayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostLimitInput">AutovacuumVacuumCostLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumScaleFactorInput">AutovacuumVacuumScaleFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumThresholdInput">AutovacuumVacuumThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupHourInput">BackupHourInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupMinuteInput">BackupMinuteInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterDelayInput">BgwriterDelayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterFlushAfterInput">BgwriterFlushAfterInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMaxpagesInput">BgwriterLruMaxpagesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMultiplierInput">BgwriterLruMultiplierInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.deadlockTimeoutInput">DeadlockTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.defaultToastCompressionInput">DefaultToastCompressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.idleInTransactionSessionTimeoutInput">IdleInTransactionSessionTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.ipFilterInput">IpFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.jitInput">JitInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logAutovacuumMinDurationInput">LogAutovacuumMinDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logErrorVerbosityInput">LogErrorVerbosityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logLinePrefixInput">LogLinePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logMinDurationStatementInput">LogMinDurationStatementInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logTempFilesInput">LogTempFilesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxConnectionsInput">MaxConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxFilesPerProcessInput">MaxFilesPerProcessInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLocksPerTransactionInput">MaxLocksPerTransactionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLogicalReplicationWorkersInput">MaxLogicalReplicationWorkersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkersInput">MaxParallelWorkersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkersPerGatherInput">MaxParallelWorkersPerGatherInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPredLocksPerTransactionInput">MaxPredLocksPerTransactionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPreparedTransactionsInput">MaxPreparedTransactionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxReplicationSlotsInput">MaxReplicationSlotsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxSlotWalKeepSizeInput">MaxSlotWalKeepSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStackDepthInput">MaxStackDepthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyArchiveDelayInput">MaxStandbyArchiveDelayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyStreamingDelayInput">MaxStandbyStreamingDelayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxSyncWorkersPerSubscriptionInput">MaxSyncWorkersPerSubscriptionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWalSendersInput">MaxWalSendersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWorkerProcessesInput">MaxWorkerProcessesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.migrationInput">MigrationInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration">ManagedDatabasePostgresqlPropertiesMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.passwordEncryptionInput">PasswordEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgauditInput">PgauditInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit">ManagedDatabasePostgresqlPropertiesPgaudit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgbouncerInput">PgbouncerInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer">ManagedDatabasePostgresqlPropertiesPgbouncer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pglookoutInput">PglookoutInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout">ManagedDatabasePostgresqlPropertiesPglookout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwIntervalInput">PgPartmanBgwIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwRoleInput">PgPartmanBgwRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorEnableInput">PgStatMonitorEnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmEnableQueryPlanInput">PgStatMonitorPgsmEnableQueryPlanInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmMaxBucketsInput">PgStatMonitorPgsmMaxBucketsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatStatementsTrackInput">PgStatStatementsTrackInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.publicAccessInput">PublicAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.serviceLogInput">ServiceLogInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.sharedBuffersPercentageInput">SharedBuffersPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.synchronousReplicationInput">SynchronousReplicationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.tempFileLimitInput">TempFileLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timescaledbInput">TimescaledbInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb">ManagedDatabasePostgresqlPropertiesTimescaledb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackActivityQuerySizeInput">TrackActivityQuerySizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackCommitTimestampInput">TrackCommitTimestampInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackFunctionsInput">TrackFunctionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackIoTimingInput">TrackIoTimingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.variantInput">VariantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walSenderTimeoutInput">WalSenderTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walWriterDelayInput">WalWriterDelayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.workMemInput">WorkMemInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminPassword">AdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminUsername">AdminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.automaticUtilityNetworkIpFilter">AutomaticUtilityNetworkIpFilter</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeScaleFactor">AutovacuumAnalyzeScaleFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeThreshold">AutovacuumAnalyzeThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumFreezeMaxAge">AutovacuumFreezeMaxAge</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumMaxWorkers">AutovacuumMaxWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumNaptime">AutovacuumNaptime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostDelay">AutovacuumVacuumCostDelay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostLimit">AutovacuumVacuumCostLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumScaleFactor">AutovacuumVacuumScaleFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumThreshold">AutovacuumVacuumThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupHour">BackupHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupMinute">BackupMinute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterDelay">BgwriterDelay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterFlushAfter">BgwriterFlushAfter</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMaxpages">BgwriterLruMaxpages</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMultiplier">BgwriterLruMultiplier</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.deadlockTimeout">DeadlockTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.defaultToastCompression">DefaultToastCompression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.idleInTransactionSessionTimeout">IdleInTransactionSessionTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.ipFilter">IpFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.jit">Jit</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logAutovacuumMinDuration">LogAutovacuumMinDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logErrorVerbosity">LogErrorVerbosity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logLinePrefix">LogLinePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logMinDurationStatement">LogMinDurationStatement</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logTempFiles">LogTempFiles</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxConnections">MaxConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxFilesPerProcess">MaxFilesPerProcess</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLocksPerTransaction">MaxLocksPerTransaction</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLogicalReplicationWorkers">MaxLogicalReplicationWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkers">MaxParallelWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkersPerGather">MaxParallelWorkersPerGather</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPredLocksPerTransaction">MaxPredLocksPerTransaction</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPreparedTransactions">MaxPreparedTransactions</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxReplicationSlots">MaxReplicationSlots</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxSlotWalKeepSize">MaxSlotWalKeepSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStackDepth">MaxStackDepth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyArchiveDelay">MaxStandbyArchiveDelay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyStreamingDelay">MaxStandbyStreamingDelay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxSyncWorkersPerSubscription">MaxSyncWorkersPerSubscription</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWalSenders">MaxWalSenders</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWorkerProcesses">MaxWorkerProcesses</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.passwordEncryption">PasswordEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwInterval">PgPartmanBgwInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwRole">PgPartmanBgwRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorEnable">PgStatMonitorEnable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmEnableQueryPlan">PgStatMonitorPgsmEnableQueryPlan</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmMaxBuckets">PgStatMonitorPgsmMaxBuckets</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatStatementsTrack">PgStatStatementsTrack</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.publicAccess">PublicAccess</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.serviceLog">ServiceLog</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.sharedBuffersPercentage">SharedBuffersPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.synchronousReplication">SynchronousReplication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.tempFileLimit">TempFileLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackActivityQuerySize">TrackActivityQuerySize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackCommitTimestamp">TrackCommitTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackFunctions">TrackFunctions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackIoTiming">TrackIoTiming</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.variant">Variant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walSenderTimeout">WalSenderTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walWriterDelay">WalWriterDelay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.workMem">WorkMem</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Migration`<sup>Required</sup> <a name="Migration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.migration"></a>

```csharp
public ManagedDatabasePostgresqlPropertiesMigrationOutputReference Migration { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigrationOutputReference">ManagedDatabasePostgresqlPropertiesMigrationOutputReference</a>

---

##### `Pgaudit`<sup>Required</sup> <a name="Pgaudit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgaudit"></a>

```csharp
public ManagedDatabasePostgresqlPropertiesPgauditOutputReference Pgaudit { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference">ManagedDatabasePostgresqlPropertiesPgauditOutputReference</a>

---

##### `Pgbouncer`<sup>Required</sup> <a name="Pgbouncer" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgbouncer"></a>

```csharp
public ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference Pgbouncer { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference">ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference</a>

---

##### `Pglookout`<sup>Required</sup> <a name="Pglookout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pglookout"></a>

```csharp
public ManagedDatabasePostgresqlPropertiesPglookoutOutputReference Pglookout { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference">ManagedDatabasePostgresqlPropertiesPglookoutOutputReference</a>

---

##### `Timescaledb`<sup>Required</sup> <a name="Timescaledb" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timescaledb"></a>

```csharp
public ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference Timescaledb { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference">ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference</a>

---

##### `AdminPasswordInput`<sup>Optional</sup> <a name="AdminPasswordInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminPasswordInput"></a>

```csharp
public string AdminPasswordInput { get; }
```

- *Type:* string

---

##### `AdminUsernameInput`<sup>Optional</sup> <a name="AdminUsernameInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminUsernameInput"></a>

```csharp
public string AdminUsernameInput { get; }
```

- *Type:* string

---

##### `AutomaticUtilityNetworkIpFilterInput`<sup>Optional</sup> <a name="AutomaticUtilityNetworkIpFilterInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput"></a>

```csharp
public object AutomaticUtilityNetworkIpFilterInput { get; }
```

- *Type:* object

---

##### `AutovacuumAnalyzeScaleFactorInput`<sup>Optional</sup> <a name="AutovacuumAnalyzeScaleFactorInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeScaleFactorInput"></a>

```csharp
public double AutovacuumAnalyzeScaleFactorInput { get; }
```

- *Type:* double

---

##### `AutovacuumAnalyzeThresholdInput`<sup>Optional</sup> <a name="AutovacuumAnalyzeThresholdInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeThresholdInput"></a>

```csharp
public double AutovacuumAnalyzeThresholdInput { get; }
```

- *Type:* double

---

##### `AutovacuumFreezeMaxAgeInput`<sup>Optional</sup> <a name="AutovacuumFreezeMaxAgeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumFreezeMaxAgeInput"></a>

```csharp
public double AutovacuumFreezeMaxAgeInput { get; }
```

- *Type:* double

---

##### `AutovacuumMaxWorkersInput`<sup>Optional</sup> <a name="AutovacuumMaxWorkersInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumMaxWorkersInput"></a>

```csharp
public double AutovacuumMaxWorkersInput { get; }
```

- *Type:* double

---

##### `AutovacuumNaptimeInput`<sup>Optional</sup> <a name="AutovacuumNaptimeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumNaptimeInput"></a>

```csharp
public double AutovacuumNaptimeInput { get; }
```

- *Type:* double

---

##### `AutovacuumVacuumCostDelayInput`<sup>Optional</sup> <a name="AutovacuumVacuumCostDelayInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostDelayInput"></a>

```csharp
public double AutovacuumVacuumCostDelayInput { get; }
```

- *Type:* double

---

##### `AutovacuumVacuumCostLimitInput`<sup>Optional</sup> <a name="AutovacuumVacuumCostLimitInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostLimitInput"></a>

```csharp
public double AutovacuumVacuumCostLimitInput { get; }
```

- *Type:* double

---

##### `AutovacuumVacuumScaleFactorInput`<sup>Optional</sup> <a name="AutovacuumVacuumScaleFactorInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumScaleFactorInput"></a>

```csharp
public double AutovacuumVacuumScaleFactorInput { get; }
```

- *Type:* double

---

##### `AutovacuumVacuumThresholdInput`<sup>Optional</sup> <a name="AutovacuumVacuumThresholdInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumThresholdInput"></a>

```csharp
public double AutovacuumVacuumThresholdInput { get; }
```

- *Type:* double

---

##### `BackupHourInput`<sup>Optional</sup> <a name="BackupHourInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupHourInput"></a>

```csharp
public double BackupHourInput { get; }
```

- *Type:* double

---

##### `BackupMinuteInput`<sup>Optional</sup> <a name="BackupMinuteInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupMinuteInput"></a>

```csharp
public double BackupMinuteInput { get; }
```

- *Type:* double

---

##### `BgwriterDelayInput`<sup>Optional</sup> <a name="BgwriterDelayInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterDelayInput"></a>

```csharp
public double BgwriterDelayInput { get; }
```

- *Type:* double

---

##### `BgwriterFlushAfterInput`<sup>Optional</sup> <a name="BgwriterFlushAfterInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterFlushAfterInput"></a>

```csharp
public double BgwriterFlushAfterInput { get; }
```

- *Type:* double

---

##### `BgwriterLruMaxpagesInput`<sup>Optional</sup> <a name="BgwriterLruMaxpagesInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMaxpagesInput"></a>

```csharp
public double BgwriterLruMaxpagesInput { get; }
```

- *Type:* double

---

##### `BgwriterLruMultiplierInput`<sup>Optional</sup> <a name="BgwriterLruMultiplierInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMultiplierInput"></a>

```csharp
public double BgwriterLruMultiplierInput { get; }
```

- *Type:* double

---

##### `DeadlockTimeoutInput`<sup>Optional</sup> <a name="DeadlockTimeoutInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.deadlockTimeoutInput"></a>

```csharp
public double DeadlockTimeoutInput { get; }
```

- *Type:* double

---

##### `DefaultToastCompressionInput`<sup>Optional</sup> <a name="DefaultToastCompressionInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.defaultToastCompressionInput"></a>

```csharp
public string DefaultToastCompressionInput { get; }
```

- *Type:* string

---

##### `IdleInTransactionSessionTimeoutInput`<sup>Optional</sup> <a name="IdleInTransactionSessionTimeoutInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.idleInTransactionSessionTimeoutInput"></a>

```csharp
public double IdleInTransactionSessionTimeoutInput { get; }
```

- *Type:* double

---

##### `IpFilterInput`<sup>Optional</sup> <a name="IpFilterInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.ipFilterInput"></a>

```csharp
public string[] IpFilterInput { get; }
```

- *Type:* string[]

---

##### `JitInput`<sup>Optional</sup> <a name="JitInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.jitInput"></a>

```csharp
public object JitInput { get; }
```

- *Type:* object

---

##### `LogAutovacuumMinDurationInput`<sup>Optional</sup> <a name="LogAutovacuumMinDurationInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logAutovacuumMinDurationInput"></a>

```csharp
public double LogAutovacuumMinDurationInput { get; }
```

- *Type:* double

---

##### `LogErrorVerbosityInput`<sup>Optional</sup> <a name="LogErrorVerbosityInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logErrorVerbosityInput"></a>

```csharp
public string LogErrorVerbosityInput { get; }
```

- *Type:* string

---

##### `LogLinePrefixInput`<sup>Optional</sup> <a name="LogLinePrefixInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logLinePrefixInput"></a>

```csharp
public string LogLinePrefixInput { get; }
```

- *Type:* string

---

##### `LogMinDurationStatementInput`<sup>Optional</sup> <a name="LogMinDurationStatementInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logMinDurationStatementInput"></a>

```csharp
public double LogMinDurationStatementInput { get; }
```

- *Type:* double

---

##### `LogTempFilesInput`<sup>Optional</sup> <a name="LogTempFilesInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logTempFilesInput"></a>

```csharp
public double LogTempFilesInput { get; }
```

- *Type:* double

---

##### `MaxConnectionsInput`<sup>Optional</sup> <a name="MaxConnectionsInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxConnectionsInput"></a>

```csharp
public double MaxConnectionsInput { get; }
```

- *Type:* double

---

##### `MaxFilesPerProcessInput`<sup>Optional</sup> <a name="MaxFilesPerProcessInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxFilesPerProcessInput"></a>

```csharp
public double MaxFilesPerProcessInput { get; }
```

- *Type:* double

---

##### `MaxLocksPerTransactionInput`<sup>Optional</sup> <a name="MaxLocksPerTransactionInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLocksPerTransactionInput"></a>

```csharp
public double MaxLocksPerTransactionInput { get; }
```

- *Type:* double

---

##### `MaxLogicalReplicationWorkersInput`<sup>Optional</sup> <a name="MaxLogicalReplicationWorkersInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLogicalReplicationWorkersInput"></a>

```csharp
public double MaxLogicalReplicationWorkersInput { get; }
```

- *Type:* double

---

##### `MaxParallelWorkersInput`<sup>Optional</sup> <a name="MaxParallelWorkersInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkersInput"></a>

```csharp
public double MaxParallelWorkersInput { get; }
```

- *Type:* double

---

##### `MaxParallelWorkersPerGatherInput`<sup>Optional</sup> <a name="MaxParallelWorkersPerGatherInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkersPerGatherInput"></a>

```csharp
public double MaxParallelWorkersPerGatherInput { get; }
```

- *Type:* double

---

##### `MaxPredLocksPerTransactionInput`<sup>Optional</sup> <a name="MaxPredLocksPerTransactionInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPredLocksPerTransactionInput"></a>

```csharp
public double MaxPredLocksPerTransactionInput { get; }
```

- *Type:* double

---

##### `MaxPreparedTransactionsInput`<sup>Optional</sup> <a name="MaxPreparedTransactionsInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPreparedTransactionsInput"></a>

```csharp
public double MaxPreparedTransactionsInput { get; }
```

- *Type:* double

---

##### `MaxReplicationSlotsInput`<sup>Optional</sup> <a name="MaxReplicationSlotsInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxReplicationSlotsInput"></a>

```csharp
public double MaxReplicationSlotsInput { get; }
```

- *Type:* double

---

##### `MaxSlotWalKeepSizeInput`<sup>Optional</sup> <a name="MaxSlotWalKeepSizeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxSlotWalKeepSizeInput"></a>

```csharp
public double MaxSlotWalKeepSizeInput { get; }
```

- *Type:* double

---

##### `MaxStackDepthInput`<sup>Optional</sup> <a name="MaxStackDepthInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStackDepthInput"></a>

```csharp
public double MaxStackDepthInput { get; }
```

- *Type:* double

---

##### `MaxStandbyArchiveDelayInput`<sup>Optional</sup> <a name="MaxStandbyArchiveDelayInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyArchiveDelayInput"></a>

```csharp
public double MaxStandbyArchiveDelayInput { get; }
```

- *Type:* double

---

##### `MaxStandbyStreamingDelayInput`<sup>Optional</sup> <a name="MaxStandbyStreamingDelayInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyStreamingDelayInput"></a>

```csharp
public double MaxStandbyStreamingDelayInput { get; }
```

- *Type:* double

---

##### `MaxSyncWorkersPerSubscriptionInput`<sup>Optional</sup> <a name="MaxSyncWorkersPerSubscriptionInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxSyncWorkersPerSubscriptionInput"></a>

```csharp
public double MaxSyncWorkersPerSubscriptionInput { get; }
```

- *Type:* double

---

##### `MaxWalSendersInput`<sup>Optional</sup> <a name="MaxWalSendersInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWalSendersInput"></a>

```csharp
public double MaxWalSendersInput { get; }
```

- *Type:* double

---

##### `MaxWorkerProcessesInput`<sup>Optional</sup> <a name="MaxWorkerProcessesInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWorkerProcessesInput"></a>

```csharp
public double MaxWorkerProcessesInput { get; }
```

- *Type:* double

---

##### `MigrationInput`<sup>Optional</sup> <a name="MigrationInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.migrationInput"></a>

```csharp
public ManagedDatabasePostgresqlPropertiesMigration MigrationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesMigration">ManagedDatabasePostgresqlPropertiesMigration</a>

---

##### `PasswordEncryptionInput`<sup>Optional</sup> <a name="PasswordEncryptionInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.passwordEncryptionInput"></a>

```csharp
public string PasswordEncryptionInput { get; }
```

- *Type:* string

---

##### `PgauditInput`<sup>Optional</sup> <a name="PgauditInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgauditInput"></a>

```csharp
public ManagedDatabasePostgresqlPropertiesPgaudit PgauditInput { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit">ManagedDatabasePostgresqlPropertiesPgaudit</a>

---

##### `PgbouncerInput`<sup>Optional</sup> <a name="PgbouncerInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgbouncerInput"></a>

```csharp
public ManagedDatabasePostgresqlPropertiesPgbouncer PgbouncerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer">ManagedDatabasePostgresqlPropertiesPgbouncer</a>

---

##### `PglookoutInput`<sup>Optional</sup> <a name="PglookoutInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pglookoutInput"></a>

```csharp
public ManagedDatabasePostgresqlPropertiesPglookout PglookoutInput { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout">ManagedDatabasePostgresqlPropertiesPglookout</a>

---

##### `PgPartmanBgwIntervalInput`<sup>Optional</sup> <a name="PgPartmanBgwIntervalInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwIntervalInput"></a>

```csharp
public double PgPartmanBgwIntervalInput { get; }
```

- *Type:* double

---

##### `PgPartmanBgwRoleInput`<sup>Optional</sup> <a name="PgPartmanBgwRoleInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwRoleInput"></a>

```csharp
public string PgPartmanBgwRoleInput { get; }
```

- *Type:* string

---

##### `PgStatMonitorEnableInput`<sup>Optional</sup> <a name="PgStatMonitorEnableInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorEnableInput"></a>

```csharp
public object PgStatMonitorEnableInput { get; }
```

- *Type:* object

---

##### `PgStatMonitorPgsmEnableQueryPlanInput`<sup>Optional</sup> <a name="PgStatMonitorPgsmEnableQueryPlanInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmEnableQueryPlanInput"></a>

```csharp
public object PgStatMonitorPgsmEnableQueryPlanInput { get; }
```

- *Type:* object

---

##### `PgStatMonitorPgsmMaxBucketsInput`<sup>Optional</sup> <a name="PgStatMonitorPgsmMaxBucketsInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmMaxBucketsInput"></a>

```csharp
public double PgStatMonitorPgsmMaxBucketsInput { get; }
```

- *Type:* double

---

##### `PgStatStatementsTrackInput`<sup>Optional</sup> <a name="PgStatStatementsTrackInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatStatementsTrackInput"></a>

```csharp
public string PgStatStatementsTrackInput { get; }
```

- *Type:* string

---

##### `PublicAccessInput`<sup>Optional</sup> <a name="PublicAccessInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.publicAccessInput"></a>

```csharp
public object PublicAccessInput { get; }
```

- *Type:* object

---

##### `ServiceLogInput`<sup>Optional</sup> <a name="ServiceLogInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.serviceLogInput"></a>

```csharp
public object ServiceLogInput { get; }
```

- *Type:* object

---

##### `SharedBuffersPercentageInput`<sup>Optional</sup> <a name="SharedBuffersPercentageInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.sharedBuffersPercentageInput"></a>

```csharp
public double SharedBuffersPercentageInput { get; }
```

- *Type:* double

---

##### `SynchronousReplicationInput`<sup>Optional</sup> <a name="SynchronousReplicationInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.synchronousReplicationInput"></a>

```csharp
public string SynchronousReplicationInput { get; }
```

- *Type:* string

---

##### `TempFileLimitInput`<sup>Optional</sup> <a name="TempFileLimitInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.tempFileLimitInput"></a>

```csharp
public double TempFileLimitInput { get; }
```

- *Type:* double

---

##### `TimescaledbInput`<sup>Optional</sup> <a name="TimescaledbInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timescaledbInput"></a>

```csharp
public ManagedDatabasePostgresqlPropertiesTimescaledb TimescaledbInput { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb">ManagedDatabasePostgresqlPropertiesTimescaledb</a>

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timezoneInput"></a>

```csharp
public string TimezoneInput { get; }
```

- *Type:* string

---

##### `TrackActivityQuerySizeInput`<sup>Optional</sup> <a name="TrackActivityQuerySizeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackActivityQuerySizeInput"></a>

```csharp
public double TrackActivityQuerySizeInput { get; }
```

- *Type:* double

---

##### `TrackCommitTimestampInput`<sup>Optional</sup> <a name="TrackCommitTimestampInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackCommitTimestampInput"></a>

```csharp
public string TrackCommitTimestampInput { get; }
```

- *Type:* string

---

##### `TrackFunctionsInput`<sup>Optional</sup> <a name="TrackFunctionsInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackFunctionsInput"></a>

```csharp
public string TrackFunctionsInput { get; }
```

- *Type:* string

---

##### `TrackIoTimingInput`<sup>Optional</sup> <a name="TrackIoTimingInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackIoTimingInput"></a>

```csharp
public string TrackIoTimingInput { get; }
```

- *Type:* string

---

##### `VariantInput`<sup>Optional</sup> <a name="VariantInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.variantInput"></a>

```csharp
public string VariantInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `WalSenderTimeoutInput`<sup>Optional</sup> <a name="WalSenderTimeoutInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walSenderTimeoutInput"></a>

```csharp
public double WalSenderTimeoutInput { get; }
```

- *Type:* double

---

##### `WalWriterDelayInput`<sup>Optional</sup> <a name="WalWriterDelayInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walWriterDelayInput"></a>

```csharp
public double WalWriterDelayInput { get; }
```

- *Type:* double

---

##### `WorkMemInput`<sup>Optional</sup> <a name="WorkMemInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.workMemInput"></a>

```csharp
public double WorkMemInput { get; }
```

- *Type:* double

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminPassword"></a>

```csharp
public string AdminPassword { get; }
```

- *Type:* string

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.adminUsername"></a>

```csharp
public string AdminUsername { get; }
```

- *Type:* string

---

##### `AutomaticUtilityNetworkIpFilter`<sup>Required</sup> <a name="AutomaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.automaticUtilityNetworkIpFilter"></a>

```csharp
public object AutomaticUtilityNetworkIpFilter { get; }
```

- *Type:* object

---

##### `AutovacuumAnalyzeScaleFactor`<sup>Required</sup> <a name="AutovacuumAnalyzeScaleFactor" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeScaleFactor"></a>

```csharp
public double AutovacuumAnalyzeScaleFactor { get; }
```

- *Type:* double

---

##### `AutovacuumAnalyzeThreshold`<sup>Required</sup> <a name="AutovacuumAnalyzeThreshold" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumAnalyzeThreshold"></a>

```csharp
public double AutovacuumAnalyzeThreshold { get; }
```

- *Type:* double

---

##### `AutovacuumFreezeMaxAge`<sup>Required</sup> <a name="AutovacuumFreezeMaxAge" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumFreezeMaxAge"></a>

```csharp
public double AutovacuumFreezeMaxAge { get; }
```

- *Type:* double

---

##### `AutovacuumMaxWorkers`<sup>Required</sup> <a name="AutovacuumMaxWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumMaxWorkers"></a>

```csharp
public double AutovacuumMaxWorkers { get; }
```

- *Type:* double

---

##### `AutovacuumNaptime`<sup>Required</sup> <a name="AutovacuumNaptime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumNaptime"></a>

```csharp
public double AutovacuumNaptime { get; }
```

- *Type:* double

---

##### `AutovacuumVacuumCostDelay`<sup>Required</sup> <a name="AutovacuumVacuumCostDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostDelay"></a>

```csharp
public double AutovacuumVacuumCostDelay { get; }
```

- *Type:* double

---

##### `AutovacuumVacuumCostLimit`<sup>Required</sup> <a name="AutovacuumVacuumCostLimit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumCostLimit"></a>

```csharp
public double AutovacuumVacuumCostLimit { get; }
```

- *Type:* double

---

##### `AutovacuumVacuumScaleFactor`<sup>Required</sup> <a name="AutovacuumVacuumScaleFactor" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumScaleFactor"></a>

```csharp
public double AutovacuumVacuumScaleFactor { get; }
```

- *Type:* double

---

##### `AutovacuumVacuumThreshold`<sup>Required</sup> <a name="AutovacuumVacuumThreshold" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.autovacuumVacuumThreshold"></a>

```csharp
public double AutovacuumVacuumThreshold { get; }
```

- *Type:* double

---

##### `BackupHour`<sup>Required</sup> <a name="BackupHour" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupHour"></a>

```csharp
public double BackupHour { get; }
```

- *Type:* double

---

##### `BackupMinute`<sup>Required</sup> <a name="BackupMinute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.backupMinute"></a>

```csharp
public double BackupMinute { get; }
```

- *Type:* double

---

##### `BgwriterDelay`<sup>Required</sup> <a name="BgwriterDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterDelay"></a>

```csharp
public double BgwriterDelay { get; }
```

- *Type:* double

---

##### `BgwriterFlushAfter`<sup>Required</sup> <a name="BgwriterFlushAfter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterFlushAfter"></a>

```csharp
public double BgwriterFlushAfter { get; }
```

- *Type:* double

---

##### `BgwriterLruMaxpages`<sup>Required</sup> <a name="BgwriterLruMaxpages" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMaxpages"></a>

```csharp
public double BgwriterLruMaxpages { get; }
```

- *Type:* double

---

##### `BgwriterLruMultiplier`<sup>Required</sup> <a name="BgwriterLruMultiplier" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.bgwriterLruMultiplier"></a>

```csharp
public double BgwriterLruMultiplier { get; }
```

- *Type:* double

---

##### `DeadlockTimeout`<sup>Required</sup> <a name="DeadlockTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.deadlockTimeout"></a>

```csharp
public double DeadlockTimeout { get; }
```

- *Type:* double

---

##### `DefaultToastCompression`<sup>Required</sup> <a name="DefaultToastCompression" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.defaultToastCompression"></a>

```csharp
public string DefaultToastCompression { get; }
```

- *Type:* string

---

##### `IdleInTransactionSessionTimeout`<sup>Required</sup> <a name="IdleInTransactionSessionTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.idleInTransactionSessionTimeout"></a>

```csharp
public double IdleInTransactionSessionTimeout { get; }
```

- *Type:* double

---

##### `IpFilter`<sup>Required</sup> <a name="IpFilter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.ipFilter"></a>

```csharp
public string[] IpFilter { get; }
```

- *Type:* string[]

---

##### `Jit`<sup>Required</sup> <a name="Jit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.jit"></a>

```csharp
public object Jit { get; }
```

- *Type:* object

---

##### `LogAutovacuumMinDuration`<sup>Required</sup> <a name="LogAutovacuumMinDuration" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logAutovacuumMinDuration"></a>

```csharp
public double LogAutovacuumMinDuration { get; }
```

- *Type:* double

---

##### `LogErrorVerbosity`<sup>Required</sup> <a name="LogErrorVerbosity" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logErrorVerbosity"></a>

```csharp
public string LogErrorVerbosity { get; }
```

- *Type:* string

---

##### `LogLinePrefix`<sup>Required</sup> <a name="LogLinePrefix" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logLinePrefix"></a>

```csharp
public string LogLinePrefix { get; }
```

- *Type:* string

---

##### `LogMinDurationStatement`<sup>Required</sup> <a name="LogMinDurationStatement" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logMinDurationStatement"></a>

```csharp
public double LogMinDurationStatement { get; }
```

- *Type:* double

---

##### `LogTempFiles`<sup>Required</sup> <a name="LogTempFiles" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.logTempFiles"></a>

```csharp
public double LogTempFiles { get; }
```

- *Type:* double

---

##### `MaxConnections`<sup>Required</sup> <a name="MaxConnections" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxConnections"></a>

```csharp
public double MaxConnections { get; }
```

- *Type:* double

---

##### `MaxFilesPerProcess`<sup>Required</sup> <a name="MaxFilesPerProcess" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxFilesPerProcess"></a>

```csharp
public double MaxFilesPerProcess { get; }
```

- *Type:* double

---

##### `MaxLocksPerTransaction`<sup>Required</sup> <a name="MaxLocksPerTransaction" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLocksPerTransaction"></a>

```csharp
public double MaxLocksPerTransaction { get; }
```

- *Type:* double

---

##### `MaxLogicalReplicationWorkers`<sup>Required</sup> <a name="MaxLogicalReplicationWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxLogicalReplicationWorkers"></a>

```csharp
public double MaxLogicalReplicationWorkers { get; }
```

- *Type:* double

---

##### `MaxParallelWorkers`<sup>Required</sup> <a name="MaxParallelWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkers"></a>

```csharp
public double MaxParallelWorkers { get; }
```

- *Type:* double

---

##### `MaxParallelWorkersPerGather`<sup>Required</sup> <a name="MaxParallelWorkersPerGather" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxParallelWorkersPerGather"></a>

```csharp
public double MaxParallelWorkersPerGather { get; }
```

- *Type:* double

---

##### `MaxPredLocksPerTransaction`<sup>Required</sup> <a name="MaxPredLocksPerTransaction" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPredLocksPerTransaction"></a>

```csharp
public double MaxPredLocksPerTransaction { get; }
```

- *Type:* double

---

##### `MaxPreparedTransactions`<sup>Required</sup> <a name="MaxPreparedTransactions" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxPreparedTransactions"></a>

```csharp
public double MaxPreparedTransactions { get; }
```

- *Type:* double

---

##### `MaxReplicationSlots`<sup>Required</sup> <a name="MaxReplicationSlots" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxReplicationSlots"></a>

```csharp
public double MaxReplicationSlots { get; }
```

- *Type:* double

---

##### `MaxSlotWalKeepSize`<sup>Required</sup> <a name="MaxSlotWalKeepSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxSlotWalKeepSize"></a>

```csharp
public double MaxSlotWalKeepSize { get; }
```

- *Type:* double

---

##### `MaxStackDepth`<sup>Required</sup> <a name="MaxStackDepth" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStackDepth"></a>

```csharp
public double MaxStackDepth { get; }
```

- *Type:* double

---

##### `MaxStandbyArchiveDelay`<sup>Required</sup> <a name="MaxStandbyArchiveDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyArchiveDelay"></a>

```csharp
public double MaxStandbyArchiveDelay { get; }
```

- *Type:* double

---

##### `MaxStandbyStreamingDelay`<sup>Required</sup> <a name="MaxStandbyStreamingDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxStandbyStreamingDelay"></a>

```csharp
public double MaxStandbyStreamingDelay { get; }
```

- *Type:* double

---

##### `MaxSyncWorkersPerSubscription`<sup>Required</sup> <a name="MaxSyncWorkersPerSubscription" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxSyncWorkersPerSubscription"></a>

```csharp
public double MaxSyncWorkersPerSubscription { get; }
```

- *Type:* double

---

##### `MaxWalSenders`<sup>Required</sup> <a name="MaxWalSenders" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWalSenders"></a>

```csharp
public double MaxWalSenders { get; }
```

- *Type:* double

---

##### `MaxWorkerProcesses`<sup>Required</sup> <a name="MaxWorkerProcesses" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.maxWorkerProcesses"></a>

```csharp
public double MaxWorkerProcesses { get; }
```

- *Type:* double

---

##### `PasswordEncryption`<sup>Required</sup> <a name="PasswordEncryption" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.passwordEncryption"></a>

```csharp
public string PasswordEncryption { get; }
```

- *Type:* string

---

##### `PgPartmanBgwInterval`<sup>Required</sup> <a name="PgPartmanBgwInterval" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwInterval"></a>

```csharp
public double PgPartmanBgwInterval { get; }
```

- *Type:* double

---

##### `PgPartmanBgwRole`<sup>Required</sup> <a name="PgPartmanBgwRole" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgPartmanBgwRole"></a>

```csharp
public string PgPartmanBgwRole { get; }
```

- *Type:* string

---

##### `PgStatMonitorEnable`<sup>Required</sup> <a name="PgStatMonitorEnable" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorEnable"></a>

```csharp
public object PgStatMonitorEnable { get; }
```

- *Type:* object

---

##### `PgStatMonitorPgsmEnableQueryPlan`<sup>Required</sup> <a name="PgStatMonitorPgsmEnableQueryPlan" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmEnableQueryPlan"></a>

```csharp
public object PgStatMonitorPgsmEnableQueryPlan { get; }
```

- *Type:* object

---

##### `PgStatMonitorPgsmMaxBuckets`<sup>Required</sup> <a name="PgStatMonitorPgsmMaxBuckets" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatMonitorPgsmMaxBuckets"></a>

```csharp
public double PgStatMonitorPgsmMaxBuckets { get; }
```

- *Type:* double

---

##### `PgStatStatementsTrack`<sup>Required</sup> <a name="PgStatStatementsTrack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.pgStatStatementsTrack"></a>

```csharp
public string PgStatStatementsTrack { get; }
```

- *Type:* string

---

##### `PublicAccess`<sup>Required</sup> <a name="PublicAccess" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.publicAccess"></a>

```csharp
public object PublicAccess { get; }
```

- *Type:* object

---

##### `ServiceLog`<sup>Required</sup> <a name="ServiceLog" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.serviceLog"></a>

```csharp
public object ServiceLog { get; }
```

- *Type:* object

---

##### `SharedBuffersPercentage`<sup>Required</sup> <a name="SharedBuffersPercentage" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.sharedBuffersPercentage"></a>

```csharp
public double SharedBuffersPercentage { get; }
```

- *Type:* double

---

##### `SynchronousReplication`<sup>Required</sup> <a name="SynchronousReplication" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.synchronousReplication"></a>

```csharp
public string SynchronousReplication { get; }
```

- *Type:* string

---

##### `TempFileLimit`<sup>Required</sup> <a name="TempFileLimit" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.tempFileLimit"></a>

```csharp
public double TempFileLimit { get; }
```

- *Type:* double

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `TrackActivityQuerySize`<sup>Required</sup> <a name="TrackActivityQuerySize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackActivityQuerySize"></a>

```csharp
public double TrackActivityQuerySize { get; }
```

- *Type:* double

---

##### `TrackCommitTimestamp`<sup>Required</sup> <a name="TrackCommitTimestamp" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackCommitTimestamp"></a>

```csharp
public string TrackCommitTimestamp { get; }
```

- *Type:* string

---

##### `TrackFunctions`<sup>Required</sup> <a name="TrackFunctions" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackFunctions"></a>

```csharp
public string TrackFunctions { get; }
```

- *Type:* string

---

##### `TrackIoTiming`<sup>Required</sup> <a name="TrackIoTiming" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.trackIoTiming"></a>

```csharp
public string TrackIoTiming { get; }
```

- *Type:* string

---

##### `Variant`<sup>Required</sup> <a name="Variant" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.variant"></a>

```csharp
public string Variant { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `WalSenderTimeout`<sup>Required</sup> <a name="WalSenderTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walSenderTimeout"></a>

```csharp
public double WalSenderTimeout { get; }
```

- *Type:* double

---

##### `WalWriterDelay`<sup>Required</sup> <a name="WalWriterDelay" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.walWriterDelay"></a>

```csharp
public double WalWriterDelay { get; }
```

- *Type:* double

---

##### `WorkMem`<sup>Required</sup> <a name="WorkMem" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.workMem"></a>

```csharp
public double WorkMem { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesOutputReference.property.internalValue"></a>

```csharp
public ManagedDatabasePostgresqlProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlProperties">ManagedDatabasePostgresqlProperties</a>

---


### ManagedDatabasePostgresqlPropertiesPgauditOutputReference <a name="ManagedDatabasePostgresqlPropertiesPgauditOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabasePostgresqlPropertiesPgauditOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetFeatureEnabled">ResetFeatureEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLog">ResetLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogCatalog">ResetLogCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogClient">ResetLogClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogLevel">ResetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogMaxStringLength">ResetLogMaxStringLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogNestedStatements">ResetLogNestedStatements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogParameter">ResetLogParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogParameterMaxSize">ResetLogParameterMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogRelation">ResetLogRelation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogRows">ResetLogRows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogStatement">ResetLogStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogStatementOnce">ResetLogStatementOnce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetRole">ResetRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFeatureEnabled` <a name="ResetFeatureEnabled" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetFeatureEnabled"></a>

```csharp
private void ResetFeatureEnabled()
```

##### `ResetLog` <a name="ResetLog" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLog"></a>

```csharp
private void ResetLog()
```

##### `ResetLogCatalog` <a name="ResetLogCatalog" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogCatalog"></a>

```csharp
private void ResetLogCatalog()
```

##### `ResetLogClient` <a name="ResetLogClient" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogClient"></a>

```csharp
private void ResetLogClient()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogLevel"></a>

```csharp
private void ResetLogLevel()
```

##### `ResetLogMaxStringLength` <a name="ResetLogMaxStringLength" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogMaxStringLength"></a>

```csharp
private void ResetLogMaxStringLength()
```

##### `ResetLogNestedStatements` <a name="ResetLogNestedStatements" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogNestedStatements"></a>

```csharp
private void ResetLogNestedStatements()
```

##### `ResetLogParameter` <a name="ResetLogParameter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogParameter"></a>

```csharp
private void ResetLogParameter()
```

##### `ResetLogParameterMaxSize` <a name="ResetLogParameterMaxSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogParameterMaxSize"></a>

```csharp
private void ResetLogParameterMaxSize()
```

##### `ResetLogRelation` <a name="ResetLogRelation" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogRelation"></a>

```csharp
private void ResetLogRelation()
```

##### `ResetLogRows` <a name="ResetLogRows" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogRows"></a>

```csharp
private void ResetLogRows()
```

##### `ResetLogStatement` <a name="ResetLogStatement" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogStatement"></a>

```csharp
private void ResetLogStatement()
```

##### `ResetLogStatementOnce` <a name="ResetLogStatementOnce" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetLogStatementOnce"></a>

```csharp
private void ResetLogStatementOnce()
```

##### `ResetRole` <a name="ResetRole" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.resetRole"></a>

```csharp
private void ResetRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.featureEnabledInput">FeatureEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logCatalogInput">LogCatalogInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logClientInput">LogClientInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logInput">LogInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logLevelInput">LogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logMaxStringLengthInput">LogMaxStringLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logNestedStatementsInput">LogNestedStatementsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logParameterInput">LogParameterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logParameterMaxSizeInput">LogParameterMaxSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logRelationInput">LogRelationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logRowsInput">LogRowsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logStatementInput">LogStatementInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logStatementOnceInput">LogStatementOnceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.featureEnabled">FeatureEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.log">Log</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logCatalog">LogCatalog</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logClient">LogClient</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logLevel">LogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logMaxStringLength">LogMaxStringLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logNestedStatements">LogNestedStatements</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logParameter">LogParameter</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logParameterMaxSize">LogParameterMaxSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logRelation">LogRelation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logRows">LogRows</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logStatement">LogStatement</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logStatementOnce">LogStatementOnce</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit">ManagedDatabasePostgresqlPropertiesPgaudit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FeatureEnabledInput`<sup>Optional</sup> <a name="FeatureEnabledInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.featureEnabledInput"></a>

```csharp
public object FeatureEnabledInput { get; }
```

- *Type:* object

---

##### `LogCatalogInput`<sup>Optional</sup> <a name="LogCatalogInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logCatalogInput"></a>

```csharp
public object LogCatalogInput { get; }
```

- *Type:* object

---

##### `LogClientInput`<sup>Optional</sup> <a name="LogClientInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logClientInput"></a>

```csharp
public object LogClientInput { get; }
```

- *Type:* object

---

##### `LogInput`<sup>Optional</sup> <a name="LogInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logInput"></a>

```csharp
public string[] LogInput { get; }
```

- *Type:* string[]

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logLevelInput"></a>

```csharp
public string LogLevelInput { get; }
```

- *Type:* string

---

##### `LogMaxStringLengthInput`<sup>Optional</sup> <a name="LogMaxStringLengthInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logMaxStringLengthInput"></a>

```csharp
public double LogMaxStringLengthInput { get; }
```

- *Type:* double

---

##### `LogNestedStatementsInput`<sup>Optional</sup> <a name="LogNestedStatementsInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logNestedStatementsInput"></a>

```csharp
public object LogNestedStatementsInput { get; }
```

- *Type:* object

---

##### `LogParameterInput`<sup>Optional</sup> <a name="LogParameterInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logParameterInput"></a>

```csharp
public object LogParameterInput { get; }
```

- *Type:* object

---

##### `LogParameterMaxSizeInput`<sup>Optional</sup> <a name="LogParameterMaxSizeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logParameterMaxSizeInput"></a>

```csharp
public double LogParameterMaxSizeInput { get; }
```

- *Type:* double

---

##### `LogRelationInput`<sup>Optional</sup> <a name="LogRelationInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logRelationInput"></a>

```csharp
public object LogRelationInput { get; }
```

- *Type:* object

---

##### `LogRowsInput`<sup>Optional</sup> <a name="LogRowsInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logRowsInput"></a>

```csharp
public object LogRowsInput { get; }
```

- *Type:* object

---

##### `LogStatementInput`<sup>Optional</sup> <a name="LogStatementInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logStatementInput"></a>

```csharp
public object LogStatementInput { get; }
```

- *Type:* object

---

##### `LogStatementOnceInput`<sup>Optional</sup> <a name="LogStatementOnceInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logStatementOnceInput"></a>

```csharp
public object LogStatementOnceInput { get; }
```

- *Type:* object

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `FeatureEnabled`<sup>Required</sup> <a name="FeatureEnabled" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.featureEnabled"></a>

```csharp
public object FeatureEnabled { get; }
```

- *Type:* object

---

##### `Log`<sup>Required</sup> <a name="Log" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.log"></a>

```csharp
public string[] Log { get; }
```

- *Type:* string[]

---

##### `LogCatalog`<sup>Required</sup> <a name="LogCatalog" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logCatalog"></a>

```csharp
public object LogCatalog { get; }
```

- *Type:* object

---

##### `LogClient`<sup>Required</sup> <a name="LogClient" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logClient"></a>

```csharp
public object LogClient { get; }
```

- *Type:* object

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logLevel"></a>

```csharp
public string LogLevel { get; }
```

- *Type:* string

---

##### `LogMaxStringLength`<sup>Required</sup> <a name="LogMaxStringLength" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logMaxStringLength"></a>

```csharp
public double LogMaxStringLength { get; }
```

- *Type:* double

---

##### `LogNestedStatements`<sup>Required</sup> <a name="LogNestedStatements" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logNestedStatements"></a>

```csharp
public object LogNestedStatements { get; }
```

- *Type:* object

---

##### `LogParameter`<sup>Required</sup> <a name="LogParameter" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logParameter"></a>

```csharp
public object LogParameter { get; }
```

- *Type:* object

---

##### `LogParameterMaxSize`<sup>Required</sup> <a name="LogParameterMaxSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logParameterMaxSize"></a>

```csharp
public double LogParameterMaxSize { get; }
```

- *Type:* double

---

##### `LogRelation`<sup>Required</sup> <a name="LogRelation" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logRelation"></a>

```csharp
public object LogRelation { get; }
```

- *Type:* object

---

##### `LogRows`<sup>Required</sup> <a name="LogRows" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logRows"></a>

```csharp
public object LogRows { get; }
```

- *Type:* object

---

##### `LogStatement`<sup>Required</sup> <a name="LogStatement" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logStatement"></a>

```csharp
public object LogStatement { get; }
```

- *Type:* object

---

##### `LogStatementOnce`<sup>Required</sup> <a name="LogStatementOnce" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.logStatementOnce"></a>

```csharp
public object LogStatementOnce { get; }
```

- *Type:* object

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgauditOutputReference.property.internalValue"></a>

```csharp
public ManagedDatabasePostgresqlPropertiesPgaudit InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgaudit">ManagedDatabasePostgresqlPropertiesPgaudit</a>

---


### ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference <a name="ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutodbIdleTimeout` <a name="ResetAutodbIdleTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbIdleTimeout"></a>

```csharp
private void ResetAutodbIdleTimeout()
```

##### `ResetAutodbMaxDbConnections` <a name="ResetAutodbMaxDbConnections" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbMaxDbConnections"></a>

```csharp
private void ResetAutodbMaxDbConnections()
```

##### `ResetAutodbPoolMode` <a name="ResetAutodbPoolMode" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbPoolMode"></a>

```csharp
private void ResetAutodbPoolMode()
```

##### `ResetAutodbPoolSize` <a name="ResetAutodbPoolSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetAutodbPoolSize"></a>

```csharp
private void ResetAutodbPoolSize()
```

##### `ResetIgnoreStartupParameters` <a name="ResetIgnoreStartupParameters" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetIgnoreStartupParameters"></a>

```csharp
private void ResetIgnoreStartupParameters()
```

##### `ResetMaxPreparedStatements` <a name="ResetMaxPreparedStatements" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetMaxPreparedStatements"></a>

```csharp
private void ResetMaxPreparedStatements()
```

##### `ResetMinPoolSize` <a name="ResetMinPoolSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetMinPoolSize"></a>

```csharp
private void ResetMinPoolSize()
```

##### `ResetServerIdleTimeout` <a name="ResetServerIdleTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetServerIdleTimeout"></a>

```csharp
private void ResetServerIdleTimeout()
```

##### `ResetServerLifetime` <a name="ResetServerLifetime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetServerLifetime"></a>

```csharp
private void ResetServerLifetime()
```

##### `ResetServerResetQueryAlways` <a name="ResetServerResetQueryAlways" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.resetServerResetQueryAlways"></a>

```csharp
private void ResetServerResetQueryAlways()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbIdleTimeoutInput">AutodbIdleTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbMaxDbConnectionsInput">AutodbMaxDbConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolModeInput">AutodbPoolModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolSizeInput">AutodbPoolSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.ignoreStartupParametersInput">IgnoreStartupParametersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.maxPreparedStatementsInput">MaxPreparedStatementsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.minPoolSizeInput">MinPoolSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverIdleTimeoutInput">ServerIdleTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverLifetimeInput">ServerLifetimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverResetQueryAlwaysInput">ServerResetQueryAlwaysInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbIdleTimeout">AutodbIdleTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbMaxDbConnections">AutodbMaxDbConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolMode">AutodbPoolMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolSize">AutodbPoolSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.ignoreStartupParameters">IgnoreStartupParameters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.maxPreparedStatements">MaxPreparedStatements</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.minPoolSize">MinPoolSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverIdleTimeout">ServerIdleTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverLifetime">ServerLifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverResetQueryAlways">ServerResetQueryAlways</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer">ManagedDatabasePostgresqlPropertiesPgbouncer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutodbIdleTimeoutInput`<sup>Optional</sup> <a name="AutodbIdleTimeoutInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbIdleTimeoutInput"></a>

```csharp
public double AutodbIdleTimeoutInput { get; }
```

- *Type:* double

---

##### `AutodbMaxDbConnectionsInput`<sup>Optional</sup> <a name="AutodbMaxDbConnectionsInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbMaxDbConnectionsInput"></a>

```csharp
public double AutodbMaxDbConnectionsInput { get; }
```

- *Type:* double

---

##### `AutodbPoolModeInput`<sup>Optional</sup> <a name="AutodbPoolModeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolModeInput"></a>

```csharp
public string AutodbPoolModeInput { get; }
```

- *Type:* string

---

##### `AutodbPoolSizeInput`<sup>Optional</sup> <a name="AutodbPoolSizeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolSizeInput"></a>

```csharp
public double AutodbPoolSizeInput { get; }
```

- *Type:* double

---

##### `IgnoreStartupParametersInput`<sup>Optional</sup> <a name="IgnoreStartupParametersInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.ignoreStartupParametersInput"></a>

```csharp
public string[] IgnoreStartupParametersInput { get; }
```

- *Type:* string[]

---

##### `MaxPreparedStatementsInput`<sup>Optional</sup> <a name="MaxPreparedStatementsInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.maxPreparedStatementsInput"></a>

```csharp
public double MaxPreparedStatementsInput { get; }
```

- *Type:* double

---

##### `MinPoolSizeInput`<sup>Optional</sup> <a name="MinPoolSizeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.minPoolSizeInput"></a>

```csharp
public double MinPoolSizeInput { get; }
```

- *Type:* double

---

##### `ServerIdleTimeoutInput`<sup>Optional</sup> <a name="ServerIdleTimeoutInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverIdleTimeoutInput"></a>

```csharp
public double ServerIdleTimeoutInput { get; }
```

- *Type:* double

---

##### `ServerLifetimeInput`<sup>Optional</sup> <a name="ServerLifetimeInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverLifetimeInput"></a>

```csharp
public double ServerLifetimeInput { get; }
```

- *Type:* double

---

##### `ServerResetQueryAlwaysInput`<sup>Optional</sup> <a name="ServerResetQueryAlwaysInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverResetQueryAlwaysInput"></a>

```csharp
public object ServerResetQueryAlwaysInput { get; }
```

- *Type:* object

---

##### `AutodbIdleTimeout`<sup>Required</sup> <a name="AutodbIdleTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbIdleTimeout"></a>

```csharp
public double AutodbIdleTimeout { get; }
```

- *Type:* double

---

##### `AutodbMaxDbConnections`<sup>Required</sup> <a name="AutodbMaxDbConnections" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbMaxDbConnections"></a>

```csharp
public double AutodbMaxDbConnections { get; }
```

- *Type:* double

---

##### `AutodbPoolMode`<sup>Required</sup> <a name="AutodbPoolMode" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolMode"></a>

```csharp
public string AutodbPoolMode { get; }
```

- *Type:* string

---

##### `AutodbPoolSize`<sup>Required</sup> <a name="AutodbPoolSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.autodbPoolSize"></a>

```csharp
public double AutodbPoolSize { get; }
```

- *Type:* double

---

##### `IgnoreStartupParameters`<sup>Required</sup> <a name="IgnoreStartupParameters" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.ignoreStartupParameters"></a>

```csharp
public string[] IgnoreStartupParameters { get; }
```

- *Type:* string[]

---

##### `MaxPreparedStatements`<sup>Required</sup> <a name="MaxPreparedStatements" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.maxPreparedStatements"></a>

```csharp
public double MaxPreparedStatements { get; }
```

- *Type:* double

---

##### `MinPoolSize`<sup>Required</sup> <a name="MinPoolSize" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.minPoolSize"></a>

```csharp
public double MinPoolSize { get; }
```

- *Type:* double

---

##### `ServerIdleTimeout`<sup>Required</sup> <a name="ServerIdleTimeout" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverIdleTimeout"></a>

```csharp
public double ServerIdleTimeout { get; }
```

- *Type:* double

---

##### `ServerLifetime`<sup>Required</sup> <a name="ServerLifetime" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverLifetime"></a>

```csharp
public double ServerLifetime { get; }
```

- *Type:* double

---

##### `ServerResetQueryAlways`<sup>Required</sup> <a name="ServerResetQueryAlways" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.serverResetQueryAlways"></a>

```csharp
public object ServerResetQueryAlways { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncerOutputReference.property.internalValue"></a>

```csharp
public ManagedDatabasePostgresqlPropertiesPgbouncer InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPgbouncer">ManagedDatabasePostgresqlPropertiesPgbouncer</a>

---


### ManagedDatabasePostgresqlPropertiesPglookoutOutputReference <a name="ManagedDatabasePostgresqlPropertiesPglookoutOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabasePostgresqlPropertiesPglookoutOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxFailoverReplicationTimeLag` <a name="ResetMaxFailoverReplicationTimeLag" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.resetMaxFailoverReplicationTimeLag"></a>

```csharp
private void ResetMaxFailoverReplicationTimeLag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.maxFailoverReplicationTimeLagInput">MaxFailoverReplicationTimeLagInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.maxFailoverReplicationTimeLag">MaxFailoverReplicationTimeLag</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout">ManagedDatabasePostgresqlPropertiesPglookout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxFailoverReplicationTimeLagInput`<sup>Optional</sup> <a name="MaxFailoverReplicationTimeLagInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.maxFailoverReplicationTimeLagInput"></a>

```csharp
public double MaxFailoverReplicationTimeLagInput { get; }
```

- *Type:* double

---

##### `MaxFailoverReplicationTimeLag`<sup>Required</sup> <a name="MaxFailoverReplicationTimeLag" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.maxFailoverReplicationTimeLag"></a>

```csharp
public double MaxFailoverReplicationTimeLag { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookoutOutputReference.property.internalValue"></a>

```csharp
public ManagedDatabasePostgresqlPropertiesPglookout InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesPglookout">ManagedDatabasePostgresqlPropertiesPglookout</a>

---


### ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference <a name="ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxBackgroundWorkers` <a name="ResetMaxBackgroundWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.resetMaxBackgroundWorkers"></a>

```csharp
private void ResetMaxBackgroundWorkers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.maxBackgroundWorkersInput">MaxBackgroundWorkersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.maxBackgroundWorkers">MaxBackgroundWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb">ManagedDatabasePostgresqlPropertiesTimescaledb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxBackgroundWorkersInput`<sup>Optional</sup> <a name="MaxBackgroundWorkersInput" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.maxBackgroundWorkersInput"></a>

```csharp
public double MaxBackgroundWorkersInput { get; }
```

- *Type:* double

---

##### `MaxBackgroundWorkers`<sup>Required</sup> <a name="MaxBackgroundWorkers" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.maxBackgroundWorkers"></a>

```csharp
public double MaxBackgroundWorkers { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledbOutputReference.property.internalValue"></a>

```csharp
public ManagedDatabasePostgresqlPropertiesTimescaledb InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabasePostgresql.ManagedDatabasePostgresqlPropertiesTimescaledb">ManagedDatabasePostgresqlPropertiesTimescaledb</a>

---



