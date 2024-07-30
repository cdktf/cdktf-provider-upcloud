# `loadbalancerBackend` Submodule <a name="`loadbalancerBackend` Submodule" id="@cdktf/provider-upcloud.loadbalancerBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadbalancerBackend <a name="LoadbalancerBackend" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/loadbalancer_backend upcloud_loadbalancer_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer"></a>

```typescript
import { loadbalancerBackend } from '@cdktf/provider-upcloud'

new loadbalancerBackend.LoadbalancerBackend(scope: Construct, id: string, config: LoadbalancerBackendConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig">LoadbalancerBackendConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig">LoadbalancerBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetResolverName">resetResolverName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProperties` <a name="putProperties" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.putProperties"></a>

```typescript
public putProperties(value: LoadbalancerBackendProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties">LoadbalancerBackendProperties</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetResolverName` <a name="resetResolverName" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.resetResolverName"></a>

```typescript
public resetResolverName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LoadbalancerBackend resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isConstruct"></a>

```typescript
import { loadbalancerBackend } from '@cdktf/provider-upcloud'

loadbalancerBackend.LoadbalancerBackend.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isTerraformElement"></a>

```typescript
import { loadbalancerBackend } from '@cdktf/provider-upcloud'

loadbalancerBackend.LoadbalancerBackend.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isTerraformResource"></a>

```typescript
import { loadbalancerBackend } from '@cdktf/provider-upcloud'

loadbalancerBackend.LoadbalancerBackend.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.generateConfigForImport"></a>

```typescript
import { loadbalancerBackend } from '@cdktf/provider-upcloud'

loadbalancerBackend.LoadbalancerBackend.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LoadbalancerBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoadbalancerBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoadbalancerBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/loadbalancer_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LoadbalancerBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference">LoadbalancerBackendPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.tlsConfigs">tlsConfigs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.loadbalancerInput">loadbalancerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.propertiesInput">propertiesInput</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties">LoadbalancerBackendProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.resolverNameInput">resolverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.loadbalancer">loadbalancer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.resolverName">resolverName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.properties"></a>

```typescript
public readonly properties: LoadbalancerBackendPropertiesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference">LoadbalancerBackendPropertiesOutputReference</a>

---

##### `tlsConfigs`<sup>Required</sup> <a name="tlsConfigs" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.tlsConfigs"></a>

```typescript
public readonly tlsConfigs: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loadbalancerInput`<sup>Optional</sup> <a name="loadbalancerInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.loadbalancerInput"></a>

```typescript
public readonly loadbalancerInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: LoadbalancerBackendProperties;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties">LoadbalancerBackendProperties</a>

---

##### `resolverNameInput`<sup>Optional</sup> <a name="resolverNameInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.resolverNameInput"></a>

```typescript
public readonly resolverNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loadbalancer`<sup>Required</sup> <a name="loadbalancer" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.loadbalancer"></a>

```typescript
public readonly loadbalancer: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resolverName`<sup>Required</sup> <a name="resolverName" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.resolverName"></a>

```typescript
public readonly resolverName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackend.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadbalancerBackendConfig <a name="LoadbalancerBackendConfig" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.Initializer"></a>

```typescript
import { loadbalancerBackend } from '@cdktf/provider-upcloud'

const loadbalancerBackendConfig: loadbalancerBackend.LoadbalancerBackendConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.loadbalancer">loadbalancer</a></code> | <code>string</code> | ID of the load balancer to which the backend is connected. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.name">name</a></code> | <code>string</code> | The name of the backend must be unique within the load balancer service. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/loadbalancer_backend#id LoadbalancerBackend#id}. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties">LoadbalancerBackendProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.resolverName">resolverName</a></code> | <code>string</code> | Domain Name Resolver used with dynamic type members. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `loadbalancer`<sup>Required</sup> <a name="loadbalancer" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.loadbalancer"></a>

```typescript
public readonly loadbalancer: string;
```

- *Type:* string

ID of the load balancer to which the backend is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/loadbalancer_backend#loadbalancer LoadbalancerBackend#loadbalancer}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the backend must be unique within the load balancer service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/loadbalancer_backend#name LoadbalancerBackend#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/loadbalancer_backend#id LoadbalancerBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.properties"></a>

```typescript
public readonly properties: LoadbalancerBackendProperties;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties">LoadbalancerBackendProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/loadbalancer_backend#properties LoadbalancerBackend#properties}

---

##### `resolverName`<sup>Optional</sup> <a name="resolverName" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendConfig.property.resolverName"></a>

```typescript
public readonly resolverName: string;
```

- *Type:* string

Domain Name Resolver used with dynamic type members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/loadbalancer_backend#resolver_name LoadbalancerBackend#resolver_name}

---

### LoadbalancerBackendProperties <a name="LoadbalancerBackendProperties" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.Initializer"></a>

```typescript
import { loadbalancerBackend } from '@cdktf/provider-upcloud'

const loadbalancerBackendProperties: loadbalancerBackend.LoadbalancerBackendProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckExpectedStatus">healthCheckExpectedStatus</a></code> | <code>number</code> | Expected HTTP status code returned by the customer application to mark server as healthy. Ignored for tcp type. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckFall">healthCheckFall</a></code> | <code>number</code> | Sets how many failed health checks are allowed until the backend member is taken off from the rotation. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckInterval">healthCheckInterval</a></code> | <code>number</code> | Interval between health checks. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckRise">healthCheckRise</a></code> | <code>number</code> | Sets how many passing checks there must be before returning the backend member to the rotation. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckTlsVerify">healthCheckTlsVerify</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables certificate verification with the system CA certificate bundle. Works with https scheme in health_check_url, otherwise ignored. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckType">healthCheckType</a></code> | <code>string</code> | Health check type. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckUrl">healthCheckUrl</a></code> | <code>string</code> | Target path for health check HTTP GET requests. Ignored for tcp type. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.http2Enabled">http2Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow HTTP/2 connections to backend members by utilizing ALPN extension of TLS protocol, therefore it can only be enabled when tls_enabled is set to true. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.outboundProxyProtocol">outboundProxyProtocol</a></code> | <code>string</code> | Enable outbound proxy protocol by setting the desired version. Empty string disables proxy protocol. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.stickySessionCookieName">stickySessionCookieName</a></code> | <code>string</code> | Sets sticky session cookie name. Empty string disables sticky session. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.timeoutServer">timeoutServer</a></code> | <code>number</code> | Backend server timeout in seconds. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.timeoutTunnel">timeoutTunnel</a></code> | <code>number</code> | Maximum inactivity time on the client and server side for tunnels in seconds. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.tlsEnabled">tlsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables TLS connection from the load balancer to backend servers. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.tlsUseSystemCa">tlsUseSystemCa</a></code> | <code>boolean \| cdktf.IResolvable</code> | If enabled, then the system CA certificate bundle will be used for the certificate verification. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.tlsVerify">tlsVerify</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables backend servers certificate verification. |

---

##### `healthCheckExpectedStatus`<sup>Optional</sup> <a name="healthCheckExpectedStatus" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckExpectedStatus"></a>

```typescript
public readonly healthCheckExpectedStatus: number;
```

- *Type:* number

Expected HTTP status code returned by the customer application to mark server as healthy. Ignored for tcp type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/loadbalancer_backend#health_check_expected_status LoadbalancerBackend#health_check_expected_status}

---

##### `healthCheckFall`<sup>Optional</sup> <a name="healthCheckFall" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckFall"></a>

```typescript
public readonly healthCheckFall: number;
```

- *Type:* number

Sets how many failed health checks are allowed until the backend member is taken off from the rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/loadbalancer_backend#health_check_fall LoadbalancerBackend#health_check_fall}

---

##### `healthCheckInterval`<sup>Optional</sup> <a name="healthCheckInterval" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckInterval"></a>

```typescript
public readonly healthCheckInterval: number;
```

- *Type:* number

Interval between health checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/loadbalancer_backend#health_check_interval LoadbalancerBackend#health_check_interval}

---

##### `healthCheckRise`<sup>Optional</sup> <a name="healthCheckRise" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckRise"></a>

```typescript
public readonly healthCheckRise: number;
```

- *Type:* number

Sets how many passing checks there must be before returning the backend member to the rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/loadbalancer_backend#health_check_rise LoadbalancerBackend#health_check_rise}

---

##### `healthCheckTlsVerify`<sup>Optional</sup> <a name="healthCheckTlsVerify" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckTlsVerify"></a>

```typescript
public readonly healthCheckTlsVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables certificate verification with the system CA certificate bundle. Works with https scheme in health_check_url, otherwise ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/loadbalancer_backend#health_check_tls_verify LoadbalancerBackend#health_check_tls_verify}

---

##### `healthCheckType`<sup>Optional</sup> <a name="healthCheckType" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckType"></a>

```typescript
public readonly healthCheckType: string;
```

- *Type:* string

Health check type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/loadbalancer_backend#health_check_type LoadbalancerBackend#health_check_type}

---

##### `healthCheckUrl`<sup>Optional</sup> <a name="healthCheckUrl" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.healthCheckUrl"></a>

```typescript
public readonly healthCheckUrl: string;
```

- *Type:* string

Target path for health check HTTP GET requests. Ignored for tcp type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/loadbalancer_backend#health_check_url LoadbalancerBackend#health_check_url}

---

##### `http2Enabled`<sup>Optional</sup> <a name="http2Enabled" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.http2Enabled"></a>

```typescript
public readonly http2Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow HTTP/2 connections to backend members by utilizing ALPN extension of TLS protocol, therefore it can only be enabled when tls_enabled is set to true.

Note: members should support HTTP/2 for this setting to work.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/loadbalancer_backend#http2_enabled LoadbalancerBackend#http2_enabled}

---

##### `outboundProxyProtocol`<sup>Optional</sup> <a name="outboundProxyProtocol" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.outboundProxyProtocol"></a>

```typescript
public readonly outboundProxyProtocol: string;
```

- *Type:* string

Enable outbound proxy protocol by setting the desired version. Empty string disables proxy protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/loadbalancer_backend#outbound_proxy_protocol LoadbalancerBackend#outbound_proxy_protocol}

---

##### `stickySessionCookieName`<sup>Optional</sup> <a name="stickySessionCookieName" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.stickySessionCookieName"></a>

```typescript
public readonly stickySessionCookieName: string;
```

- *Type:* string

Sets sticky session cookie name. Empty string disables sticky session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/loadbalancer_backend#sticky_session_cookie_name LoadbalancerBackend#sticky_session_cookie_name}

---

##### `timeoutServer`<sup>Optional</sup> <a name="timeoutServer" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.timeoutServer"></a>

```typescript
public readonly timeoutServer: number;
```

- *Type:* number

Backend server timeout in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/loadbalancer_backend#timeout_server LoadbalancerBackend#timeout_server}

---

##### `timeoutTunnel`<sup>Optional</sup> <a name="timeoutTunnel" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.timeoutTunnel"></a>

```typescript
public readonly timeoutTunnel: number;
```

- *Type:* number

Maximum inactivity time on the client and server side for tunnels in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/loadbalancer_backend#timeout_tunnel LoadbalancerBackend#timeout_tunnel}

---

##### `tlsEnabled`<sup>Optional</sup> <a name="tlsEnabled" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.tlsEnabled"></a>

```typescript
public readonly tlsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables TLS connection from the load balancer to backend servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/loadbalancer_backend#tls_enabled LoadbalancerBackend#tls_enabled}

---

##### `tlsUseSystemCa`<sup>Optional</sup> <a name="tlsUseSystemCa" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.tlsUseSystemCa"></a>

```typescript
public readonly tlsUseSystemCa: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If enabled, then the system CA certificate bundle will be used for the certificate verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/loadbalancer_backend#tls_use_system_ca LoadbalancerBackend#tls_use_system_ca}

---

##### `tlsVerify`<sup>Optional</sup> <a name="tlsVerify" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties.property.tlsVerify"></a>

```typescript
public readonly tlsVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables backend servers certificate verification.

Please make sure that TLS config with the certificate bundle of type authority attached to the backend or `tls_use_system_ca` enabled. Note: `tls_verify` has preference over `health_check_tls_verify` when `tls_enabled` in true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.0/docs/resources/loadbalancer_backend#tls_verify LoadbalancerBackend#tls_verify}

---

## Classes <a name="Classes" id="Classes"></a>

### LoadbalancerBackendPropertiesOutputReference <a name="LoadbalancerBackendPropertiesOutputReference" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.Initializer"></a>

```typescript
import { loadbalancerBackend } from '@cdktf/provider-upcloud'

new loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckExpectedStatus">resetHealthCheckExpectedStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckFall">resetHealthCheckFall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckInterval">resetHealthCheckInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckRise">resetHealthCheckRise</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckTlsVerify">resetHealthCheckTlsVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckType">resetHealthCheckType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckUrl">resetHealthCheckUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHttp2Enabled">resetHttp2Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetOutboundProxyProtocol">resetOutboundProxyProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetStickySessionCookieName">resetStickySessionCookieName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTimeoutServer">resetTimeoutServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTimeoutTunnel">resetTimeoutTunnel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTlsEnabled">resetTlsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTlsUseSystemCa">resetTlsUseSystemCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTlsVerify">resetTlsVerify</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHealthCheckExpectedStatus` <a name="resetHealthCheckExpectedStatus" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckExpectedStatus"></a>

```typescript
public resetHealthCheckExpectedStatus(): void
```

##### `resetHealthCheckFall` <a name="resetHealthCheckFall" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckFall"></a>

```typescript
public resetHealthCheckFall(): void
```

##### `resetHealthCheckInterval` <a name="resetHealthCheckInterval" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckInterval"></a>

```typescript
public resetHealthCheckInterval(): void
```

##### `resetHealthCheckRise` <a name="resetHealthCheckRise" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckRise"></a>

```typescript
public resetHealthCheckRise(): void
```

##### `resetHealthCheckTlsVerify` <a name="resetHealthCheckTlsVerify" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckTlsVerify"></a>

```typescript
public resetHealthCheckTlsVerify(): void
```

##### `resetHealthCheckType` <a name="resetHealthCheckType" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckType"></a>

```typescript
public resetHealthCheckType(): void
```

##### `resetHealthCheckUrl` <a name="resetHealthCheckUrl" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHealthCheckUrl"></a>

```typescript
public resetHealthCheckUrl(): void
```

##### `resetHttp2Enabled` <a name="resetHttp2Enabled" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetHttp2Enabled"></a>

```typescript
public resetHttp2Enabled(): void
```

##### `resetOutboundProxyProtocol` <a name="resetOutboundProxyProtocol" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetOutboundProxyProtocol"></a>

```typescript
public resetOutboundProxyProtocol(): void
```

##### `resetStickySessionCookieName` <a name="resetStickySessionCookieName" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetStickySessionCookieName"></a>

```typescript
public resetStickySessionCookieName(): void
```

##### `resetTimeoutServer` <a name="resetTimeoutServer" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTimeoutServer"></a>

```typescript
public resetTimeoutServer(): void
```

##### `resetTimeoutTunnel` <a name="resetTimeoutTunnel" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTimeoutTunnel"></a>

```typescript
public resetTimeoutTunnel(): void
```

##### `resetTlsEnabled` <a name="resetTlsEnabled" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTlsEnabled"></a>

```typescript
public resetTlsEnabled(): void
```

##### `resetTlsUseSystemCa` <a name="resetTlsUseSystemCa" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTlsUseSystemCa"></a>

```typescript
public resetTlsUseSystemCa(): void
```

##### `resetTlsVerify` <a name="resetTlsVerify" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.resetTlsVerify"></a>

```typescript
public resetTlsVerify(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsConfigs">tlsConfigs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckExpectedStatusInput">healthCheckExpectedStatusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckFallInput">healthCheckFallInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckIntervalInput">healthCheckIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckRiseInput">healthCheckRiseInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckTlsVerifyInput">healthCheckTlsVerifyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckTypeInput">healthCheckTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckUrlInput">healthCheckUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.http2EnabledInput">http2EnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.outboundProxyProtocolInput">outboundProxyProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.stickySessionCookieNameInput">stickySessionCookieNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutServerInput">timeoutServerInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutTunnelInput">timeoutTunnelInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsEnabledInput">tlsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsUseSystemCaInput">tlsUseSystemCaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsVerifyInput">tlsVerifyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckExpectedStatus">healthCheckExpectedStatus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckFall">healthCheckFall</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckInterval">healthCheckInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckRise">healthCheckRise</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckTlsVerify">healthCheckTlsVerify</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckType">healthCheckType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckUrl">healthCheckUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.http2Enabled">http2Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.outboundProxyProtocol">outboundProxyProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.stickySessionCookieName">stickySessionCookieName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutServer">timeoutServer</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutTunnel">timeoutTunnel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsEnabled">tlsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsUseSystemCa">tlsUseSystemCa</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsVerify">tlsVerify</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties">LoadbalancerBackendProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tlsConfigs`<sup>Required</sup> <a name="tlsConfigs" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsConfigs"></a>

```typescript
public readonly tlsConfigs: string[];
```

- *Type:* string[]

---

##### `healthCheckExpectedStatusInput`<sup>Optional</sup> <a name="healthCheckExpectedStatusInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckExpectedStatusInput"></a>

```typescript
public readonly healthCheckExpectedStatusInput: number;
```

- *Type:* number

---

##### `healthCheckFallInput`<sup>Optional</sup> <a name="healthCheckFallInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckFallInput"></a>

```typescript
public readonly healthCheckFallInput: number;
```

- *Type:* number

---

##### `healthCheckIntervalInput`<sup>Optional</sup> <a name="healthCheckIntervalInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckIntervalInput"></a>

```typescript
public readonly healthCheckIntervalInput: number;
```

- *Type:* number

---

##### `healthCheckRiseInput`<sup>Optional</sup> <a name="healthCheckRiseInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckRiseInput"></a>

```typescript
public readonly healthCheckRiseInput: number;
```

- *Type:* number

---

##### `healthCheckTlsVerifyInput`<sup>Optional</sup> <a name="healthCheckTlsVerifyInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckTlsVerifyInput"></a>

```typescript
public readonly healthCheckTlsVerifyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `healthCheckTypeInput`<sup>Optional</sup> <a name="healthCheckTypeInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckTypeInput"></a>

```typescript
public readonly healthCheckTypeInput: string;
```

- *Type:* string

---

##### `healthCheckUrlInput`<sup>Optional</sup> <a name="healthCheckUrlInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckUrlInput"></a>

```typescript
public readonly healthCheckUrlInput: string;
```

- *Type:* string

---

##### `http2EnabledInput`<sup>Optional</sup> <a name="http2EnabledInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.http2EnabledInput"></a>

```typescript
public readonly http2EnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `outboundProxyProtocolInput`<sup>Optional</sup> <a name="outboundProxyProtocolInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.outboundProxyProtocolInput"></a>

```typescript
public readonly outboundProxyProtocolInput: string;
```

- *Type:* string

---

##### `stickySessionCookieNameInput`<sup>Optional</sup> <a name="stickySessionCookieNameInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.stickySessionCookieNameInput"></a>

```typescript
public readonly stickySessionCookieNameInput: string;
```

- *Type:* string

---

##### `timeoutServerInput`<sup>Optional</sup> <a name="timeoutServerInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutServerInput"></a>

```typescript
public readonly timeoutServerInput: number;
```

- *Type:* number

---

##### `timeoutTunnelInput`<sup>Optional</sup> <a name="timeoutTunnelInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutTunnelInput"></a>

```typescript
public readonly timeoutTunnelInput: number;
```

- *Type:* number

---

##### `tlsEnabledInput`<sup>Optional</sup> <a name="tlsEnabledInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsEnabledInput"></a>

```typescript
public readonly tlsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsUseSystemCaInput`<sup>Optional</sup> <a name="tlsUseSystemCaInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsUseSystemCaInput"></a>

```typescript
public readonly tlsUseSystemCaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsVerifyInput`<sup>Optional</sup> <a name="tlsVerifyInput" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsVerifyInput"></a>

```typescript
public readonly tlsVerifyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `healthCheckExpectedStatus`<sup>Required</sup> <a name="healthCheckExpectedStatus" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckExpectedStatus"></a>

```typescript
public readonly healthCheckExpectedStatus: number;
```

- *Type:* number

---

##### `healthCheckFall`<sup>Required</sup> <a name="healthCheckFall" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckFall"></a>

```typescript
public readonly healthCheckFall: number;
```

- *Type:* number

---

##### `healthCheckInterval`<sup>Required</sup> <a name="healthCheckInterval" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckInterval"></a>

```typescript
public readonly healthCheckInterval: number;
```

- *Type:* number

---

##### `healthCheckRise`<sup>Required</sup> <a name="healthCheckRise" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckRise"></a>

```typescript
public readonly healthCheckRise: number;
```

- *Type:* number

---

##### `healthCheckTlsVerify`<sup>Required</sup> <a name="healthCheckTlsVerify" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckTlsVerify"></a>

```typescript
public readonly healthCheckTlsVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `healthCheckType`<sup>Required</sup> <a name="healthCheckType" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckType"></a>

```typescript
public readonly healthCheckType: string;
```

- *Type:* string

---

##### `healthCheckUrl`<sup>Required</sup> <a name="healthCheckUrl" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.healthCheckUrl"></a>

```typescript
public readonly healthCheckUrl: string;
```

- *Type:* string

---

##### `http2Enabled`<sup>Required</sup> <a name="http2Enabled" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.http2Enabled"></a>

```typescript
public readonly http2Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `outboundProxyProtocol`<sup>Required</sup> <a name="outboundProxyProtocol" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.outboundProxyProtocol"></a>

```typescript
public readonly outboundProxyProtocol: string;
```

- *Type:* string

---

##### `stickySessionCookieName`<sup>Required</sup> <a name="stickySessionCookieName" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.stickySessionCookieName"></a>

```typescript
public readonly stickySessionCookieName: string;
```

- *Type:* string

---

##### `timeoutServer`<sup>Required</sup> <a name="timeoutServer" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutServer"></a>

```typescript
public readonly timeoutServer: number;
```

- *Type:* number

---

##### `timeoutTunnel`<sup>Required</sup> <a name="timeoutTunnel" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.timeoutTunnel"></a>

```typescript
public readonly timeoutTunnel: number;
```

- *Type:* number

---

##### `tlsEnabled`<sup>Required</sup> <a name="tlsEnabled" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsEnabled"></a>

```typescript
public readonly tlsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsUseSystemCa`<sup>Required</sup> <a name="tlsUseSystemCa" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsUseSystemCa"></a>

```typescript
public readonly tlsUseSystemCa: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsVerify`<sup>Required</sup> <a name="tlsVerify" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.tlsVerify"></a>

```typescript
public readonly tlsVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LoadbalancerBackendProperties;
```

- *Type:* <a href="#@cdktf/provider-upcloud.loadbalancerBackend.LoadbalancerBackendProperties">LoadbalancerBackendProperties</a>

---



