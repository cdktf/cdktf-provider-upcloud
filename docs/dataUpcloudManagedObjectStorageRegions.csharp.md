# `dataUpcloudManagedObjectStorageRegions` Submodule <a name="`dataUpcloudManagedObjectStorageRegions` Submodule" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataUpcloudManagedObjectStorageRegions <a name="DataUpcloudManagedObjectStorageRegions" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/data-sources/managed_object_storage_regions upcloud_managed_object_storage_regions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new DataUpcloudManagedObjectStorageRegions(Construct Scope, string Id, DataUpcloudManagedObjectStorageRegionsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig">DataUpcloudManagedObjectStorageRegionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig">DataUpcloudManagedObjectStorageRegionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.putRegions">PutRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.resetRegions">ResetRegions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutRegions` <a name="PutRegions" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.putRegions"></a>

```csharp
private void PutRegions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.putRegions.parameter.value"></a>

- *Type:* object

---

##### `ResetRegions` <a name="ResetRegions" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.resetRegions"></a>

```csharp
private void ResetRegions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataUpcloudManagedObjectStorageRegions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

DataUpcloudManagedObjectStorageRegions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

DataUpcloudManagedObjectStorageRegions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

DataUpcloudManagedObjectStorageRegions.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

DataUpcloudManagedObjectStorageRegions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataUpcloudManagedObjectStorageRegions resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataUpcloudManagedObjectStorageRegions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataUpcloudManagedObjectStorageRegions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/data-sources/managed_object_storage_regions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataUpcloudManagedObjectStorageRegions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.regions">Regions</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList">DataUpcloudManagedObjectStorageRegionsRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.regionsInput">RegionsInput</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.regions"></a>

```csharp
public DataUpcloudManagedObjectStorageRegionsRegionsList Regions { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList">DataUpcloudManagedObjectStorageRegionsRegionsList</a>

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.regionsInput"></a>

```csharp
public object RegionsInput { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataUpcloudManagedObjectStorageRegionsConfig <a name="DataUpcloudManagedObjectStorageRegionsConfig" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new DataUpcloudManagedObjectStorageRegionsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Regions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig.property.regions">Regions</a></code> | <code>object</code> | regions block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsConfig.property.regions"></a>

```csharp
public object Regions { get; set; }
```

- *Type:* object

regions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/data-sources/managed_object_storage_regions#regions DataUpcloudManagedObjectStorageRegions#regions}

---

### DataUpcloudManagedObjectStorageRegionsRegions <a name="DataUpcloudManagedObjectStorageRegionsRegions" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new DataUpcloudManagedObjectStorageRegionsRegions {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataUpcloudManagedObjectStorageRegionsRegionsList <a name="DataUpcloudManagedObjectStorageRegionsRegionsList" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new DataUpcloudManagedObjectStorageRegionsRegionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.get"></a>

```csharp
private DataUpcloudManagedObjectStorageRegionsRegionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataUpcloudManagedObjectStorageRegionsRegionsOutputReference <a name="DataUpcloudManagedObjectStorageRegionsRegionsOutputReference" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new DataUpcloudManagedObjectStorageRegionsRegionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.property.primaryZone">PrimaryZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.property.zones">Zones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrimaryZone`<sup>Required</sup> <a name="PrimaryZone" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.property.primaryZone"></a>

```csharp
public string PrimaryZone { get; }
```

- *Type:* string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.property.zones"></a>

```csharp
public string[] Zones { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.dataUpcloudManagedObjectStorageRegions.DataUpcloudManagedObjectStorageRegionsRegionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



