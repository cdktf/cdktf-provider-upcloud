# `dataUpcloudLoadBalancerDnsChallengeDomain` Submodule <a name="`dataUpcloudLoadBalancerDnsChallengeDomain` Submodule" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataUpcloudLoadBalancerDnsChallengeDomain <a name="DataUpcloudLoadBalancerDnsChallengeDomain" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.0/docs/data-sources/load_balancer_dns_challenge_domain upcloud_load_balancer_dns_challenge_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new DataUpcloudLoadBalancerDnsChallengeDomain(Construct Scope, string Id, DataUpcloudLoadBalancerDnsChallengeDomainConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig">DataUpcloudLoadBalancerDnsChallengeDomainConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig">DataUpcloudLoadBalancerDnsChallengeDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataUpcloudLoadBalancerDnsChallengeDomain resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

DataUpcloudLoadBalancerDnsChallengeDomain.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

DataUpcloudLoadBalancerDnsChallengeDomain.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

DataUpcloudLoadBalancerDnsChallengeDomain.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

DataUpcloudLoadBalancerDnsChallengeDomain.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataUpcloudLoadBalancerDnsChallengeDomain resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataUpcloudLoadBalancerDnsChallengeDomain to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataUpcloudLoadBalancerDnsChallengeDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.0/docs/data-sources/load_balancer_dns_challenge_domain#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataUpcloudLoadBalancerDnsChallengeDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomain.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataUpcloudLoadBalancerDnsChallengeDomainConfig <a name="DataUpcloudLoadBalancerDnsChallengeDomainConfig" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new DataUpcloudLoadBalancerDnsChallengeDomainConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.dataUpcloudLoadBalancerDnsChallengeDomain.DataUpcloudLoadBalancerDnsChallengeDomainConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---



