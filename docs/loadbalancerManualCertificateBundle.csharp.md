# `loadbalancerManualCertificateBundle` Submodule <a name="`loadbalancerManualCertificateBundle` Submodule" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadbalancerManualCertificateBundle <a name="LoadbalancerManualCertificateBundle" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/loadbalancer_manual_certificate_bundle upcloud_loadbalancer_manual_certificate_bundle}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerManualCertificateBundle(Construct Scope, string Id, LoadbalancerManualCertificateBundleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig">LoadbalancerManualCertificateBundleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig">LoadbalancerManualCertificateBundleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.resetIntermediates">ResetIntermediates</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetIntermediates` <a name="ResetIntermediates" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.resetIntermediates"></a>

```csharp
private void ResetIntermediates()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LoadbalancerManualCertificateBundle resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

LoadbalancerManualCertificateBundle.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

LoadbalancerManualCertificateBundle.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

LoadbalancerManualCertificateBundle.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

LoadbalancerManualCertificateBundle.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LoadbalancerManualCertificateBundle resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoadbalancerManualCertificateBundle to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoadbalancerManualCertificateBundle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/loadbalancer_manual_certificate_bundle#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LoadbalancerManualCertificateBundle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.notAfter">NotAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.notBefore">NotBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.operationalState">OperationalState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.certificateInput">CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.intermediatesInput">IntermediatesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.privateKeyInput">PrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.intermediates">Intermediates</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NotAfter`<sup>Required</sup> <a name="NotAfter" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.notAfter"></a>

```csharp
public string NotAfter { get; }
```

- *Type:* string

---

##### `NotBefore`<sup>Required</sup> <a name="NotBefore" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.notBefore"></a>

```csharp
public string NotBefore { get; }
```

- *Type:* string

---

##### `OperationalState`<sup>Required</sup> <a name="OperationalState" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.operationalState"></a>

```csharp
public string OperationalState { get; }
```

- *Type:* string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.certificateInput"></a>

```csharp
public string CertificateInput { get; }
```

- *Type:* string

---

##### `IntermediatesInput`<sup>Optional</sup> <a name="IntermediatesInput" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.intermediatesInput"></a>

```csharp
public string IntermediatesInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.privateKeyInput"></a>

```csharp
public string PrivateKeyInput { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `Intermediates`<sup>Required</sup> <a name="Intermediates" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.intermediates"></a>

```csharp
public string Intermediates { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundle.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadbalancerManualCertificateBundleConfig <a name="LoadbalancerManualCertificateBundleConfig" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerManualCertificateBundleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Certificate,
    string Name,
    string PrivateKey,
    string Intermediates = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.certificate">Certificate</a></code> | <code>string</code> | Certificate as base64 encoded string. Must be in PEM format. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.name">Name</a></code> | <code>string</code> | The name of the certificate bundle. Must be unique within customer account. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.privateKey">PrivateKey</a></code> | <code>string</code> | Private key as base64 encoded string. Must be in PEM format. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.intermediates">Intermediates</a></code> | <code>string</code> | Intermediate certificates as base64 encoded string. Must be in PEM format. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.certificate"></a>

```csharp
public string Certificate { get; set; }
```

- *Type:* string

Certificate as base64 encoded string. Must be in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/loadbalancer_manual_certificate_bundle#certificate LoadbalancerManualCertificateBundle#certificate}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the certificate bundle. Must be unique within customer account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/loadbalancer_manual_certificate_bundle#name LoadbalancerManualCertificateBundle#name}

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.privateKey"></a>

```csharp
public string PrivateKey { get; set; }
```

- *Type:* string

Private key as base64 encoded string. Must be in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/loadbalancer_manual_certificate_bundle#private_key LoadbalancerManualCertificateBundle#private_key}

---

##### `Intermediates`<sup>Optional</sup> <a name="Intermediates" id="@cdktf/provider-upcloud.loadbalancerManualCertificateBundle.LoadbalancerManualCertificateBundleConfig.property.intermediates"></a>

```csharp
public string Intermediates { get; set; }
```

- *Type:* string

Intermediate certificates as base64 encoded string. Must be in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.20.4/docs/resources/loadbalancer_manual_certificate_bundle#intermediates LoadbalancerManualCertificateBundle#intermediates}

---



