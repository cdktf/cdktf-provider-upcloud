# `dataUpcloudStorage` Submodule <a name="`dataUpcloudStorage` Submodule" id="@cdktf/provider-upcloud.dataUpcloudStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataUpcloudStorage <a name="DataUpcloudStorage" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/data-sources/storage upcloud_storage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new DataUpcloudStorage(Construct Scope, string Id, DataUpcloudStorageConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig">DataUpcloudStorageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig">DataUpcloudStorageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetAccessType">ResetAccessType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetMostRecent">ResetMostRecent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetNameRegex">ResetNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetTitle">ResetTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccessType` <a name="ResetAccessType" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetAccessType"></a>

```csharp
private void ResetAccessType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMostRecent` <a name="ResetMostRecent" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetMostRecent"></a>

```csharp
private void ResetMostRecent()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNameRegex` <a name="ResetNameRegex" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetNameRegex"></a>

```csharp
private void ResetNameRegex()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetTitle"></a>

```csharp
private void ResetTitle()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.resetZone"></a>

```csharp
private void ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataUpcloudStorage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

DataUpcloudStorage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

DataUpcloudStorage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

DataUpcloudStorage.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

DataUpcloudStorage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataUpcloudStorage resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataUpcloudStorage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataUpcloudStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/data-sources/storage#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataUpcloudStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.encrypt">Encrypt</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.labels">Labels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.systemLabels">SystemLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.tier">Tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.accessTypeInput">AccessTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.mostRecentInput">MostRecentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.nameRegexInput">NameRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.accessType">AccessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.mostRecent">MostRecent</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.nameRegex">NameRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Encrypt`<sup>Required</sup> <a name="Encrypt" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.encrypt"></a>

```csharp
public IResolvable Encrypt { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.labels"></a>

```csharp
public StringMap Labels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemLabels`<sup>Required</sup> <a name="SystemLabels" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.systemLabels"></a>

```csharp
public StringMap SystemLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.tier"></a>

```csharp
public string Tier { get; }
```

- *Type:* string

---

##### `AccessTypeInput`<sup>Optional</sup> <a name="AccessTypeInput" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.accessTypeInput"></a>

```csharp
public string AccessTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MostRecentInput`<sup>Optional</sup> <a name="MostRecentInput" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.mostRecentInput"></a>

```csharp
public object MostRecentInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NameRegexInput`<sup>Optional</sup> <a name="NameRegexInput" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.nameRegexInput"></a>

```csharp
public string NameRegexInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.accessType"></a>

```csharp
public string AccessType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MostRecent`<sup>Required</sup> <a name="MostRecent" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.mostRecent"></a>

```csharp
public object MostRecent { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NameRegex`<sup>Required</sup> <a name="NameRegex" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.nameRegex"></a>

```csharp
public string NameRegex { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataUpcloudStorageConfig <a name="DataUpcloudStorageConfig" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new DataUpcloudStorageConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccessType = null,
    string Id = null,
    object MostRecent = null,
    string Name = null,
    string NameRegex = null,
    string Title = null,
    string Type = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.accessType">AccessType</a></code> | <code>string</code> | The access type of the storage, `public` or `private`. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.id">Id</a></code> | <code>string</code> | UUID of the storage. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.mostRecent">MostRecent</a></code> | <code>object</code> | If more than one result is returned, use the most recent storage. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.name">Name</a></code> | <code>string</code> | Exact name of the storage (same as title). Deprecated, use `title` instead. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.nameRegex">NameRegex</a></code> | <code>string</code> | Use regular expression to match storage name. Deprecated, use exact title or UUID instead. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.title">Title</a></code> | <code>string</code> | The title of the storage. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.type">Type</a></code> | <code>string</code> | The type of the storage. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.zone">Zone</a></code> | <code>string</code> | The zone the storage is in, e.g. `de-fra1`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccessType`<sup>Optional</sup> <a name="AccessType" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.accessType"></a>

```csharp
public string AccessType { get; set; }
```

- *Type:* string

The access type of the storage, `public` or `private`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/data-sources/storage#access_type DataUpcloudStorage#access_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

UUID of the storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/data-sources/storage#id DataUpcloudStorage#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MostRecent`<sup>Optional</sup> <a name="MostRecent" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.mostRecent"></a>

```csharp
public object MostRecent { get; set; }
```

- *Type:* object

If more than one result is returned, use the most recent storage.

This is only useful with private storages. Public storages might give unpredictable results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/data-sources/storage#most_recent DataUpcloudStorage#most_recent}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Exact name of the storage (same as title). Deprecated, use `title` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/data-sources/storage#name DataUpcloudStorage#name}

---

##### `NameRegex`<sup>Optional</sup> <a name="NameRegex" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.nameRegex"></a>

```csharp
public string NameRegex { get; set; }
```

- *Type:* string

Use regular expression to match storage name. Deprecated, use exact title or UUID instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/data-sources/storage#name_regex DataUpcloudStorage#name_regex}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

The title of the storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/data-sources/storage#title DataUpcloudStorage#title}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/data-sources/storage#type DataUpcloudStorage#type}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-upcloud.dataUpcloudStorage.DataUpcloudStorageConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

The zone the storage is in, e.g. `de-fra1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/data-sources/storage#zone DataUpcloudStorage#zone}

---



