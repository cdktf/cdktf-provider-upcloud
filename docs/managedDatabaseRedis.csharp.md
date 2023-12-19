# `managedDatabaseRedis` Submodule <a name="`managedDatabaseRedis` Submodule" id="@cdktf/provider-upcloud.managedDatabaseRedis"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedDatabaseRedis <a name="ManagedDatabaseRedis" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/managed_database_redis upcloud_managed_database_redis}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseRedis(Construct Scope, string Id, ManagedDatabaseRedisConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig">ManagedDatabaseRedisConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig">ManagedDatabaseRedisConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetMaintenanceWindowDow">ResetMaintenanceWindowDow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetMaintenanceWindowTime">ResetMaintenanceWindowTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetPowered">ResetPowered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProperties` <a name="PutProperties" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.putProperties"></a>

```csharp
private void PutProperties(ManagedDatabaseRedisProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties">ManagedDatabaseRedisProperties</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaintenanceWindowDow` <a name="ResetMaintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetMaintenanceWindowDow"></a>

```csharp
private void ResetMaintenanceWindowDow()
```

##### `ResetMaintenanceWindowTime` <a name="ResetMaintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetMaintenanceWindowTime"></a>

```csharp
private void ResetMaintenanceWindowTime()
```

##### `ResetPowered` <a name="ResetPowered" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetPowered"></a>

```csharp
private void ResetPowered()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetProperties"></a>

```csharp
private void ResetProperties()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.resetTitle"></a>

```csharp
private void ResetTitle()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedDatabaseRedis resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

ManagedDatabaseRedis.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

ManagedDatabaseRedis.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

ManagedDatabaseRedis.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

ManagedDatabaseRedis.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ManagedDatabaseRedis resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagedDatabaseRedis to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagedDatabaseRedis that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/managed_database_redis#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ManagedDatabaseRedis to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.components">Components</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList">ManagedDatabaseRedisComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.nodeStates">NodeStates</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList">ManagedDatabaseRedisNodeStatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.primaryDatabase">PrimaryDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference">ManagedDatabaseRedisPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.serviceHost">ServiceHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.servicePassword">ServicePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.servicePort">ServicePort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.serviceUri">ServiceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.serviceUsername">ServiceUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.maintenanceWindowDowInput">MaintenanceWindowDowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.maintenanceWindowTimeInput">MaintenanceWindowTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.planInput">PlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.poweredInput">PoweredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties">ManagedDatabaseRedisProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.maintenanceWindowDow">MaintenanceWindowDow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.maintenanceWindowTime">MaintenanceWindowTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.plan">Plan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.powered">Powered</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Components`<sup>Required</sup> <a name="Components" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.components"></a>

```csharp
public ManagedDatabaseRedisComponentsList Components { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList">ManagedDatabaseRedisComponentsList</a>

---

##### `NodeStates`<sup>Required</sup> <a name="NodeStates" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.nodeStates"></a>

```csharp
public ManagedDatabaseRedisNodeStatesList NodeStates { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList">ManagedDatabaseRedisNodeStatesList</a>

---

##### `PrimaryDatabase`<sup>Required</sup> <a name="PrimaryDatabase" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.primaryDatabase"></a>

```csharp
public string PrimaryDatabase { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.properties"></a>

```csharp
public ManagedDatabaseRedisPropertiesOutputReference Properties { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference">ManagedDatabaseRedisPropertiesOutputReference</a>

---

##### `ServiceHost`<sup>Required</sup> <a name="ServiceHost" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.serviceHost"></a>

```csharp
public string ServiceHost { get; }
```

- *Type:* string

---

##### `ServicePassword`<sup>Required</sup> <a name="ServicePassword" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.servicePassword"></a>

```csharp
public string ServicePassword { get; }
```

- *Type:* string

---

##### `ServicePort`<sup>Required</sup> <a name="ServicePort" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.servicePort"></a>

```csharp
public string ServicePort { get; }
```

- *Type:* string

---

##### `ServiceUri`<sup>Required</sup> <a name="ServiceUri" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.serviceUri"></a>

```csharp
public string ServiceUri { get; }
```

- *Type:* string

---

##### `ServiceUsername`<sup>Required</sup> <a name="ServiceUsername" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.serviceUsername"></a>

```csharp
public string ServiceUsername { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaintenanceWindowDowInput`<sup>Optional</sup> <a name="MaintenanceWindowDowInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.maintenanceWindowDowInput"></a>

```csharp
public string MaintenanceWindowDowInput { get; }
```

- *Type:* string

---

##### `MaintenanceWindowTimeInput`<sup>Optional</sup> <a name="MaintenanceWindowTimeInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.maintenanceWindowTimeInput"></a>

```csharp
public string MaintenanceWindowTimeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.planInput"></a>

```csharp
public string PlanInput { get; }
```

- *Type:* string

---

##### `PoweredInput`<sup>Optional</sup> <a name="PoweredInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.poweredInput"></a>

```csharp
public object PoweredInput { get; }
```

- *Type:* object

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.propertiesInput"></a>

```csharp
public ManagedDatabaseRedisProperties PropertiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties">ManagedDatabaseRedisProperties</a>

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaintenanceWindowDow`<sup>Required</sup> <a name="MaintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.maintenanceWindowDow"></a>

```csharp
public string MaintenanceWindowDow { get; }
```

- *Type:* string

---

##### `MaintenanceWindowTime`<sup>Required</sup> <a name="MaintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.maintenanceWindowTime"></a>

```csharp
public string MaintenanceWindowTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.plan"></a>

```csharp
public string Plan { get; }
```

- *Type:* string

---

##### `Powered`<sup>Required</sup> <a name="Powered" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.powered"></a>

```csharp
public object Powered { get; }
```

- *Type:* object

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedis.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedDatabaseRedisComponents <a name="ManagedDatabaseRedisComponents" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponents.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseRedisComponents {

};
```


### ManagedDatabaseRedisConfig <a name="ManagedDatabaseRedisConfig" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseRedisConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Plan,
    string Zone,
    string Id = null,
    string MaintenanceWindowDow = null,
    string MaintenanceWindowTime = null,
    object Powered = null,
    ManagedDatabaseRedisProperties Properties = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.name">Name</a></code> | <code>string</code> | Name of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.plan">Plan</a></code> | <code>string</code> | Service plan to use. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.zone">Zone</a></code> | <code>string</code> | Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/managed_database_redis#id ManagedDatabaseRedis#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.maintenanceWindowDow">MaintenanceWindowDow</a></code> | <code>string</code> | Maintenance window day of week. Lower case weekday name (monday, tuesday, ...). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.maintenanceWindowTime">MaintenanceWindowTime</a></code> | <code>string</code> | Maintenance window UTC time in hh:mm:ss format. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.powered">Powered</a></code> | <code>object</code> | The administrative power state of the service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties">ManagedDatabaseRedisProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.title">Title</a></code> | <code>string</code> | Title of a managed database instance. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the service.

The name is used as a prefix for the logical hostname. Must be unique within an account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/managed_database_redis#name ManagedDatabaseRedis#name}

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.plan"></a>

```csharp
public string Plan { get; set; }
```

- *Type:* string

Service plan to use.

This determines how much resources the instance will have. You can list available plans with `upctl database plans <type>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/managed_database_redis#plan ManagedDatabaseRedis#plan}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/managed_database_redis#zone ManagedDatabaseRedis#zone}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/managed_database_redis#id ManagedDatabaseRedis#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaintenanceWindowDow`<sup>Optional</sup> <a name="MaintenanceWindowDow" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.maintenanceWindowDow"></a>

```csharp
public string MaintenanceWindowDow { get; set; }
```

- *Type:* string

Maintenance window day of week. Lower case weekday name (monday, tuesday, ...).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/managed_database_redis#maintenance_window_dow ManagedDatabaseRedis#maintenance_window_dow}

---

##### `MaintenanceWindowTime`<sup>Optional</sup> <a name="MaintenanceWindowTime" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.maintenanceWindowTime"></a>

```csharp
public string MaintenanceWindowTime { get; set; }
```

- *Type:* string

Maintenance window UTC time in hh:mm:ss format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/managed_database_redis#maintenance_window_time ManagedDatabaseRedis#maintenance_window_time}

---

##### `Powered`<sup>Optional</sup> <a name="Powered" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.powered"></a>

```csharp
public object Powered { get; set; }
```

- *Type:* object

The administrative power state of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/managed_database_redis#powered ManagedDatabaseRedis#powered}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.properties"></a>

```csharp
public ManagedDatabaseRedisProperties Properties { get; set; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties">ManagedDatabaseRedisProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/managed_database_redis#properties ManagedDatabaseRedis#properties}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisConfig.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Title of a managed database instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/managed_database_redis#title ManagedDatabaseRedis#title}

---

### ManagedDatabaseRedisNodeStates <a name="ManagedDatabaseRedisNodeStates" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStates.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseRedisNodeStates {

};
```


### ManagedDatabaseRedisProperties <a name="ManagedDatabaseRedisProperties" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseRedisProperties {
    object AutomaticUtilityNetworkIpFilter = null,
    string[] IpFilter = null,
    ManagedDatabaseRedisPropertiesMigration Migration = null,
    object PublicAccess = null,
    string RedisAclChannelsDefault = null,
    double RedisIoThreads = null,
    double RedisLfuDecayTime = null,
    double RedisLfuLogFactor = null,
    string RedisMaxmemoryPolicy = null,
    string RedisNotifyKeyspaceEvents = null,
    double RedisNumberOfDatabases = null,
    string RedisPersistence = null,
    double RedisPubsubClientOutputBufferLimit = null,
    object RedisSsl = null,
    double RedisTimeout = null,
    object ServiceLog = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.automaticUtilityNetworkIpFilter">AutomaticUtilityNetworkIpFilter</a></code> | <code>object</code> | Automatic utility network IP Filter. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.ipFilter">IpFilter</a></code> | <code>string[]</code> | IP filter. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.migration">Migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration">ManagedDatabaseRedisPropertiesMigration</a></code> | migration block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.publicAccess">PublicAccess</a></code> | <code>object</code> | Public access allows connections to your Managed Database services via the public internet. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisAclChannelsDefault">RedisAclChannelsDefault</a></code> | <code>string</code> | Default ACL for pub/sub channels used when Redis user is created. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisIoThreads">RedisIoThreads</a></code> | <code>double</code> | Redis IO thread count. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisLfuDecayTime">RedisLfuDecayTime</a></code> | <code>double</code> | LFU maxmemory-policy counter decay time in minutes. Default is 1. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisLfuLogFactor">RedisLfuLogFactor</a></code> | <code>double</code> | Counter logarithm factor for volatile-lfu and allkeys-lfu maxmemory-policies. Default is 10. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisMaxmemoryPolicy">RedisMaxmemoryPolicy</a></code> | <code>string</code> | Redis maxmemory-policy. Default is `noeviction`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisNotifyKeyspaceEvents">RedisNotifyKeyspaceEvents</a></code> | <code>string</code> | Set notify-keyspace-events option. Default is "". |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisNumberOfDatabases">RedisNumberOfDatabases</a></code> | <code>double</code> | Number of redis databases. Set number of redis databases. Changing this will cause a restart of redis service. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisPersistence">RedisPersistence</a></code> | <code>string</code> | Redis persistence. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisPubsubClientOutputBufferLimit">RedisPubsubClientOutputBufferLimit</a></code> | <code>double</code> | Pub/sub client output buffer hard limit in MB. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisSsl">RedisSsl</a></code> | <code>object</code> | Require SSL to access Redis. Default is `true`. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisTimeout">RedisTimeout</a></code> | <code>double</code> | Redis idle connection timeout in seconds. Default is 300. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.serviceLog">ServiceLog</a></code> | <code>object</code> | Store logs for the service so that they are available in the HTTP API and console. |

---

##### `AutomaticUtilityNetworkIpFilter`<sup>Optional</sup> <a name="AutomaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.automaticUtilityNetworkIpFilter"></a>

```csharp
public object AutomaticUtilityNetworkIpFilter { get; set; }
```

- *Type:* object

Automatic utility network IP Filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/managed_database_redis#automatic_utility_network_ip_filter ManagedDatabaseRedis#automatic_utility_network_ip_filter}

---

##### `IpFilter`<sup>Optional</sup> <a name="IpFilter" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.ipFilter"></a>

```csharp
public string[] IpFilter { get; set; }
```

- *Type:* string[]

IP filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/managed_database_redis#ip_filter ManagedDatabaseRedis#ip_filter}

---

##### `Migration`<sup>Optional</sup> <a name="Migration" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.migration"></a>

```csharp
public ManagedDatabaseRedisPropertiesMigration Migration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration">ManagedDatabaseRedisPropertiesMigration</a>

migration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/managed_database_redis#migration ManagedDatabaseRedis#migration}

---

##### `PublicAccess`<sup>Optional</sup> <a name="PublicAccess" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.publicAccess"></a>

```csharp
public object PublicAccess { get; set; }
```

- *Type:* object

Public access allows connections to your Managed Database services via the public internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/managed_database_redis#public_access ManagedDatabaseRedis#public_access}

---

##### `RedisAclChannelsDefault`<sup>Optional</sup> <a name="RedisAclChannelsDefault" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisAclChannelsDefault"></a>

```csharp
public string RedisAclChannelsDefault { get; set; }
```

- *Type:* string

Default ACL for pub/sub channels used when Redis user is created.

Determines default pub/sub channels' ACL for new users if ACL is not supplied. When this option is not defined, all_channels is assumed to keep backward compatibility. This option doesn't affect Redis configuration acl-pubsub-default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/managed_database_redis#redis_acl_channels_default ManagedDatabaseRedis#redis_acl_channels_default}

---

##### `RedisIoThreads`<sup>Optional</sup> <a name="RedisIoThreads" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisIoThreads"></a>

```csharp
public double RedisIoThreads { get; set; }
```

- *Type:* double

Redis IO thread count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/managed_database_redis#redis_io_threads ManagedDatabaseRedis#redis_io_threads}

---

##### `RedisLfuDecayTime`<sup>Optional</sup> <a name="RedisLfuDecayTime" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisLfuDecayTime"></a>

```csharp
public double RedisLfuDecayTime { get; set; }
```

- *Type:* double

LFU maxmemory-policy counter decay time in minutes. Default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/managed_database_redis#redis_lfu_decay_time ManagedDatabaseRedis#redis_lfu_decay_time}

---

##### `RedisLfuLogFactor`<sup>Optional</sup> <a name="RedisLfuLogFactor" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisLfuLogFactor"></a>

```csharp
public double RedisLfuLogFactor { get; set; }
```

- *Type:* double

Counter logarithm factor for volatile-lfu and allkeys-lfu maxmemory-policies. Default is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/managed_database_redis#redis_lfu_log_factor ManagedDatabaseRedis#redis_lfu_log_factor}

---

##### `RedisMaxmemoryPolicy`<sup>Optional</sup> <a name="RedisMaxmemoryPolicy" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisMaxmemoryPolicy"></a>

```csharp
public string RedisMaxmemoryPolicy { get; set; }
```

- *Type:* string

Redis maxmemory-policy. Default is `noeviction`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/managed_database_redis#redis_maxmemory_policy ManagedDatabaseRedis#redis_maxmemory_policy}

---

##### `RedisNotifyKeyspaceEvents`<sup>Optional</sup> <a name="RedisNotifyKeyspaceEvents" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisNotifyKeyspaceEvents"></a>

```csharp
public string RedisNotifyKeyspaceEvents { get; set; }
```

- *Type:* string

Set notify-keyspace-events option. Default is "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/managed_database_redis#redis_notify_keyspace_events ManagedDatabaseRedis#redis_notify_keyspace_events}

---

##### `RedisNumberOfDatabases`<sup>Optional</sup> <a name="RedisNumberOfDatabases" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisNumberOfDatabases"></a>

```csharp
public double RedisNumberOfDatabases { get; set; }
```

- *Type:* double

Number of redis databases. Set number of redis databases. Changing this will cause a restart of redis service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/managed_database_redis#redis_number_of_databases ManagedDatabaseRedis#redis_number_of_databases}

---

##### `RedisPersistence`<sup>Optional</sup> <a name="RedisPersistence" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisPersistence"></a>

```csharp
public string RedisPersistence { get; set; }
```

- *Type:* string

Redis persistence.

When persistence is 'rdb', Redis does RDB dumps each 10 minutes if any key is changed. Also RDB dumps are done according to backup schedule for backup purposes. When persistence is 'off', no RDB dumps and backups are done, so data can be lost at any moment if service is restarted for any reason, or if service is powered off. Also service can't be forked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/managed_database_redis#redis_persistence ManagedDatabaseRedis#redis_persistence}

---

##### `RedisPubsubClientOutputBufferLimit`<sup>Optional</sup> <a name="RedisPubsubClientOutputBufferLimit" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisPubsubClientOutputBufferLimit"></a>

```csharp
public double RedisPubsubClientOutputBufferLimit { get; set; }
```

- *Type:* double

Pub/sub client output buffer hard limit in MB.

Set output buffer limit for pub / sub clients in MB. The value is the hard limit, the soft limit is 1/4 of the hard limit. When setting the limit, be mindful of the available memory in the selected service plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/managed_database_redis#redis_pubsub_client_output_buffer_limit ManagedDatabaseRedis#redis_pubsub_client_output_buffer_limit}

---

##### `RedisSsl`<sup>Optional</sup> <a name="RedisSsl" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisSsl"></a>

```csharp
public object RedisSsl { get; set; }
```

- *Type:* object

Require SSL to access Redis. Default is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/managed_database_redis#redis_ssl ManagedDatabaseRedis#redis_ssl}

---

##### `RedisTimeout`<sup>Optional</sup> <a name="RedisTimeout" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.redisTimeout"></a>

```csharp
public double RedisTimeout { get; set; }
```

- *Type:* double

Redis idle connection timeout in seconds. Default is 300.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/managed_database_redis#redis_timeout ManagedDatabaseRedis#redis_timeout}

---

##### `ServiceLog`<sup>Optional</sup> <a name="ServiceLog" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties.property.serviceLog"></a>

```csharp
public object ServiceLog { get; set; }
```

- *Type:* object

Store logs for the service so that they are available in the HTTP API and console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/managed_database_redis#service_log ManagedDatabaseRedis#service_log}

---

### ManagedDatabaseRedisPropertiesMigration <a name="ManagedDatabaseRedisPropertiesMigration" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseRedisPropertiesMigration {
    string Dbname = null,
    string Host = null,
    string IgnoreDbs = null,
    string Password = null,
    double Port = null,
    object Ssl = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.dbname">Dbname</a></code> | <code>string</code> | Database name for bootstrapping the initial connection. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.host">Host</a></code> | <code>string</code> | Hostname or IP address of the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.ignoreDbs">IgnoreDbs</a></code> | <code>string</code> | Comma-separated list of databases, which should be ignored during migration (supported by MySQL only at the moment). |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.password">Password</a></code> | <code>string</code> | Password for authentication with the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.port">Port</a></code> | <code>double</code> | Port number of the server where to migrate data from. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.ssl">Ssl</a></code> | <code>object</code> | The server where to migrate data from is secured with SSL. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.username">Username</a></code> | <code>string</code> | User name for authentication with the server where to migrate data from. |

---

##### `Dbname`<sup>Optional</sup> <a name="Dbname" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.dbname"></a>

```csharp
public string Dbname { get; set; }
```

- *Type:* string

Database name for bootstrapping the initial connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/managed_database_redis#dbname ManagedDatabaseRedis#dbname}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Hostname or IP address of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/managed_database_redis#host ManagedDatabaseRedis#host}

---

##### `IgnoreDbs`<sup>Optional</sup> <a name="IgnoreDbs" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.ignoreDbs"></a>

```csharp
public string IgnoreDbs { get; set; }
```

- *Type:* string

Comma-separated list of databases, which should be ignored during migration (supported by MySQL only at the moment).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/managed_database_redis#ignore_dbs ManagedDatabaseRedis#ignore_dbs}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/managed_database_redis#password ManagedDatabaseRedis#password}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Port number of the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/managed_database_redis#port ManagedDatabaseRedis#port}

---

##### `Ssl`<sup>Optional</sup> <a name="Ssl" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.ssl"></a>

```csharp
public object Ssl { get; set; }
```

- *Type:* object

The server where to migrate data from is secured with SSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/managed_database_redis#ssl ManagedDatabaseRedis#ssl}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

User name for authentication with the server where to migrate data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/managed_database_redis#username ManagedDatabaseRedis#username}

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedDatabaseRedisComponentsList <a name="ManagedDatabaseRedisComponentsList" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseRedisComponentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.get"></a>

```csharp
private ManagedDatabaseRedisComponentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ManagedDatabaseRedisComponentsOutputReference <a name="ManagedDatabaseRedisComponentsOutputReference" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseRedisComponentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.component">Component</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.route">Route</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.usage">Usage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponents">ManagedDatabaseRedisComponents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Component`<sup>Required</sup> <a name="Component" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.component"></a>

```csharp
public string Component { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Route`<sup>Required</sup> <a name="Route" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.route"></a>

```csharp
public string Route { get; }
```

- *Type:* string

---

##### `Usage`<sup>Required</sup> <a name="Usage" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.usage"></a>

```csharp
public string Usage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponentsOutputReference.property.internalValue"></a>

```csharp
public ManagedDatabaseRedisComponents InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisComponents">ManagedDatabaseRedisComponents</a>

---


### ManagedDatabaseRedisNodeStatesList <a name="ManagedDatabaseRedisNodeStatesList" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseRedisNodeStatesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.get"></a>

```csharp
private ManagedDatabaseRedisNodeStatesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ManagedDatabaseRedisNodeStatesOutputReference <a name="ManagedDatabaseRedisNodeStatesOutputReference" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseRedisNodeStatesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStates">ManagedDatabaseRedisNodeStates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStatesOutputReference.property.internalValue"></a>

```csharp
public ManagedDatabaseRedisNodeStates InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisNodeStates">ManagedDatabaseRedisNodeStates</a>

---


### ManagedDatabaseRedisPropertiesMigrationOutputReference <a name="ManagedDatabaseRedisPropertiesMigrationOutputReference" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseRedisPropertiesMigrationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetDbname">ResetDbname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetIgnoreDbs">ResetIgnoreDbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetSsl">ResetSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDbname` <a name="ResetDbname" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetDbname"></a>

```csharp
private void ResetDbname()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetIgnoreDbs` <a name="ResetIgnoreDbs" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetIgnoreDbs"></a>

```csharp
private void ResetIgnoreDbs()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetSsl` <a name="ResetSsl" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetSsl"></a>

```csharp
private void ResetSsl()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.dbnameInput">DbnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.ignoreDbsInput">IgnoreDbsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.sslInput">SslInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.dbname">Dbname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.ignoreDbs">IgnoreDbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.ssl">Ssl</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration">ManagedDatabaseRedisPropertiesMigration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DbnameInput`<sup>Optional</sup> <a name="DbnameInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.dbnameInput"></a>

```csharp
public string DbnameInput { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `IgnoreDbsInput`<sup>Optional</sup> <a name="IgnoreDbsInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.ignoreDbsInput"></a>

```csharp
public string IgnoreDbsInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `SslInput`<sup>Optional</sup> <a name="SslInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.sslInput"></a>

```csharp
public object SslInput { get; }
```

- *Type:* object

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Dbname`<sup>Required</sup> <a name="Dbname" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.dbname"></a>

```csharp
public string Dbname { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `IgnoreDbs`<sup>Required</sup> <a name="IgnoreDbs" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.ignoreDbs"></a>

```csharp
public string IgnoreDbs { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Ssl`<sup>Required</sup> <a name="Ssl" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.ssl"></a>

```csharp
public object Ssl { get; }
```

- *Type:* object

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference.property.internalValue"></a>

```csharp
public ManagedDatabaseRedisPropertiesMigration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration">ManagedDatabaseRedisPropertiesMigration</a>

---


### ManagedDatabaseRedisPropertiesOutputReference <a name="ManagedDatabaseRedisPropertiesOutputReference" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new ManagedDatabaseRedisPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.putMigration">PutMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter">ResetAutomaticUtilityNetworkIpFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetIpFilter">ResetIpFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetMigration">ResetMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetPublicAccess">ResetPublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisAclChannelsDefault">ResetRedisAclChannelsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisIoThreads">ResetRedisIoThreads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisLfuDecayTime">ResetRedisLfuDecayTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisLfuLogFactor">ResetRedisLfuLogFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisMaxmemoryPolicy">ResetRedisMaxmemoryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisNotifyKeyspaceEvents">ResetRedisNotifyKeyspaceEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisNumberOfDatabases">ResetRedisNumberOfDatabases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisPersistence">ResetRedisPersistence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisPubsubClientOutputBufferLimit">ResetRedisPubsubClientOutputBufferLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisSsl">ResetRedisSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisTimeout">ResetRedisTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetServiceLog">ResetServiceLog</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMigration` <a name="PutMigration" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.putMigration"></a>

```csharp
private void PutMigration(ManagedDatabaseRedisPropertiesMigration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.putMigration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration">ManagedDatabaseRedisPropertiesMigration</a>

---

##### `ResetAutomaticUtilityNetworkIpFilter` <a name="ResetAutomaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetAutomaticUtilityNetworkIpFilter"></a>

```csharp
private void ResetAutomaticUtilityNetworkIpFilter()
```

##### `ResetIpFilter` <a name="ResetIpFilter" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetIpFilter"></a>

```csharp
private void ResetIpFilter()
```

##### `ResetMigration` <a name="ResetMigration" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetMigration"></a>

```csharp
private void ResetMigration()
```

##### `ResetPublicAccess` <a name="ResetPublicAccess" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetPublicAccess"></a>

```csharp
private void ResetPublicAccess()
```

##### `ResetRedisAclChannelsDefault` <a name="ResetRedisAclChannelsDefault" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisAclChannelsDefault"></a>

```csharp
private void ResetRedisAclChannelsDefault()
```

##### `ResetRedisIoThreads` <a name="ResetRedisIoThreads" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisIoThreads"></a>

```csharp
private void ResetRedisIoThreads()
```

##### `ResetRedisLfuDecayTime` <a name="ResetRedisLfuDecayTime" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisLfuDecayTime"></a>

```csharp
private void ResetRedisLfuDecayTime()
```

##### `ResetRedisLfuLogFactor` <a name="ResetRedisLfuLogFactor" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisLfuLogFactor"></a>

```csharp
private void ResetRedisLfuLogFactor()
```

##### `ResetRedisMaxmemoryPolicy` <a name="ResetRedisMaxmemoryPolicy" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisMaxmemoryPolicy"></a>

```csharp
private void ResetRedisMaxmemoryPolicy()
```

##### `ResetRedisNotifyKeyspaceEvents` <a name="ResetRedisNotifyKeyspaceEvents" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisNotifyKeyspaceEvents"></a>

```csharp
private void ResetRedisNotifyKeyspaceEvents()
```

##### `ResetRedisNumberOfDatabases` <a name="ResetRedisNumberOfDatabases" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisNumberOfDatabases"></a>

```csharp
private void ResetRedisNumberOfDatabases()
```

##### `ResetRedisPersistence` <a name="ResetRedisPersistence" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisPersistence"></a>

```csharp
private void ResetRedisPersistence()
```

##### `ResetRedisPubsubClientOutputBufferLimit` <a name="ResetRedisPubsubClientOutputBufferLimit" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisPubsubClientOutputBufferLimit"></a>

```csharp
private void ResetRedisPubsubClientOutputBufferLimit()
```

##### `ResetRedisSsl` <a name="ResetRedisSsl" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisSsl"></a>

```csharp
private void ResetRedisSsl()
```

##### `ResetRedisTimeout` <a name="ResetRedisTimeout" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetRedisTimeout"></a>

```csharp
private void ResetRedisTimeout()
```

##### `ResetServiceLog` <a name="ResetServiceLog" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.resetServiceLog"></a>

```csharp
private void ResetServiceLog()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.migration">Migration</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference">ManagedDatabaseRedisPropertiesMigrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput">AutomaticUtilityNetworkIpFilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.ipFilterInput">IpFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.migrationInput">MigrationInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration">ManagedDatabaseRedisPropertiesMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.publicAccessInput">PublicAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisAclChannelsDefaultInput">RedisAclChannelsDefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisIoThreadsInput">RedisIoThreadsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisLfuDecayTimeInput">RedisLfuDecayTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisLfuLogFactorInput">RedisLfuLogFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisMaxmemoryPolicyInput">RedisMaxmemoryPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisNotifyKeyspaceEventsInput">RedisNotifyKeyspaceEventsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisNumberOfDatabasesInput">RedisNumberOfDatabasesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisPersistenceInput">RedisPersistenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisPubsubClientOutputBufferLimitInput">RedisPubsubClientOutputBufferLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisSslInput">RedisSslInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisTimeoutInput">RedisTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.serviceLogInput">ServiceLogInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.automaticUtilityNetworkIpFilter">AutomaticUtilityNetworkIpFilter</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.ipFilter">IpFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.publicAccess">PublicAccess</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisAclChannelsDefault">RedisAclChannelsDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisIoThreads">RedisIoThreads</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisLfuDecayTime">RedisLfuDecayTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisLfuLogFactor">RedisLfuLogFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisMaxmemoryPolicy">RedisMaxmemoryPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisNotifyKeyspaceEvents">RedisNotifyKeyspaceEvents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisNumberOfDatabases">RedisNumberOfDatabases</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisPersistence">RedisPersistence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisPubsubClientOutputBufferLimit">RedisPubsubClientOutputBufferLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisSsl">RedisSsl</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisTimeout">RedisTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.serviceLog">ServiceLog</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties">ManagedDatabaseRedisProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Migration`<sup>Required</sup> <a name="Migration" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.migration"></a>

```csharp
public ManagedDatabaseRedisPropertiesMigrationOutputReference Migration { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigrationOutputReference">ManagedDatabaseRedisPropertiesMigrationOutputReference</a>

---

##### `AutomaticUtilityNetworkIpFilterInput`<sup>Optional</sup> <a name="AutomaticUtilityNetworkIpFilterInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.automaticUtilityNetworkIpFilterInput"></a>

```csharp
public object AutomaticUtilityNetworkIpFilterInput { get; }
```

- *Type:* object

---

##### `IpFilterInput`<sup>Optional</sup> <a name="IpFilterInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.ipFilterInput"></a>

```csharp
public string[] IpFilterInput { get; }
```

- *Type:* string[]

---

##### `MigrationInput`<sup>Optional</sup> <a name="MigrationInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.migrationInput"></a>

```csharp
public ManagedDatabaseRedisPropertiesMigration MigrationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesMigration">ManagedDatabaseRedisPropertiesMigration</a>

---

##### `PublicAccessInput`<sup>Optional</sup> <a name="PublicAccessInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.publicAccessInput"></a>

```csharp
public object PublicAccessInput { get; }
```

- *Type:* object

---

##### `RedisAclChannelsDefaultInput`<sup>Optional</sup> <a name="RedisAclChannelsDefaultInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisAclChannelsDefaultInput"></a>

```csharp
public string RedisAclChannelsDefaultInput { get; }
```

- *Type:* string

---

##### `RedisIoThreadsInput`<sup>Optional</sup> <a name="RedisIoThreadsInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisIoThreadsInput"></a>

```csharp
public double RedisIoThreadsInput { get; }
```

- *Type:* double

---

##### `RedisLfuDecayTimeInput`<sup>Optional</sup> <a name="RedisLfuDecayTimeInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisLfuDecayTimeInput"></a>

```csharp
public double RedisLfuDecayTimeInput { get; }
```

- *Type:* double

---

##### `RedisLfuLogFactorInput`<sup>Optional</sup> <a name="RedisLfuLogFactorInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisLfuLogFactorInput"></a>

```csharp
public double RedisLfuLogFactorInput { get; }
```

- *Type:* double

---

##### `RedisMaxmemoryPolicyInput`<sup>Optional</sup> <a name="RedisMaxmemoryPolicyInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisMaxmemoryPolicyInput"></a>

```csharp
public string RedisMaxmemoryPolicyInput { get; }
```

- *Type:* string

---

##### `RedisNotifyKeyspaceEventsInput`<sup>Optional</sup> <a name="RedisNotifyKeyspaceEventsInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisNotifyKeyspaceEventsInput"></a>

```csharp
public string RedisNotifyKeyspaceEventsInput { get; }
```

- *Type:* string

---

##### `RedisNumberOfDatabasesInput`<sup>Optional</sup> <a name="RedisNumberOfDatabasesInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisNumberOfDatabasesInput"></a>

```csharp
public double RedisNumberOfDatabasesInput { get; }
```

- *Type:* double

---

##### `RedisPersistenceInput`<sup>Optional</sup> <a name="RedisPersistenceInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisPersistenceInput"></a>

```csharp
public string RedisPersistenceInput { get; }
```

- *Type:* string

---

##### `RedisPubsubClientOutputBufferLimitInput`<sup>Optional</sup> <a name="RedisPubsubClientOutputBufferLimitInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisPubsubClientOutputBufferLimitInput"></a>

```csharp
public double RedisPubsubClientOutputBufferLimitInput { get; }
```

- *Type:* double

---

##### `RedisSslInput`<sup>Optional</sup> <a name="RedisSslInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisSslInput"></a>

```csharp
public object RedisSslInput { get; }
```

- *Type:* object

---

##### `RedisTimeoutInput`<sup>Optional</sup> <a name="RedisTimeoutInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisTimeoutInput"></a>

```csharp
public double RedisTimeoutInput { get; }
```

- *Type:* double

---

##### `ServiceLogInput`<sup>Optional</sup> <a name="ServiceLogInput" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.serviceLogInput"></a>

```csharp
public object ServiceLogInput { get; }
```

- *Type:* object

---

##### `AutomaticUtilityNetworkIpFilter`<sup>Required</sup> <a name="AutomaticUtilityNetworkIpFilter" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.automaticUtilityNetworkIpFilter"></a>

```csharp
public object AutomaticUtilityNetworkIpFilter { get; }
```

- *Type:* object

---

##### `IpFilter`<sup>Required</sup> <a name="IpFilter" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.ipFilter"></a>

```csharp
public string[] IpFilter { get; }
```

- *Type:* string[]

---

##### `PublicAccess`<sup>Required</sup> <a name="PublicAccess" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.publicAccess"></a>

```csharp
public object PublicAccess { get; }
```

- *Type:* object

---

##### `RedisAclChannelsDefault`<sup>Required</sup> <a name="RedisAclChannelsDefault" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisAclChannelsDefault"></a>

```csharp
public string RedisAclChannelsDefault { get; }
```

- *Type:* string

---

##### `RedisIoThreads`<sup>Required</sup> <a name="RedisIoThreads" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisIoThreads"></a>

```csharp
public double RedisIoThreads { get; }
```

- *Type:* double

---

##### `RedisLfuDecayTime`<sup>Required</sup> <a name="RedisLfuDecayTime" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisLfuDecayTime"></a>

```csharp
public double RedisLfuDecayTime { get; }
```

- *Type:* double

---

##### `RedisLfuLogFactor`<sup>Required</sup> <a name="RedisLfuLogFactor" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisLfuLogFactor"></a>

```csharp
public double RedisLfuLogFactor { get; }
```

- *Type:* double

---

##### `RedisMaxmemoryPolicy`<sup>Required</sup> <a name="RedisMaxmemoryPolicy" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisMaxmemoryPolicy"></a>

```csharp
public string RedisMaxmemoryPolicy { get; }
```

- *Type:* string

---

##### `RedisNotifyKeyspaceEvents`<sup>Required</sup> <a name="RedisNotifyKeyspaceEvents" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisNotifyKeyspaceEvents"></a>

```csharp
public string RedisNotifyKeyspaceEvents { get; }
```

- *Type:* string

---

##### `RedisNumberOfDatabases`<sup>Required</sup> <a name="RedisNumberOfDatabases" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisNumberOfDatabases"></a>

```csharp
public double RedisNumberOfDatabases { get; }
```

- *Type:* double

---

##### `RedisPersistence`<sup>Required</sup> <a name="RedisPersistence" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisPersistence"></a>

```csharp
public string RedisPersistence { get; }
```

- *Type:* string

---

##### `RedisPubsubClientOutputBufferLimit`<sup>Required</sup> <a name="RedisPubsubClientOutputBufferLimit" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisPubsubClientOutputBufferLimit"></a>

```csharp
public double RedisPubsubClientOutputBufferLimit { get; }
```

- *Type:* double

---

##### `RedisSsl`<sup>Required</sup> <a name="RedisSsl" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisSsl"></a>

```csharp
public object RedisSsl { get; }
```

- *Type:* object

---

##### `RedisTimeout`<sup>Required</sup> <a name="RedisTimeout" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.redisTimeout"></a>

```csharp
public double RedisTimeout { get; }
```

- *Type:* double

---

##### `ServiceLog`<sup>Required</sup> <a name="ServiceLog" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.serviceLog"></a>

```csharp
public object ServiceLog { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisPropertiesOutputReference.property.internalValue"></a>

```csharp
public ManagedDatabaseRedisProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseRedis.ManagedDatabaseRedisProperties">ManagedDatabaseRedisProperties</a>

---



