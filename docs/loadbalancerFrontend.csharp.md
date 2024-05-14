# `loadbalancerFrontend` Submodule <a name="`loadbalancerFrontend` Submodule" id="@cdktf/provider-upcloud.loadbalancerFrontend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadbalancerFrontend <a name="LoadbalancerFrontend" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/loadbalancer_frontend upcloud_loadbalancer_frontend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontend(Construct Scope, string Id, LoadbalancerFrontendConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig">LoadbalancerFrontendConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig">LoadbalancerFrontendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.putNetworks">PutNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetNetworks">ResetNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNetworks` <a name="PutNetworks" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.putNetworks"></a>

```csharp
private void PutNetworks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.putNetworks.parameter.value"></a>

- *Type:* object

---

##### `PutProperties` <a name="PutProperties" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.putProperties"></a>

```csharp
private void PutProperties(LoadbalancerFrontendProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNetworks` <a name="ResetNetworks" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetNetworks"></a>

```csharp
private void ResetNetworks()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.resetProperties"></a>

```csharp
private void ResetProperties()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LoadbalancerFrontend resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

LoadbalancerFrontend.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

LoadbalancerFrontend.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

LoadbalancerFrontend.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

LoadbalancerFrontend.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LoadbalancerFrontend resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoadbalancerFrontend to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoadbalancerFrontend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/loadbalancer_frontend#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LoadbalancerFrontend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.networks">Networks</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList">LoadbalancerFrontendNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference">LoadbalancerFrontendPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.rules">Rules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.tlsConfigs">TlsConfigs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.defaultBackendNameInput">DefaultBackendNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.loadbalancerInput">LoadbalancerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.networksInput">NetworksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.defaultBackendName">DefaultBackendName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.loadbalancer">Loadbalancer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.port">Port</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.networks"></a>

```csharp
public LoadbalancerFrontendNetworksList Networks { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList">LoadbalancerFrontendNetworksList</a>

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.properties"></a>

```csharp
public LoadbalancerFrontendPropertiesOutputReference Properties { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference">LoadbalancerFrontendPropertiesOutputReference</a>

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.rules"></a>

```csharp
public string[] Rules { get; }
```

- *Type:* string[]

---

##### `TlsConfigs`<sup>Required</sup> <a name="TlsConfigs" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.tlsConfigs"></a>

```csharp
public string[] TlsConfigs { get; }
```

- *Type:* string[]

---

##### `DefaultBackendNameInput`<sup>Optional</sup> <a name="DefaultBackendNameInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.defaultBackendNameInput"></a>

```csharp
public string DefaultBackendNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LoadbalancerInput`<sup>Optional</sup> <a name="LoadbalancerInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.loadbalancerInput"></a>

```csharp
public string LoadbalancerInput { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworksInput`<sup>Optional</sup> <a name="NetworksInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.networksInput"></a>

```csharp
public object NetworksInput { get; }
```

- *Type:* object

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.propertiesInput"></a>

```csharp
public LoadbalancerFrontendProperties PropertiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a>

---

##### `DefaultBackendName`<sup>Required</sup> <a name="DefaultBackendName" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.defaultBackendName"></a>

```csharp
public string DefaultBackendName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Loadbalancer`<sup>Required</sup> <a name="Loadbalancer" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.loadbalancer"></a>

```csharp
public string Loadbalancer { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontend.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadbalancerFrontendConfig <a name="LoadbalancerFrontendConfig" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DefaultBackendName,
    string Loadbalancer,
    string Mode,
    string Name,
    double Port,
    string Id = null,
    object Networks = null,
    LoadbalancerFrontendProperties Properties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.defaultBackendName">DefaultBackendName</a></code> | <code>string</code> | The name of the default backend where traffic will be routed. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.loadbalancer">Loadbalancer</a></code> | <code>string</code> | ID of the load balancer to which the frontend is connected. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.mode">Mode</a></code> | <code>string</code> | When load balancer operating in `tcp` mode it acts as a layer 4 proxy. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.name">Name</a></code> | <code>string</code> | The name of the frontend must be unique within the load balancer service. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.port">Port</a></code> | <code>double</code> | Port to listen incoming requests. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/loadbalancer_frontend#id LoadbalancerFrontend#id}. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.networks">Networks</a></code> | <code>object</code> | networks block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a></code> | properties block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DefaultBackendName`<sup>Required</sup> <a name="DefaultBackendName" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.defaultBackendName"></a>

```csharp
public string DefaultBackendName { get; set; }
```

- *Type:* string

The name of the default backend where traffic will be routed.

Note, default backend can be overwritten in frontend rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/loadbalancer_frontend#default_backend_name LoadbalancerFrontend#default_backend_name}

---

##### `Loadbalancer`<sup>Required</sup> <a name="Loadbalancer" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.loadbalancer"></a>

```csharp
public string Loadbalancer { get; set; }
```

- *Type:* string

ID of the load balancer to which the frontend is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/loadbalancer_frontend#loadbalancer LoadbalancerFrontend#loadbalancer}

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

When load balancer operating in `tcp` mode it acts as a layer 4 proxy.

In `http` mode it acts as a layer 7 proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/loadbalancer_frontend#mode LoadbalancerFrontend#mode}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the frontend must be unique within the load balancer service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/loadbalancer_frontend#name LoadbalancerFrontend#name}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Port to listen incoming requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/loadbalancer_frontend#port LoadbalancerFrontend#port}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/loadbalancer_frontend#id LoadbalancerFrontend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Networks`<sup>Optional</sup> <a name="Networks" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.networks"></a>

```csharp
public object Networks { get; set; }
```

- *Type:* object

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/loadbalancer_frontend#networks LoadbalancerFrontend#networks}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendConfig.property.properties"></a>

```csharp
public LoadbalancerFrontendProperties Properties { get; set; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/loadbalancer_frontend#properties LoadbalancerFrontend#properties}

---

### LoadbalancerFrontendNetworks <a name="LoadbalancerFrontendNetworks" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendNetworks {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks.property.name">Name</a></code> | <code>string</code> | Name of the load balancer network. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworks.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the load balancer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/loadbalancer_frontend#name LoadbalancerFrontend#name}

---

### LoadbalancerFrontendProperties <a name="LoadbalancerFrontendProperties" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendProperties {
    object Http2Enabled = null,
    object InboundProxyProtocol = null,
    double TimeoutClient = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties.property.http2Enabled">Http2Enabled</a></code> | <code>object</code> | Enable or disable HTTP/2 support. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties.property.inboundProxyProtocol">InboundProxyProtocol</a></code> | <code>object</code> | Enable or disable inbound proxy protocol support. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties.property.timeoutClient">TimeoutClient</a></code> | <code>double</code> | Client request timeout in seconds. |

---

##### `Http2Enabled`<sup>Optional</sup> <a name="Http2Enabled" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties.property.http2Enabled"></a>

```csharp
public object Http2Enabled { get; set; }
```

- *Type:* object

Enable or disable HTTP/2 support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/loadbalancer_frontend#http2_enabled LoadbalancerFrontend#http2_enabled}

---

##### `InboundProxyProtocol`<sup>Optional</sup> <a name="InboundProxyProtocol" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties.property.inboundProxyProtocol"></a>

```csharp
public object InboundProxyProtocol { get; set; }
```

- *Type:* object

Enable or disable inbound proxy protocol support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/loadbalancer_frontend#inbound_proxy_protocol LoadbalancerFrontend#inbound_proxy_protocol}

---

##### `TimeoutClient`<sup>Optional</sup> <a name="TimeoutClient" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties.property.timeoutClient"></a>

```csharp
public double TimeoutClient { get; set; }
```

- *Type:* double

Client request timeout in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.3.0/docs/resources/loadbalancer_frontend#timeout_client LoadbalancerFrontend#timeout_client}

---

## Classes <a name="Classes" id="Classes"></a>

### LoadbalancerFrontendNetworksList <a name="LoadbalancerFrontendNetworksList" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendNetworksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.get"></a>

```csharp
private LoadbalancerFrontendNetworksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendNetworksOutputReference <a name="LoadbalancerFrontendNetworksOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendNetworksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendNetworksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LoadbalancerFrontendPropertiesOutputReference <a name="LoadbalancerFrontendPropertiesOutputReference" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerFrontendPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resetHttp2Enabled">ResetHttp2Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resetInboundProxyProtocol">ResetInboundProxyProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resetTimeoutClient">ResetTimeoutClient</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHttp2Enabled` <a name="ResetHttp2Enabled" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resetHttp2Enabled"></a>

```csharp
private void ResetHttp2Enabled()
```

##### `ResetInboundProxyProtocol` <a name="ResetInboundProxyProtocol" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resetInboundProxyProtocol"></a>

```csharp
private void ResetInboundProxyProtocol()
```

##### `ResetTimeoutClient` <a name="ResetTimeoutClient" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.resetTimeoutClient"></a>

```csharp
private void ResetTimeoutClient()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.http2EnabledInput">Http2EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.inboundProxyProtocolInput">InboundProxyProtocolInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.timeoutClientInput">TimeoutClientInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.http2Enabled">Http2Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.inboundProxyProtocol">InboundProxyProtocol</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.timeoutClient">TimeoutClient</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Http2EnabledInput`<sup>Optional</sup> <a name="Http2EnabledInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.http2EnabledInput"></a>

```csharp
public object Http2EnabledInput { get; }
```

- *Type:* object

---

##### `InboundProxyProtocolInput`<sup>Optional</sup> <a name="InboundProxyProtocolInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.inboundProxyProtocolInput"></a>

```csharp
public object InboundProxyProtocolInput { get; }
```

- *Type:* object

---

##### `TimeoutClientInput`<sup>Optional</sup> <a name="TimeoutClientInput" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.timeoutClientInput"></a>

```csharp
public double TimeoutClientInput { get; }
```

- *Type:* double

---

##### `Http2Enabled`<sup>Required</sup> <a name="Http2Enabled" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.http2Enabled"></a>

```csharp
public object Http2Enabled { get; }
```

- *Type:* object

---

##### `InboundProxyProtocol`<sup>Required</sup> <a name="InboundProxyProtocol" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.inboundProxyProtocol"></a>

```csharp
public object InboundProxyProtocol { get; }
```

- *Type:* object

---

##### `TimeoutClient`<sup>Required</sup> <a name="TimeoutClient" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.timeoutClient"></a>

```csharp
public double TimeoutClient { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendPropertiesOutputReference.property.internalValue"></a>

```csharp
public LoadbalancerFrontendProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerFrontend.LoadbalancerFrontendProperties">LoadbalancerFrontendProperties</a>

---



