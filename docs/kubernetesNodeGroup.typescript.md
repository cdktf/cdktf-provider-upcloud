# `upcloud_kubernetes_node_group`

Refer to the Terraform Registory for docs: [`upcloud_kubernetes_node_group`](https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/kubernetes_node_group).

# `kubernetesNodeGroup` Submodule <a name="`kubernetesNodeGroup` Submodule" id="@cdktf/provider-upcloud.kubernetesNodeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesNodeGroup <a name="KubernetesNodeGroup" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/kubernetes_node_group upcloud_kubernetes_node_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer"></a>

```typescript
import { kubernetesNodeGroup } from '@cdktf/provider-upcloud'

new kubernetesNodeGroup.KubernetesNodeGroup(scope: Construct, id: string, config: KubernetesNodeGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig">KubernetesNodeGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig">KubernetesNodeGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putKubeletArgs">putKubeletArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putTaint">putTaint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetAntiAffinity">resetAntiAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetKubeletArgs">resetKubeletArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetSshKeys">resetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetTaint">resetTaint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetUtilityNetworkAccess">resetUtilityNetworkAccess</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putKubeletArgs` <a name="putKubeletArgs" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putKubeletArgs"></a>

```typescript
public putKubeletArgs(value: IResolvable | KubernetesNodeGroupKubeletArgs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putKubeletArgs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs">KubernetesNodeGroupKubeletArgs</a>[]

---

##### `putTaint` <a name="putTaint" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putTaint"></a>

```typescript
public putTaint(value: IResolvable | KubernetesNodeGroupTaint[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.putTaint.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint">KubernetesNodeGroupTaint</a>[]

---

##### `resetAntiAffinity` <a name="resetAntiAffinity" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetAntiAffinity"></a>

```typescript
public resetAntiAffinity(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKubeletArgs` <a name="resetKubeletArgs" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetKubeletArgs"></a>

```typescript
public resetKubeletArgs(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetSshKeys` <a name="resetSshKeys" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetSshKeys"></a>

```typescript
public resetSshKeys(): void
```

##### `resetTaint` <a name="resetTaint" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetTaint"></a>

```typescript
public resetTaint(): void
```

##### `resetUtilityNetworkAccess` <a name="resetUtilityNetworkAccess" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.resetUtilityNetworkAccess"></a>

```typescript
public resetUtilityNetworkAccess(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KubernetesNodeGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isConstruct"></a>

```typescript
import { kubernetesNodeGroup } from '@cdktf/provider-upcloud'

kubernetesNodeGroup.KubernetesNodeGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isTerraformElement"></a>

```typescript
import { kubernetesNodeGroup } from '@cdktf/provider-upcloud'

kubernetesNodeGroup.KubernetesNodeGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isTerraformResource"></a>

```typescript
import { kubernetesNodeGroup } from '@cdktf/provider-upcloud'

kubernetesNodeGroup.KubernetesNodeGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.generateConfigForImport"></a>

```typescript
import { kubernetesNodeGroup } from '@cdktf/provider-upcloud'

kubernetesNodeGroup.KubernetesNodeGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a KubernetesNodeGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KubernetesNodeGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KubernetesNodeGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/kubernetes_node_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesNodeGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.kubeletArgs">kubeletArgs</a></code> | <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList">KubernetesNodeGroupKubeletArgsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.taint">taint</a></code> | <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList">KubernetesNodeGroupTaintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.antiAffinityInput">antiAffinityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.kubeletArgsInput">kubeletArgsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs">KubernetesNodeGroupKubeletArgs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.nodeCountInput">nodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.planInput">planInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.sshKeysInput">sshKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.taintInput">taintInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint">KubernetesNodeGroupTaint</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.utilityNetworkAccessInput">utilityNetworkAccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.antiAffinity">antiAffinity</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.plan">plan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.sshKeys">sshKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.utilityNetworkAccess">utilityNetworkAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `kubeletArgs`<sup>Required</sup> <a name="kubeletArgs" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.kubeletArgs"></a>

```typescript
public readonly kubeletArgs: KubernetesNodeGroupKubeletArgsList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList">KubernetesNodeGroupKubeletArgsList</a>

---

##### `taint`<sup>Required</sup> <a name="taint" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.taint"></a>

```typescript
public readonly taint: KubernetesNodeGroupTaintList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList">KubernetesNodeGroupTaintList</a>

---

##### `antiAffinityInput`<sup>Optional</sup> <a name="antiAffinityInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.antiAffinityInput"></a>

```typescript
public readonly antiAffinityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kubeletArgsInput`<sup>Optional</sup> <a name="kubeletArgsInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.kubeletArgsInput"></a>

```typescript
public readonly kubeletArgsInput: IResolvable | KubernetesNodeGroupKubeletArgs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs">KubernetesNodeGroupKubeletArgs</a>[]

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.nodeCountInput"></a>

```typescript
public readonly nodeCountInput: number;
```

- *Type:* number

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.planInput"></a>

```typescript
public readonly planInput: string;
```

- *Type:* string

---

##### `sshKeysInput`<sup>Optional</sup> <a name="sshKeysInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.sshKeysInput"></a>

```typescript
public readonly sshKeysInput: string[];
```

- *Type:* string[]

---

##### `taintInput`<sup>Optional</sup> <a name="taintInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.taintInput"></a>

```typescript
public readonly taintInput: IResolvable | KubernetesNodeGroupTaint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint">KubernetesNodeGroupTaint</a>[]

---

##### `utilityNetworkAccessInput`<sup>Optional</sup> <a name="utilityNetworkAccessInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.utilityNetworkAccessInput"></a>

```typescript
public readonly utilityNetworkAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `antiAffinity`<sup>Required</sup> <a name="antiAffinity" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.antiAffinity"></a>

```typescript
public readonly antiAffinity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.plan"></a>

```typescript
public readonly plan: string;
```

- *Type:* string

---

##### `sshKeys`<sup>Required</sup> <a name="sshKeys" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.sshKeys"></a>

```typescript
public readonly sshKeys: string[];
```

- *Type:* string[]

---

##### `utilityNetworkAccess`<sup>Required</sup> <a name="utilityNetworkAccess" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.utilityNetworkAccess"></a>

```typescript
public readonly utilityNetworkAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesNodeGroupConfig <a name="KubernetesNodeGroupConfig" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.Initializer"></a>

```typescript
import { kubernetesNodeGroup } from '@cdktf/provider-upcloud'

const kubernetesNodeGroupConfig: kubernetesNodeGroup.KubernetesNodeGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.cluster">cluster</a></code> | <code>string</code> | Cluster ID. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.name">name</a></code> | <code>string</code> | The name of the node group. Needs to be unique within a cluster. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.nodeCount">nodeCount</a></code> | <code>number</code> | Amount of nodes to provision in the node group. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.plan">plan</a></code> | <code>string</code> | The server plan used for the node group. You can list available plans with `upctl server plans`. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.antiAffinity">antiAffinity</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, nodes in this group will be placed on separate compute hosts. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/kubernetes_node_group#id KubernetesNodeGroup#id}. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.kubeletArgs">kubeletArgs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs">KubernetesNodeGroupKubeletArgs</a>[]</code> | kubelet_args block. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Key-value pairs to classify the node group. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.sshKeys">sshKeys</a></code> | <code>string[]</code> | You can optionally select SSH keys to be added as authorized keys to the nodes in this node group. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.taint">taint</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint">KubernetesNodeGroupTaint</a>[]</code> | taint block. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.utilityNetworkAccess">utilityNetworkAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to false, nodes in this group will not have access to utility network. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

Cluster ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/kubernetes_node_group#cluster KubernetesNodeGroup#cluster}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the node group. Needs to be unique within a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/kubernetes_node_group#name KubernetesNodeGroup#name}

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

Amount of nodes to provision in the node group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/kubernetes_node_group#node_count KubernetesNodeGroup#node_count}

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.plan"></a>

```typescript
public readonly plan: string;
```

- *Type:* string

The server plan used for the node group. You can list available plans with `upctl server plans`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/kubernetes_node_group#plan KubernetesNodeGroup#plan}

---

##### `antiAffinity`<sup>Optional</sup> <a name="antiAffinity" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.antiAffinity"></a>

```typescript
public readonly antiAffinity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, nodes in this group will be placed on separate compute hosts.

Please note that anti-affinity policy is considered "best effort" and enabling it does not fully guarantee that the nodes will end up on different hardware.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/kubernetes_node_group#anti_affinity KubernetesNodeGroup#anti_affinity}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/kubernetes_node_group#id KubernetesNodeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kubeletArgs`<sup>Optional</sup> <a name="kubeletArgs" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.kubeletArgs"></a>

```typescript
public readonly kubeletArgs: IResolvable | KubernetesNodeGroupKubeletArgs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs">KubernetesNodeGroupKubeletArgs</a>[]

kubelet_args block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/kubernetes_node_group#kubelet_args KubernetesNodeGroup#kubelet_args}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Key-value pairs to classify the node group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/kubernetes_node_group#labels KubernetesNodeGroup#labels}

---

##### `sshKeys`<sup>Optional</sup> <a name="sshKeys" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.sshKeys"></a>

```typescript
public readonly sshKeys: string[];
```

- *Type:* string[]

You can optionally select SSH keys to be added as authorized keys to the nodes in this node group.

This allows you to connect to the nodes via SSH once they are running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/kubernetes_node_group#ssh_keys KubernetesNodeGroup#ssh_keys}

---

##### `taint`<sup>Optional</sup> <a name="taint" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.taint"></a>

```typescript
public readonly taint: IResolvable | KubernetesNodeGroupTaint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint">KubernetesNodeGroupTaint</a>[]

taint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/kubernetes_node_group#taint KubernetesNodeGroup#taint}

---

##### `utilityNetworkAccess`<sup>Optional</sup> <a name="utilityNetworkAccess" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupConfig.property.utilityNetworkAccess"></a>

```typescript
public readonly utilityNetworkAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to false, nodes in this group will not have access to utility network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/kubernetes_node_group#utility_network_access KubernetesNodeGroup#utility_network_access}

---

### KubernetesNodeGroupKubeletArgs <a name="KubernetesNodeGroupKubeletArgs" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs.Initializer"></a>

```typescript
import { kubernetesNodeGroup } from '@cdktf/provider-upcloud'

const kubernetesNodeGroupKubeletArgs: kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs.property.key">key</a></code> | <code>string</code> | Kubelet argument key. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs.property.value">value</a></code> | <code>string</code> | Kubelet argument value. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Kubelet argument key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/kubernetes_node_group#key KubernetesNodeGroup#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Kubelet argument value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/kubernetes_node_group#value KubernetesNodeGroup#value}

---

### KubernetesNodeGroupTaint <a name="KubernetesNodeGroupTaint" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint.Initializer"></a>

```typescript
import { kubernetesNodeGroup } from '@cdktf/provider-upcloud'

const kubernetesNodeGroupTaint: kubernetesNodeGroup.KubernetesNodeGroupTaint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint.property.effect">effect</a></code> | <code>string</code> | Taint effect. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint.property.key">key</a></code> | <code>string</code> | Taint key. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint.property.value">value</a></code> | <code>string</code> | Taint value. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

Taint effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/kubernetes_node_group#effect KubernetesNodeGroup#effect}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Taint key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/kubernetes_node_group#key KubernetesNodeGroup#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Taint value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.1.0/docs/resources/kubernetes_node_group#value KubernetesNodeGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### KubernetesNodeGroupKubeletArgsList <a name="KubernetesNodeGroupKubeletArgsList" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.Initializer"></a>

```typescript
import { kubernetesNodeGroup } from '@cdktf/provider-upcloud'

new kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.get"></a>

```typescript
public get(index: number): KubernetesNodeGroupKubeletArgsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs">KubernetesNodeGroupKubeletArgs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KubernetesNodeGroupKubeletArgs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs">KubernetesNodeGroupKubeletArgs</a>[]

---


### KubernetesNodeGroupKubeletArgsOutputReference <a name="KubernetesNodeGroupKubeletArgsOutputReference" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer"></a>

```typescript
import { kubernetesNodeGroup } from '@cdktf/provider-upcloud'

new kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs">KubernetesNodeGroupKubeletArgs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KubernetesNodeGroupKubeletArgs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupKubeletArgs">KubernetesNodeGroupKubeletArgs</a>

---


### KubernetesNodeGroupTaintList <a name="KubernetesNodeGroupTaintList" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.Initializer"></a>

```typescript
import { kubernetesNodeGroup } from '@cdktf/provider-upcloud'

new kubernetesNodeGroup.KubernetesNodeGroupTaintList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.get"></a>

```typescript
public get(index: number): KubernetesNodeGroupTaintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint">KubernetesNodeGroupTaint</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KubernetesNodeGroupTaint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint">KubernetesNodeGroupTaint</a>[]

---


### KubernetesNodeGroupTaintOutputReference <a name="KubernetesNodeGroupTaintOutputReference" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer"></a>

```typescript
import { kubernetesNodeGroup } from '@cdktf/provider-upcloud'

new kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.effectInput">effectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint">KubernetesNodeGroupTaint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.effectInput"></a>

```typescript
public readonly effectInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaintOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KubernetesNodeGroupTaint;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.kubernetesNodeGroup.KubernetesNodeGroupTaint">KubernetesNodeGroupTaint</a>

---



