# `managedObjectStorage` Submodule <a name="`managedObjectStorage` Submodule" id="@cdktf/provider-upcloud.managedObjectStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedObjectStorage <a name="ManagedObjectStorage" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/managed_object_storage upcloud_managed_object_storage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer"></a>

```typescript
import { managedObjectStorage } from '@cdktf/provider-upcloud'

new managedObjectStorage.ManagedObjectStorage(scope: Construct, id: string, config: ManagedObjectStorageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig">ManagedObjectStorageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig">ManagedObjectStorageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.resetNetwork">resetNetwork</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNetwork` <a name="putNetwork" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.putNetwork"></a>

```typescript
public putNetwork(value: IResolvable | ManagedObjectStorageNetwork[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.putNetwork.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork">ManagedObjectStorageNetwork</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedObjectStorage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.isConstruct"></a>

```typescript
import { managedObjectStorage } from '@cdktf/provider-upcloud'

managedObjectStorage.ManagedObjectStorage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.isTerraformElement"></a>

```typescript
import { managedObjectStorage } from '@cdktf/provider-upcloud'

managedObjectStorage.ManagedObjectStorage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.isTerraformResource"></a>

```typescript
import { managedObjectStorage } from '@cdktf/provider-upcloud'

managedObjectStorage.ManagedObjectStorage.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.generateConfigForImport"></a>

```typescript
import { managedObjectStorage } from '@cdktf/provider-upcloud'

managedObjectStorage.ManagedObjectStorage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ManagedObjectStorage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagedObjectStorage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagedObjectStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/managed_object_storage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ManagedObjectStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList">ManagedObjectStorageEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.network">network</a></code> | <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList">ManagedObjectStorageNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.operationalState">operationalState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.configuredStatusInput">configuredStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.networkInput">networkInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork">ManagedObjectStorageNetwork</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.configuredStatus">configuredStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.endpoint"></a>

```typescript
public readonly endpoint: ManagedObjectStorageEndpointList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList">ManagedObjectStorageEndpointList</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.network"></a>

```typescript
public readonly network: ManagedObjectStorageNetworkList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList">ManagedObjectStorageNetworkList</a>

---

##### `operationalState`<sup>Required</sup> <a name="operationalState" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.operationalState"></a>

```typescript
public readonly operationalState: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `configuredStatusInput`<sup>Optional</sup> <a name="configuredStatusInput" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.configuredStatusInput"></a>

```typescript
public readonly configuredStatusInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.networkInput"></a>

```typescript
public readonly networkInput: IResolvable | ManagedObjectStorageNetwork[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork">ManagedObjectStorageNetwork</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `configuredStatus`<sup>Required</sup> <a name="configuredStatus" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.configuredStatus"></a>

```typescript
public readonly configuredStatus: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedObjectStorageConfig <a name="ManagedObjectStorageConfig" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.Initializer"></a>

```typescript
import { managedObjectStorage } from '@cdktf/provider-upcloud'

const managedObjectStorageConfig: managedObjectStorage.ManagedObjectStorageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.configuredStatus">configuredStatus</a></code> | <code>string</code> | Service status managed by the end user. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.name">name</a></code> | <code>string</code> | Name of the Managed Object Storage service. Must be unique within account. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.region">region</a></code> | <code>string</code> | Region in which the service will be hosted, see `upcloud_managed_object_storage_regions` data source. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/managed_object_storage#id ManagedObjectStorage#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User defined key-value pairs to classify the managed object storage. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.network">network</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork">ManagedObjectStorageNetwork</a>[]</code> | network block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configuredStatus`<sup>Required</sup> <a name="configuredStatus" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.configuredStatus"></a>

```typescript
public readonly configuredStatus: string;
```

- *Type:* string

Service status managed by the end user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/managed_object_storage#configured_status ManagedObjectStorage#configured_status}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the Managed Object Storage service. Must be unique within account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/managed_object_storage#name ManagedObjectStorage#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region in which the service will be hosted, see `upcloud_managed_object_storage_regions` data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/managed_object_storage#region ManagedObjectStorage#region}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/managed_object_storage#id ManagedObjectStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User defined key-value pairs to classify the managed object storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/managed_object_storage#labels ManagedObjectStorage#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageConfig.property.network"></a>

```typescript
public readonly network: IResolvable | ManagedObjectStorageNetwork[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork">ManagedObjectStorageNetwork</a>[]

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/managed_object_storage#network ManagedObjectStorage#network}

---

### ManagedObjectStorageEndpoint <a name="ManagedObjectStorageEndpoint" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpoint.Initializer"></a>

```typescript
import { managedObjectStorage } from '@cdktf/provider-upcloud'

const managedObjectStorageEndpoint: managedObjectStorage.ManagedObjectStorageEndpoint = { ... }
```


### ManagedObjectStorageNetwork <a name="ManagedObjectStorageNetwork" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork.Initializer"></a>

```typescript
import { managedObjectStorage } from '@cdktf/provider-upcloud'

const managedObjectStorageNetwork: managedObjectStorage.ManagedObjectStorageNetwork = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork.property.family">family</a></code> | <code>string</code> | Network family. IPv6 currently not supported. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork.property.name">name</a></code> | <code>string</code> | Network name. Must be unique within the service. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork.property.type">type</a></code> | <code>string</code> | Network type. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork.property.uuid">uuid</a></code> | <code>string</code> | Private network uuid. For public networks the field should be omitted. |

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string

Network family. IPv6 currently not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/managed_object_storage#family ManagedObjectStorage#family}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Network name. Must be unique within the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/managed_object_storage#name ManagedObjectStorage#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Network type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/managed_object_storage#type ManagedObjectStorage#type}

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

Private network uuid. For public networks the field should be omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.23.1/docs/resources/managed_object_storage#uuid ManagedObjectStorage#uuid}

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedObjectStorageEndpointList <a name="ManagedObjectStorageEndpointList" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.Initializer"></a>

```typescript
import { managedObjectStorage } from '@cdktf/provider-upcloud'

new managedObjectStorage.ManagedObjectStorageEndpointList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.get"></a>

```typescript
public get(index: number): ManagedObjectStorageEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ManagedObjectStorageEndpointOutputReference <a name="ManagedObjectStorageEndpointOutputReference" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.Initializer"></a>

```typescript
import { managedObjectStorage } from '@cdktf/provider-upcloud'

new managedObjectStorage.ManagedObjectStorageEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.iamUrl">iamUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.stsUrl">stsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpoint">ManagedObjectStorageEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `iamUrl`<sup>Required</sup> <a name="iamUrl" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.iamUrl"></a>

```typescript
public readonly iamUrl: string;
```

- *Type:* string

---

##### `stsUrl`<sup>Required</sup> <a name="stsUrl" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.stsUrl"></a>

```typescript
public readonly stsUrl: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedObjectStorageEndpoint;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageEndpoint">ManagedObjectStorageEndpoint</a>

---


### ManagedObjectStorageNetworkList <a name="ManagedObjectStorageNetworkList" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.Initializer"></a>

```typescript
import { managedObjectStorage } from '@cdktf/provider-upcloud'

new managedObjectStorage.ManagedObjectStorageNetworkList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.get"></a>

```typescript
public get(index: number): ManagedObjectStorageNetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork">ManagedObjectStorageNetwork</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedObjectStorageNetwork[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork">ManagedObjectStorageNetwork</a>[]

---


### ManagedObjectStorageNetworkOutputReference <a name="ManagedObjectStorageNetworkOutputReference" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.Initializer"></a>

```typescript
import { managedObjectStorage } from '@cdktf/provider-upcloud'

new managedObjectStorage.ManagedObjectStorageNetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.resetUuid">resetUuid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUuid` <a name="resetUuid" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.resetUuid"></a>

```typescript
public resetUuid(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.familyInput">familyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.uuidInput">uuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.family">family</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork">ManagedObjectStorageNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `familyInput`<sup>Optional</sup> <a name="familyInput" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.familyInput"></a>

```typescript
public readonly familyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `uuidInput`<sup>Optional</sup> <a name="uuidInput" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.uuidInput"></a>

```typescript
public readonly uuidInput: string;
```

- *Type:* string

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedObjectStorageNetwork;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.managedObjectStorage.ManagedObjectStorageNetwork">ManagedObjectStorageNetwork</a>

---



