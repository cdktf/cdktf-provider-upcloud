# `dataUpcloudManagedDatabasePostgresqlSessions` Submodule <a name="`dataUpcloudManagedDatabasePostgresqlSessions` Submodule" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataUpcloudManagedDatabasePostgresqlSessions <a name="DataUpcloudManagedDatabasePostgresqlSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/data-sources/managed_database_postgresql_sessions upcloud_managed_database_postgresql_sessions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new DataUpcloudManagedDatabasePostgresqlSessions(Construct Scope, string Id, DataUpcloudManagedDatabasePostgresqlSessionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig">DataUpcloudManagedDatabasePostgresqlSessionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig">DataUpcloudManagedDatabasePostgresqlSessionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.putSessions">PutSessions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetOffset">ResetOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetSessions">ResetSessions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutSessions` <a name="PutSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.putSessions"></a>

```csharp
private void PutSessions(IResolvable|DataUpcloudManagedDatabasePostgresqlSessionsSessions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.putSessions.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>[]

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLimit` <a name="ResetLimit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetLimit"></a>

```csharp
private void ResetLimit()
```

##### `ResetOffset` <a name="ResetOffset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetOffset"></a>

```csharp
private void ResetOffset()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetSessions` <a name="ResetSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetSessions"></a>

```csharp
private void ResetSessions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataUpcloudManagedDatabasePostgresqlSessions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

DataUpcloudManagedDatabasePostgresqlSessions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

DataUpcloudManagedDatabasePostgresqlSessions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

DataUpcloudManagedDatabasePostgresqlSessions.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

DataUpcloudManagedDatabasePostgresqlSessions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataUpcloudManagedDatabasePostgresqlSessions resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataUpcloudManagedDatabasePostgresqlSessions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataUpcloudManagedDatabasePostgresqlSessions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/data-sources/managed_database_postgresql_sessions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataUpcloudManagedDatabasePostgresqlSessions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.sessions">Sessions</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList">DataUpcloudManagedDatabasePostgresqlSessionsSessionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.limitInput">LimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.offsetInput">OffsetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.orderInput">OrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.sessionsInput">SessionsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.limit">Limit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.offset">Offset</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.order">Order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.service">Service</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Sessions`<sup>Required</sup> <a name="Sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.sessions"></a>

```csharp
public DataUpcloudManagedDatabasePostgresqlSessionsSessionsList Sessions { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList">DataUpcloudManagedDatabasePostgresqlSessionsSessionsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.limitInput"></a>

```csharp
public double LimitInput { get; }
```

- *Type:* double

---

##### `OffsetInput`<sup>Optional</sup> <a name="OffsetInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.offsetInput"></a>

```csharp
public double OffsetInput { get; }
```

- *Type:* double

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.orderInput"></a>

```csharp
public string OrderInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `SessionsInput`<sup>Optional</sup> <a name="SessionsInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.sessionsInput"></a>

```csharp
public IResolvable|DataUpcloudManagedDatabasePostgresqlSessionsSessions[] SessionsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.limit"></a>

```csharp
public double Limit { get; }
```

- *Type:* double

---

##### `Offset`<sup>Required</sup> <a name="Offset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.offset"></a>

```csharp
public double Offset { get; }
```

- *Type:* double

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.order"></a>

```csharp
public string Order { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataUpcloudManagedDatabasePostgresqlSessionsConfig <a name="DataUpcloudManagedDatabasePostgresqlSessionsConfig" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new DataUpcloudManagedDatabasePostgresqlSessionsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Service,
    string Id = null,
    double Limit = null,
    double Offset = null,
    string Order = null,
    IResolvable|DataUpcloudManagedDatabasePostgresqlSessionsSessions[] Sessions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.service">Service</a></code> | <code>string</code> | Service's UUID for which these sessions belongs to. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/data-sources/managed_database_postgresql_sessions#id DataUpcloudManagedDatabasePostgresqlSessions#id}. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.limit">Limit</a></code> | <code>double</code> | Number of entries to receive at most. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.offset">Offset</a></code> | <code>double</code> | Offset for retrieved results based on sort order. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.order">Order</a></code> | <code>string</code> | Order by session field and sort retrieved results. Limited variables can be used for ordering. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.sessions">Sessions</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>[]</code> | sessions block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Service's UUID for which these sessions belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/data-sources/managed_database_postgresql_sessions#service DataUpcloudManagedDatabasePostgresqlSessions#service}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/data-sources/managed_database_postgresql_sessions#id DataUpcloudManagedDatabasePostgresqlSessions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.limit"></a>

```csharp
public double Limit { get; set; }
```

- *Type:* double

Number of entries to receive at most.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/data-sources/managed_database_postgresql_sessions#limit DataUpcloudManagedDatabasePostgresqlSessions#limit}

---

##### `Offset`<sup>Optional</sup> <a name="Offset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.offset"></a>

```csharp
public double Offset { get; set; }
```

- *Type:* double

Offset for retrieved results based on sort order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/data-sources/managed_database_postgresql_sessions#offset DataUpcloudManagedDatabasePostgresqlSessions#offset}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.order"></a>

```csharp
public string Order { get; set; }
```

- *Type:* string

Order by session field and sort retrieved results. Limited variables can be used for ordering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/data-sources/managed_database_postgresql_sessions#order DataUpcloudManagedDatabasePostgresqlSessions#order}

---

##### `Sessions`<sup>Optional</sup> <a name="Sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.sessions"></a>

```csharp
public IResolvable|DataUpcloudManagedDatabasePostgresqlSessionsSessions[] Sessions { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>[]

sessions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/data-sources/managed_database_postgresql_sessions#sessions DataUpcloudManagedDatabasePostgresqlSessions#sessions}

---

### DataUpcloudManagedDatabasePostgresqlSessionsSessions <a name="DataUpcloudManagedDatabasePostgresqlSessionsSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new DataUpcloudManagedDatabasePostgresqlSessionsSessions {
    double BackendXid = null,
    double BackendXmin = null,
    string ClientHostname = null,
    string XactStart = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.backendXid">BackendXid</a></code> | <code>double</code> | Top-level transaction identifier of this service, if any. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.backendXmin">BackendXmin</a></code> | <code>double</code> | The current service's xmin horizon. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.clientHostname">ClientHostname</a></code> | <code>string</code> | Host name of the connected client, as reported by a reverse DNS lookup of `client_addr`. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.xactStart">XactStart</a></code> | <code>string</code> | Time when this process' current transaction was started, or null if no transaction is active. |

---

##### `BackendXid`<sup>Optional</sup> <a name="BackendXid" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.backendXid"></a>

```csharp
public double BackendXid { get; set; }
```

- *Type:* double

Top-level transaction identifier of this service, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/data-sources/managed_database_postgresql_sessions#backend_xid DataUpcloudManagedDatabasePostgresqlSessions#backend_xid}

---

##### `BackendXmin`<sup>Optional</sup> <a name="BackendXmin" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.backendXmin"></a>

```csharp
public double BackendXmin { get; set; }
```

- *Type:* double

The current service's xmin horizon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/data-sources/managed_database_postgresql_sessions#backend_xmin DataUpcloudManagedDatabasePostgresqlSessions#backend_xmin}

---

##### `ClientHostname`<sup>Optional</sup> <a name="ClientHostname" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.clientHostname"></a>

```csharp
public string ClientHostname { get; set; }
```

- *Type:* string

Host name of the connected client, as reported by a reverse DNS lookup of `client_addr`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/data-sources/managed_database_postgresql_sessions#client_hostname DataUpcloudManagedDatabasePostgresqlSessions#client_hostname}

---

##### `XactStart`<sup>Optional</sup> <a name="XactStart" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.xactStart"></a>

```csharp
public string XactStart { get; set; }
```

- *Type:* string

Time when this process' current transaction was started, or null if no transaction is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.29.0/docs/data-sources/managed_database_postgresql_sessions#xact_start DataUpcloudManagedDatabasePostgresqlSessions#xact_start}

---

## Classes <a name="Classes" id="Classes"></a>

### DataUpcloudManagedDatabasePostgresqlSessionsSessionsList <a name="DataUpcloudManagedDatabasePostgresqlSessionsSessionsList" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new DataUpcloudManagedDatabasePostgresqlSessionsSessionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.get"></a>

```csharp
private DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.property.internalValue"></a>

```csharp
public IResolvable|DataUpcloudManagedDatabasePostgresqlSessionsSessions[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>[]

---


### DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference <a name="DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetBackendXid">ResetBackendXid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetBackendXmin">ResetBackendXmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetClientHostname">ResetClientHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetXactStart">ResetXactStart</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackendXid` <a name="ResetBackendXid" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetBackendXid"></a>

```csharp
private void ResetBackendXid()
```

##### `ResetBackendXmin` <a name="ResetBackendXmin" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetBackendXmin"></a>

```csharp
private void ResetBackendXmin()
```

##### `ResetClientHostname` <a name="ResetClientHostname" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetClientHostname"></a>

```csharp
private void ResetClientHostname()
```

##### `ResetXactStart` <a name="ResetXactStart" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetXactStart"></a>

```csharp
private void ResetXactStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.applicationName">ApplicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendStart">BackendStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendType">BackendType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientAddr">ClientAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientPort">ClientPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.datid">Datid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.datname">Datname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.queryDuration">QueryDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.queryStart">QueryStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.stateChange">StateChange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.usename">Usename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.usesysid">Usesysid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.waitEvent">WaitEvent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.waitEventType">WaitEventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXidInput">BackendXidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXminInput">BackendXminInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientHostnameInput">ClientHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.xactStartInput">XactStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXid">BackendXid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXmin">BackendXmin</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientHostname">ClientHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.xactStart">XactStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.applicationName"></a>

```csharp
public string ApplicationName { get; }
```

- *Type:* string

---

##### `BackendStart`<sup>Required</sup> <a name="BackendStart" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendStart"></a>

```csharp
public string BackendStart { get; }
```

- *Type:* string

---

##### `BackendType`<sup>Required</sup> <a name="BackendType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendType"></a>

```csharp
public string BackendType { get; }
```

- *Type:* string

---

##### `ClientAddr`<sup>Required</sup> <a name="ClientAddr" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientAddr"></a>

```csharp
public string ClientAddr { get; }
```

- *Type:* string

---

##### `ClientPort`<sup>Required</sup> <a name="ClientPort" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientPort"></a>

```csharp
public double ClientPort { get; }
```

- *Type:* double

---

##### `Datid`<sup>Required</sup> <a name="Datid" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.datid"></a>

```csharp
public double Datid { get; }
```

- *Type:* double

---

##### `Datname`<sup>Required</sup> <a name="Datname" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.datname"></a>

```csharp
public string Datname { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `QueryDuration`<sup>Required</sup> <a name="QueryDuration" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.queryDuration"></a>

```csharp
public string QueryDuration { get; }
```

- *Type:* string

---

##### `QueryStart`<sup>Required</sup> <a name="QueryStart" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.queryStart"></a>

```csharp
public string QueryStart { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateChange`<sup>Required</sup> <a name="StateChange" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.stateChange"></a>

```csharp
public string StateChange { get; }
```

- *Type:* string

---

##### `Usename`<sup>Required</sup> <a name="Usename" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.usename"></a>

```csharp
public string Usename { get; }
```

- *Type:* string

---

##### `Usesysid`<sup>Required</sup> <a name="Usesysid" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.usesysid"></a>

```csharp
public double Usesysid { get; }
```

- *Type:* double

---

##### `WaitEvent`<sup>Required</sup> <a name="WaitEvent" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.waitEvent"></a>

```csharp
public string WaitEvent { get; }
```

- *Type:* string

---

##### `WaitEventType`<sup>Required</sup> <a name="WaitEventType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.waitEventType"></a>

```csharp
public string WaitEventType { get; }
```

- *Type:* string

---

##### `BackendXidInput`<sup>Optional</sup> <a name="BackendXidInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXidInput"></a>

```csharp
public double BackendXidInput { get; }
```

- *Type:* double

---

##### `BackendXminInput`<sup>Optional</sup> <a name="BackendXminInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXminInput"></a>

```csharp
public double BackendXminInput { get; }
```

- *Type:* double

---

##### `ClientHostnameInput`<sup>Optional</sup> <a name="ClientHostnameInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientHostnameInput"></a>

```csharp
public string ClientHostnameInput { get; }
```

- *Type:* string

---

##### `XactStartInput`<sup>Optional</sup> <a name="XactStartInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.xactStartInput"></a>

```csharp
public string XactStartInput { get; }
```

- *Type:* string

---

##### `BackendXid`<sup>Required</sup> <a name="BackendXid" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXid"></a>

```csharp
public double BackendXid { get; }
```

- *Type:* double

---

##### `BackendXmin`<sup>Required</sup> <a name="BackendXmin" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXmin"></a>

```csharp
public double BackendXmin { get; }
```

- *Type:* double

---

##### `ClientHostname`<sup>Required</sup> <a name="ClientHostname" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientHostname"></a>

```csharp
public string ClientHostname { get; }
```

- *Type:* string

---

##### `XactStart`<sup>Required</sup> <a name="XactStart" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.xactStart"></a>

```csharp
public string XactStart { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataUpcloudManagedDatabasePostgresqlSessionsSessions InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>

---



