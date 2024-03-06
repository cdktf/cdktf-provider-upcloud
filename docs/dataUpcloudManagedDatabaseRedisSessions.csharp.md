# `dataUpcloudManagedDatabaseRedisSessions` Submodule <a name="`dataUpcloudManagedDatabaseRedisSessions` Submodule" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataUpcloudManagedDatabaseRedisSessions <a name="DataUpcloudManagedDatabaseRedisSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/data-sources/managed_database_redis_sessions upcloud_managed_database_redis_sessions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new DataUpcloudManagedDatabaseRedisSessions(Construct Scope, string Id, DataUpcloudManagedDatabaseRedisSessionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig">DataUpcloudManagedDatabaseRedisSessionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig">DataUpcloudManagedDatabaseRedisSessionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.putSessions">PutSessions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetOffset">ResetOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetSessions">ResetSessions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutSessions` <a name="PutSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.putSessions"></a>

```csharp
private void PutSessions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.putSessions.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLimit` <a name="ResetLimit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetLimit"></a>

```csharp
private void ResetLimit()
```

##### `ResetOffset` <a name="ResetOffset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetOffset"></a>

```csharp
private void ResetOffset()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetSessions` <a name="ResetSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetSessions"></a>

```csharp
private void ResetSessions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataUpcloudManagedDatabaseRedisSessions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

DataUpcloudManagedDatabaseRedisSessions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

DataUpcloudManagedDatabaseRedisSessions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

DataUpcloudManagedDatabaseRedisSessions.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

DataUpcloudManagedDatabaseRedisSessions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataUpcloudManagedDatabaseRedisSessions resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataUpcloudManagedDatabaseRedisSessions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataUpcloudManagedDatabaseRedisSessions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/data-sources/managed_database_redis_sessions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataUpcloudManagedDatabaseRedisSessions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.sessions">Sessions</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList">DataUpcloudManagedDatabaseRedisSessionsSessionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.limitInput">LimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.offsetInput">OffsetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.orderInput">OrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.sessionsInput">SessionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.limit">Limit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.offset">Offset</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.order">Order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.service">Service</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Sessions`<sup>Required</sup> <a name="Sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.sessions"></a>

```csharp
public DataUpcloudManagedDatabaseRedisSessionsSessionsList Sessions { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList">DataUpcloudManagedDatabaseRedisSessionsSessionsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.limitInput"></a>

```csharp
public double LimitInput { get; }
```

- *Type:* double

---

##### `OffsetInput`<sup>Optional</sup> <a name="OffsetInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.offsetInput"></a>

```csharp
public double OffsetInput { get; }
```

- *Type:* double

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.orderInput"></a>

```csharp
public string OrderInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `SessionsInput`<sup>Optional</sup> <a name="SessionsInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.sessionsInput"></a>

```csharp
public object SessionsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.limit"></a>

```csharp
public double Limit { get; }
```

- *Type:* double

---

##### `Offset`<sup>Required</sup> <a name="Offset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.offset"></a>

```csharp
public double Offset { get; }
```

- *Type:* double

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.order"></a>

```csharp
public string Order { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataUpcloudManagedDatabaseRedisSessionsConfig <a name="DataUpcloudManagedDatabaseRedisSessionsConfig" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new DataUpcloudManagedDatabaseRedisSessionsConfig {
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
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.service">Service</a></code> | <code>string</code> | Service's UUID for which these sessions belongs to. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/data-sources/managed_database_redis_sessions#id DataUpcloudManagedDatabaseRedisSessions#id}. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.limit">Limit</a></code> | <code>double</code> | Number of entries to receive at most. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.offset">Offset</a></code> | <code>double</code> | Offset for retrieved results based on sort order. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.order">Order</a></code> | <code>string</code> | Order by session field and sort retrieved results. Limited variables can be used for ordering. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.sessions">Sessions</a></code> | <code>object</code> | sessions block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Service's UUID for which these sessions belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/data-sources/managed_database_redis_sessions#service DataUpcloudManagedDatabaseRedisSessions#service}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/data-sources/managed_database_redis_sessions#id DataUpcloudManagedDatabaseRedisSessions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.limit"></a>

```csharp
public double Limit { get; set; }
```

- *Type:* double

Number of entries to receive at most.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/data-sources/managed_database_redis_sessions#limit DataUpcloudManagedDatabaseRedisSessions#limit}

---

##### `Offset`<sup>Optional</sup> <a name="Offset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.offset"></a>

```csharp
public double Offset { get; set; }
```

- *Type:* double

Offset for retrieved results based on sort order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/data-sources/managed_database_redis_sessions#offset DataUpcloudManagedDatabaseRedisSessions#offset}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.order"></a>

```csharp
public string Order { get; set; }
```

- *Type:* string

Order by session field and sort retrieved results. Limited variables can be used for ordering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/data-sources/managed_database_redis_sessions#order DataUpcloudManagedDatabaseRedisSessions#order}

---

##### `Sessions`<sup>Optional</sup> <a name="Sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.sessions"></a>

```csharp
public object Sessions { get; set; }
```

- *Type:* object

sessions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/data-sources/managed_database_redis_sessions#sessions DataUpcloudManagedDatabaseRedisSessions#sessions}

---

### DataUpcloudManagedDatabaseRedisSessionsSessions <a name="DataUpcloudManagedDatabaseRedisSessionsSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new DataUpcloudManagedDatabaseRedisSessionsSessions {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataUpcloudManagedDatabaseRedisSessionsSessionsList <a name="DataUpcloudManagedDatabaseRedisSessionsSessionsList" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new DataUpcloudManagedDatabaseRedisSessionsSessionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.get"></a>

```csharp
private DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference <a name="DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.activeChannelSubscriptions">ActiveChannelSubscriptions</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.activeDatabase">ActiveDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.activePatternMatchingChannelSubscriptions">ActivePatternMatchingChannelSubscriptions</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.applicationName">ApplicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.clientAddr">ClientAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.connectionAge">ConnectionAge</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.connectionIdle">ConnectionIdle</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.flags">Flags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.flagsRaw">FlagsRaw</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.multiExecCommands">MultiExecCommands</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.outputBuffer">OutputBuffer</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.outputBufferMemory">OutputBufferMemory</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.outputListLength">OutputListLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.queryBuffer">QueryBuffer</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.queryBufferFree">QueryBufferFree</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveChannelSubscriptions`<sup>Required</sup> <a name="ActiveChannelSubscriptions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.activeChannelSubscriptions"></a>

```csharp
public double ActiveChannelSubscriptions { get; }
```

- *Type:* double

---

##### `ActiveDatabase`<sup>Required</sup> <a name="ActiveDatabase" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.activeDatabase"></a>

```csharp
public string ActiveDatabase { get; }
```

- *Type:* string

---

##### `ActivePatternMatchingChannelSubscriptions`<sup>Required</sup> <a name="ActivePatternMatchingChannelSubscriptions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.activePatternMatchingChannelSubscriptions"></a>

```csharp
public double ActivePatternMatchingChannelSubscriptions { get; }
```

- *Type:* double

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.applicationName"></a>

```csharp
public string ApplicationName { get; }
```

- *Type:* string

---

##### `ClientAddr`<sup>Required</sup> <a name="ClientAddr" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.clientAddr"></a>

```csharp
public string ClientAddr { get; }
```

- *Type:* string

---

##### `ConnectionAge`<sup>Required</sup> <a name="ConnectionAge" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.connectionAge"></a>

```csharp
public double ConnectionAge { get; }
```

- *Type:* double

---

##### `ConnectionIdle`<sup>Required</sup> <a name="ConnectionIdle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.connectionIdle"></a>

```csharp
public double ConnectionIdle { get; }
```

- *Type:* double

---

##### `Flags`<sup>Required</sup> <a name="Flags" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.flags"></a>

```csharp
public string[] Flags { get; }
```

- *Type:* string[]

---

##### `FlagsRaw`<sup>Required</sup> <a name="FlagsRaw" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.flagsRaw"></a>

```csharp
public string FlagsRaw { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MultiExecCommands`<sup>Required</sup> <a name="MultiExecCommands" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.multiExecCommands"></a>

```csharp
public double MultiExecCommands { get; }
```

- *Type:* double

---

##### `OutputBuffer`<sup>Required</sup> <a name="OutputBuffer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.outputBuffer"></a>

```csharp
public double OutputBuffer { get; }
```

- *Type:* double

---

##### `OutputBufferMemory`<sup>Required</sup> <a name="OutputBufferMemory" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.outputBufferMemory"></a>

```csharp
public double OutputBufferMemory { get; }
```

- *Type:* double

---

##### `OutputListLength`<sup>Required</sup> <a name="OutputListLength" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.outputListLength"></a>

```csharp
public double OutputListLength { get; }
```

- *Type:* double

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `QueryBuffer`<sup>Required</sup> <a name="QueryBuffer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.queryBuffer"></a>

```csharp
public double QueryBuffer { get; }
```

- *Type:* double

---

##### `QueryBufferFree`<sup>Required</sup> <a name="QueryBufferFree" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.queryBufferFree"></a>

```csharp
public double QueryBufferFree { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



