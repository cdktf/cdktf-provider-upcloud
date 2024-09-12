# `dataUpcloudManagedDatabaseOpensearchIndices` Submodule <a name="`dataUpcloudManagedDatabaseOpensearchIndices` Submodule" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataUpcloudManagedDatabaseOpensearchIndices <a name="DataUpcloudManagedDatabaseOpensearchIndices" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.0/docs/data-sources/managed_database_opensearch_indices upcloud_managed_database_opensearch_indices}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new DataUpcloudManagedDatabaseOpensearchIndices(Construct Scope, string Id, DataUpcloudManagedDatabaseOpensearchIndicesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig">DataUpcloudManagedDatabaseOpensearchIndicesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig">DataUpcloudManagedDatabaseOpensearchIndicesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.putIndices">PutIndices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.resetIndices">ResetIndices</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutIndices` <a name="PutIndices" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.putIndices"></a>

```csharp
private void PutIndices(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.putIndices.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIndices` <a name="ResetIndices" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.resetIndices"></a>

```csharp
private void ResetIndices()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataUpcloudManagedDatabaseOpensearchIndices resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

DataUpcloudManagedDatabaseOpensearchIndices.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

DataUpcloudManagedDatabaseOpensearchIndices.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

DataUpcloudManagedDatabaseOpensearchIndices.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

DataUpcloudManagedDatabaseOpensearchIndices.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataUpcloudManagedDatabaseOpensearchIndices resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataUpcloudManagedDatabaseOpensearchIndices to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataUpcloudManagedDatabaseOpensearchIndices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.0/docs/data-sources/managed_database_opensearch_indices#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataUpcloudManagedDatabaseOpensearchIndices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.indices">Indices</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList">DataUpcloudManagedDatabaseOpensearchIndicesIndicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.indicesInput">IndicesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.service">Service</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Indices`<sup>Required</sup> <a name="Indices" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.indices"></a>

```csharp
public DataUpcloudManagedDatabaseOpensearchIndicesIndicesList Indices { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList">DataUpcloudManagedDatabaseOpensearchIndicesIndicesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IndicesInput`<sup>Optional</sup> <a name="IndicesInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.indicesInput"></a>

```csharp
public object IndicesInput { get; }
```

- *Type:* object

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndices.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataUpcloudManagedDatabaseOpensearchIndicesConfig <a name="DataUpcloudManagedDatabaseOpensearchIndicesConfig" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new DataUpcloudManagedDatabaseOpensearchIndicesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Service,
    string Id = null,
    object Indices = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.service">Service</a></code> | <code>string</code> | Service's UUID for which these indices belongs to. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.0/docs/data-sources/managed_database_opensearch_indices#id DataUpcloudManagedDatabaseOpensearchIndices#id}. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.indices">Indices</a></code> | <code>object</code> | indices block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Service's UUID for which these indices belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.0/docs/data-sources/managed_database_opensearch_indices#service DataUpcloudManagedDatabaseOpensearchIndices#service}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.0/docs/data-sources/managed_database_opensearch_indices#id DataUpcloudManagedDatabaseOpensearchIndices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Indices`<sup>Optional</sup> <a name="Indices" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesConfig.property.indices"></a>

```csharp
public object Indices { get; set; }
```

- *Type:* object

indices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.0/docs/data-sources/managed_database_opensearch_indices#indices DataUpcloudManagedDatabaseOpensearchIndices#indices}

---

### DataUpcloudManagedDatabaseOpensearchIndicesIndices <a name="DataUpcloudManagedDatabaseOpensearchIndicesIndices" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndices.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new DataUpcloudManagedDatabaseOpensearchIndicesIndices {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataUpcloudManagedDatabaseOpensearchIndicesIndicesList <a name="DataUpcloudManagedDatabaseOpensearchIndicesIndicesList" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new DataUpcloudManagedDatabaseOpensearchIndicesIndicesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.get"></a>

```csharp
private DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference <a name="DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.docs">Docs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.health">Health</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.indexName">IndexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.numberOfReplicas">NumberOfReplicas</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.numberOfShards">NumberOfShards</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.readOnlyAllowDelete">ReadOnlyAllowDelete</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Docs`<sup>Required</sup> <a name="Docs" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.docs"></a>

```csharp
public double Docs { get; }
```

- *Type:* double

---

##### `Health`<sup>Required</sup> <a name="Health" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.health"></a>

```csharp
public string Health { get; }
```

- *Type:* string

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.indexName"></a>

```csharp
public string IndexName { get; }
```

- *Type:* string

---

##### `NumberOfReplicas`<sup>Required</sup> <a name="NumberOfReplicas" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.numberOfReplicas"></a>

```csharp
public double NumberOfReplicas { get; }
```

- *Type:* double

---

##### `NumberOfShards`<sup>Required</sup> <a name="NumberOfShards" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.numberOfShards"></a>

```csharp
public double NumberOfShards { get; }
```

- *Type:* double

---

##### `ReadOnlyAllowDelete`<sup>Required</sup> <a name="ReadOnlyAllowDelete" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.readOnlyAllowDelete"></a>

```csharp
public IResolvable ReadOnlyAllowDelete { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseOpensearchIndices.DataUpcloudManagedDatabaseOpensearchIndicesIndicesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



