# `upcloud_loadbalancer_backend`

Refer to the Terraform Registory for docs: [`upcloud_loadbalancer_backend`](https://registry.terraform.io/providers/upcloudltd/upcloud/3.0.3/docs/resources/loadbalancer_backend).

# `loadbalancerBackend` Submodule <a name="`loadbalancerBackend` Submodule" id="@cdktf/provider-upcloud.loadbalancerBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadbalancerBackend <a name="LoadbalancerBackend" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.0.3/docs/resources/loadbalancer_backend upcloud_loadbalancer_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerBackend(Construct Scope, string Id, LoadbalancerBackendConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig">LoadbalancerBackendConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig">LoadbalancerBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetResolverName">ResetResolverName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutProperties` <a name="PutProperties" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.putProperties"></a>

```csharp
private void PutProperties(LoadbalancerBackendProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties">LoadbalancerBackendProperties</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetProperties"></a>

```csharp
private void ResetProperties()
```

##### `ResetResolverName` <a name="ResetResolverName" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetResolverName"></a>

```csharp
private void ResetResolverName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LoadbalancerBackend resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

LoadbalancerBackend.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

LoadbalancerBackend.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

LoadbalancerBackend.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

LoadbalancerBackend.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LoadbalancerBackend resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoadbalancerBackend to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoadbalancerBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.0.3/docs/resources/loadbalancer_backend#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LoadbalancerBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference">LoadbalancerBackendPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.loadbalancerInput">LoadbalancerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties">LoadbalancerBackendProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.resolverNameInput">ResolverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.loadbalancer">Loadbalancer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.resolverName">ResolverName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.properties"></a>

```csharp
public LoadbalancerBackendPropertiesOutputReference Properties { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference">LoadbalancerBackendPropertiesOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LoadbalancerInput`<sup>Optional</sup> <a name="LoadbalancerInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.loadbalancerInput"></a>

```csharp
public string LoadbalancerInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.propertiesInput"></a>

```csharp
public LoadbalancerBackendProperties PropertiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties">LoadbalancerBackendProperties</a>

---

##### `ResolverNameInput`<sup>Optional</sup> <a name="ResolverNameInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.resolverNameInput"></a>

```csharp
public string ResolverNameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Loadbalancer`<sup>Required</sup> <a name="Loadbalancer" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.loadbalancer"></a>

```csharp
public string Loadbalancer { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResolverName`<sup>Required</sup> <a name="ResolverName" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.resolverName"></a>

```csharp
public string ResolverName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadbalancerBackendConfig <a name="LoadbalancerBackendConfig" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerBackendConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Loadbalancer,
    string Name,
    string Id = null,
    LoadbalancerBackendProperties Properties = null,
    string ResolverName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.loadbalancer">Loadbalancer</a></code> | <code>string</code> | ID of the load balancer to which the backend is connected. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.name">Name</a></code> | <code>string</code> | The name of the backend must be unique within the load balancer service. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.0.3/docs/resources/loadbalancer_backend#id LoadbalancerBackend#id}. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties">LoadbalancerBackendProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.resolverName">ResolverName</a></code> | <code>string</code> | Domain Name Resolver used with dynamic type members. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Loadbalancer`<sup>Required</sup> <a name="Loadbalancer" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.loadbalancer"></a>

```csharp
public string Loadbalancer { get; set; }
```

- *Type:* string

ID of the load balancer to which the backend is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.0.3/docs/resources/loadbalancer_backend#loadbalancer LoadbalancerBackend#loadbalancer}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the backend must be unique within the load balancer service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.0.3/docs/resources/loadbalancer_backend#name LoadbalancerBackend#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.0.3/docs/resources/loadbalancer_backend#id LoadbalancerBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.properties"></a>

```csharp
public LoadbalancerBackendProperties Properties { get; set; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties">LoadbalancerBackendProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.0.3/docs/resources/loadbalancer_backend#properties LoadbalancerBackend#properties}

---

##### `ResolverName`<sup>Optional</sup> <a name="ResolverName" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.resolverName"></a>

```csharp
public string ResolverName { get; set; }
```

- *Type:* string

Domain Name Resolver used with dynamic type members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.0.3/docs/resources/loadbalancer_backend#resolver_name LoadbalancerBackend#resolver_name}

---

### LoadbalancerBackendProperties <a name="LoadbalancerBackendProperties" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerBackendProperties {
    double HealthCheckExpectedStatus = null,
    double HealthCheckFall = null,
    double HealthCheckInterval = null,
    double HealthCheckRise = null,
    object HealthCheckTlsVerify = null,
    string HealthCheckType = null,
    string HealthCheckUrl = null,
    string OutboundProxyProtocol = null,
    string StickySessionCookieName = null,
    double TimeoutServer = null,
    double TimeoutTunnel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckExpectedStatus">HealthCheckExpectedStatus</a></code> | <code>double</code> | Expected HTTP status code returned by the customer application to mark server as healthy. Ignored for tcp type. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckFall">HealthCheckFall</a></code> | <code>double</code> | Sets how many failed health checks are allowed until the backend member is taken off from the rotation. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckInterval">HealthCheckInterval</a></code> | <code>double</code> | Interval between health checks. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckRise">HealthCheckRise</a></code> | <code>double</code> | Sets how many passing checks there must be before returning the backend member to the rotation. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckTlsVerify">HealthCheckTlsVerify</a></code> | <code>object</code> | Enables certificate verification with the system CA certificate bundle. Works with https scheme in health_check_url, otherwise ignored. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckType">HealthCheckType</a></code> | <code>string</code> | Health check type. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckUrl">HealthCheckUrl</a></code> | <code>string</code> | Target path for health check HTTP GET requests. Ignored for tcp type. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.outboundProxyProtocol">OutboundProxyProtocol</a></code> | <code>string</code> | Enable outbound proxy protocol by setting the desired version. Empty string disables proxy protocol. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.stickySessionCookieName">StickySessionCookieName</a></code> | <code>string</code> | Sets sticky session cookie name. Empty string disables sticky session. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.timeoutServer">TimeoutServer</a></code> | <code>double</code> | Backend server timeout in seconds. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.timeoutTunnel">TimeoutTunnel</a></code> | <code>double</code> | Maximum inactivity time on the client and server side for tunnels in seconds. |

---

##### `HealthCheckExpectedStatus`<sup>Optional</sup> <a name="HealthCheckExpectedStatus" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckExpectedStatus"></a>

```csharp
public double HealthCheckExpectedStatus { get; set; }
```

- *Type:* double

Expected HTTP status code returned by the customer application to mark server as healthy. Ignored for tcp type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.0.3/docs/resources/loadbalancer_backend#health_check_expected_status LoadbalancerBackend#health_check_expected_status}

---

##### `HealthCheckFall`<sup>Optional</sup> <a name="HealthCheckFall" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckFall"></a>

```csharp
public double HealthCheckFall { get; set; }
```

- *Type:* double

Sets how many failed health checks are allowed until the backend member is taken off from the rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.0.3/docs/resources/loadbalancer_backend#health_check_fall LoadbalancerBackend#health_check_fall}

---

##### `HealthCheckInterval`<sup>Optional</sup> <a name="HealthCheckInterval" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckInterval"></a>

```csharp
public double HealthCheckInterval { get; set; }
```

- *Type:* double

Interval between health checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.0.3/docs/resources/loadbalancer_backend#health_check_interval LoadbalancerBackend#health_check_interval}

---

##### `HealthCheckRise`<sup>Optional</sup> <a name="HealthCheckRise" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckRise"></a>

```csharp
public double HealthCheckRise { get; set; }
```

- *Type:* double

Sets how many passing checks there must be before returning the backend member to the rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.0.3/docs/resources/loadbalancer_backend#health_check_rise LoadbalancerBackend#health_check_rise}

---

##### `HealthCheckTlsVerify`<sup>Optional</sup> <a name="HealthCheckTlsVerify" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckTlsVerify"></a>

```csharp
public object HealthCheckTlsVerify { get; set; }
```

- *Type:* object

Enables certificate verification with the system CA certificate bundle. Works with https scheme in health_check_url, otherwise ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.0.3/docs/resources/loadbalancer_backend#health_check_tls_verify LoadbalancerBackend#health_check_tls_verify}

---

##### `HealthCheckType`<sup>Optional</sup> <a name="HealthCheckType" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckType"></a>

```csharp
public string HealthCheckType { get; set; }
```

- *Type:* string

Health check type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.0.3/docs/resources/loadbalancer_backend#health_check_type LoadbalancerBackend#health_check_type}

---

##### `HealthCheckUrl`<sup>Optional</sup> <a name="HealthCheckUrl" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckUrl"></a>

```csharp
public string HealthCheckUrl { get; set; }
```

- *Type:* string

Target path for health check HTTP GET requests. Ignored for tcp type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.0.3/docs/resources/loadbalancer_backend#health_check_url LoadbalancerBackend#health_check_url}

---

##### `OutboundProxyProtocol`<sup>Optional</sup> <a name="OutboundProxyProtocol" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.outboundProxyProtocol"></a>

```csharp
public string OutboundProxyProtocol { get; set; }
```

- *Type:* string

Enable outbound proxy protocol by setting the desired version. Empty string disables proxy protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.0.3/docs/resources/loadbalancer_backend#outbound_proxy_protocol LoadbalancerBackend#outbound_proxy_protocol}

---

##### `StickySessionCookieName`<sup>Optional</sup> <a name="StickySessionCookieName" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.stickySessionCookieName"></a>

```csharp
public string StickySessionCookieName { get; set; }
```

- *Type:* string

Sets sticky session cookie name. Empty string disables sticky session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.0.3/docs/resources/loadbalancer_backend#sticky_session_cookie_name LoadbalancerBackend#sticky_session_cookie_name}

---

##### `TimeoutServer`<sup>Optional</sup> <a name="TimeoutServer" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.timeoutServer"></a>

```csharp
public double TimeoutServer { get; set; }
```

- *Type:* double

Backend server timeout in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.0.3/docs/resources/loadbalancer_backend#timeout_server LoadbalancerBackend#timeout_server}

---

##### `TimeoutTunnel`<sup>Optional</sup> <a name="TimeoutTunnel" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.timeoutTunnel"></a>

```csharp
public double TimeoutTunnel { get; set; }
```

- *Type:* double

Maximum inactivity time on the client and server side for tunnels in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.0.3/docs/resources/loadbalancer_backend#timeout_tunnel LoadbalancerBackend#timeout_tunnel}

---

## Classes <a name="Classes" id="Classes"></a>

### LoadbalancerBackendPropertiesOutputReference <a name="LoadbalancerBackendPropertiesOutputReference" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Upcloud;

new LoadbalancerBackendPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckExpectedStatus">ResetHealthCheckExpectedStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckFall">ResetHealthCheckFall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckInterval">ResetHealthCheckInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckRise">ResetHealthCheckRise</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckTlsVerify">ResetHealthCheckTlsVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckType">ResetHealthCheckType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckUrl">ResetHealthCheckUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetOutboundProxyProtocol">ResetOutboundProxyProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetStickySessionCookieName">ResetStickySessionCookieName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTimeoutServer">ResetTimeoutServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTimeoutTunnel">ResetTimeoutTunnel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHealthCheckExpectedStatus` <a name="ResetHealthCheckExpectedStatus" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckExpectedStatus"></a>

```csharp
private void ResetHealthCheckExpectedStatus()
```

##### `ResetHealthCheckFall` <a name="ResetHealthCheckFall" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckFall"></a>

```csharp
private void ResetHealthCheckFall()
```

##### `ResetHealthCheckInterval` <a name="ResetHealthCheckInterval" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckInterval"></a>

```csharp
private void ResetHealthCheckInterval()
```

##### `ResetHealthCheckRise` <a name="ResetHealthCheckRise" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckRise"></a>

```csharp
private void ResetHealthCheckRise()
```

##### `ResetHealthCheckTlsVerify` <a name="ResetHealthCheckTlsVerify" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckTlsVerify"></a>

```csharp
private void ResetHealthCheckTlsVerify()
```

##### `ResetHealthCheckType` <a name="ResetHealthCheckType" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckType"></a>

```csharp
private void ResetHealthCheckType()
```

##### `ResetHealthCheckUrl` <a name="ResetHealthCheckUrl" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckUrl"></a>

```csharp
private void ResetHealthCheckUrl()
```

##### `ResetOutboundProxyProtocol` <a name="ResetOutboundProxyProtocol" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetOutboundProxyProtocol"></a>

```csharp
private void ResetOutboundProxyProtocol()
```

##### `ResetStickySessionCookieName` <a name="ResetStickySessionCookieName" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetStickySessionCookieName"></a>

```csharp
private void ResetStickySessionCookieName()
```

##### `ResetTimeoutServer` <a name="ResetTimeoutServer" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTimeoutServer"></a>

```csharp
private void ResetTimeoutServer()
```

##### `ResetTimeoutTunnel` <a name="ResetTimeoutTunnel" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTimeoutTunnel"></a>

```csharp
private void ResetTimeoutTunnel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckExpectedStatusInput">HealthCheckExpectedStatusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckFallInput">HealthCheckFallInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckIntervalInput">HealthCheckIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckRiseInput">HealthCheckRiseInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckTlsVerifyInput">HealthCheckTlsVerifyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckTypeInput">HealthCheckTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckUrlInput">HealthCheckUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.outboundProxyProtocolInput">OutboundProxyProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.stickySessionCookieNameInput">StickySessionCookieNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutServerInput">TimeoutServerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutTunnelInput">TimeoutTunnelInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckExpectedStatus">HealthCheckExpectedStatus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckFall">HealthCheckFall</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckInterval">HealthCheckInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckRise">HealthCheckRise</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckTlsVerify">HealthCheckTlsVerify</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckType">HealthCheckType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckUrl">HealthCheckUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.outboundProxyProtocol">OutboundProxyProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.stickySessionCookieName">StickySessionCookieName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutServer">TimeoutServer</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutTunnel">TimeoutTunnel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties">LoadbalancerBackendProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HealthCheckExpectedStatusInput`<sup>Optional</sup> <a name="HealthCheckExpectedStatusInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckExpectedStatusInput"></a>

```csharp
public double HealthCheckExpectedStatusInput { get; }
```

- *Type:* double

---

##### `HealthCheckFallInput`<sup>Optional</sup> <a name="HealthCheckFallInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckFallInput"></a>

```csharp
public double HealthCheckFallInput { get; }
```

- *Type:* double

---

##### `HealthCheckIntervalInput`<sup>Optional</sup> <a name="HealthCheckIntervalInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckIntervalInput"></a>

```csharp
public double HealthCheckIntervalInput { get; }
```

- *Type:* double

---

##### `HealthCheckRiseInput`<sup>Optional</sup> <a name="HealthCheckRiseInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckRiseInput"></a>

```csharp
public double HealthCheckRiseInput { get; }
```

- *Type:* double

---

##### `HealthCheckTlsVerifyInput`<sup>Optional</sup> <a name="HealthCheckTlsVerifyInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckTlsVerifyInput"></a>

```csharp
public object HealthCheckTlsVerifyInput { get; }
```

- *Type:* object

---

##### `HealthCheckTypeInput`<sup>Optional</sup> <a name="HealthCheckTypeInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckTypeInput"></a>

```csharp
public string HealthCheckTypeInput { get; }
```

- *Type:* string

---

##### `HealthCheckUrlInput`<sup>Optional</sup> <a name="HealthCheckUrlInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckUrlInput"></a>

```csharp
public string HealthCheckUrlInput { get; }
```

- *Type:* string

---

##### `OutboundProxyProtocolInput`<sup>Optional</sup> <a name="OutboundProxyProtocolInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.outboundProxyProtocolInput"></a>

```csharp
public string OutboundProxyProtocolInput { get; }
```

- *Type:* string

---

##### `StickySessionCookieNameInput`<sup>Optional</sup> <a name="StickySessionCookieNameInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.stickySessionCookieNameInput"></a>

```csharp
public string StickySessionCookieNameInput { get; }
```

- *Type:* string

---

##### `TimeoutServerInput`<sup>Optional</sup> <a name="TimeoutServerInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutServerInput"></a>

```csharp
public double TimeoutServerInput { get; }
```

- *Type:* double

---

##### `TimeoutTunnelInput`<sup>Optional</sup> <a name="TimeoutTunnelInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutTunnelInput"></a>

```csharp
public double TimeoutTunnelInput { get; }
```

- *Type:* double

---

##### `HealthCheckExpectedStatus`<sup>Required</sup> <a name="HealthCheckExpectedStatus" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckExpectedStatus"></a>

```csharp
public double HealthCheckExpectedStatus { get; }
```

- *Type:* double

---

##### `HealthCheckFall`<sup>Required</sup> <a name="HealthCheckFall" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckFall"></a>

```csharp
public double HealthCheckFall { get; }
```

- *Type:* double

---

##### `HealthCheckInterval`<sup>Required</sup> <a name="HealthCheckInterval" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckInterval"></a>

```csharp
public double HealthCheckInterval { get; }
```

- *Type:* double

---

##### `HealthCheckRise`<sup>Required</sup> <a name="HealthCheckRise" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckRise"></a>

```csharp
public double HealthCheckRise { get; }
```

- *Type:* double

---

##### `HealthCheckTlsVerify`<sup>Required</sup> <a name="HealthCheckTlsVerify" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckTlsVerify"></a>

```csharp
public object HealthCheckTlsVerify { get; }
```

- *Type:* object

---

##### `HealthCheckType`<sup>Required</sup> <a name="HealthCheckType" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckType"></a>

```csharp
public string HealthCheckType { get; }
```

- *Type:* string

---

##### `HealthCheckUrl`<sup>Required</sup> <a name="HealthCheckUrl" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckUrl"></a>

```csharp
public string HealthCheckUrl { get; }
```

- *Type:* string

---

##### `OutboundProxyProtocol`<sup>Required</sup> <a name="OutboundProxyProtocol" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.outboundProxyProtocol"></a>

```csharp
public string OutboundProxyProtocol { get; }
```

- *Type:* string

---

##### `StickySessionCookieName`<sup>Required</sup> <a name="StickySessionCookieName" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.stickySessionCookieName"></a>

```csharp
public string StickySessionCookieName { get; }
```

- *Type:* string

---

##### `TimeoutServer`<sup>Required</sup> <a name="TimeoutServer" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutServer"></a>

```csharp
public double TimeoutServer { get; }
```

- *Type:* double

---

##### `TimeoutTunnel`<sup>Required</sup> <a name="TimeoutTunnel" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutTunnel"></a>

```csharp
public double TimeoutTunnel { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.internalValue"></a>

```csharp
public LoadbalancerBackendProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties">LoadbalancerBackendProperties</a>

---



