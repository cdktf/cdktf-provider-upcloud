# `dataUpcloudManagedDatabaseMysqlSessions` Submodule <a name="`dataUpcloudManagedDatabaseMysqlSessions` Submodule" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataUpcloudManagedDatabaseMysqlSessions <a name="DataUpcloudManagedDatabaseMysqlSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.2/docs/data-sources/managed_database_mysql_sessions upcloud_managed_database_mysql_sessions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new DataUpcloudManagedDatabaseMysqlSessions(Construct Scope, string Id, DataUpcloudManagedDatabaseMysqlSessionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig">DataUpcloudManagedDatabaseMysqlSessionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig">DataUpcloudManagedDatabaseMysqlSessionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.putSessions">PutSessions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetOffset">ResetOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetSessions">ResetSessions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutSessions` <a name="PutSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.putSessions"></a>

```csharp
private void PutSessions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.putSessions.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLimit` <a name="ResetLimit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetLimit"></a>

```csharp
private void ResetLimit()
```

##### `ResetOffset` <a name="ResetOffset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetOffset"></a>

```csharp
private void ResetOffset()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetSessions` <a name="ResetSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.resetSessions"></a>

```csharp
private void ResetSessions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataUpcloudManagedDatabaseMysqlSessions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

DataUpcloudManagedDatabaseMysqlSessions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

DataUpcloudManagedDatabaseMysqlSessions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

DataUpcloudManagedDatabaseMysqlSessions.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

DataUpcloudManagedDatabaseMysqlSessions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataUpcloudManagedDatabaseMysqlSessions resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataUpcloudManagedDatabaseMysqlSessions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataUpcloudManagedDatabaseMysqlSessions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.2/docs/data-sources/managed_database_mysql_sessions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataUpcloudManagedDatabaseMysqlSessions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.sessions">Sessions</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList">DataUpcloudManagedDatabaseMysqlSessionsSessionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.limitInput">LimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.offsetInput">OffsetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.orderInput">OrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.sessionsInput">SessionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.limit">Limit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.offset">Offset</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.order">Order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.service">Service</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Sessions`<sup>Required</sup> <a name="Sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.sessions"></a>

```csharp
public DataUpcloudManagedDatabaseMysqlSessionsSessionsList Sessions { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList">DataUpcloudManagedDatabaseMysqlSessionsSessionsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.limitInput"></a>

```csharp
public double LimitInput { get; }
```

- *Type:* double

---

##### `OffsetInput`<sup>Optional</sup> <a name="OffsetInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.offsetInput"></a>

```csharp
public double OffsetInput { get; }
```

- *Type:* double

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.orderInput"></a>

```csharp
public string OrderInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `SessionsInput`<sup>Optional</sup> <a name="SessionsInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.sessionsInput"></a>

```csharp
public object SessionsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.limit"></a>

```csharp
public double Limit { get; }
```

- *Type:* double

---

##### `Offset`<sup>Required</sup> <a name="Offset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.offset"></a>

```csharp
public double Offset { get; }
```

- *Type:* double

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.order"></a>

```csharp
public string Order { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataUpcloudManagedDatabaseMysqlSessionsConfig <a name="DataUpcloudManagedDatabaseMysqlSessionsConfig" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new DataUpcloudManagedDatabaseMysqlSessionsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Service,
    string Id = null,
    double Limit = null,
    double Offset = null,
    string Order = null,
    object Sessions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.service">Service</a></code> | <code>string</code> | Service's UUID for which these sessions belongs to. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.2/docs/data-sources/managed_database_mysql_sessions#id DataUpcloudManagedDatabaseMysqlSessions#id}. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.limit">Limit</a></code> | <code>double</code> | Number of entries to receive at most. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.offset">Offset</a></code> | <code>double</code> | Offset for retrieved results based on sort order. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.order">Order</a></code> | <code>string</code> | Order by session field and sort retrieved results. Limited variables can be used for ordering. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.sessions">Sessions</a></code> | <code>object</code> | sessions block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Service's UUID for which these sessions belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.2/docs/data-sources/managed_database_mysql_sessions#service DataUpcloudManagedDatabaseMysqlSessions#service}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.2/docs/data-sources/managed_database_mysql_sessions#id DataUpcloudManagedDatabaseMysqlSessions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.limit"></a>

```csharp
public double Limit { get; set; }
```

- *Type:* double

Number of entries to receive at most.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.2/docs/data-sources/managed_database_mysql_sessions#limit DataUpcloudManagedDatabaseMysqlSessions#limit}

---

##### `Offset`<sup>Optional</sup> <a name="Offset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.offset"></a>

```csharp
public double Offset { get; set; }
```

- *Type:* double

Offset for retrieved results based on sort order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.2/docs/data-sources/managed_database_mysql_sessions#offset DataUpcloudManagedDatabaseMysqlSessions#offset}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.order"></a>

```csharp
public string Order { get; set; }
```

- *Type:* string

Order by session field and sort retrieved results. Limited variables can be used for ordering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.2/docs/data-sources/managed_database_mysql_sessions#order DataUpcloudManagedDatabaseMysqlSessions#order}

---

##### `Sessions`<sup>Optional</sup> <a name="Sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsConfig.property.sessions"></a>

```csharp
public object Sessions { get; set; }
```

- *Type:* object

sessions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.13.2/docs/data-sources/managed_database_mysql_sessions#sessions DataUpcloudManagedDatabaseMysqlSessions#sessions}

---

### DataUpcloudManagedDatabaseMysqlSessionsSessions <a name="DataUpcloudManagedDatabaseMysqlSessionsSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new DataUpcloudManagedDatabaseMysqlSessionsSessions {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataUpcloudManagedDatabaseMysqlSessionsSessionsList <a name="DataUpcloudManagedDatabaseMysqlSessionsSessionsList" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new DataUpcloudManagedDatabaseMysqlSessionsSessionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.get"></a>

```csharp
private DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference <a name="DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.applicationName">ApplicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.clientAddr">ClientAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.datname">Datname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.queryDuration">QueryDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.usename">Usename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.applicationName"></a>

```csharp
public string ApplicationName { get; }
```

- *Type:* string

---

##### `ClientAddr`<sup>Required</sup> <a name="ClientAddr" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.clientAddr"></a>

```csharp
public string ClientAddr { get; }
```

- *Type:* string

---

##### `Datname`<sup>Required</sup> <a name="Datname" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.datname"></a>

```csharp
public string Datname { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `QueryDuration`<sup>Required</sup> <a name="QueryDuration" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.queryDuration"></a>

```csharp
public string QueryDuration { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Usename`<sup>Required</sup> <a name="Usename" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.usename"></a>

```csharp
public string Usename { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseMysqlSessions.DataUpcloudManagedDatabaseMysqlSessionsSessionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



