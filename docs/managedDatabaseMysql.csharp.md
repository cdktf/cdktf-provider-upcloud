# `managedDatabaseMysql` Submodule <a name="`managedDatabaseMysql` Submodule" id="@cdktf/provider-upcloud.managedDatabaseMysql"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedDatabaseMysql <a name="ManagedDatabaseMysql" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql upcloud_managed_database_mysql}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseMysql(Construct Scope, string Id, ManagedDatabaseMysqlConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig">ManagedDatabaseMysqlConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig">ManagedDatabaseMysqlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putNetwork">PutNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetMaintenanceWindowDow">ResetMaintenanceWindowDow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetMaintenanceWindowTime">ResetMaintenanceWindowTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetPowered">ResetPowered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNetwork` <a name="PutNetwork" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putNetwork"></a>

```csharp
private void PutNetwork(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putNetwork.parameter.value"></a>

- *Type:* object

---

##### `PutProperties` <a name="PutProperties" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties"></a>

```csharp
private void PutProperties(ManagedDatabaseMysqlProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties">ManagedDatabaseMysqlProperties</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaintenanceWindowDow` <a name="ResetMaintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetMaintenanceWindowDow"></a>

```csharp
private void ResetMaintenanceWindowDow()
```

##### `ResetMaintenanceWindowTime` <a name="ResetMaintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetMaintenanceWindowTime"></a>

```csharp
private void ResetMaintenanceWindowTime()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetPowered` <a name="ResetPowered" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetPowered"></a>

```csharp
private void ResetPowered()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.resetProperties"></a>

```csharp
private void ResetProperties()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedDatabaseMysql resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

ManagedDatabaseMysql.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

ManagedDatabaseMysql.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

ManagedDatabaseMysql.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

ManagedDatabaseMysql.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ManagedDatabaseMysql resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagedDatabaseMysql to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagedDatabaseMysql that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ManagedDatabaseMysql to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.components">Components</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList">ManagedDatabaseMysqlComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.network">Network</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList">ManagedDatabaseMysqlNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.nodeStates">NodeStates</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList">ManagedDatabaseMysqlNodeStatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.primaryDatabase">PrimaryDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference">ManagedDatabaseMysqlPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.serviceHost">ServiceHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.servicePassword">ServicePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.servicePort">ServicePort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.serviceUri">ServiceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.serviceUsername">ServiceUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.maintenanceWindowDowInput">MaintenanceWindowDowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.maintenanceWindowTimeInput">MaintenanceWindowTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.networkInput">NetworkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.planInput">PlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.poweredInput">PoweredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties">ManagedDatabaseMysqlProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.maintenanceWindowDow">MaintenanceWindowDow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.maintenanceWindowTime">MaintenanceWindowTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.plan">Plan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.powered">Powered</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Components`<sup>Required</sup> <a name="Components" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.components"></a>

```csharp
public ManagedDatabaseMysqlComponentsList Components { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList">ManagedDatabaseMysqlComponentsList</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.network"></a>

```csharp
public ManagedDatabaseMysqlNetworkList Network { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList">ManagedDatabaseMysqlNetworkList</a>

---

##### `NodeStates`<sup>Required</sup> <a name="NodeStates" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.nodeStates"></a>

```csharp
public ManagedDatabaseMysqlNodeStatesList NodeStates { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList">ManagedDatabaseMysqlNodeStatesList</a>

---

##### `PrimaryDatabase`<sup>Required</sup> <a name="PrimaryDatabase" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.primaryDatabase"></a>

```csharp
public string PrimaryDatabase { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.properties"></a>

```csharp
public ManagedDatabaseMysqlPropertiesOutputReference Properties { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference">ManagedDatabaseMysqlPropertiesOutputReference</a>

---

##### `ServiceHost`<sup>Required</sup> <a name="ServiceHost" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.serviceHost"></a>

```csharp
public string ServiceHost { get; }
```

- *Type:* string

---

##### `ServicePassword`<sup>Required</sup> <a name="ServicePassword" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.servicePassword"></a>

```csharp
public string ServicePassword { get; }
```

- *Type:* string

---

##### `ServicePort`<sup>Required</sup> <a name="ServicePort" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.servicePort"></a>

```csharp
public string ServicePort { get; }
```

- *Type:* string

---

##### `ServiceUri`<sup>Required</sup> <a name="ServiceUri" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.serviceUri"></a>

```csharp
public string ServiceUri { get; }
```

- *Type:* string

---

##### `ServiceUsername`<sup>Required</sup> <a name="ServiceUsername" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.serviceUsername"></a>

```csharp
public string ServiceUsername { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaintenanceWindowDowInput`<sup>Optional</sup> <a name="MaintenanceWindowDowInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.maintenanceWindowDowInput"></a>

```csharp
public string MaintenanceWindowDowInput { get; }
```

- *Type:* string

---

##### `MaintenanceWindowTimeInput`<sup>Optional</sup> <a name="MaintenanceWindowTimeInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.maintenanceWindowTimeInput"></a>

```csharp
public string MaintenanceWindowTimeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.networkInput"></a>

```csharp
public object NetworkInput { get; }
```

- *Type:* object

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.planInput"></a>

```csharp
public string PlanInput { get; }
```

- *Type:* string

---

##### `PoweredInput`<sup>Optional</sup> <a name="PoweredInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.poweredInput"></a>

```csharp
public object PoweredInput { get; }
```

- *Type:* object

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.propertiesInput"></a>

```csharp
public ManagedDatabaseMysqlProperties PropertiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties">ManagedDatabaseMysqlProperties</a>

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaintenanceWindowDow`<sup>Required</sup> <a name="MaintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.maintenanceWindowDow"></a>

```csharp
public string MaintenanceWindowDow { get; }
```

- *Type:* string

---

##### `MaintenanceWindowTime`<sup>Required</sup> <a name="MaintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.maintenanceWindowTime"></a>

```csharp
public string MaintenanceWindowTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.plan"></a>

```csharp
public string Plan { get; }
```

- *Type:* string

---

##### `Powered`<sup>Required</sup> <a name="Powered" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.powered"></a>

```csharp
public object Powered { get; }
```

- *Type:* object

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysql.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedDatabaseMysqlComponents <a name="ManagedDatabaseMysqlComponents" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponents.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseMysqlComponents {

};
```


### ManagedDatabaseMysqlConfig <a name="ManagedDatabaseMysqlConfig" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseMysqlConfig {
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
    string MaintenanceWindowDow = null,
    string MaintenanceWindowTime = null,
    object Network = null,
    object Powered = null,
    ManagedDatabaseMysqlProperties Properties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.name">Name</a></code> | <code>string</code> | Name of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.plan">Plan</a></code> | <code>string</code> | Service plan to use. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.title">Title</a></code> | <code>string</code> | Title of a managed database instance. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.zone">Zone</a></code> | <code>string</code> | Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#id ManagedDatabaseMysql#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.maintenanceWindowDow">MaintenanceWindowDow</a></code> | <code>string</code> | Maintenance window day of week. Lower case weekday name (monday, tuesday, ...). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.maintenanceWindowTime">MaintenanceWindowTime</a></code> | <code>string</code> | Maintenance window UTC time in hh:mm:ss format. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.network">Network</a></code> | <code>object</code> | network block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.powered">Powered</a></code> | <code>object</code> | The administrative power state of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties">ManagedDatabaseMysqlProperties</a></code> | properties block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the service.

The name is used as a prefix for the logical hostname. Must be unique within an account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#name ManagedDatabaseMysql#name}

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.plan"></a>

```csharp
public string Plan { get; set; }
```

- *Type:* string

Service plan to use.

This determines how much resources the instance will have. You can list available plans with `upctl database plans <type>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#plan ManagedDatabaseMysql#plan}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Title of a managed database instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#title ManagedDatabaseMysql#title}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#zone ManagedDatabaseMysql#zone}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#id ManagedDatabaseMysql#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaintenanceWindowDow`<sup>Optional</sup> <a name="MaintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.maintenanceWindowDow"></a>

```csharp
public string MaintenanceWindowDow { get; set; }
```

- *Type:* string

Maintenance window day of week. Lower case weekday name (monday, tuesday, ...).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#maintenance_window_dow ManagedDatabaseMysql#maintenance_window_dow}

---

##### `MaintenanceWindowTime`<sup>Optional</sup> <a name="MaintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.maintenanceWindowTime"></a>

```csharp
public string MaintenanceWindowTime { get; set; }
```

- *Type:* string

Maintenance window UTC time in hh:mm:ss format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#maintenance_window_time ManagedDatabaseMysql#maintenance_window_time}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.network"></a>

```csharp
public object Network { get; set; }
```

- *Type:* object

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#network ManagedDatabaseMysql#network}

---

##### `Powered`<sup>Optional</sup> <a name="Powered" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.powered"></a>

```csharp
public object Powered { get; set; }
```

- *Type:* object

The administrative power state of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#powered ManagedDatabaseMysql#powered}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlConfig.property.properties"></a>

```csharp
public ManagedDatabaseMysqlProperties Properties { get; set; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties">ManagedDatabaseMysqlProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#properties ManagedDatabaseMysql#properties}

---

### ManagedDatabaseMysqlNetwork <a name="ManagedDatabaseMysqlNetwork" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseMysqlNetwork {
    string Family,
    string Name,
    string Type,
    string Uuid
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork.property.family">Family</a></code> | <code>string</code> | Network family. Currently only `IPv4` is supported. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork.property.name">Name</a></code> | <code>string</code> | The name of the network. Must be unique within the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork.property.type">Type</a></code> | <code>string</code> | The type of the network. Must be private. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork.property.uuid">Uuid</a></code> | <code>string</code> | Private network UUID. Must reside in the same zone as the database. |

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork.property.family"></a>

```csharp
public string Family { get; set; }
```

- *Type:* string

Network family. Currently only `IPv4` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#family ManagedDatabaseMysql#family}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the network. Must be unique within the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#name ManagedDatabaseMysql#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the network. Must be private.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#type ManagedDatabaseMysql#type}

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetwork.property.uuid"></a>

```csharp
public string Uuid { get; set; }
```

- *Type:* string

Private network UUID. Must reside in the same zone as the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#uuid ManagedDatabaseMysql#uuid}

---

### ManagedDatabaseMysqlNodeStates <a name="ManagedDatabaseMysqlNodeStates" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStates.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseMysqlNodeStates {

};
```


### ManagedDatabaseMysqlProperties <a name="ManagedDatabaseMysqlProperties" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseMysqlProperties {
    string AdminPassword = null,
    string AdminUsername = null,
    object AutomaticUtilityNetworkIpFilter = null,
    double BackupHour = null,
    double BackupMinute = null,
    double BinlogRetentionPeriod = null,
    double ConnectTimeout = null,
    string DefaultTimeZone = null,
    double GroupConcatMaxLen = null,
    double InformationSchemaStatsExpiry = null,
    double InnodbChangeBufferMaxSize = null,
    double InnodbFlushNeighbors = null,
    double InnodbFtMinTokenSize = null,
    string InnodbFtServerStopwordTable = null,
    double InnodbLockWaitTimeout = null,
    double InnodbLogBufferSize = null,
    double InnodbOnlineAlterLogMaxSize = null,
    object InnodbPrintAllDeadlocks = null,
    double InnodbReadIoThreads = null,
    object InnodbRollbackOnTimeout = null,
    double InnodbThreadConcurrency = null,
    double InnodbWriteIoThreads = null,
    double InteractiveTimeout = null,
    string InternalTmpMemStorageEngine = null,
    string[] IpFilter = null,
    double LongQueryTime = null,
    double MaxAllowedPacket = null,
    double MaxHeapTableSize = null,
    ManagedDatabaseMysqlPropertiesMigration Migration = null,
    double NetBufferLength = null,
    double NetReadTimeout = null,
    double NetWriteTimeout = null,
    object PublicAccess = null,
    object ServiceLog = null,
    object SlowQueryLog = null,
    double SortBufferSize = null,
    string SqlMode = null,
    object SqlRequirePrimaryKey = null,
    double TmpTableSize = null,
    string Version = null,
    double WaitTimeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.adminPassword">AdminPassword</a></code> | <code>string</code> | Custom password for admin user. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.adminUsername">AdminUsername</a></code> | <code>string</code> | Custom username for admin user. This must be set only when a new service is being created. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.automaticUtilityNetworkIpFilter">AutomaticUtilityNetworkIpFilter</a></code> | <code>object</code> | Automatic utility network IP Filter. Automatically allow connections from servers in the utility network within the same zone. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.backupHour">BackupHour</a></code> | <code>double</code> | The hour of day (in UTC) when backup for the service is started. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.backupMinute">BackupMinute</a></code> | <code>double</code> | The minute of an hour when backup for the service is started. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.binlogRetentionPeriod">BinlogRetentionPeriod</a></code> | <code>double</code> | The minimum amount of time in seconds to keep binlog entries before deletion. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.connectTimeout">ConnectTimeout</a></code> | <code>double</code> | The number of seconds that the mysqld server waits for a connect packet before responding with Bad handshake. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.defaultTimeZone">DefaultTimeZone</a></code> | <code>string</code> | Default server time zone as an offset from UTC (from -12:00 to +12:00), a time zone name, or 'SYSTEM' to use the MySQL server default. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.groupConcatMaxLen">GroupConcatMaxLen</a></code> | <code>double</code> | The maximum permitted result length in bytes for the GROUP_CONCAT() function. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.informationSchemaStatsExpiry">InformationSchemaStatsExpiry</a></code> | <code>double</code> | The time, in seconds, before cached statistics expire. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbChangeBufferMaxSize">InnodbChangeBufferMaxSize</a></code> | <code>double</code> | Maximum size for the InnoDB change buffer, as a percentage of the total size of the buffer pool. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbFlushNeighbors">InnodbFlushNeighbors</a></code> | <code>double</code> | Specifies whether flushing a page from the InnoDB buffer pool also flushes other dirty pages in the same extent (default is 1): 0 - dirty pages in the same extent are not flushed, 1 - flush contiguous dirty pages in the same extent, 2 - flush dirty pages in the same extent. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbFtMinTokenSize">InnodbFtMinTokenSize</a></code> | <code>double</code> | Minimum length of words that are stored in an InnoDB FULLTEXT index. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbFtServerStopwordTable">InnodbFtServerStopwordTable</a></code> | <code>string</code> | This option is used to specify your own InnoDB FULLTEXT index stopword list for all InnoDB tables. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbLockWaitTimeout">InnodbLockWaitTimeout</a></code> | <code>double</code> | The length of time in seconds an InnoDB transaction waits for a row lock before giving up. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbLogBufferSize">InnodbLogBufferSize</a></code> | <code>double</code> | The size in bytes of the buffer that InnoDB uses to write to the log files on disk. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbOnlineAlterLogMaxSize">InnodbOnlineAlterLogMaxSize</a></code> | <code>double</code> | The upper limit in bytes on the size of the temporary log files used during online DDL operations for InnoDB tables. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbPrintAllDeadlocks">InnodbPrintAllDeadlocks</a></code> | <code>object</code> | When enabled, information about all deadlocks in InnoDB user transactions is recorded in the error log. Disabled by default. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbReadIoThreads">InnodbReadIoThreads</a></code> | <code>double</code> | The number of I/O threads for read operations in InnoDB. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbRollbackOnTimeout">InnodbRollbackOnTimeout</a></code> | <code>object</code> | When enabled a transaction timeout causes InnoDB to abort and roll back the entire transaction. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbThreadConcurrency">InnodbThreadConcurrency</a></code> | <code>double</code> | Defines the maximum number of threads permitted inside of InnoDB. Default is 0 (infinite concurrency - no limit). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbWriteIoThreads">InnodbWriteIoThreads</a></code> | <code>double</code> | The number of I/O threads for write operations in InnoDB. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.interactiveTimeout">InteractiveTimeout</a></code> | <code>double</code> | The number of seconds the server waits for activity on an interactive connection before closing it. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.internalTmpMemStorageEngine">InternalTmpMemStorageEngine</a></code> | <code>string</code> | The storage engine for in-memory internal temporary tables. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.ipFilter">IpFilter</a></code> | <code>string[]</code> | IP filter. Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.longQueryTime">LongQueryTime</a></code> | <code>double</code> | The slow_query_logs work as SQL statements that take more than long_query_time seconds to execute. Default is 10s. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.maxAllowedPacket">MaxAllowedPacket</a></code> | <code>double</code> | Size of the largest message in bytes that can be received by the server. Default is 67108864 (64M). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.maxHeapTableSize">MaxHeapTableSize</a></code> | <code>double</code> | Limits the size of internal in-memory tables. Also set tmp_table_size. Default is 16777216 (16M). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.migration">Migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration">ManagedDatabaseMysqlPropertiesMigration</a></code> | migration block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.netBufferLength">NetBufferLength</a></code> | <code>double</code> | Start sizes of connection buffer and result buffer. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.netReadTimeout">NetReadTimeout</a></code> | <code>double</code> | The number of seconds to wait for more data from a connection before aborting the read. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.netWriteTimeout">NetWriteTimeout</a></code> | <code>double</code> | The number of seconds to wait for a block to be written to a connection before aborting the write. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.publicAccess">PublicAccess</a></code> | <code>object</code> | Public Access. Allow access to the service from the public Internet. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.serviceLog">ServiceLog</a></code> | <code>object</code> | Service logging. Store logs for the service so that they are available in the HTTP API and console. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.slowQueryLog">SlowQueryLog</a></code> | <code>object</code> | Slow query log enables capturing of slow queries. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.sortBufferSize">SortBufferSize</a></code> | <code>double</code> | Sort buffer size in bytes for ORDER BY optimization. Default is 262144 (256K). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.sqlMode">SqlMode</a></code> | <code>string</code> | Global SQL mode. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.sqlRequirePrimaryKey">SqlRequirePrimaryKey</a></code> | <code>object</code> | Require primary key to be defined for new tables or old tables modified with ALTER TABLE and fail if missing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.tmpTableSize">TmpTableSize</a></code> | <code>double</code> | Limits the size of internal in-memory tables. Also set max_heap_table_size. Default is 16777216 (16M). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.version">Version</a></code> | <code>string</code> | MySQL major version. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.waitTimeout">WaitTimeout</a></code> | <code>double</code> | The number of seconds the server waits for activity on a noninteractive connection before closing it. |

---

##### `AdminPassword`<sup>Optional</sup> <a name="AdminPassword" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.adminPassword"></a>

```csharp
public string AdminPassword { get; set; }
```

- *Type:* string

Custom password for admin user.

Defaults to random string. This must be set only when a new service is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#admin_password ManagedDatabaseMysql#admin_password}

---

##### `AdminUsername`<sup>Optional</sup> <a name="AdminUsername" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.adminUsername"></a>

```csharp
public string AdminUsername { get; set; }
```

- *Type:* string

Custom username for admin user. This must be set only when a new service is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#admin_username ManagedDatabaseMysql#admin_username}

---

##### `AutomaticUtilityNetworkIpFilter`<sup>Optional</sup> <a name="AutomaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.automaticUtilityNetworkIpFilter"></a>

```csharp
public object AutomaticUtilityNetworkIpFilter { get; set; }
```

- *Type:* object

Automatic utility network IP Filter. Automatically allow connections from servers in the utility network within the same zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#automatic_utility_network_ip_filter ManagedDatabaseMysql#automatic_utility_network_ip_filter}

---

##### `BackupHour`<sup>Optional</sup> <a name="BackupHour" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.backupHour"></a>

```csharp
public double BackupHour { get; set; }
```

- *Type:* double

The hour of day (in UTC) when backup for the service is started.

New backup is only started if previous backup has already completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#backup_hour ManagedDatabaseMysql#backup_hour}

---

##### `BackupMinute`<sup>Optional</sup> <a name="BackupMinute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.backupMinute"></a>

```csharp
public double BackupMinute { get; set; }
```

- *Type:* double

The minute of an hour when backup for the service is started.

New backup is only started if previous backup has already completed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#backup_minute ManagedDatabaseMysql#backup_minute}

---

##### `BinlogRetentionPeriod`<sup>Optional</sup> <a name="BinlogRetentionPeriod" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.binlogRetentionPeriod"></a>

```csharp
public double BinlogRetentionPeriod { get; set; }
```

- *Type:* double

The minimum amount of time in seconds to keep binlog entries before deletion.

This may be extended for services that require binlog entries for longer than the default for example if using the MySQL Debezium Kafka connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#binlog_retention_period ManagedDatabaseMysql#binlog_retention_period}

---

##### `ConnectTimeout`<sup>Optional</sup> <a name="ConnectTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.connectTimeout"></a>

```csharp
public double ConnectTimeout { get; set; }
```

- *Type:* double

The number of seconds that the mysqld server waits for a connect packet before responding with Bad handshake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#connect_timeout ManagedDatabaseMysql#connect_timeout}

---

##### `DefaultTimeZone`<sup>Optional</sup> <a name="DefaultTimeZone" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.defaultTimeZone"></a>

```csharp
public string DefaultTimeZone { get; set; }
```

- *Type:* string

Default server time zone as an offset from UTC (from -12:00 to +12:00), a time zone name, or 'SYSTEM' to use the MySQL server default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#default_time_zone ManagedDatabaseMysql#default_time_zone}

---

##### `GroupConcatMaxLen`<sup>Optional</sup> <a name="GroupConcatMaxLen" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.groupConcatMaxLen"></a>

```csharp
public double GroupConcatMaxLen { get; set; }
```

- *Type:* double

The maximum permitted result length in bytes for the GROUP_CONCAT() function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#group_concat_max_len ManagedDatabaseMysql#group_concat_max_len}

---

##### `InformationSchemaStatsExpiry`<sup>Optional</sup> <a name="InformationSchemaStatsExpiry" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.informationSchemaStatsExpiry"></a>

```csharp
public double InformationSchemaStatsExpiry { get; set; }
```

- *Type:* double

The time, in seconds, before cached statistics expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#information_schema_stats_expiry ManagedDatabaseMysql#information_schema_stats_expiry}

---

##### `InnodbChangeBufferMaxSize`<sup>Optional</sup> <a name="InnodbChangeBufferMaxSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbChangeBufferMaxSize"></a>

```csharp
public double InnodbChangeBufferMaxSize { get; set; }
```

- *Type:* double

Maximum size for the InnoDB change buffer, as a percentage of the total size of the buffer pool.

Default is 25.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#innodb_change_buffer_max_size ManagedDatabaseMysql#innodb_change_buffer_max_size}

---

##### `InnodbFlushNeighbors`<sup>Optional</sup> <a name="InnodbFlushNeighbors" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbFlushNeighbors"></a>

```csharp
public double InnodbFlushNeighbors { get; set; }
```

- *Type:* double

Specifies whether flushing a page from the InnoDB buffer pool also flushes other dirty pages in the same extent (default is 1): 0 - dirty pages in the same extent are not flushed, 1 - flush contiguous dirty pages in the same extent, 2 - flush dirty pages in the same extent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#innodb_flush_neighbors ManagedDatabaseMysql#innodb_flush_neighbors}

---

##### `InnodbFtMinTokenSize`<sup>Optional</sup> <a name="InnodbFtMinTokenSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbFtMinTokenSize"></a>

```csharp
public double InnodbFtMinTokenSize { get; set; }
```

- *Type:* double

Minimum length of words that are stored in an InnoDB FULLTEXT index.

Changing this parameter will lead to a restart of the MySQL service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#innodb_ft_min_token_size ManagedDatabaseMysql#innodb_ft_min_token_size}

---

##### `InnodbFtServerStopwordTable`<sup>Optional</sup> <a name="InnodbFtServerStopwordTable" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbFtServerStopwordTable"></a>

```csharp
public string InnodbFtServerStopwordTable { get; set; }
```

- *Type:* string

This option is used to specify your own InnoDB FULLTEXT index stopword list for all InnoDB tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#innodb_ft_server_stopword_table ManagedDatabaseMysql#innodb_ft_server_stopword_table}

---

##### `InnodbLockWaitTimeout`<sup>Optional</sup> <a name="InnodbLockWaitTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbLockWaitTimeout"></a>

```csharp
public double InnodbLockWaitTimeout { get; set; }
```

- *Type:* double

The length of time in seconds an InnoDB transaction waits for a row lock before giving up.

Default is 120.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#innodb_lock_wait_timeout ManagedDatabaseMysql#innodb_lock_wait_timeout}

---

##### `InnodbLogBufferSize`<sup>Optional</sup> <a name="InnodbLogBufferSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbLogBufferSize"></a>

```csharp
public double InnodbLogBufferSize { get; set; }
```

- *Type:* double

The size in bytes of the buffer that InnoDB uses to write to the log files on disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#innodb_log_buffer_size ManagedDatabaseMysql#innodb_log_buffer_size}

---

##### `InnodbOnlineAlterLogMaxSize`<sup>Optional</sup> <a name="InnodbOnlineAlterLogMaxSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbOnlineAlterLogMaxSize"></a>

```csharp
public double InnodbOnlineAlterLogMaxSize { get; set; }
```

- *Type:* double

The upper limit in bytes on the size of the temporary log files used during online DDL operations for InnoDB tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#innodb_online_alter_log_max_size ManagedDatabaseMysql#innodb_online_alter_log_max_size}

---

##### `InnodbPrintAllDeadlocks`<sup>Optional</sup> <a name="InnodbPrintAllDeadlocks" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbPrintAllDeadlocks"></a>

```csharp
public object InnodbPrintAllDeadlocks { get; set; }
```

- *Type:* object

When enabled, information about all deadlocks in InnoDB user transactions is recorded in the error log. Disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#innodb_print_all_deadlocks ManagedDatabaseMysql#innodb_print_all_deadlocks}

---

##### `InnodbReadIoThreads`<sup>Optional</sup> <a name="InnodbReadIoThreads" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbReadIoThreads"></a>

```csharp
public double InnodbReadIoThreads { get; set; }
```

- *Type:* double

The number of I/O threads for read operations in InnoDB.

Default is 4. Changing this parameter will lead to a restart of the MySQL service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#innodb_read_io_threads ManagedDatabaseMysql#innodb_read_io_threads}

---

##### `InnodbRollbackOnTimeout`<sup>Optional</sup> <a name="InnodbRollbackOnTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbRollbackOnTimeout"></a>

```csharp
public object InnodbRollbackOnTimeout { get; set; }
```

- *Type:* object

When enabled a transaction timeout causes InnoDB to abort and roll back the entire transaction.

Changing this parameter will lead to a restart of the MySQL service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#innodb_rollback_on_timeout ManagedDatabaseMysql#innodb_rollback_on_timeout}

---

##### `InnodbThreadConcurrency`<sup>Optional</sup> <a name="InnodbThreadConcurrency" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbThreadConcurrency"></a>

```csharp
public double InnodbThreadConcurrency { get; set; }
```

- *Type:* double

Defines the maximum number of threads permitted inside of InnoDB. Default is 0 (infinite concurrency - no limit).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#innodb_thread_concurrency ManagedDatabaseMysql#innodb_thread_concurrency}

---

##### `InnodbWriteIoThreads`<sup>Optional</sup> <a name="InnodbWriteIoThreads" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.innodbWriteIoThreads"></a>

```csharp
public double InnodbWriteIoThreads { get; set; }
```

- *Type:* double

The number of I/O threads for write operations in InnoDB.

Default is 4. Changing this parameter will lead to a restart of the MySQL service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#innodb_write_io_threads ManagedDatabaseMysql#innodb_write_io_threads}

---

##### `InteractiveTimeout`<sup>Optional</sup> <a name="InteractiveTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.interactiveTimeout"></a>

```csharp
public double InteractiveTimeout { get; set; }
```

- *Type:* double

The number of seconds the server waits for activity on an interactive connection before closing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#interactive_timeout ManagedDatabaseMysql#interactive_timeout}

---

##### `InternalTmpMemStorageEngine`<sup>Optional</sup> <a name="InternalTmpMemStorageEngine" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.internalTmpMemStorageEngine"></a>

```csharp
public string InternalTmpMemStorageEngine { get; set; }
```

- *Type:* string

The storage engine for in-memory internal temporary tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#internal_tmp_mem_storage_engine ManagedDatabaseMysql#internal_tmp_mem_storage_engine}

---

##### `IpFilter`<sup>Optional</sup> <a name="IpFilter" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.ipFilter"></a>

```csharp
public string[] IpFilter { get; set; }
```

- *Type:* string[]

IP filter. Allow incoming connections from CIDR address block, e.g. '10.20.0.0/16'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#ip_filter ManagedDatabaseMysql#ip_filter}

---

##### `LongQueryTime`<sup>Optional</sup> <a name="LongQueryTime" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.longQueryTime"></a>

```csharp
public double LongQueryTime { get; set; }
```

- *Type:* double

The slow_query_logs work as SQL statements that take more than long_query_time seconds to execute. Default is 10s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#long_query_time ManagedDatabaseMysql#long_query_time}

---

##### `MaxAllowedPacket`<sup>Optional</sup> <a name="MaxAllowedPacket" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.maxAllowedPacket"></a>

```csharp
public double MaxAllowedPacket { get; set; }
```

- *Type:* double

Size of the largest message in bytes that can be received by the server. Default is 67108864 (64M).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#max_allowed_packet ManagedDatabaseMysql#max_allowed_packet}

---

##### `MaxHeapTableSize`<sup>Optional</sup> <a name="MaxHeapTableSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.maxHeapTableSize"></a>

```csharp
public double MaxHeapTableSize { get; set; }
```

- *Type:* double

Limits the size of internal in-memory tables. Also set tmp_table_size. Default is 16777216 (16M).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#max_heap_table_size ManagedDatabaseMysql#max_heap_table_size}

---

##### `Migration`<sup>Optional</sup> <a name="Migration" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.migration"></a>

```csharp
public ManagedDatabaseMysqlPropertiesMigration Migration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration">ManagedDatabaseMysqlPropertiesMigration</a>

migration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#migration ManagedDatabaseMysql#migration}

---

##### `NetBufferLength`<sup>Optional</sup> <a name="NetBufferLength" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.netBufferLength"></a>

```csharp
public double NetBufferLength { get; set; }
```

- *Type:* double

Start sizes of connection buffer and result buffer.

Default is 16384 (16K). Changing this parameter will lead to a restart of the MySQL service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#net_buffer_length ManagedDatabaseMysql#net_buffer_length}

---

##### `NetReadTimeout`<sup>Optional</sup> <a name="NetReadTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.netReadTimeout"></a>

```csharp
public double NetReadTimeout { get; set; }
```

- *Type:* double

The number of seconds to wait for more data from a connection before aborting the read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#net_read_timeout ManagedDatabaseMysql#net_read_timeout}

---

##### `NetWriteTimeout`<sup>Optional</sup> <a name="NetWriteTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.netWriteTimeout"></a>

```csharp
public double NetWriteTimeout { get; set; }
```

- *Type:* double

The number of seconds to wait for a block to be written to a connection before aborting the write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#net_write_timeout ManagedDatabaseMysql#net_write_timeout}

---

##### `PublicAccess`<sup>Optional</sup> <a name="PublicAccess" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.publicAccess"></a>

```csharp
public object PublicAccess { get; set; }
```

- *Type:* object

Public Access. Allow access to the service from the public Internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#public_access ManagedDatabaseMysql#public_access}

---

##### `ServiceLog`<sup>Optional</sup> <a name="ServiceLog" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.serviceLog"></a>

```csharp
public object ServiceLog { get; set; }
```

- *Type:* object

Service logging. Store logs for the service so that they are available in the HTTP API and console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#service_log ManagedDatabaseMysql#service_log}

---

##### `SlowQueryLog`<sup>Optional</sup> <a name="SlowQueryLog" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.slowQueryLog"></a>

```csharp
public object SlowQueryLog { get; set; }
```

- *Type:* object

Slow query log enables capturing of slow queries.

Setting slow_query_log to false also truncates the mysql.slow_log table. Default is off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#slow_query_log ManagedDatabaseMysql#slow_query_log}

---

##### `SortBufferSize`<sup>Optional</sup> <a name="SortBufferSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.sortBufferSize"></a>

```csharp
public double SortBufferSize { get; set; }
```

- *Type:* double

Sort buffer size in bytes for ORDER BY optimization. Default is 262144 (256K).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#sort_buffer_size ManagedDatabaseMysql#sort_buffer_size}

---

##### `SqlMode`<sup>Optional</sup> <a name="SqlMode" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.sqlMode"></a>

```csharp
public string SqlMode { get; set; }
```

- *Type:* string

Global SQL mode.

Set to empty to use MySQL server defaults. When creating a new service and not setting this field Aiven default SQL mode (strict, SQL standard compliant) will be assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#sql_mode ManagedDatabaseMysql#sql_mode}

---

##### `SqlRequirePrimaryKey`<sup>Optional</sup> <a name="SqlRequirePrimaryKey" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.sqlRequirePrimaryKey"></a>

```csharp
public object SqlRequirePrimaryKey { get; set; }
```

- *Type:* object

Require primary key to be defined for new tables or old tables modified with ALTER TABLE and fail if missing.

It is recommended to always have primary keys because various functionality may break if any large table is missing them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#sql_require_primary_key ManagedDatabaseMysql#sql_require_primary_key}

---

##### `TmpTableSize`<sup>Optional</sup> <a name="TmpTableSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.tmpTableSize"></a>

```csharp
public double TmpTableSize { get; set; }
```

- *Type:* double

Limits the size of internal in-memory tables. Also set max_heap_table_size. Default is 16777216 (16M).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#tmp_table_size ManagedDatabaseMysql#tmp_table_size}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

MySQL major version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#version ManagedDatabaseMysql#version}

---

##### `WaitTimeout`<sup>Optional</sup> <a name="WaitTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties.property.waitTimeout"></a>

```csharp
public double WaitTimeout { get; set; }
```

- *Type:* double

The number of seconds the server waits for activity on a noninteractive connection before closing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#wait_timeout ManagedDatabaseMysql#wait_timeout}

---

### ManagedDatabaseMysqlPropertiesMigration <a name="ManagedDatabaseMysqlPropertiesMigration" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseMysqlPropertiesMigration {
    string Dbname = null,
    string Host = null,
    string IgnoreDbs = null,
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
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.dbname">Dbname</a></code> | <code>string</code> | Database name for bootstrapping the initial connection. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.host">Host</a></code> | <code>string</code> | Hostname or IP address of the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.ignoreDbs">IgnoreDbs</a></code> | <code>string</code> | Comma-separated list of databases, which should be ignored during migration (supported by MySQL and PostgreSQL only at the moment). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.method">Method</a></code> | <code>string</code> | The migration method to be used (currently supported only by Redis, Dragonfly, MySQL and PostgreSQL service types). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.password">Password</a></code> | <code>string</code> | Password for authentication with the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.port">Port</a></code> | <code>double</code> | Port number of the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.ssl">Ssl</a></code> | <code>object</code> | The server where to migrate data from is secured with SSL. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.username">Username</a></code> | <code>string</code> | User name for authentication with the server where to migrate data from. |

---

##### `Dbname`<sup>Optional</sup> <a name="Dbname" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.dbname"></a>

```csharp
public string Dbname { get; set; }
```

- *Type:* string

Database name for bootstrapping the initial connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#dbname ManagedDatabaseMysql#dbname}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Hostname or IP address of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#host ManagedDatabaseMysql#host}

---

##### `IgnoreDbs`<sup>Optional</sup> <a name="IgnoreDbs" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.ignoreDbs"></a>

```csharp
public string IgnoreDbs { get; set; }
```

- *Type:* string

Comma-separated list of databases, which should be ignored during migration (supported by MySQL and PostgreSQL only at the moment).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#ignore_dbs ManagedDatabaseMysql#ignore_dbs}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

The migration method to be used (currently supported only by Redis, Dragonfly, MySQL and PostgreSQL service types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#method ManagedDatabaseMysql#method}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#password ManagedDatabaseMysql#password}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Port number of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#port ManagedDatabaseMysql#port}

---

##### `Ssl`<sup>Optional</sup> <a name="Ssl" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.ssl"></a>

```csharp
public object Ssl { get; set; }
```

- *Type:* object

The server where to migrate data from is secured with SSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#ssl ManagedDatabaseMysql#ssl}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

User name for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.2/docs/resources/managed_database_mysql#username ManagedDatabaseMysql#username}

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedDatabaseMysqlComponentsList <a name="ManagedDatabaseMysqlComponentsList" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseMysqlComponentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.get"></a>

```csharp
private ManagedDatabaseMysqlComponentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ManagedDatabaseMysqlComponentsOutputReference <a name="ManagedDatabaseMysqlComponentsOutputReference" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseMysqlComponentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.component">Component</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.route">Route</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.usage">Usage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponents">ManagedDatabaseMysqlComponents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Component`<sup>Required</sup> <a name="Component" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.component"></a>

```csharp
public string Component { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Route`<sup>Required</sup> <a name="Route" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.route"></a>

```csharp
public string Route { get; }
```

- *Type:* string

---

##### `Usage`<sup>Required</sup> <a name="Usage" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.usage"></a>

```csharp
public string Usage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponentsOutputReference.property.internalValue"></a>

```csharp
public ManagedDatabaseMysqlComponents InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlComponents">ManagedDatabaseMysqlComponents</a>

---


### ManagedDatabaseMysqlNetworkList <a name="ManagedDatabaseMysqlNetworkList" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseMysqlNetworkList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.get"></a>

```csharp
private ManagedDatabaseMysqlNetworkOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagedDatabaseMysqlNetworkOutputReference <a name="ManagedDatabaseMysqlNetworkOutputReference" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseMysqlNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.familyInput">FamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.uuidInput">UuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.family">Family</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FamilyInput`<sup>Optional</sup> <a name="FamilyInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.familyInput"></a>

```csharp
public string FamilyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UuidInput`<sup>Optional</sup> <a name="UuidInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.uuidInput"></a>

```csharp
public string UuidInput { get; }
```

- *Type:* string

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.family"></a>

```csharp
public string Family { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNetworkOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ManagedDatabaseMysqlNodeStatesList <a name="ManagedDatabaseMysqlNodeStatesList" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseMysqlNodeStatesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.get"></a>

```csharp
private ManagedDatabaseMysqlNodeStatesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ManagedDatabaseMysqlNodeStatesOutputReference <a name="ManagedDatabaseMysqlNodeStatesOutputReference" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseMysqlNodeStatesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStates">ManagedDatabaseMysqlNodeStates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStatesOutputReference.property.internalValue"></a>

```csharp
public ManagedDatabaseMysqlNodeStates InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlNodeStates">ManagedDatabaseMysqlNodeStates</a>

---


### ManagedDatabaseMysqlPropertiesMigrationOutputReference <a name="ManagedDatabaseMysqlPropertiesMigrationOutputReference" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseMysqlPropertiesMigrationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetDbname">ResetDbname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetIgnoreDbs">ResetIgnoreDbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetSsl">ResetSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDbname` <a name="ResetDbname" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetDbname"></a>

```csharp
private void ResetDbname()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetIgnoreDbs` <a name="ResetIgnoreDbs" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetIgnoreDbs"></a>

```csharp
private void ResetIgnoreDbs()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetMethod"></a>

```csharp
private void ResetMethod()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetSsl` <a name="ResetSsl" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetSsl"></a>

```csharp
private void ResetSsl()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.dbnameInput">DbnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.ignoreDbsInput">IgnoreDbsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.sslInput">SslInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.dbname">Dbname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.ignoreDbs">IgnoreDbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.ssl">Ssl</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration">ManagedDatabaseMysqlPropertiesMigration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DbnameInput`<sup>Optional</sup> <a name="DbnameInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.dbnameInput"></a>

```csharp
public string DbnameInput { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `IgnoreDbsInput`<sup>Optional</sup> <a name="IgnoreDbsInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.ignoreDbsInput"></a>

```csharp
public string IgnoreDbsInput { get; }
```

- *Type:* string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `SslInput`<sup>Optional</sup> <a name="SslInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.sslInput"></a>

```csharp
public object SslInput { get; }
```

- *Type:* object

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Dbname`<sup>Required</sup> <a name="Dbname" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.dbname"></a>

```csharp
public string Dbname { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `IgnoreDbs`<sup>Required</sup> <a name="IgnoreDbs" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.ignoreDbs"></a>

```csharp
public string IgnoreDbs { get; }
```

- *Type:* string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Ssl`<sup>Required</sup> <a name="Ssl" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.ssl"></a>

```csharp
public object Ssl { get; }
```

- *Type:* object

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference.property.internalValue"></a>

```csharp
public ManagedDatabaseMysqlPropertiesMigration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration">ManagedDatabaseMysqlPropertiesMigration</a>

---


### ManagedDatabaseMysqlPropertiesOutputReference <a name="ManagedDatabaseMysqlPropertiesOutputReference" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseMysqlPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.putMigration">PutMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetAdminPassword">ResetAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetAdminUsername">ResetAdminUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter">ResetAutomaticUtilityNetworkIpFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetBackupHour">ResetBackupHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetBackupMinute">ResetBackupMinute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetBinlogRetentionPeriod">ResetBinlogRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetConnectTimeout">ResetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetDefaultTimeZone">ResetDefaultTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetGroupConcatMaxLen">ResetGroupConcatMaxLen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInformationSchemaStatsExpiry">ResetInformationSchemaStatsExpiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbChangeBufferMaxSize">ResetInnodbChangeBufferMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbFlushNeighbors">ResetInnodbFlushNeighbors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbFtMinTokenSize">ResetInnodbFtMinTokenSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbFtServerStopwordTable">ResetInnodbFtServerStopwordTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbLockWaitTimeout">ResetInnodbLockWaitTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbLogBufferSize">ResetInnodbLogBufferSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbOnlineAlterLogMaxSize">ResetInnodbOnlineAlterLogMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbPrintAllDeadlocks">ResetInnodbPrintAllDeadlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbReadIoThreads">ResetInnodbReadIoThreads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbRollbackOnTimeout">ResetInnodbRollbackOnTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbThreadConcurrency">ResetInnodbThreadConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbWriteIoThreads">ResetInnodbWriteIoThreads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInteractiveTimeout">ResetInteractiveTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInternalTmpMemStorageEngine">ResetInternalTmpMemStorageEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetIpFilter">ResetIpFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetLongQueryTime">ResetLongQueryTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetMaxAllowedPacket">ResetMaxAllowedPacket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetMaxHeapTableSize">ResetMaxHeapTableSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetMigration">ResetMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetNetBufferLength">ResetNetBufferLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetNetReadTimeout">ResetNetReadTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetNetWriteTimeout">ResetNetWriteTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetPublicAccess">ResetPublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetServiceLog">ResetServiceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetSlowQueryLog">ResetSlowQueryLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetSortBufferSize">ResetSortBufferSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetSqlMode">ResetSqlMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetSqlRequirePrimaryKey">ResetSqlRequirePrimaryKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetTmpTableSize">ResetTmpTableSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetWaitTimeout">ResetWaitTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMigration` <a name="PutMigration" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.putMigration"></a>

```csharp
private void PutMigration(ManagedDatabaseMysqlPropertiesMigration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.putMigration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration">ManagedDatabaseMysqlPropertiesMigration</a>

---

##### `ResetAdminPassword` <a name="ResetAdminPassword" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetAdminPassword"></a>

```csharp
private void ResetAdminPassword()
```

##### `ResetAdminUsername` <a name="ResetAdminUsername" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetAdminUsername"></a>

```csharp
private void ResetAdminUsername()
```

##### `ResetAutomaticUtilityNetworkIpFilter` <a name="ResetAutomaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter"></a>

```csharp
private void ResetAutomaticUtilityNetworkIpFilter()
```

##### `ResetBackupHour` <a name="ResetBackupHour" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetBackupHour"></a>

```csharp
private void ResetBackupHour()
```

##### `ResetBackupMinute` <a name="ResetBackupMinute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetBackupMinute"></a>

```csharp
private void ResetBackupMinute()
```

##### `ResetBinlogRetentionPeriod` <a name="ResetBinlogRetentionPeriod" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetBinlogRetentionPeriod"></a>

```csharp
private void ResetBinlogRetentionPeriod()
```

##### `ResetConnectTimeout` <a name="ResetConnectTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetConnectTimeout"></a>

```csharp
private void ResetConnectTimeout()
```

##### `ResetDefaultTimeZone` <a name="ResetDefaultTimeZone" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetDefaultTimeZone"></a>

```csharp
private void ResetDefaultTimeZone()
```

##### `ResetGroupConcatMaxLen` <a name="ResetGroupConcatMaxLen" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetGroupConcatMaxLen"></a>

```csharp
private void ResetGroupConcatMaxLen()
```

##### `ResetInformationSchemaStatsExpiry` <a name="ResetInformationSchemaStatsExpiry" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInformationSchemaStatsExpiry"></a>

```csharp
private void ResetInformationSchemaStatsExpiry()
```

##### `ResetInnodbChangeBufferMaxSize` <a name="ResetInnodbChangeBufferMaxSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbChangeBufferMaxSize"></a>

```csharp
private void ResetInnodbChangeBufferMaxSize()
```

##### `ResetInnodbFlushNeighbors` <a name="ResetInnodbFlushNeighbors" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbFlushNeighbors"></a>

```csharp
private void ResetInnodbFlushNeighbors()
```

##### `ResetInnodbFtMinTokenSize` <a name="ResetInnodbFtMinTokenSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbFtMinTokenSize"></a>

```csharp
private void ResetInnodbFtMinTokenSize()
```

##### `ResetInnodbFtServerStopwordTable` <a name="ResetInnodbFtServerStopwordTable" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbFtServerStopwordTable"></a>

```csharp
private void ResetInnodbFtServerStopwordTable()
```

##### `ResetInnodbLockWaitTimeout` <a name="ResetInnodbLockWaitTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbLockWaitTimeout"></a>

```csharp
private void ResetInnodbLockWaitTimeout()
```

##### `ResetInnodbLogBufferSize` <a name="ResetInnodbLogBufferSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbLogBufferSize"></a>

```csharp
private void ResetInnodbLogBufferSize()
```

##### `ResetInnodbOnlineAlterLogMaxSize` <a name="ResetInnodbOnlineAlterLogMaxSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbOnlineAlterLogMaxSize"></a>

```csharp
private void ResetInnodbOnlineAlterLogMaxSize()
```

##### `ResetInnodbPrintAllDeadlocks` <a name="ResetInnodbPrintAllDeadlocks" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbPrintAllDeadlocks"></a>

```csharp
private void ResetInnodbPrintAllDeadlocks()
```

##### `ResetInnodbReadIoThreads` <a name="ResetInnodbReadIoThreads" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbReadIoThreads"></a>

```csharp
private void ResetInnodbReadIoThreads()
```

##### `ResetInnodbRollbackOnTimeout` <a name="ResetInnodbRollbackOnTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbRollbackOnTimeout"></a>

```csharp
private void ResetInnodbRollbackOnTimeout()
```

##### `ResetInnodbThreadConcurrency` <a name="ResetInnodbThreadConcurrency" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbThreadConcurrency"></a>

```csharp
private void ResetInnodbThreadConcurrency()
```

##### `ResetInnodbWriteIoThreads` <a name="ResetInnodbWriteIoThreads" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInnodbWriteIoThreads"></a>

```csharp
private void ResetInnodbWriteIoThreads()
```

##### `ResetInteractiveTimeout` <a name="ResetInteractiveTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInteractiveTimeout"></a>

```csharp
private void ResetInteractiveTimeout()
```

##### `ResetInternalTmpMemStorageEngine` <a name="ResetInternalTmpMemStorageEngine" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetInternalTmpMemStorageEngine"></a>

```csharp
private void ResetInternalTmpMemStorageEngine()
```

##### `ResetIpFilter` <a name="ResetIpFilter" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetIpFilter"></a>

```csharp
private void ResetIpFilter()
```

##### `ResetLongQueryTime` <a name="ResetLongQueryTime" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetLongQueryTime"></a>

```csharp
private void ResetLongQueryTime()
```

##### `ResetMaxAllowedPacket` <a name="ResetMaxAllowedPacket" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetMaxAllowedPacket"></a>

```csharp
private void ResetMaxAllowedPacket()
```

##### `ResetMaxHeapTableSize` <a name="ResetMaxHeapTableSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetMaxHeapTableSize"></a>

```csharp
private void ResetMaxHeapTableSize()
```

##### `ResetMigration` <a name="ResetMigration" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetMigration"></a>

```csharp
private void ResetMigration()
```

##### `ResetNetBufferLength` <a name="ResetNetBufferLength" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetNetBufferLength"></a>

```csharp
private void ResetNetBufferLength()
```

##### `ResetNetReadTimeout` <a name="ResetNetReadTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetNetReadTimeout"></a>

```csharp
private void ResetNetReadTimeout()
```

##### `ResetNetWriteTimeout` <a name="ResetNetWriteTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetNetWriteTimeout"></a>

```csharp
private void ResetNetWriteTimeout()
```

##### `ResetPublicAccess` <a name="ResetPublicAccess" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetPublicAccess"></a>

```csharp
private void ResetPublicAccess()
```

##### `ResetServiceLog` <a name="ResetServiceLog" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetServiceLog"></a>

```csharp
private void ResetServiceLog()
```

##### `ResetSlowQueryLog` <a name="ResetSlowQueryLog" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetSlowQueryLog"></a>

```csharp
private void ResetSlowQueryLog()
```

##### `ResetSortBufferSize` <a name="ResetSortBufferSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetSortBufferSize"></a>

```csharp
private void ResetSortBufferSize()
```

##### `ResetSqlMode` <a name="ResetSqlMode" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetSqlMode"></a>

```csharp
private void ResetSqlMode()
```

##### `ResetSqlRequirePrimaryKey` <a name="ResetSqlRequirePrimaryKey" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetSqlRequirePrimaryKey"></a>

```csharp
private void ResetSqlRequirePrimaryKey()
```

##### `ResetTmpTableSize` <a name="ResetTmpTableSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetTmpTableSize"></a>

```csharp
private void ResetTmpTableSize()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```

##### `ResetWaitTimeout` <a name="ResetWaitTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.resetWaitTimeout"></a>

```csharp
private void ResetWaitTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.migration">Migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference">ManagedDatabaseMysqlPropertiesMigrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.adminPasswordInput">AdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.adminUsernameInput">AdminUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput">AutomaticUtilityNetworkIpFilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.backupHourInput">BackupHourInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.backupMinuteInput">BackupMinuteInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.binlogRetentionPeriodInput">BinlogRetentionPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.connectTimeoutInput">ConnectTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.defaultTimeZoneInput">DefaultTimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.groupConcatMaxLenInput">GroupConcatMaxLenInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.informationSchemaStatsExpiryInput">InformationSchemaStatsExpiryInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbChangeBufferMaxSizeInput">InnodbChangeBufferMaxSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFlushNeighborsInput">InnodbFlushNeighborsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFtMinTokenSizeInput">InnodbFtMinTokenSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFtServerStopwordTableInput">InnodbFtServerStopwordTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbLockWaitTimeoutInput">InnodbLockWaitTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbLogBufferSizeInput">InnodbLogBufferSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbOnlineAlterLogMaxSizeInput">InnodbOnlineAlterLogMaxSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbPrintAllDeadlocksInput">InnodbPrintAllDeadlocksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbReadIoThreadsInput">InnodbReadIoThreadsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbRollbackOnTimeoutInput">InnodbRollbackOnTimeoutInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbThreadConcurrencyInput">InnodbThreadConcurrencyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbWriteIoThreadsInput">InnodbWriteIoThreadsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.interactiveTimeoutInput">InteractiveTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.internalTmpMemStorageEngineInput">InternalTmpMemStorageEngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.ipFilterInput">IpFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.longQueryTimeInput">LongQueryTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.maxAllowedPacketInput">MaxAllowedPacketInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.maxHeapTableSizeInput">MaxHeapTableSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.migrationInput">MigrationInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration">ManagedDatabaseMysqlPropertiesMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netBufferLengthInput">NetBufferLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netReadTimeoutInput">NetReadTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netWriteTimeoutInput">NetWriteTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.publicAccessInput">PublicAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.serviceLogInput">ServiceLogInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.slowQueryLogInput">SlowQueryLogInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sortBufferSizeInput">SortBufferSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sqlModeInput">SqlModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sqlRequirePrimaryKeyInput">SqlRequirePrimaryKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.tmpTableSizeInput">TmpTableSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.waitTimeoutInput">WaitTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.adminPassword">AdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.adminUsername">AdminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.automaticUtilityNetworkIpFilter">AutomaticUtilityNetworkIpFilter</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.backupHour">BackupHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.backupMinute">BackupMinute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.binlogRetentionPeriod">BinlogRetentionPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.connectTimeout">ConnectTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.defaultTimeZone">DefaultTimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.groupConcatMaxLen">GroupConcatMaxLen</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.informationSchemaStatsExpiry">InformationSchemaStatsExpiry</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbChangeBufferMaxSize">InnodbChangeBufferMaxSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFlushNeighbors">InnodbFlushNeighbors</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFtMinTokenSize">InnodbFtMinTokenSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFtServerStopwordTable">InnodbFtServerStopwordTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbLockWaitTimeout">InnodbLockWaitTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbLogBufferSize">InnodbLogBufferSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbOnlineAlterLogMaxSize">InnodbOnlineAlterLogMaxSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbPrintAllDeadlocks">InnodbPrintAllDeadlocks</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbReadIoThreads">InnodbReadIoThreads</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbRollbackOnTimeout">InnodbRollbackOnTimeout</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbThreadConcurrency">InnodbThreadConcurrency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbWriteIoThreads">InnodbWriteIoThreads</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.interactiveTimeout">InteractiveTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.internalTmpMemStorageEngine">InternalTmpMemStorageEngine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.ipFilter">IpFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.longQueryTime">LongQueryTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.maxAllowedPacket">MaxAllowedPacket</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.maxHeapTableSize">MaxHeapTableSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netBufferLength">NetBufferLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netReadTimeout">NetReadTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netWriteTimeout">NetWriteTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.publicAccess">PublicAccess</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.serviceLog">ServiceLog</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.slowQueryLog">SlowQueryLog</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sortBufferSize">SortBufferSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sqlMode">SqlMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sqlRequirePrimaryKey">SqlRequirePrimaryKey</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.tmpTableSize">TmpTableSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.waitTimeout">WaitTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties">ManagedDatabaseMysqlProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Migration`<sup>Required</sup> <a name="Migration" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.migration"></a>

```csharp
public ManagedDatabaseMysqlPropertiesMigrationOutputReference Migration { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigrationOutputReference">ManagedDatabaseMysqlPropertiesMigrationOutputReference</a>

---

##### `AdminPasswordInput`<sup>Optional</sup> <a name="AdminPasswordInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.adminPasswordInput"></a>

```csharp
public string AdminPasswordInput { get; }
```

- *Type:* string

---

##### `AdminUsernameInput`<sup>Optional</sup> <a name="AdminUsernameInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.adminUsernameInput"></a>

```csharp
public string AdminUsernameInput { get; }
```

- *Type:* string

---

##### `AutomaticUtilityNetworkIpFilterInput`<sup>Optional</sup> <a name="AutomaticUtilityNetworkIpFilterInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput"></a>

```csharp
public object AutomaticUtilityNetworkIpFilterInput { get; }
```

- *Type:* object

---

##### `BackupHourInput`<sup>Optional</sup> <a name="BackupHourInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.backupHourInput"></a>

```csharp
public double BackupHourInput { get; }
```

- *Type:* double

---

##### `BackupMinuteInput`<sup>Optional</sup> <a name="BackupMinuteInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.backupMinuteInput"></a>

```csharp
public double BackupMinuteInput { get; }
```

- *Type:* double

---

##### `BinlogRetentionPeriodInput`<sup>Optional</sup> <a name="BinlogRetentionPeriodInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.binlogRetentionPeriodInput"></a>

```csharp
public double BinlogRetentionPeriodInput { get; }
```

- *Type:* double

---

##### `ConnectTimeoutInput`<sup>Optional</sup> <a name="ConnectTimeoutInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.connectTimeoutInput"></a>

```csharp
public double ConnectTimeoutInput { get; }
```

- *Type:* double

---

##### `DefaultTimeZoneInput`<sup>Optional</sup> <a name="DefaultTimeZoneInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.defaultTimeZoneInput"></a>

```csharp
public string DefaultTimeZoneInput { get; }
```

- *Type:* string

---

##### `GroupConcatMaxLenInput`<sup>Optional</sup> <a name="GroupConcatMaxLenInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.groupConcatMaxLenInput"></a>

```csharp
public double GroupConcatMaxLenInput { get; }
```

- *Type:* double

---

##### `InformationSchemaStatsExpiryInput`<sup>Optional</sup> <a name="InformationSchemaStatsExpiryInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.informationSchemaStatsExpiryInput"></a>

```csharp
public double InformationSchemaStatsExpiryInput { get; }
```

- *Type:* double

---

##### `InnodbChangeBufferMaxSizeInput`<sup>Optional</sup> <a name="InnodbChangeBufferMaxSizeInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbChangeBufferMaxSizeInput"></a>

```csharp
public double InnodbChangeBufferMaxSizeInput { get; }
```

- *Type:* double

---

##### `InnodbFlushNeighborsInput`<sup>Optional</sup> <a name="InnodbFlushNeighborsInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFlushNeighborsInput"></a>

```csharp
public double InnodbFlushNeighborsInput { get; }
```

- *Type:* double

---

##### `InnodbFtMinTokenSizeInput`<sup>Optional</sup> <a name="InnodbFtMinTokenSizeInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFtMinTokenSizeInput"></a>

```csharp
public double InnodbFtMinTokenSizeInput { get; }
```

- *Type:* double

---

##### `InnodbFtServerStopwordTableInput`<sup>Optional</sup> <a name="InnodbFtServerStopwordTableInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFtServerStopwordTableInput"></a>

```csharp
public string InnodbFtServerStopwordTableInput { get; }
```

- *Type:* string

---

##### `InnodbLockWaitTimeoutInput`<sup>Optional</sup> <a name="InnodbLockWaitTimeoutInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbLockWaitTimeoutInput"></a>

```csharp
public double InnodbLockWaitTimeoutInput { get; }
```

- *Type:* double

---

##### `InnodbLogBufferSizeInput`<sup>Optional</sup> <a name="InnodbLogBufferSizeInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbLogBufferSizeInput"></a>

```csharp
public double InnodbLogBufferSizeInput { get; }
```

- *Type:* double

---

##### `InnodbOnlineAlterLogMaxSizeInput`<sup>Optional</sup> <a name="InnodbOnlineAlterLogMaxSizeInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbOnlineAlterLogMaxSizeInput"></a>

```csharp
public double InnodbOnlineAlterLogMaxSizeInput { get; }
```

- *Type:* double

---

##### `InnodbPrintAllDeadlocksInput`<sup>Optional</sup> <a name="InnodbPrintAllDeadlocksInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbPrintAllDeadlocksInput"></a>

```csharp
public object InnodbPrintAllDeadlocksInput { get; }
```

- *Type:* object

---

##### `InnodbReadIoThreadsInput`<sup>Optional</sup> <a name="InnodbReadIoThreadsInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbReadIoThreadsInput"></a>

```csharp
public double InnodbReadIoThreadsInput { get; }
```

- *Type:* double

---

##### `InnodbRollbackOnTimeoutInput`<sup>Optional</sup> <a name="InnodbRollbackOnTimeoutInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbRollbackOnTimeoutInput"></a>

```csharp
public object InnodbRollbackOnTimeoutInput { get; }
```

- *Type:* object

---

##### `InnodbThreadConcurrencyInput`<sup>Optional</sup> <a name="InnodbThreadConcurrencyInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbThreadConcurrencyInput"></a>

```csharp
public double InnodbThreadConcurrencyInput { get; }
```

- *Type:* double

---

##### `InnodbWriteIoThreadsInput`<sup>Optional</sup> <a name="InnodbWriteIoThreadsInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbWriteIoThreadsInput"></a>

```csharp
public double InnodbWriteIoThreadsInput { get; }
```

- *Type:* double

---

##### `InteractiveTimeoutInput`<sup>Optional</sup> <a name="InteractiveTimeoutInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.interactiveTimeoutInput"></a>

```csharp
public double InteractiveTimeoutInput { get; }
```

- *Type:* double

---

##### `InternalTmpMemStorageEngineInput`<sup>Optional</sup> <a name="InternalTmpMemStorageEngineInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.internalTmpMemStorageEngineInput"></a>

```csharp
public string InternalTmpMemStorageEngineInput { get; }
```

- *Type:* string

---

##### `IpFilterInput`<sup>Optional</sup> <a name="IpFilterInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.ipFilterInput"></a>

```csharp
public string[] IpFilterInput { get; }
```

- *Type:* string[]

---

##### `LongQueryTimeInput`<sup>Optional</sup> <a name="LongQueryTimeInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.longQueryTimeInput"></a>

```csharp
public double LongQueryTimeInput { get; }
```

- *Type:* double

---

##### `MaxAllowedPacketInput`<sup>Optional</sup> <a name="MaxAllowedPacketInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.maxAllowedPacketInput"></a>

```csharp
public double MaxAllowedPacketInput { get; }
```

- *Type:* double

---

##### `MaxHeapTableSizeInput`<sup>Optional</sup> <a name="MaxHeapTableSizeInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.maxHeapTableSizeInput"></a>

```csharp
public double MaxHeapTableSizeInput { get; }
```

- *Type:* double

---

##### `MigrationInput`<sup>Optional</sup> <a name="MigrationInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.migrationInput"></a>

```csharp
public ManagedDatabaseMysqlPropertiesMigration MigrationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesMigration">ManagedDatabaseMysqlPropertiesMigration</a>

---

##### `NetBufferLengthInput`<sup>Optional</sup> <a name="NetBufferLengthInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netBufferLengthInput"></a>

```csharp
public double NetBufferLengthInput { get; }
```

- *Type:* double

---

##### `NetReadTimeoutInput`<sup>Optional</sup> <a name="NetReadTimeoutInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netReadTimeoutInput"></a>

```csharp
public double NetReadTimeoutInput { get; }
```

- *Type:* double

---

##### `NetWriteTimeoutInput`<sup>Optional</sup> <a name="NetWriteTimeoutInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netWriteTimeoutInput"></a>

```csharp
public double NetWriteTimeoutInput { get; }
```

- *Type:* double

---

##### `PublicAccessInput`<sup>Optional</sup> <a name="PublicAccessInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.publicAccessInput"></a>

```csharp
public object PublicAccessInput { get; }
```

- *Type:* object

---

##### `ServiceLogInput`<sup>Optional</sup> <a name="ServiceLogInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.serviceLogInput"></a>

```csharp
public object ServiceLogInput { get; }
```

- *Type:* object

---

##### `SlowQueryLogInput`<sup>Optional</sup> <a name="SlowQueryLogInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.slowQueryLogInput"></a>

```csharp
public object SlowQueryLogInput { get; }
```

- *Type:* object

---

##### `SortBufferSizeInput`<sup>Optional</sup> <a name="SortBufferSizeInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sortBufferSizeInput"></a>

```csharp
public double SortBufferSizeInput { get; }
```

- *Type:* double

---

##### `SqlModeInput`<sup>Optional</sup> <a name="SqlModeInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sqlModeInput"></a>

```csharp
public string SqlModeInput { get; }
```

- *Type:* string

---

##### `SqlRequirePrimaryKeyInput`<sup>Optional</sup> <a name="SqlRequirePrimaryKeyInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sqlRequirePrimaryKeyInput"></a>

```csharp
public object SqlRequirePrimaryKeyInput { get; }
```

- *Type:* object

---

##### `TmpTableSizeInput`<sup>Optional</sup> <a name="TmpTableSizeInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.tmpTableSizeInput"></a>

```csharp
public double TmpTableSizeInput { get; }
```

- *Type:* double

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `WaitTimeoutInput`<sup>Optional</sup> <a name="WaitTimeoutInput" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.waitTimeoutInput"></a>

```csharp
public double WaitTimeoutInput { get; }
```

- *Type:* double

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.adminPassword"></a>

```csharp
public string AdminPassword { get; }
```

- *Type:* string

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.adminUsername"></a>

```csharp
public string AdminUsername { get; }
```

- *Type:* string

---

##### `AutomaticUtilityNetworkIpFilter`<sup>Required</sup> <a name="AutomaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.automaticUtilityNetworkIpFilter"></a>

```csharp
public object AutomaticUtilityNetworkIpFilter { get; }
```

- *Type:* object

---

##### `BackupHour`<sup>Required</sup> <a name="BackupHour" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.backupHour"></a>

```csharp
public double BackupHour { get; }
```

- *Type:* double

---

##### `BackupMinute`<sup>Required</sup> <a name="BackupMinute" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.backupMinute"></a>

```csharp
public double BackupMinute { get; }
```

- *Type:* double

---

##### `BinlogRetentionPeriod`<sup>Required</sup> <a name="BinlogRetentionPeriod" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.binlogRetentionPeriod"></a>

```csharp
public double BinlogRetentionPeriod { get; }
```

- *Type:* double

---

##### `ConnectTimeout`<sup>Required</sup> <a name="ConnectTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.connectTimeout"></a>

```csharp
public double ConnectTimeout { get; }
```

- *Type:* double

---

##### `DefaultTimeZone`<sup>Required</sup> <a name="DefaultTimeZone" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.defaultTimeZone"></a>

```csharp
public string DefaultTimeZone { get; }
```

- *Type:* string

---

##### `GroupConcatMaxLen`<sup>Required</sup> <a name="GroupConcatMaxLen" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.groupConcatMaxLen"></a>

```csharp
public double GroupConcatMaxLen { get; }
```

- *Type:* double

---

##### `InformationSchemaStatsExpiry`<sup>Required</sup> <a name="InformationSchemaStatsExpiry" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.informationSchemaStatsExpiry"></a>

```csharp
public double InformationSchemaStatsExpiry { get; }
```

- *Type:* double

---

##### `InnodbChangeBufferMaxSize`<sup>Required</sup> <a name="InnodbChangeBufferMaxSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbChangeBufferMaxSize"></a>

```csharp
public double InnodbChangeBufferMaxSize { get; }
```

- *Type:* double

---

##### `InnodbFlushNeighbors`<sup>Required</sup> <a name="InnodbFlushNeighbors" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFlushNeighbors"></a>

```csharp
public double InnodbFlushNeighbors { get; }
```

- *Type:* double

---

##### `InnodbFtMinTokenSize`<sup>Required</sup> <a name="InnodbFtMinTokenSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFtMinTokenSize"></a>

```csharp
public double InnodbFtMinTokenSize { get; }
```

- *Type:* double

---

##### `InnodbFtServerStopwordTable`<sup>Required</sup> <a name="InnodbFtServerStopwordTable" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbFtServerStopwordTable"></a>

```csharp
public string InnodbFtServerStopwordTable { get; }
```

- *Type:* string

---

##### `InnodbLockWaitTimeout`<sup>Required</sup> <a name="InnodbLockWaitTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbLockWaitTimeout"></a>

```csharp
public double InnodbLockWaitTimeout { get; }
```

- *Type:* double

---

##### `InnodbLogBufferSize`<sup>Required</sup> <a name="InnodbLogBufferSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbLogBufferSize"></a>

```csharp
public double InnodbLogBufferSize { get; }
```

- *Type:* double

---

##### `InnodbOnlineAlterLogMaxSize`<sup>Required</sup> <a name="InnodbOnlineAlterLogMaxSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbOnlineAlterLogMaxSize"></a>

```csharp
public double InnodbOnlineAlterLogMaxSize { get; }
```

- *Type:* double

---

##### `InnodbPrintAllDeadlocks`<sup>Required</sup> <a name="InnodbPrintAllDeadlocks" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbPrintAllDeadlocks"></a>

```csharp
public object InnodbPrintAllDeadlocks { get; }
```

- *Type:* object

---

##### `InnodbReadIoThreads`<sup>Required</sup> <a name="InnodbReadIoThreads" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbReadIoThreads"></a>

```csharp
public double InnodbReadIoThreads { get; }
```

- *Type:* double

---

##### `InnodbRollbackOnTimeout`<sup>Required</sup> <a name="InnodbRollbackOnTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbRollbackOnTimeout"></a>

```csharp
public object InnodbRollbackOnTimeout { get; }
```

- *Type:* object

---

##### `InnodbThreadConcurrency`<sup>Required</sup> <a name="InnodbThreadConcurrency" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbThreadConcurrency"></a>

```csharp
public double InnodbThreadConcurrency { get; }
```

- *Type:* double

---

##### `InnodbWriteIoThreads`<sup>Required</sup> <a name="InnodbWriteIoThreads" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.innodbWriteIoThreads"></a>

```csharp
public double InnodbWriteIoThreads { get; }
```

- *Type:* double

---

##### `InteractiveTimeout`<sup>Required</sup> <a name="InteractiveTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.interactiveTimeout"></a>

```csharp
public double InteractiveTimeout { get; }
```

- *Type:* double

---

##### `InternalTmpMemStorageEngine`<sup>Required</sup> <a name="InternalTmpMemStorageEngine" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.internalTmpMemStorageEngine"></a>

```csharp
public string InternalTmpMemStorageEngine { get; }
```

- *Type:* string

---

##### `IpFilter`<sup>Required</sup> <a name="IpFilter" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.ipFilter"></a>

```csharp
public string[] IpFilter { get; }
```

- *Type:* string[]

---

##### `LongQueryTime`<sup>Required</sup> <a name="LongQueryTime" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.longQueryTime"></a>

```csharp
public double LongQueryTime { get; }
```

- *Type:* double

---

##### `MaxAllowedPacket`<sup>Required</sup> <a name="MaxAllowedPacket" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.maxAllowedPacket"></a>

```csharp
public double MaxAllowedPacket { get; }
```

- *Type:* double

---

##### `MaxHeapTableSize`<sup>Required</sup> <a name="MaxHeapTableSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.maxHeapTableSize"></a>

```csharp
public double MaxHeapTableSize { get; }
```

- *Type:* double

---

##### `NetBufferLength`<sup>Required</sup> <a name="NetBufferLength" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netBufferLength"></a>

```csharp
public double NetBufferLength { get; }
```

- *Type:* double

---

##### `NetReadTimeout`<sup>Required</sup> <a name="NetReadTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netReadTimeout"></a>

```csharp
public double NetReadTimeout { get; }
```

- *Type:* double

---

##### `NetWriteTimeout`<sup>Required</sup> <a name="NetWriteTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.netWriteTimeout"></a>

```csharp
public double NetWriteTimeout { get; }
```

- *Type:* double

---

##### `PublicAccess`<sup>Required</sup> <a name="PublicAccess" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.publicAccess"></a>

```csharp
public object PublicAccess { get; }
```

- *Type:* object

---

##### `ServiceLog`<sup>Required</sup> <a name="ServiceLog" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.serviceLog"></a>

```csharp
public object ServiceLog { get; }
```

- *Type:* object

---

##### `SlowQueryLog`<sup>Required</sup> <a name="SlowQueryLog" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.slowQueryLog"></a>

```csharp
public object SlowQueryLog { get; }
```

- *Type:* object

---

##### `SortBufferSize`<sup>Required</sup> <a name="SortBufferSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sortBufferSize"></a>

```csharp
public double SortBufferSize { get; }
```

- *Type:* double

---

##### `SqlMode`<sup>Required</sup> <a name="SqlMode" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sqlMode"></a>

```csharp
public string SqlMode { get; }
```

- *Type:* string

---

##### `SqlRequirePrimaryKey`<sup>Required</sup> <a name="SqlRequirePrimaryKey" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.sqlRequirePrimaryKey"></a>

```csharp
public object SqlRequirePrimaryKey { get; }
```

- *Type:* object

---

##### `TmpTableSize`<sup>Required</sup> <a name="TmpTableSize" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.tmpTableSize"></a>

```csharp
public double TmpTableSize { get; }
```

- *Type:* double

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `WaitTimeout`<sup>Required</sup> <a name="WaitTimeout" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.waitTimeout"></a>

```csharp
public double WaitTimeout { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlPropertiesOutputReference.property.internalValue"></a>

```csharp
public ManagedDatabaseMysqlProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseMysql.ManagedDatabaseMysqlProperties">ManagedDatabaseMysqlProperties</a>

---



