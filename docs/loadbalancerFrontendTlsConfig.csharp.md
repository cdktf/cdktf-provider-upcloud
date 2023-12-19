# `loadbalancerFrontendTlsConfig` Submodule <a name="`loadbalancerFrontendTlsConfig` Submodule" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadbalancerFrontendTlsConfig <a name="LoadbalancerFrontendTlsConfig" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/loadbalancer_frontend_tls_config upcloud_loadbalancer_frontend_tls_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendTlsConfig(Construct Scope, string Id, LoadbalancerFrontendTlsConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfigConfig">LoadbalancerFrontendTlsConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfigConfig">LoadbalancerFrontendTlsConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LoadbalancerFrontendTlsConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

LoadbalancerFrontendTlsConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

LoadbalancerFrontendTlsConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

LoadbalancerFrontendTlsConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

LoadbalancerFrontendTlsConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LoadbalancerFrontendTlsConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoadbalancerFrontendTlsConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoadbalancerFrontendTlsConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/loadbalancer_frontend_tls_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LoadbalancerFrontendTlsConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.certificateBundleInput">CertificateBundleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.frontendInput">FrontendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.certificateBundle">CertificateBundle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.frontend">Frontend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CertificateBundleInput`<sup>Optional</sup> <a name="CertificateBundleInput" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.certificateBundleInput"></a>

```csharp
public string CertificateBundleInput { get; }
```

- *Type:* string

---

##### `FrontendInput`<sup>Optional</sup> <a name="FrontendInput" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.frontendInput"></a>

```csharp
public string FrontendInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `CertificateBundle`<sup>Required</sup> <a name="CertificateBundle" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.certificateBundle"></a>

```csharp
public string CertificateBundle { get; }
```

- *Type:* string

---

##### `Frontend`<sup>Required</sup> <a name="Frontend" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.frontend"></a>

```csharp
public string Frontend { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadbalancerFrontendTlsConfigConfig <a name="LoadbalancerFrontendTlsConfigConfig" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendTlsConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CertificateBundle,
    string Frontend,
    string Name,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfigConfig.property.certificateBundle">CertificateBundle</a></code> | <code>string</code> | Reference to certificate bundle ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfigConfig.property.frontend">Frontend</a></code> | <code>string</code> | ID of the load balancer frontend to which the TLS config is connected. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfigConfig.property.name">Name</a></code> | <code>string</code> | The name of the TLS config must be unique within service frontend. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/loadbalancer_frontend_tls_config#id LoadbalancerFrontendTlsConfig#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CertificateBundle`<sup>Required</sup> <a name="CertificateBundle" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfigConfig.property.certificateBundle"></a>

```csharp
public string CertificateBundle { get; set; }
```

- *Type:* string

Reference to certificate bundle ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/loadbalancer_frontend_tls_config#certificate_bundle LoadbalancerFrontendTlsConfig#certificate_bundle}

---

##### `Frontend`<sup>Required</sup> <a name="Frontend" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfigConfig.property.frontend"></a>

```csharp
public string Frontend { get; set; }
```

- *Type:* string

ID of the load balancer frontend to which the TLS config is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/loadbalancer_frontend_tls_config#frontend LoadbalancerFrontendTlsConfig#frontend}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfigConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the TLS config must be unique within service frontend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/loadbalancer_frontend_tls_config#name LoadbalancerFrontendTlsConfig#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerFrontendTlsConfig.LoadbalancerFrontendTlsConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.2.0/docs/resources/loadbalancer_frontend_tls_config#id LoadbalancerFrontendTlsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



